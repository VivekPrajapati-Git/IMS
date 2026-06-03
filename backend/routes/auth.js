const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt')
const debug = require('debug')('auth_router')
const db = require('../connections/supabase_conn')
const jwt = require('jsonwebtoken')
require('dotenv').config()

// SignUp Routes
router.post('/signUp', async (req, res) => {
    try {
        const { FullName, UserName, Password, Role, PhoneNumber } = req.body

        const salted_password = await bcrypt.hash(Password, 10)
        const role = Role || 'user';

        const { data, error } = await db.from("Login").insert([
            {
                fullname: FullName,
                username: UserName,
                saltedpassword: salted_password,
                role: role,
                phone_number: PhoneNumber
            }
        ]).select();

        if (error) {
            console.log("Database Error: ", error);
            res.status(400).send(error.message || "Failed to Sign Up!")
        }

        res.send("User Successfully Signed Up")
    } catch (err) {
        console.log(err)
        res.send("Internal Server Error , Try Again !")
    }
});

router.post('/login', (req, res) => {
    try {
        const {UserName , Password} = req.body

        const { data: user, error } = await db
            .from("Login")
            .select("*")
            .eq("username", UserName)
            .single();

        if(error){
            console.log(error.message)
            res.send(error.message)
        }

        if(!user){
            res.send("User Not Found").status(401)
        }

        const isMatch = bcrypt.compare(Password,user.saltedpassword)

        if(!isMatch){
            res.send("Invalid Password").status(401)
        }

        const secret = process.env.JWT_SECRET
        const token = jwt.sign(
            {
                id : user.uniqueid || user.UniqueID,
                username : user.UserName || user.username,
                role : user.role || user.Role
            },
            secret,
            { expiresIn : "24h"}
        )

        res.json({
            "Message" : "Login Successful",
            token : token,
            role : user.Role || user.role
        })
    } catch(err){
        console.log(err)
        res.send("Internal server error").status(500)
    }
})

module.exports = router
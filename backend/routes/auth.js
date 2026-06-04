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
            return res.status(400).send(error.message || "Failed to Sign Up!")
        }

        return res.send("User Successfully Signed Up")
    } catch (err) {
        console.log(err)
        return res.send("Internal Server Error , Try Again !")
    }
});

router.post('/login', async (req, res) => {
    try {
        const {userName , password} = req.body
        
        const { data: user, error } = await db
            .from("Login")
            .select("*")
            .eq("username", userName)
            .single();

        if(error != null && error.code === "PGRST116"){
            return res.status(401).send("User Not Found! Retry")
        }

        if(!user){
            return res.status(401).json({
                message: "User Not Found"
            })
        }

        const isMatch = await bcrypt.compare(password,user.saltedpassword)

        if(!isMatch){
            return res.status(401).json({
                message: "Password Incorrect"
            })
        }

        const secret = process.env.JWT_SECRET
        const token = await jwt.sign(
            {
                id : user.uniqueid || user.UniqueID,
                username : user.UserName || user.username,
                role : user.role || user.Role
            },
            secret,
            { expiresIn : "24h"}
        )

        return res.json({
            "Message" : "Login Successful",
            token : token,
            role : user.Role || user.role
        })

    } catch(err){
        console.log(error)
        return res.status(500).json({
            message : "Internal server error"
        })
    }
})

module.exports = router
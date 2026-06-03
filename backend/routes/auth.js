const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt')
const debug = require('debug')('auth_router')
const db = require('../connections/supabase_conn')

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
    console.log("Hello")
})

module.exports = router
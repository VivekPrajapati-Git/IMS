const express = require('express');
const router = express.Router();

// SignUp Routes
router.post('/signUp',(req,res) =>{
    console.log("Hello")
});

router.post('/login',(req,res)=>{
    console.log("Hello")
})

module.exports = router
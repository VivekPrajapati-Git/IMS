const express = require('express');
const router = express.Router();

router.post('/log_sales',(req,res)=>{
    console.log("Sales logging")
})

router.get('/get_sales',(req,res)=>{
    console.log("Get Sales")
})

module.exports = router
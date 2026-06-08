const express = require('express')
const router = express.Router();
const db = require('../connections/supabase_conn')

router.post('add_stock',(req,res)=>{
    console.log("")
})

router.post('update_stock', (req,res)=>{
    
})

router.get('/get_stock', async(req,res)=>{
    const {data , error } = await db.from("Stock").select("*")
    
    if (error){
        console.log(error)
        return res.status(401).send(error.message)
    }

    if(!data){
        return res.status(401).send("Data Doesn't Exist!")
    }

    return res.send(data)
})

module.exports = router
const express = require('express')
const router = express.Router();

router.post('/upload_image',(req,res)=>{
    console.log("Upload Image")
})

module.exports = router
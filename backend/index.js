const express = require('express')
const app = express();
const debug = require('debug')('app')

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("hello World")
})

app.listen(3000,(err)=>{
    if (err){
        debug(err)
    } else{
        debug("Server Started at 3000 Port")
    }
})
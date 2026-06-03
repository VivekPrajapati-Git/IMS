const express = require('express')
const app = express();
const debug = require('debug')('app')
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use('/auth',require('./routes/auth'))
app.use('/upload',require('./routes/image_upload'))

app.listen(3000,(err)=>{
    if (err){
        debug(err)
    } else{
        debug("Server Started at 3000 Port")
    }
})
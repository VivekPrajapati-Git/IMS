const jwt = require('jsonwebtoken')
require('dotenv').config()

function verifyToken(req,res,next){
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).send("UnAuthorized Access!")
    }

    try {
        const token = authHeader.split(" ")[1]

        if(!token){
            return res.status(401).send("Token Missing")
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        )

        req.user = decoded

        if(req.user.role.toLowerCase() != 'admin'){
            return res.status(401).send("UnAuthorized Access")
        }

        next();
    } catch(error){
        console.log(error)
        res.status(500).send("Internal Server Error")
    }
}

module.exports = verifyToken
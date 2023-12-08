const jwt = require('jsonwebtoken')

const jwtMiddleware = (req, res, next)=>{
    //token verification
    //1. get the token - from req header
    const token = req.headers['authorization'].slice(7)
    // console.log(token);
   try{
     //verify the token -verify
     const tokenVerification = jwt.verify(token, "superkey2023")
     console.log(tokenVerification);
     req.payload = tokenVerification.userId
     next()
   }
   catch(err){
    return res.status(401).json("Authorization Failed.Please login again")
   }
    
}

module.exports = jwtMiddleware
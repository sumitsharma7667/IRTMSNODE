const jwt = require('jsonwebtoken')
const mongoose= require('mongoose')
const User = mongoose.model('user')
const {jwtkey} = require('../keys')
module.exports = (req ,res , next) =>{
    const { authorization } = req.headers ;
    if(!authorization){
        return res.status(401).send({error:"You must be login"})
    }

     const token = authorization.replace("Bearer ", "");
     jwt.verify(token,jwtkey, async(err,payload)=>{
         if(err){
            return res.status(401).send({error:"You must be login"})
         }
         const {userId} = payload
         const user= await User.findById(userId)
         req.user=user;
         next(); 
     })
}
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt')
const userSchema = new Schema({    
    fullname:{
        type:String,        
        required:true
    },
    designation:{
        type:String,        
        required:true
    },
    email:{
        type:String,        
        required:true
    },
    role:{
        type:String,        
        required:true
    },
    parent:{
        type:String,        
        required:true
    },
    priority:{
        type:String,        
        required:true
    },
    password:{
        type:String,        
        required:true
    },
    mobile:{
        type:String,        
        required:true,
        unique:true
    },
    p1:{
        type:String,                
    },  
    p2:{
        type:String,                
    }, 
    p3:{
        type:String,                
    },
    p4:{
        type:String,                
    },
},{timestamps: true}
)
userSchema.pre('save',function(){
    const user = this;
    if(!user.isModified('password')){
        return next()
    }
    bcrypt.genSalt(10,(err,salt)=>{
        if(err){
            return next(err)
        }
        bcrypt.hash(user.password,salt,(err,hash)=>{
            if(err){
                return next(err)
            }
            user.password =hash;
            // next(user.password)
        })
    })
})
userSchema.method.comparePassword = function(candidatePassword){
    const user = this;
    return new Promise ((resolve,reject) => {
        bcrypt.compare(candidatePassword,user.password ,(err,isMatch)=>{
            if(err){
                return reject(err)
            }
            if(!isMatch){
                return reject(err)
            }
            resolve(true)
        })
    })
}
mongoose.model('user',userSchema);

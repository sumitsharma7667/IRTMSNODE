const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt')
const categorySchema = new Schema({
        name:{
        type:String,        
        required:true
    },
    description:{
        type:String,        

    },
    image:{
        type:String,
        required:true
    }
    
},{timestamps: true}
)

mongoose.model('category',categorySchema);

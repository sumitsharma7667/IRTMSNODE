const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const pointsSchema = new Schema({
    userid:{
        type:String,        
        required:true
    },  
    points:{
        type:String
    },
    createddate:{
        type:String
    },
    expiredate:{
        type:String
    }
},{timestamps: true}
)

mongoose.model('points',pointsSchema);

const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const medicineSchema = new Schema({
    name:{
        type:String,        
        required:true
    },
    organ:{
        type:String,        
        // required:true
    },
    category_id:{
        type:String,        
        // required:true
    },
    manufacturer:{
        type:String,        
        // required:true
    },
    mrp:{
        type:String,        
        // required:true
    },
    selling_price:{
        type:String,        
        // required:true
    },
    recommended:{
        type:String,        

    },
    discount_price:{
        type:String,        

    },
    not_recommended:{
        type:String,        

    },
    storage:{
        type:String,        

    },
    uses:{
        type:String,        
    },
    safety_information:{
        type:String,        
    },
    
    side_efects:{
        type:String,        
    },
    medicine_type:{
        type:String,        
    },
    description:{
        type:String,     
        required:true
    },
    image:{
        type:String,
        required:true
    }
},{timestamps: true}
)

mongoose.model('medicine',medicineSchema);

const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt')
const orderSchema = new Schema({
    order:{
    type:String,        
    required:true
    },
    userid:{
        type:String,        
        required:true
    },
    address:{
        type:String,        
    }, 
    mobile:{
        type:String
    },
    othermobile:{
    type:String
    },
    orderfor:{
    type:String
    },
    status:{
        type:String,        
    }, 
    justification:{
        type:String,        
    },   
    delivery_time:{
        type:String,        
    },
    totalamount:{
        type:String
    },
    instruction:{
    type:String
    },
    addresstype:{
        type:String
    },
    deliverytype:{
        type:String
    },
    username:{
        type:String
    },
    paymentid:{
        type:String,
     },
},{timestamps: true}
)

mongoose.model('orders',orderSchema);

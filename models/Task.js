const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const taskSchema = new Schema({
    userid: {
        type: String,
        required: true
    },
    taskname: {
        type: String,
        required: true
    },
    taskdescription: {
        type: String
    },
    createddate: {
        type: String
    },
    status: {
        type: String
    },
    role: {
        type: String
    },
    parent: {
        type: String
    },
    p1: {
        type: String
    },
    p2: {
        type: String
    },
    p3: {
        type: String
    },
    p4: {
        type: String
    },
    assign:{
        type: String
    },
    startdate:{
        type:String,
        required: true
    },
    duedate:{
        type:String,
        required:true
    },
    document:{
        type:String
    }
}, { timestamps:true }
)

mongoose.model('task', taskSchema);

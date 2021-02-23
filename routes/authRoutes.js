const express = require('express')
const { Router } = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const { jwtkey } = require('../keys');
const { json } = require('body-parser');
const Razorpay=require('razorpay')
const router = express.Router()
const User = mongoose.model('user')
const Task =mongoose.model('task')
var instance = new Razorpay({
    key_id: 'rzp_test_sXAZrxOtiyKIq8',
    key_secret: 'jC20NmAcX8JfzRCoDx2zk7sS',
  });
const cors = require('cors');
multer = require('multer')
multer({
    limits: { fieldSize: 2 * 1024 * 1024 }
  })
    router.use(cors({ origin: true }));
//code for images
var multer = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
var upload = multer({ storage: storage })
//end code for images

// user 
router.post('/signup', async (req, res) => {  
    console.log(req.body)
    const {fullname,designation,email,role,parent,priority,password,mobile,p1,p2,p3,p4} = req.body;
    try {
        const user = new User({fullname,designation,email,role,parent,priority,password,mobile,p1,p2,p3,p4})
        await user.save();
        const token = jwt.sign({userId:user.id }, jwtkey)
        res.send({ token: token, userid: user.id, user,  })       
    } catch (err) {
        return res.status(422).send(err.message)
    }
})
router.post('/signin', async (req, res) => {
    const { mobile, password,} = req.body
    console.log(req.body)
    console.log(mobile, password)
    if (!mobile || !password) {
    return res.status(422).send({ error: "must provide email or password2" })
    }
    const user = await User.findOne({ mobile ,password})
    console.log(user)
    if (!user) {
        return res.status(422).send({ error: "must provide email or password3" })
    }
    try {
        // await user.comparePassword(password);
        const token = jwt.sign({ userId: user.id }, jwtkey)
        console.log(user.id)
        res.send({ token: token, userid: user.id, user})
    }
    catch (err) {
    return res.status(422).send({ error: "must provide email or password4" })
    }
})
router.get('/getalluser', async (req, res) => {    
    try {
        const data = await User.find()
        if (data) {
            console.log(data[0])
        }
        console.log(data)
        res.send(data)
    }
    catch (err) {
        return res.status(422).send({ error: "error for fetching profile data" })
    }
})
//end user 
// USer Task start
router.post('/addtask', async (req, res) => {  
    console.log(req.body)
    const {userid,taskname,taskdescription,createddate,role,status,parent,p1,p2,p3,p4,assign} = req.body;
    try {
        const task = new Task({userid,taskname,taskdescription,createddate,role,status,parent,p1,p2,p3,p4,assign})
        await task.save();       
        res.send(task)       
    } catch (err) {
        console.log(err)
        return res.status(422).send(err.message)
    }
})
router.post('/taskbyid',async (req,res) => {    
    const {userid}=req.body
    console.log(userid)
    try {
        const data = await Task.find({userid})        
        if (data) {
        console.log("data is store")
        }
        else {
        console.log("data is not stored")
        }
        res.send(data)
    } catch (err) {
        console.log(err)
        return res.status(422).send(err.message)     
    }
})
router.get('/gettask', async (req, res) => {    
    try {
        const data = await Task.find()
        if (data) {
            console.log(data[0])
        }
        console.log(data)
        res.send(data)
    }
    catch (err) {
        return res.status(422).send({ error: "error for fetching profile data" })
    }
})

router.put('/updatetask',async (req, res) => {
    const {_id,taskname,taskdescription, userid,role,parent,status,p1,p2,p3,p4,assign} = req.body;
    Task.findByIdAndUpdate({_id},{taskname,taskdescription,userid,role,parent,status,p1,p2,p3,p4,assign},function(err,result){
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
})
// End User Task


module.exports = router


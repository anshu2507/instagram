const express = require("express")
const app=express()
const PORT=5000
const mongoose=require("mongoose")
const {MONGOURI}=require("./keys")





mongoose.connect(MONGOURI);
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo")
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})
require('./models/user')
require('./models/post')
const express=require('express');
const app=express()
require('./config/db')
const cors = require('cors')
const userRouter=require('./router/route')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/api/data',userRouter) 

app.get("/",(req,res)=>{
    res.sendFile(__dirname +"/./views/index.html")
})

app.use("/",((req,res,next)=>{
    res.status(404).json({
        message:"route is not found"
    })
}))
app.use("/",(err,req,res,next)=>{
    res.status(500).json({
        message:"somthing is broke"
    })
})


module.exports=app
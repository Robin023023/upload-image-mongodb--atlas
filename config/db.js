const config=require('./config')
const mongoose= require("mongoose");
const dburl=config.db.url

mongoose.connect(dburl)
.then(()=>{
    console.log("mongodb atlas is connected")
})
.catch((error)=>{
    console.log("mongodb atlas is not connected")
})
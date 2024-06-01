const mongoose = require("mongoose");

const modalSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    file:{
        type:String,
        required:true
    },
    createOn:{
        type:Date,
        default:Date.now
    }

})

module.exports=mongoose.model("postData",modalSchema)
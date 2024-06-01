require("dotenv").config()

const dev={
    app:{
        port:process.env.port || 4000
    },
    db:{
        url:process.env.BD || "mongodb:httpl://localhost:27017/userPost"
    }
}

module.exports=dev
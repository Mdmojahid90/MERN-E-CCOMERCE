const mongoose = require("mongoose")


const url=process.env.MONGODB_URI

const connectionDB =async ()=>{
  try{
     await mongoose.connect(url)
     console.log("DataBase Connection Successfull")
  }catch(err){
    console.log("Connection Failed")
  }
}

module.exports = connectionDB
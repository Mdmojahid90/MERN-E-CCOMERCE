const userModel = require("../models/user-model")

const getAllUsers = async(req,res)=>{
  try{
    const allUsers = await userModel.find().select({password:0})
    return res.status(200).json({allUsers:allUsers})
  }catch(err){
    console.log("get all users server some issue")
  }
}


const updateUserById =async(req,res)=>{
  try{
    const userId = req.body.userId
    //console.log("userid",userId)
    const reqUser= req.body
    const payload = {username:reqUser.username,email:reqUser.email,role:reqUser.role}
    console.log("update req body payload...",req.body)
    const updatedUser = await userModel.findByIdAndUpdate(userId,payload)
    console.log(" NEW updated user",updatedUser)
    return res.status(200).json({message:"User Updated Successfully",updatedUser:updatedUser})
  }catch(err){
    console.log("Update user by id some issue")
  }
}

const deleteUserById = async(req,res)=>{
  try{
   const userId = req.body.userId;
   const deletedUser = await userModel.findByIdAndDelete(userId)

//console.log(deletedUser)

   return res.status(200).json({message:"User Deleted Successfully"})
  }catch(err){
    res.status(400).json({message:"User Not Deleted"})
  }
}



module.exports = {getAllUsers,updateUserById,deleteUserById}
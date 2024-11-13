const bcrypt = require("bcryptjs")
const userModel = require("../models/user-model")
const register = async(req,res)=>{
  try{
    const email = req.email
    const userExist = await userModel.findOne({email:email})
    if(userExist){
      return res.status(200).json({message:"User Already Exist"})
    }
    const userCreated = new userModel({
      username:req.body.username,
      email:req.body.email,
      profilePic:req.body.profilePic,
      password:req.body.password,
      role:"GENERAL"
    })
const userData = await userCreated.save() 
return res.status(201).json({message:"Usser Ceated Successfully",data:userData})
  }catch(err){
    console.log("Error from register",err.message)
  }
}


const login = async(req,res)=>{
  try{
    const email= req.body.email
    const password= req.body.password
  const userExist = await userModel.findOne({email:email})
  if(!userExist){
    return res.status(200).json({message:"User Not Exist"})
  }
  const isMatch = await bcrypt.compare(password,userExist.password)
  const token = await userExist.generateToken()

  if(isMatch){
    return res.cookie("token",token).status(200).json({message:"Login Successfull",token:token,role:userExist.role})
  }else{
    return res.status(200).json({message:"Password Incorrect"})
  }
  }catch(err){
    console.log("Error from login",err.message)
  }
}


const logout= async(req,res)=>{
  try{
    res.clearCookie("token")
    return res.status(200).json({message:"User Logout Successfully"})
  }catch(err){
    return res.status(400).json({message:"User logout server got some issue"})
  }
}

const user= async(req,res)=>{
  try{
    const userData = req.userData;
    return res.status(200).json({message:"User Details fetched", userData:userData})
  }catch(err){
    return res.status(400).json({message:"User data server got some issue"})
  }
}

module.exports = {register,login,logout,user}
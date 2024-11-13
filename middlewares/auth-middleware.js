const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model");
const secretKey= "iammdmojahidalamandiammernstackdeveloperandfreelancer"

const authMiddleware = async (req,res,next)=>{
  try{
    const token = req.cookies.token;
    if(!token){
      return res.status(400).json({message:"Please Login"})
    }

    const isVerify=jwt.verify(token,secretKey)
    const userData= await userModel.findOne({email:isVerify.email}).select({password:0})
    
    req.userData=userData
    req.userId=userData._id.toString()
    req.token=token
    next()
  }catch(err){
    return res.status(400).json({message:"auth middleware got some issue",err})
  }
}

module.exports=authMiddleware
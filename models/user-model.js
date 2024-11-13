const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const secretKey= "iammdmojahidalamandiammernstackdeveloperandfreelancer"

const userSchema = new mongoose.Schema({
  username:{type:String,required:true},
  email:{type:String,required:true,uniquie:true},
  profilePic:String,
  password:{type:String,required:true},
  role:String,
},{
  timestamps:true
})


// Hashing password
userSchema.pre("save", async function(next){
    if(this.isModified("password")){
      this.password= await bcrypt.hash(this.password,10)
      next()
    }else{
      console.log("Password not hashed")
    }
} )

//Generate Token

userSchema.methods.generateToken = async function(){
  try{
    const token = await jwt.sign({userId:this._id.toString(),email:this.email,role:this.role},secretKey,{expiresIn:60*60})
    return token
  }catch(err){
    console.log("Token not generated")
  }
}

const userModel = new mongoose.model("user",userSchema)

module.exports = userModel
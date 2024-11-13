const adminMiddleware = async(req,res,next)=>{
  try{
     const userData = req.userData;
      if(userData.role !== "ADMIN"){
        return res.status(400).json({message:"User is not Admin"})
      }

      next()
  }catch(err){
    console.log("Admin middleware some isseue",err.message)
  }
}

module.exports=adminMiddleware
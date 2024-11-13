const validate = (Schema)=> async(req,res,next)=>{
  try{
  const pareseBody = await Schema.parseAsync(req.body)
  req.body=pareseBody
  next()
  }catch(err){
const status = 422;
const message="Filed Input Properly"
const extraMessage=err.errors[0].message;

const error = {status,message,extraMessage}
next(error)
  }
}

module.exports=validate
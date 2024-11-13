const addToCartModel = require("../models/addtocart-model")

const countAddToCartProduct = async(req,res)=>{
  try{
    const currentUserId = req.userId
    const countAddToCart = await addToCartModel.countDocuments({userId:currentUserId})

    return res.status(200).json({countData:countAddToCart})

  }catch(err){
   console.log("does not get count add to cart value")
  }
}


module.exports = countAddToCartProduct

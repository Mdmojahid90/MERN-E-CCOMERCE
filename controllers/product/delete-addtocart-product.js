const addToCart = require("../../models/addtocart-model")

const deleteAddToCartProduct = async(req,res)=>{
  try{
    const userId = req.userId;
    const productId = req.body.productId;
    const deletedProduct = await addToCart.deleteOne({productId:productId})
    res.status(200).json({message:"Product Removed Successfully!",deletedProduct:deletedProduct })
  }catch(err){
    console.log("failed delete add to cart product")
  }
}

module.exports = deleteAddToCartProduct
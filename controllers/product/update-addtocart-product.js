const addToCartModel = require("../../models/addtocart-model")

const updateAddToCartProduct =async(req,res)=>{
  try{
    const currentUserId= req.userId;
    const productId = req.body.productId;
    const qty= req.body.quantity

    const updatedQuentity = await addToCartModel.updateOne({productId:productId},{quantity:qty})

    return res.status(200).json({message:"Quantity updared",updatedQuentity})
  }catch(err){
    console.log("add to cart product quantity update failed")
  }
}

module.exports=updateAddToCartProduct
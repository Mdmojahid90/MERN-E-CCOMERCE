const addToCartModel =  require("../../models/addtocart-model")

const viewAddToCartProduct = async(req,res)=>{
  try{
    const currentUserId = req.userId;
    const userOrders = await addToCartModel.find({userId:currentUserId}).populate("productId")
    console.log("all order", userOrders)
    return res.status(200).json({message:"All Orders", orderData:userOrders})
  }catch(err){
    console.log("view add to cart error")
  }
}

module.exports= viewAddToCartProduct
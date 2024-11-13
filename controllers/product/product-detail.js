const productModel = require("../../models/product-model")

const getProductDetail = async(req,res)=>{
  try{
    const productId = req.body.productId
    const productDetail=await productModel.findById(productId)
    return res.status(200).json({message:"get product details",productDetail:productDetail})
  }catch(err){
    console.log("get product details got some error",err)
  }
}

module.exports = getProductDetail
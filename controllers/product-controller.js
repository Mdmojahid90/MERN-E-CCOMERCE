const productModel = require("../models/product-model")

const uploadProduct = async(req,res)=>{
  try{

//console.log("req body",req.body)

    const uploadProductImage= await productModel(req.body)
    const saveProduct = await uploadProductImage.save()
    return res.status(201).json({message:"Product Uploded Successfully...!", productData:saveProduct})
  }catch(err){
    console.log("upload product controller some issue")
  }
}

const getAllProducts =async(req,res)=>{
  try{
    const allProductsData = await productModel.find().sort({createdAt:-1})

    return res.status(200).json({message:"get all product",allProductData:allProductsData})

  }catch(err){
    console.log("Gel all product some issue")
  }
}


const updateProduct = async(req,res)=>{
try{
    const reqData = req.body;
    const productId= req.body.productId;
    const updatedData = await productModel.findByIdAndUpdate(productId,reqData)
   return res.status(200).json({message:"Product Updated Successfully...!",updatedData:updatedData})
}catch(err){
  console.log("update product got some issue")
}
}

const deleteProduct = async(req,res)=>{
  try{
    const productId = req.body.productId;
    console.log("req body",req.body)
    const deletedProduct = await productModel.findByIdAndDelete(productId)
   // console.log("Deleted Product",deletedProduct)
    return res.status(200).json({message:"Product Deleted Successfully!"})
  }catch(err){
    return res.status(400).json({message:"Product Not Deleted"})
  }
}



module.exports ={uploadProduct,getAllProducts,updateProduct,deleteProduct}
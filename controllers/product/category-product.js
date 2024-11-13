const productModel = require("../../models/product-model")

// get categorywise product

const getCategoryProduct = async(req,res)=>{
  try{
      const categoryProduct = await productModel.distinct('category');

      //console.log("category list",categoryProduct)
    const productByCategory = []

    for(let category of categoryProduct){

      const product = await productModel.findOne({category:category})

      if(product){
        productByCategory.push(product)
      }
    }
        return res.status(200).json({message:"Category Product",productByCategory:productByCategory})
  }catch(err){
    console.log("get category product some issue")
  }
}

const getCategoryWiseProduct =async(req,res)=>{
  try{
    const category= req.body.category;
    const categoryWiseProduct = await productModel.find({category})

    return res.status(200).json({message:"Get category wise products", categoryWiseProduct:categoryWiseProduct })

  }catch(err){
    console.log("get category wise product some issue",err.message)
  }
}


module.exports = {getCategoryProduct,getCategoryWiseProduct}
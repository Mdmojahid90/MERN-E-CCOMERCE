const productModel = require("../../models/product-model")

const filterProduct = async(req,res)=>{
  try{
    const categoryList = req.body.category;
   // console.log("category list",categoryList)

    const filteredData = await productModel.find({
      category:{"$in":categoryList}
    })

   // console.log("filter list",filteredData)
    res.status(200).json({message:"get filterd data", filteredData:filteredData})
  }catch(err){
    console.log("cannot get filterd product")
  }
}

module.exports= filterProduct;
const productModel = require("../../models/product-model");

const searchProduct = async(req,res)=>{
  try{
    const query = req.query.q;
  // console.log("Query",query)
   const regexp= new RegExp(query,'i','g')
   

    const searchData = await productModel.find({
      "$or":[{productName:regexp},{category:regexp}]
    })

   // console.log("search results",searchData)
     //console.log("search results REGEXP:",regexp)

  res.status(200).json({message:"search results",searchData:searchData})

  }catch(err){
   console.log("serach product not found")
  }
}

module.exports=searchProduct
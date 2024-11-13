const addToCartModel = require("../../models/addtocart-model")

const addtocartProduct = async(req,res)=>{
  try{
    const currentUserId = req.userId;
    const productId = req.body.productId;

    //console.log("login user details",req.userData)
    
    const isProductAvailabe = await addToCartModel.findOne({productId:productId})
 

    if(isProductAvailabe){
      return res.status(200).json({message:"Product Already Added!"})
    }

    const newaddtocart = new addToCartModel({
     userId:currentUserId,
     quantity:1,
     productId:productId
    })

    const addtocartResult= await newaddtocart.save() 
    return res.status(201).json({message:"Product Added in Cart",addtocartData:addtocartResult})
  }catch(err){
    console.log("product is not added to cart")
  }
}

module.exports = addtocartProduct
const mongoose = require("mongoose")

const addToCartSchema = new mongoose.Schema({
  productId : {type:String,required:true,ref:"product"},
  quantity:Number,
  userId : {type:String,required:true},
},{
  timestamps:true
})

const addToCartModel = new mongoose.model("productorder",addToCartSchema)

module.exports = addToCartModel
const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
  productName: String,
  brand: String,
  category: String,
  productimages: [],
  price: Number,
  selling: Number,
  description:String,
},{
  timestamps:true
})

const productModel = new mongoose.model("product",productSchema)

module.exports=productModel

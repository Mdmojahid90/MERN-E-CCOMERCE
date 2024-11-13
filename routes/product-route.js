const express = require("express")
const router = express.Router()

const authMiddleware = require("../middlewares/auth-middleware")

const categoryProduct = require("../controllers/product/category-product")

const getProductDetail = require("../controllers/product/product-detail")

router.route("/categoryproduct").get(categoryProduct.getCategoryProduct)
router.route("/categorywiseproduct").post(categoryProduct.getCategoryWiseProduct)

const addtocartProduct =require("../controllers/product/addtocart-controller")

const countAddToCartProduct = require("../controllers/count-addtocart-product")

const viewAddToCartProduct = require("../controllers/product/view-addtocart-product")

const deleteAddToCartProduct = require("../controllers/product/delete-addtocart-product")

const updateAddToCartProduct = require("../controllers/product/update-addtocart-product")

const searchProduct = require("../controllers/product/search-product")
const filterProduct = require("../controllers/product/filter-product")

router.route("/productdetail").post(getProductDetail)
//carts routers
router.route("/addtocart").post(authMiddleware,addtocartProduct)
router.route("/countaddtocart").get(authMiddleware,countAddToCartProduct)

router.route("/viewaddtocart").get(authMiddleware,viewAddToCartProduct)

router.route("/deleteaddtocart").post(authMiddleware,deleteAddToCartProduct)

router.route("/updateaddtocart").post(authMiddleware,updateAddToCartProduct)

router.route("/search").get(searchProduct)

router.route("/filterdata").post(filterProduct)

module.exports = router
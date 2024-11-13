const express = require("express")
const router = express.Router()

const adminUserController = require("../controllers/admin-users-controller")
const authMiddleware = require("../middlewares/auth-middleware")
const adminMiddleware = require("../middlewares/admin-middleware")

const productController = require("../controllers/product-controller")


router.route("/allusers").get(authMiddleware,adminMiddleware,adminUserController.getAllUsers)
router.route("/updateuser").post(authMiddleware,adminMiddleware,adminUserController.updateUserById)

router.route("/deleteuser").post(authMiddleware,adminMiddleware,adminUserController.deleteUserById)

//Product routes

router.route("/uploadproduct").post(authMiddleware,adminMiddleware,productController.uploadProduct)
router.route("/allproducts").get(authMiddleware,adminMiddleware,productController.getAllProducts)
router.route("/updateproduct").post(authMiddleware,adminMiddleware,productController.updateProduct)
router.route("/deleteproduct").post(authMiddleware,adminMiddleware,productController.deleteProduct)

module.exports = router;
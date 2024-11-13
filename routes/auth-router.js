const express = require("express")
const router = express.Router()


const authController = require("../controllers/auth-controller")
const authMiddleware = require("../middlewares/auth-middleware")
const {login,register} = require("../validations/auth-validation")

const authValidate =require("../middlewares/auth-validate")

router.route("/register").post(authValidate(register),authController.register)
router.route("/login").post(authValidate(login),authController.login)
router.route("/user").get(authMiddleware,authController.user)
router.route("/logout").get(authMiddleware,authController.logout)

module.exports = router
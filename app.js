require('dotenv').config()
const express = require("express")
const connectionDB = require('./database/conn')
const app = express()
const PORT = process.env.PORT || 6010
const cookieParser=require("cookie-parser")
const cors = require("cors")

app.use(cors({
  origin:"http://localhost:3000",
  method:"GET POST,PATCH,PUT",
  credentials:true
}))
app.use(cookieParser())
app.use(express.json())


const authRouter=require("./routes/auth-router")
app.use("/api/auth",authRouter)

const adminRouter = require("./routes/admin-router")
app.use("/api/admin",adminRouter)

const productRoute = require("./routes/product-route")
app.use("/api/product",productRoute)

const errorMiddleware = require("./middlewares/error-middleware")

app.use(errorMiddleware)

connectionDB().then(()=>{
  app.listen(PORT,()=>console.log(`Server is listening at port no:${PORT}`))
})
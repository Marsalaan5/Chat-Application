
const express = require("express");

const cors = require("cors")
const app = express();
app.use(cors());
app.use(express.json())
const userController =require("./controller/user")
app.use('/user',userController)
app.listen(5173,()=>{
    console.log('server started')
})


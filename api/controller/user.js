const express = require("express");
const router = express.Router();
const User = require("../model/usermodel")
router.post('/',(req,res)=>{
   try {
    const {name,email,contact} = req.body
   } catch (error) {
    
   }
});

module.exports = router;
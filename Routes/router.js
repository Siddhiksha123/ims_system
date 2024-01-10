const express= require ("express");
const router= new express.Router();
const dbConnection = require("../Database/Authentication");

//creating api

// register user data 

router.post("/create", (req, res)=>{
    
    console.log(req.body);
})

module.exports = router;

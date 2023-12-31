const express = require ('express')
const router = express.Router()
const User = require('../models/User')

router.post("/creatuser", async (req, res) =>{

    try{
      await  User.create({
            name: "Anjali",
            password: "123",
            email: "anji45@gamil.com",
            location: "rewa"
        })
    res.json({success:true});

    } catch (error){
            console.log(error)
            res.json({success:false});
    }

})

module.exports = router;
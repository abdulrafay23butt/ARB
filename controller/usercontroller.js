// usercontroller.js
const User = require("../models/usermodel");
const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
router.use(express.json());
async function register(req, res) {
    const { first, last, Username, Email, Password } = req.body;
    console.log(first);
    try {
      const existingUser = await User.findOne({ Username });
      
      if (existingUser) {
        console.log(existingUser);
        return res.json({message:"Username already exists"});
      }
  
      const newUser = new User({
        Fullname: {
          first,
          last,
        },
        Username,
        Email,
        Password,
      });
  
      await newUser.save();
  
      res.json({message:"User created successfully"});
    } catch (error) {
      console.error("Error creating user:", error);
      res.json({message:"Server error"});
    }
}

async function login(req,res)
{
    const { Username, Password } = req.body;
    try {
      const existingUser = await User.findOne({ Username });
      
      if (existingUser) {
         
         if(Password==existingUser.Password)
            return res.json({message:"Username Found"});
      }
      
     
      res.json({message:"User not FOund"});
    } catch (error) {
      console.error("Error creating user:", error);
      res.json({message:"Server error"});
    }
}

module.exports = {
    register,
    login
};

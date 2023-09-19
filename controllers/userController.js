const User = require("../models/userModel");
const { isValid} = require("./validator")

const createUser = async(req, res) =>{
    try{
        let {email,password} =req.body;

        if(!isValidBody(req.body)){
            return res.status(400).send({msg:"No Data Provided"});
            
        }

        //email validation
        if (!isValid(email)){
            return res.status(400).send({msg:"Please Enter your Email"});

        }
        if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email)) {
            return res.status(400).send({msg:"Please enter a valid email Id"});
        }
        let matchedEmail =await User.findone({email});
        if(matchedEmail){
            return res.status(400).send({msg:"This email already exists"});
        }

        //password validation
        if (!isValid(password)){
            return res.status(400).send({msg:"Please Enter your password"});
        }




        let registerUser =await User.create({email,password});
        return res.status(201).send({
            status:true,
            msg:"user registered successfully",
            data:registerUser,
        });

    }catch(error){
       return res.status(500).send("Internal Server Error");
    }
};
module.exports = { createUser};
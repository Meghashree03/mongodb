const studentModel = require("../models/studentModel");

const createStudent = async(req,res)=>{
    try{
    let data = req.body
    let createData = await studentModel.create(data)
    return res
    .status(201)
    .send({
        status:true,
        msg:"Student Data Created Successfully",
        data: createData,
     });
}catch(error){
    return res.status(500).send(error);
}
};
module.exports = {createStudent };
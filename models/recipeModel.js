const mongoose = require("mongoose")

const recipeSchema = new mongoose.Schema({
    Title:{
        type: String,
        required: true,
    },

    recipeId:{
        type:Number,
        required:true,
    },
    Preptime:{
        type: Number,
        required: true,
    },
    Cooktime:{
        type: Number,
        required: true,
    },

    image:{
        type: String,
        
    },
    Reference:{
        type: String,
       
        

    },
    },{timestamps:true});

    module.exports = new mongoose.model("Createrecipe",recipeSchema );
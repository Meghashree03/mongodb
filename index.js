const express =require("express");
const mongoose = require("mongoose");
const routes =require("./routes/routes");
const recipeController=require("./controllers/recipeController");


const app = express();

app.use(express.json());
app.use("/", routes);


// // Routes
app.post('/', recipeController.createRecipe);
app.get('/', recipeController.getAllRecipes);
app.put('/', recipeController.updateRecipe);
app.delete('/', recipeController.deleteRecipe);

//Data base connecetion

mongoose.connect("mongodb+srv://meghapoojary385:meghashree04%40@cluster0.3v5u11o.mongodb.net/").then(()=>{
    console.log("Database Connected Successfully");

})
.catch((error)=>{
    console.log(error);
});

app.listen(3001,()=>{
    console.log("Server Connected at 3001");
});

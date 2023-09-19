const express = require("express");
const router = express.Router()


const userController = require("../controllers/userController");
const recipeController=require("../controllers/recipeController");

router.post("/register",userController.createUser);

router.post("/get",recipeController.createRecipe);
router.get("/gett",recipeController.getAllRecipes);
router.delete("/del",recipeController.deleteRecipe);
router.put("/update",recipeController.updateRecipe);


module.exports = router;
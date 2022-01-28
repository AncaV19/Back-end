const mongoose = require("mongoose");

const RecipesSchema = new mongoose.Schema({
  titleRecipe: {
    type: String,
    required: true,
  },
  ingredientsRecipe: {
    type: String,
    required: true,
  },
  instructionsRecipe: {
    type: String,
    required: true,
  },
  preparingTimeRecipe: {
    type: Number,
    required: true,
  },
});

const Recipes = mongoose.model("Recipes", RecipesSchema);
module.exports = Recipes;

const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  name: { type: String },
  subIngredients: [String],
  flavorAffinities: [String],
  techniques: [String],
});

module.exports = mongoose.model("Ingredient", ingredientSchema);

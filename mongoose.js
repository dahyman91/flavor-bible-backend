const mongoose = require("mongoose");

const Ingredient = require("./models/ingredient");

mongoose
  .connect(
    "mongodb+srv://dahyman91:OOTOSDLOv3YUQH88@cluster0.ltkxf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection Failed");
  });

const createIngredient = async (req, res, next) => {
  const createIngredient = new Ingredient({
    name: req.body.name,
    subIngredients: req.body.subIngredients,
    flavorAffinities: req.body.flavorAffinities,
    techniques: req.body.techniques,
  });

  const result = await createIngredient.save();

  res.json(result);
};

const getIngredients = async (req, res, next) => {
  const ingredients = await Ingredient.find();
  res.json(ingredients);
};

exports.createIngredient = createIngredient;
exports.getIngredients = getIngredients;

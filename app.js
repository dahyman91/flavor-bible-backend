const express = require("express");
const bodyParser = require("body-parser");
const indrientMethods = require("./mongoose");

const app = express();

app.use(bodyParser.json());

app.post("/ingredients", indrientMethods.createIngredient);

app.get("/ingredients", indrientMethods.getIngredients);

app.listen(3000);

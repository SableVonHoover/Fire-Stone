const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/fire-stone"
);

const characterSeed = [
  {
        name: "Bubbly",
        level: 1,
        hitpoints: 5,
        attack: 30,
        defense: 2,
        speed: 8,
  },
  {
    name: "Rocko",
    level: 2,
    hitpoints: 10,
    attack: 7,
    defense: 20,
    speed: 2,
  },
  {
    name: "Rupture-Fist",
    level: 3,
    hitpoints: 20,
    attack: 40,
    defense: 10,
    speed: 12,
  },
  {

  }

];

db.Character
  .remove({})
  .then(() => db.Character.collection.insertMany(characterSeed))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

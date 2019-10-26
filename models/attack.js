const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attackSchema = new Schema({
    name: { type: String, required: true },
    damage: { type: Number, required: true },
    physicalSpecial: { type: Number, required: true },
    critProbability: { type: Number, required: true },
    precision: { type: Number, required: true }
});

const Attack = mongoose.model("Attack", attackSchema);

module.exports = Attack;
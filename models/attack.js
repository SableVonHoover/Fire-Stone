const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attackSchema = new Schema({
    name: { type: String, trim: true, required: true },
    damage: { type: Number, trim: true, required: true },
});

const Attack = mongoose.model("Attack", attackSchema);

module.exports = Attack;
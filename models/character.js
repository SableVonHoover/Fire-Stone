const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Character Schema
const characterSchema = new Schema({
    name: { type: String, trim: true, required: true },
    level: { type: Number, trim: true, required: true },
    hitpoints: { type: Number, trim: true, required: true },
    attack: { type: Number, trim: true, required: true },
    defense: { type: Number, trim: true, required: true },
    speed: { type: Number, trim: true, required: true },
    //Array that holds attacks that have been assigned to this character
    attacks: [
        {
            type: Schema.Types.ObjectId,
            ref: "Attack"
        }
    ]
});

//Character Model
const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
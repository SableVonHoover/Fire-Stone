const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Character Schema
const characterSchema = new Schema({
    level: { type: Number, required: true },
    hitpoints: { type: Number, required: true },
    attack: { type: Boolean, required: true },
    defense: { type: Number, required: true },
    speed: { type: Number, required: true },
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
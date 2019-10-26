const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        unique: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    //Array of associated characters by id (only one character should be made per user at this point however)
    character: [
        {
            type: Schema.Types.ObjectId,
            ref: "Character"
        }
    ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
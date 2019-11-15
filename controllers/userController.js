const db = require("../models");

//All of these might not be necessary, but I put down all CRUD because it doesn't hurt to have them.
module.exports = {
    findAll: function (req, res) {
        db.User
            .find(req.query)
            .sort({ username: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.User
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    //This is where we associate the character the user makes with the their user entry in the DB
    updateCharacter: function (req, res) {
        db.User
            //Filtering user's by email and pushing the new charcter's ID to user's character field
            .findOneAndUpdate({email: req.params.email}, { $push: { character: req.params.id } }, { new: true })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    update: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
import axios from "axios";

export default {

    // User apis
    //Gets all users
    getUsers: function () {
        return axios.get("/api/user");
    },
    //Get specific user from db
    getUser: function (id) {
        return axios.get("/api/user/" + id);
    },
    //Deletes specific user
    deleteUser: function (id) {
        return axios.delete("/api/user/" + id);
    },
    //Saves User to db
    makeUser: function (userData) {
        return axios.post("/api/user", userData);
    },

    // Characters apis
    getCharacters: function () {
        return axios.get("/api/character");
    },
    getCharacter: function (id) {
        return axios.get("/api/character/" + id);
    },
    deleteCharacter: function (id) {
        return axios.delete("/api/character/" + id);
    },
    makeCharacter: function (characterData) {
        return axios.post("/api/character", characterData);
    },

    // Attack apis
    getAttacks: function () {
        return axios.get("/api/attack");
    },
    getAttack: function (id) {
        return axios.get("/api/attack/" + id);
    },
    deleteAttack: function (id) {
        return axios.delete("/api/attack/" + id);
    },
    makeAttack: function (attackData) {
        return axios.post("/api/attack", attackData);
    }
};
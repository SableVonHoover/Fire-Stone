module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        screenName: DataTypes.STRING,
        email: DataTypes.STRING,
        imageUrl: DataTypes.STRING,

        //TODO: Stats

    });

    return User;
};
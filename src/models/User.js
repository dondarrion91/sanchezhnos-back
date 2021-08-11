const Sequelize = require("sequelize");

const db = require("../../config/db");

const Users = db.define("users", {
    dni: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    email: {
        type: Sequelize.STRING(60),
        allowNull: false,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    firstName: {
        type: Sequelize.STRING,
    },
    lastName: {
        type: Sequelize.STRING,
    },
    propetary: {
        type: Sequelize.BOOLEAN,
    },
    active: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },
});

module.exports = Users;

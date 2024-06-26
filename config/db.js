/* eslint-disable no-undef */
const Sequelize = require("sequelize");
require("dotenv").config();

const db = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOSTNAME,
        dialect: "mysql",
        port: 3306,
    }
);

module.exports = db;

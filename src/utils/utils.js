/* eslint-disable no-undef */
const jwt = require("jsonwebtoken");

function where(params) {
    let where = {};

    Object.entries(params).forEach(([prop, value]) => {
        where[prop] = value;
    });

    return where;
}

function generateAccessToken(payload) {
    return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "1800s" });
}

module.exports = {
    where,
    generateAccessToken,
};

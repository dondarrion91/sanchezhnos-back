/* eslint-disable no-undef */
const utils = require("../utils/utils");
const { checkPassword } = require("../utils/bcrypt");
const jwt = require("jsonwebtoken");

const createToken = async (user, data) => {
    const token = utils.generateAccessToken({
        dni: user.dataValues.dni,
        firstName: user.dataValues.firstName,
        lastName: user.dataValues.lastName,
    });

    if (!checkPassword(data.password, user.dataValues.password) || !user)
        return;

    return token;
};

const verifyToken = async (req) => {
    return jwt.verify(req.cookies.token, process.env.TOKEN_SECRET);
};

module.exports = {
    createToken,
    verifyToken,
};

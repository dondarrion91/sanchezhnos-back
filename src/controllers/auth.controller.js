/* eslint-disable no-undef */

const { createOne } = require("../services/user.services");
const { generateAccessToken } = require("../utils/utils");
const { ERROR_MESSAGES } = require("../i18n/error.message");

const login = (model, services) => async (req, res) => {
    try {
        const user = await model.findOne({
            where: {
                dni: req.body.dni,
            },
        });

        if (!user)
            res.json({
                message: ERROR_MESSAGES.USER_NOT_FOUND,
            });

        services.createToken(user, req.body).then(
            (token) => {
                return !token
                    ? res.status(401).json({ message: ERROR_MESSAGES.AUTH })
                    : res
                          .status(200)
                          .cookie("token", token, {
                              maxAge: 86_400_000,
                              httpOnly: true,
                              secure: process.env.NODE_ENV !== "development",
                          })
                          .json({ token: token });
            },
            function (err) {
                console.log(err);
                res.status(500).json({ message: ERROR_MESSAGES.SERVER });
            }
        );
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            Error: ERROR_MESSAGES.SERVER,
        });
    }
};

const register = (model) => (req, res) => {
    try {
        createOne(model, req.body).then(
            (newUser) => {
                const token = generateAccessToken({
                    dni: newUser.dataValues.dni,
                    firstName: newUser.dataValues.firstName,
                    lastName: newUser.dataValues.lastName,
                });

                return !token
                    ? res.status(401).json({ message: ERROR_MESSAGES.AUTH })
                    : res
                          .status(200)
                          .cookie("token", token, {
                              maxAge: 86_400_000,
                              httpOnly: true,
                              secure: process.env.NODE_ENV !== "development",
                          })
                          .json({ token: token });
            },
            function (err) {
                console.log(err);
                res.status(500).json({ message: ERROR_MESSAGES.SERVER });
            }
        );
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            Error: ERROR_MESSAGES.SERVER,
        });
    }
};

module.exports = {
    login,
    register,
};

const mainController = require("./main.controller");
const User = require("../models/User");
const userServices = require("../services/user.services");

module.exports = {
    getAllUsers: mainController.getAll(User, userServices),
    getOneUser: mainController.getOne(User, userServices),
    editOneUser: mainController.editOne(User, userServices),
    createOneUser: mainController.createOne(User, userServices),
    deleteOneUser: mainController.deleteOne(User, userServices),
};

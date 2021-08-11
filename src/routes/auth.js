const authController = require("../controllers/auth.controller");
const User = require("../models/User");
const authServices = require("../services/auth.services");

module.exports = (router) => {
    router.post("/login", authController.login(User, authServices));
    router.post("/register", authController.register(User));

    return router;
};

const userController = require("../controllers/user.controller");
const middlewares = require("../middlewares/auth.middleware");

module.exports = (router) => {
    router.get(
        "/users",
        middlewares.validateRequest,
        userController.getAllUsers
    );

    router.get(
        "/users/:dni",
        middlewares.validateRequest,
        userController.getOneUser
    );

    router.put(
        "/users/:dni",
        middlewares.validateRequest,
        userController.editOneUser
    );

    router.post(
        "/users",
        middlewares.validateRequest,
        userController.createOneUser
    );

    router.delete(
        "/users/:dni",
        middlewares.validateRequest,
        userController.deleteOneUser
    );

    return router;
};

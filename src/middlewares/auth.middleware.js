const authServices = require("../services/auth.services");
const { ERROR_MESSAGES } = require("../i18n/error.message");

const validateRequest = (req, res, next) => {
    try {
        authServices.verifyToken(req, res).then(
            (decoded) => {
                if (decoded) {
                    next();
                }
            },
            function (err) {
                console.log(err);
                return res
                    .status(401)
                    .json({ message: ERROR_MESSAGES.SESSION_EXPIRED_MISSING });
            }
        );
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            Error: "Internal Server Error",
        });
    }
};

module.exports = {
    validateRequest,
};

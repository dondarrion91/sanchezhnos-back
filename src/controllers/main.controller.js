const utils = require("../utils/utils");
const { ERROR_MESSAGES } = require("../i18n/error.message");

const getAll = (model, services) => async (req, res) => {
    try {
        services.getAll(model).then(
            (elements) => {
                return !elements
                    ? res
                          .status(404)
                          .json({ message: ERROR_MESSAGES.NOT_FOUND })
                    : res.status(200).json(elements);
            },
            function (err) {
                console.log(err);
                res.status(500).json({ message: ERROR_MESSAGES.SERVER });
            }
        );
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: ERROR_MESSAGES.SERVER,
        });
    }
};

const getOne = (model, services) => async (req, res) => {
    try {
        services.getOne(model, utils.where(req.params)).then(
            (element) => {
                return !element
                    ? res
                          .status(404)
                          .json({ message: ERROR_MESSAGES.NOT_FOUND })
                    : res.status(200).json(element);
            },
            function (err) {
                console.log(err);
                res.status(500).json({ message: ERROR_MESSAGES.SERVER });
            }
        );
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: ERROR_MESSAGES.SERVER,
        });
    }
};

const deleteOne = (model, services) => async (req, res) => {
    try {
        services.deleteOne(model, utils.where(req.params)).then(
            (element) => {
                return !element
                    ? res
                          .status(404)
                          .json({ message: ERROR_MESSAGES.NOT_FOUND })
                    : res.status(200).json({ message: "Deleted" });
            },
            function (err) {
                console.log(err);
                res.status(500).json({ message: ERROR_MESSAGES.SERVER });
            }
        );
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: ERROR_MESSAGES.SERVER,
        });
    }
};

const createOne = (model, services) => async (req, res) => {
    try {
        services.createOne(model, req.body).then(
            (newElement) => {
                return !newElement
                    ? res
                          .status(404)
                          .json({ message: ERROR_MESSAGES.NOT_FOUND })
                    : res.status(200).json(newElement);
            },
            function (err) {
                console.log(err);
                res.status(500).json({ message: ERROR_MESSAGES.SERVER });
            }
        );
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: ERROR_MESSAGES.SERVER,
        });
    }
};

const editOne = (model, services) => async (req, res) => {
    try {
        services.editOne(model, req.body, utils.where(req.params)).then(
            (editedElement) => {
                return !editedElement
                    ? res
                          .status(404)
                          .json({ message: ERROR_MESSAGES.NOT_FOUND })
                    : res.status(200).json({
                          message: "Item Successfully edited",
                      });
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
    getAll,
    getOne,
    createOne,
    editOne,
    deleteOne,
};

const bcrypt = require("../utils/bcrypt");

const getAll = async (model) => {
    return await model.findAll();
};

const getOne = async (model, config) => {
    return await model.findOne({
        where: config,
    });
};

const createOne = async (model, data) => {
    return bcrypt
        .hashPassword(data.password, 10)
        .then((hash) => {
            return Object.assign(data, { password: hash });
        })
        .then((data) => {
            return model.create(data);
        });
};

const editOne = async (model, data, config) => {
    return await model.update(data, {
        where: config,
    });
};

const deleteOne = async (model, config) => {
    return await model.destroy({
        where: config,
    });
};

module.exports = {
    getAll,
    getOne,
    createOne,
    editOne,
    deleteOne,
};

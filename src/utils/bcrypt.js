const bcrypt = require("bcrypt");

/**
 *
 * @param {String} password Contraseña en texto plano
 * @param {Number} saltRounds Cantidad de round para generar el salt
 * @returns {String}
 */
function hashPassword(password, saltRounds) {
    return bcrypt.hash(password, saltRounds).then(function (hash) {
        return hash;
    });
}

/**
 *
 * @param {String} password password sin hashear
 * @param {String} hash password hasheado
 * @returns {Boolean}
 */
function checkPassword(password, hash) {
    return bcrypt.compareSync(password, hash);
}

module.exports = {
    hashPassword,
    checkPassword,
};

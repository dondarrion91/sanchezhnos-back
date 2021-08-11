/* eslint-disable no-undef */
const PromiseFtp = require("promise-ftp");
require("dotenv").config();

const ftp = new PromiseFtp();

module.exports = ftp
    .connect({
        host: process.env.FTP_HOST,
        port: process.env.FTP_PORT,
        user: process.env.FTP_USER,
        password: process.env.FTP_PASSWORD,
        secure: true,
        secureOptions: {
            rejectUnauthorized: false,
        },
    })
    .then(function (serverMessage) {
        console.log("Server message: " + serverMessage);
        return ftp.list("/inquilinos");
    });

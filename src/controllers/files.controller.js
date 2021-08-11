const { ERROR_MESSAGES } = require("../i18n/error.message");
const PromiseFtp = require("promise-ftp");
const ftp = new PromiseFtp();

const getFileNames = async (req, res) => {
    try {
        if (!req.query.type) {
            res.status(500).json({
                message: "Internal Server Error",
            });
        }

        ftp.connect({
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
                return ftp.list("/" + req.query.type);
            })
            .then((fileData) => {                
                const files = [];

                fileData.forEach((file) => {
                    const fileArrayElements = file.name.split("_"); 
                    const date = fileArrayElements[2] + "-" + fileArrayElements[3];

                    if (file.name.includes(req.query.dni)) {
                        files.push({
                            dni: fileArrayElements[0],
                            tipo: fileArrayElements[1],
                            fecha: date,
                            numero: fileArrayElements[4].split('.')[0],
                            archivo: file.name,
                        })
                    }                    
                });

                res.json({
                    files: files,
                });
            })
            .then(function () {
                return ftp.end();
            })
            .catch(function (error) {
                console.log(error);
                return ftp.end();
            });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: ERROR_MESSAGES.SERVER,
        });
    }
};

const downloadFile = async (req, res) => {
    try {
        if (!req.query.type || !req.query.file) {
            res.status(500).json({
                message: "Internal Server Error",
            });
        }

        ftp.connect({
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
                return ftp.get("/" + req.query.type + "/" + req.query.file);
            })
            .then(function (stream) {
                return new Promise(function (resolve, reject) {
                    stream.once("close", resolve);
                    stream.once("error", reject);
                    stream.pipe(res);
                });
            })
            .then(function () {
                return ftp.end();
            })
            .catch(function (error) {
                console.log(error);
                return ftp.end();
            });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: ERROR_MESSAGES.SERVER,
        });
    }
};

module.exports = {
    getFileNames,
    downloadFile,
};

const filesController = require("../controllers/files.controller");

module.exports = (router) => {
    router.get("/files", filesController.getFileNames);

    router.get("/downloadFiles", filesController.downloadFile);

    return router;
};

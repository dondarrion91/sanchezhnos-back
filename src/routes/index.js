/* eslint-disable no-undef */
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

let router = express.Router();

app.use(cookieParser());
app.use(express.json());
app.use(cors());

const filesRouter = require("./files");

router = Object.assign(
    router,
    filesRouter(router)
);

app.use("/api/v1", router);

module.exports = app;

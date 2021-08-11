/* eslint-disable no-undef */
const chai = require("chai");
const assert = require("assert");
const chaiHttp = require("chai-http");

module.exports = {
    chai: chai,
    assert: assert,
    url: function () {
        require("dotenv").config();
        return process.env.NODE_ENV === "development"
            ? "http://localhost:3000/api/v1"
            : null;
    },

    useChaiHttp: function () {
        chai.use(chaiHttp);
    },
};

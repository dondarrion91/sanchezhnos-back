/* eslint-disable no-undef */
const { chai, assert, url, useChaiHttp } = require("./test.config");
useChaiHttp();

describe("Auth", function () {
    it("Deberia registrar un nuevo usuario", function (done) {
        chai.request(url())
            .post("/register")
            .set("Content-Type", "application/json")
            .send({
                dni: 23232313,
                email: "juliannnnnnnnnnnnnnnnnnnnn@gmail.com",
                password: "aaaaaaaaaaaaaaaaaaaaaa",
                firstName: "julian",
                lastName: "sdsd",
                propetary: false,
                active: true,
            })
            .end(function (err, res) {
                assert.strictEqual(res.status, 200);
                done();
            });
    });
});

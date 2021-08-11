/* eslint-disable no-undef */
const { chai, assert, url, useChaiHttp } = require("./test.config");
useChaiHttp();

describe("Users", function () {
    it("Deberia crear un nuevo usuario", function (done) {
        chai.request(url())
            .post("/users")
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

    it("Deberia traer todos los usuarios", function (done) {
        chai.request(url())
            .get("/users")
            .end((err, res) => {
                assert.strictEqual(res.status, 200);
                done();
            });
    });

    it("Deberia traer un usuario", function (done) {
        chai.request(url())
            .get("/users/23232313")
            .end((err, res) => {
                assert.strictEqual(res.status, 200);
                assert.strictEqual(res.body.dni, 23232313);
                done();
            });
    });

    it("Deberia editar un usuario", function (done) {
        chai.request(url())
            .put("/users/23232313")
            .send({
                firstName: "robert",
            })
            .end((err, res) => {
                assert.strictEqual(res.status, 200);

                chai.request(url())
                    .get("/users/23232313")
                    .end((err, res) => {
                        assert.strictEqual(res.status, 200);
                        assert.strictEqual(res.body.firstName, "robert");
                        done();
                    });
            });
    });

    it("Deberia borrar un usuario", function (done) {
        chai.request(url())
            .delete("/users/23232313")
            .end((err, res) => {
                assert.strictEqual(res.status, 200);
                assert.strictEqual(res.body.message, "Deleted");
                done();
            });
    });
});

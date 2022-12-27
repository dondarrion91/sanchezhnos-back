/* eslint-disable no-undef */
const app = require("./routes/index");
// const db = require("../config/db");
require("dotenv").config();
const port = process.env.PORT || 3001;

// Modelos
// require("./models/index");

// db.sync()
//     .then(() => console.log("DB OK"))
//     .catch((error) => console.log(error));

app.listen(port || port, () => {
    console.log(`Server listening on port: ${port}`);
});

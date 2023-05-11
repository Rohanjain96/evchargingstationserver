const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv")
dotenv.config(".env")
const connection = require("./db/db.js");
const userrouter = require("./Routes/userroutes")

const app = express();
const corsoptions = { credentials: true};
const PORT = process.env.PORT || 5000
app.use(cors(corsoptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use("/api/users", userrouter);

connection();
app.listen(PORT, () => { console.log(`listening on port:${PORT}`); })
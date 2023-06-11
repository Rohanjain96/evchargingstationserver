const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv")
dotenv.config(".env")
const connection = require("./db/db.js");
const userrouter = require("./Routes/userroutes")
const bookingRouter = require('./Routes/booking.js')

const app = express();
const corsoptions = { credentials: true };
const PORT = process.env.PORT || 5000
app.use(cors(corsoptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use("/api/users", userrouter);
app.use("/api/booking", bookingRouter);

connection();
app.listen(PORT, () => { console.log(`listening on port:${PORT}`); })
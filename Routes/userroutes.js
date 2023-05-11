const express = require("express");
const router = express.Router();

const { login, register,checkcookie,updateDetails } = require("../controllers/userController.js");
const { protect } = require("../Middleware/Autheticate.js");

router.post("/register", register);

router.post("/login", login);

router.patch("/updateDetail", protect, updateDetails);

router.get("/checkcookie", checkcookie);


module.exports = router;
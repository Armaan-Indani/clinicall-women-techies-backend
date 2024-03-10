const express = require("express");
const SignUpController = require("../controllers/signUpController");
const verifyTokenController = require("../controllers/verifyTokenController");

const verifytoken = express.Router();

verifytoken.post("/", verifyTokenController);

module.exports = verifytoken;

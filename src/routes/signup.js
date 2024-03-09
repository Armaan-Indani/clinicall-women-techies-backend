const express = require("express");
const SignUpController = require("../controllers/signUpController");

const signup = express.Router();

signup.post("/", SignUpController);

module.exports = signup;

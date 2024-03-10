const express = require("express");
const LoginController = require("../controllers/loginController");

const doctorLogin = express.Router();

doctorLogin.post("/", LoginController.doctor);

module.exports = doctorLogin;

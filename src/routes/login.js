const express = require("express");
const LoginController = require("../controllers/loginController");

const login = express.Router();

login.post("/", LoginController.user);
login.post("/doctor", LoginController.doctor);

module.exports = login;

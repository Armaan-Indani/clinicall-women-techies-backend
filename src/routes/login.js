const express = require("express");
const LoginController = require("../controllers/loginController");

const login = express.Router();

login.post("/", LoginController);

module.exports = login;

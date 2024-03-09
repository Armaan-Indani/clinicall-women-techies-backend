const express = require("express");
const ProfileController = require("../controllers/profileController");
const validateToken = require("../middleware/validateTokenHandler");

const profile = express.Router();

profile.get("/:id", validateToken, ProfileController);

module.exports = profile;

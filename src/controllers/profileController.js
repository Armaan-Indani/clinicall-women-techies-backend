const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const ProfileController = asyncHandler(async (req, res) => {
  //   console.log("\n\n id = ", req.params.id);
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(user);
});

module.exports = ProfileController;

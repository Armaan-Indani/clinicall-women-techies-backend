const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const LoginController = asyncHandler(async (req, res) => {
  let { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  email = email.trim();
  email = email.toLowerCase();

  const user = await User.findOne({ email });

  if (!user) {
    console.log("User not found");
  }

  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          name: user.name,
          email: user.email,
          domain: user.domain,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "30m",
      }
    );

    res.status(200);
    res.json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Email or password is not valid");
  }
});

module.exports = LoginController;

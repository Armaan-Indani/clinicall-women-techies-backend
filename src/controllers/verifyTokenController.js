const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const verifyTokenController = asyncHandler(async (req, res) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    if (!token)
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
          res.status(401);
          console.log(err);
          throw new Error("User is unauthorized");
        }
        req.user = decoded.user;
        res.json({ verifcation_message: "success" });
      });
    res.status(200);
    res.json({ verifcation_message: "success" });
  } else {
    res.status(400);
    res.json({ verifcation_message: "failure" });
  }
});

module.exports = verifyTokenController;

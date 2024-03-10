const express = require("express");
const cors = require("cors");
const login = require("./routes/login");
const signup = require("./routes/signup");
const connectToDB = require("./config/connectDB");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const profile = require("./routes/profile");
const verifytoken = require("./routes/verify-token");

connectToDB();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/signup", signup);
app.use("/login", login);
app.use("/profile", profile);
app.use("/verify-token", verifytoken);

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});

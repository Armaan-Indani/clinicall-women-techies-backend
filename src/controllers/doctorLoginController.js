const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Doctor = require("../models/doctorModel");

const DoctorLoginController = asyncHandler(async (req, res) => {
  let { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  email = email.trim();
  email = email.toLowerCase();

  const doctor = await Doctor.findOne({ email });

  if (!doctor) {
    console.log("Doctor not found");
  }

  if (doctor && (await bcrypt.compare(password, doctor.password))) {
    const accessToken = jwt.sign(
      {
        doctor: {
          id: doctor._id,
          email: doctor.email,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "30m",
      },
      (err, token) => {
        if (err) {
          return res.json({ message: "Error", error: err });
        }
        res.status(200);
        return res.json({ message: "Success", token: "Bearer " + token });
      }
    );
  } else {
    res.status(401);
    throw new Error("Email or password is not valid");
  }
});

module.exports.doctor = DoctorLoginController;

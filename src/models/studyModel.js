const mongoose = require("mongoose");

const studySchema = mongoose.Schema(
  {
    disease: {
      type: String,
      required: [true, "Please add all data fields"],
    },
    location: {
      type: String,
      required: [true, "Please add all data fields"],
    },
    phase: {
      type: String,
      required: [true, "Please add all data fields"],
    },
    outcome: {
      type: String,
      required: [true, "Please add all data fields"],
    },
    success_rate: {
      type: String,
      required: [true, "Please add all data fields"],
    },
    side_effects: {
      type: String,
      required: [true, "Please add all data fields"],
    },
    enrollment_status: {
      type: String,
      required: [true, "Please add all data fields"],
    },
  },
  {
    timestamps: true,
  }
);

const Study = mongoose.model("Study", studySchema);

module.exports = Study;

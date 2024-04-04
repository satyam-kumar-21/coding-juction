const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    lectureNotes:{
      type: String,
    },
    video: {
      type: String,
      required: true,
    },
    lectureNumber: {
      type: Number,
      default: 1,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Lecture", lectureSchema);

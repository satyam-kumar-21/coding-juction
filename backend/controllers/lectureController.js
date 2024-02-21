const Lecture = require("../models/lectureModel");
const Course = require("../models/course");
const cloudinary = require("cloudinary").v2;

const createLecture = async (req, res) => {
  try {
    const courseId = req.params.courseId;

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    // Initialize the lectures array if it's not already defined
    // course.lectures = course.lectures || [];

    const { title, lectureNumber } = req.body;
    let video;
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "video",
        folder: "course-videos",
      });
      video = result.secure_url;
    }

    const newLecture = new Lecture({
      title,
      lectureNumber,
      video,
      course: courseId,
    });

    // Save the new lecture
    await newLecture.save();

    // Push the new lecture's ID into the course's lectures array
    course.lectures.push(newLecture._id);
    await course.save();


    return res.status(201).json({
      success: true,
      message: "Lecture created successfully",
      newLecture,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: error.message,
    });
  }
};

module.exports = {
  createLecture,
};

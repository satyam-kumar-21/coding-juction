const Course = require("../models/course");
const upload = require("../middleware/fileUploadMulter");
const cloudinary = require("cloudinary");

// const createCourse = async (req, res) => {
//     try {
//         const { title, description, image, price, discountedPrice, startdate, enddate, duration, instructor, technologies, whatYouWillLearn, syllabus, curriculum, qa } = req.body;

//         const newCourse = await Course.create({
//             title,
//             description,
//             image,
//             price,
//             discountedPrice,
//             startdate,
//             enddate,
//             duration,
//             instructor,
//             technologies,
//             whatYouWillLearn,
//             syllabus,
//             curriculum,
//             qa
//         });

//         res.status(201).json({
//             success: true,
//             data: newCourse,
//         });
//     } catch (error) {
//         res.status(500).json({ message: "Error in creating course", success: false, error: error.message });
//     }
// }

const createCourse = async (req, res) => {
  try {
    // Upload file to Cloudinary
    let image;
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "course-images", // Folder in Cloudinary to store images
        width: 250, // Resize width to 250px
        height: 250, // Resize height to 250px
        crop: "fill", // Crop mode
      });
      image = result.secure_url; // Store the Cloudinary URL
      // console.log("Image",image);
    }

    // Create course

    const {
      title,
      description,
      price,
      discountedPrice,
      startdate,
      enddate,
      duration,
      instructor,
      technologies,
      whatYouWillLearn,
      syllabus,
      curriculum,
      qa,
    } = req.body;

    const newCourse = await Course.create({
      title,
      description,
      image,
      price,
      discountedPrice,
      startdate,
      enddate,
      duration,
      instructor,
      technologies,
      whatYouWillLearn,
      syllabus,
      curriculum,
      qa,
    });

    res.status(201).json({
      success: true,
      data: newCourse,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error in creating course",
      success: false,
      error: error.message,
    });
  }
};

const updateCourse = async (req, res) => {
  const courseId = req.params.id;

  let image;
  if (req.file) {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "course-images", // Folder in Cloudinary to store images
      width: 250, // Resize width to 250px
      height: 250, // Resize height to 250px
      crop: "fill", // Crop mode
    });
    image = result.secure_url; // Store the Cloudinary URL
  }
  const {
    title,
    description,
    price,
    discountedPrice,
    startdate,
    enddate,
    duration,
    instructor,
    technologies,
    whatYouWillLearn,
    lectures,
    syllabus,
    curriculum,
    qa,
  } = req.body;

  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      courseId,
      {
        title,
        instructor,
        description,
        price,
        discountedPrice,
        duration,
        startdate,
        enddate,
        technologies,
        whatYouWillLearn,
        syllabus,
        curriculum,
        qa,
        lectures,
        // Only update the image if a new one is provided
        ...(req.file && { image }),
      },
      { new: true }
    );

    res.status(200).json({ success: true, data: updatedCourse });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const deleteCourse = async (req, res) => {
  const courseId = req.params.id;

  try {
    const deletedCourse = await Course.findByIdAndDelete(courseId);

    if (!deletedCourse) {
      return res
        .status(404)
        .json({ success: false, error: "Course not found" });
    }

    res
      .status(200)
      .json({
        success: true,
        message: "Course deleted successfully",
        data: deletedCourse,
      });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const getAllCourse = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json({ success: true, data: courses });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const getOneCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = await Course.findById(courseId);

    if (!course) {
      return res
        .status(404)
        .json({ success: false, error: "Course not found" });
    }

    res.status(200).json({ success: true, data: course });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  createCourse,
  updateCourse,
  deleteCourse,
  getAllCourse,
  getOneCourse,
};

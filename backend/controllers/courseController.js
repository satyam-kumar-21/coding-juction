
const Course = require("../models/course");


const createCourse = async (req, res) => {
    try {
        const { title, mainprice, offerprice,profile, duration, lectures } = req.body;

        const newCourse = await Course.create({
            profile,
            title,
            mainprice,
            offerprice,
            duration,
            lectures
        });

        res.status(201).json({
            success: true,
            data: newCourse,
            
        });
    } catch (error) {
        res.status(500).json({ message: "Error in creating course", success: false, error: error.message });
    }
}


const updateCourse = async (req, res) => {
    const courseId = req.params.id;
    const { title, mainprice, offerprice, duration, lectures } = req.body;

    try {
        const updatedCourse = await Course.findByIdAndUpdate(courseId, {
            title,
            mainprice,
            offerprice,
            duration,
            lectures
        }, { new: true });

        res.status(200).json({ success: true, data: updatedCourse });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

const deleteCourse = async (req, res) => {
    const courseId = req.params.id;

    try {
        const deletedCourse = await Course.findByIdAndDelete(courseId);

        if (!deletedCourse) {
            return res.status(404).json({ success: false, error: "Course not found" });
        }

        res.status(200).json({ success: true, message : "Course deleted successfully" , data: deletedCourse });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

const getAllCourse = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json({ success: true, data: courses });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

const getOneCourse = async (req, res) => {
    try {
        const courseId = req.params.id;
        const course = await Course.findById(courseId);
        
        if (!course) {
            return res.status(404).json({ success: false, error: "Course not found" });
        }
        
        res.status(200).json({ success: true, data: course });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}


module.exports = { createCourse, updateCourse, deleteCourse , getAllCourse, getOneCourse};

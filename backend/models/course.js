const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    profile: {
        type: String,
    },
    title: {
        type: String,
        required: true
    },
    mainprice: {
        type: Number,
        required: true
    },
    offerprice: {
        type: Number,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    lectures: {
        type: Array
    }
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;

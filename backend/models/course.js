const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discountedPrice: {
        type: Number,
        required: true
    },
    startdate: {
        type: String,
        required: true
    },
    enddate: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    instructor: [{
        name: {
            type: String,
            required: true
        },
        bio: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    }],
    technologies: {
        type: [String], // Array of strings
        required: true
    },
    whatYouWillLearn: {
        type: [String], // Array of strings
        required: true
    },
    syllabus: [{
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        topics: {
            type: [String], // Array of strings
            required: true
        }
    }],
    curriculum: [{
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        isLocked: {
            type: Boolean,
            required: true
        }
    }],
    qa: [{
        id: {
            type: Number,
            required: true
        },
        question: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true
        }
    }],
    // Add other course details as needed
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;

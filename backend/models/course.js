const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
    },
    discountedPrice: {
        type: Number,
    },
    startdate: {
        type: Date,
    },
    enddate: {
        type: Date,
    },
    duration: {
        type: String,
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
        type: [String], 
    },
    whatYouWillLearn: {
        type: [String], 
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

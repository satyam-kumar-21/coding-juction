const express = require("express");
const router = express.Router();
const { createLecture } = require("../controllers/lectureController");
const isAdmin = require("../middleware/isAdmin");
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/fileUploadMulter");

// Adjusted route to include necessary middleware for authentication, authorization, and file upload
router.post("/create/:courseId", authMiddleware, isAdmin, upload.single("video"), createLecture);

module.exports = router;

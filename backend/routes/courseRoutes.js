const express = require("express");
const {
  createCourse,
  updateCourse,
  deleteCourse,
  getAllCourse,
  getOneCourse
} = require("../controllers/courseController");
const isAdmin = require("../middleware/isAdmin");
const authMiddleware = require("../middleware/authMiddleware");

const courseRouter = express.Router();

courseRouter.get("/", getAllCourse)
courseRouter.get("/:id", getOneCourse)
courseRouter.post("/create", authMiddleware, isAdmin, createCourse);
courseRouter.put("/update/:id", authMiddleware, isAdmin, updateCourse);
courseRouter.delete("/delete/:id", authMiddleware, isAdmin, deleteCourse);



module.exports = courseRouter;

const express = require("express");
const { registerUser, loginUser, logoutUser, enrollCourse, withdrawCourse } = require("../controllers/userController");


const userRouter = express.Router();

// Routes for user registration, login, and logout
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/logout", logoutUser);

// Routes for enrolling and withdrawing from courses
userRouter.post("/enroll-course", enrollCourse);
userRouter.post("/withdraw-course", withdrawCourse);

module.exports = userRouter;

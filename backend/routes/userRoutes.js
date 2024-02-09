const express = require("express");
const { registerUser, loginUser, logoutUser } = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/register",registerUser);
userRouter.post("/login",loginUser);
userRouter.post("/logout", logoutUser)

module.exports = userRouter;
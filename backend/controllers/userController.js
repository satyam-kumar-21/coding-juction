const User = require("../models/userModel");
const generateJwtToken = require("../utils/generateJwtToken");

const registerUser = async (req, res) => {
  try {
    const { name, email, password, isAdmin } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      return res.send("User already exists!! Please login");
    }

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const newUser = await User.create({
      name,
      email,
      password,
      isAdmin
    });

    return res.status(200).json({
      message: "User registered successfully",
      newUser,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      success: false,
    });
  }
};


const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (user && (await user.matchPassword(password))) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,
            token: generateJwtToken(user._id, user.isAdmin),
        });
      } else {
        res.status(404).json({
          message: "Email and password are incorrect",
          success: false
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
        success: false,
        error: error.message
      });
    }
  };
  

const logoutUser = async (req, res) => {};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};

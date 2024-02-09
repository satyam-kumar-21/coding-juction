const jwt = require("jsonwebtoken");

const generateJwtToken = (id) => {
    return jwt.sign(
        {id}, 
        process.env.JWT_SECRET,
        {
        expiresIn: "7d",
        }
    )
};

module.exports = generateJwtToken;
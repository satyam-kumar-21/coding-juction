const express = require("express");
const connectToDb = require("./config/dbConnect");
const userRouter = require("./routes/userRoutes")
const cors = require("cors");
const courseRouter = require("./routes/courseRoutes");
const cloudinary = require("cloudinary")
const paymentRouter = require("./routes/payment")

require("dotenv").config();

connectToDb();

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));


const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || 'drgktyioo';
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || '166768164512464';
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || 'XEU0phaPUssQ3hzqLVUcY9UdkLs' ;

cloudinary.v2.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
});

app.use("/api/user", userRouter);
app.use("/api/course", courseRouter)
app.use("/api/payment", paymentRouter)


app.get("/", (req, res) => {
    res.send("server chalu hai");
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
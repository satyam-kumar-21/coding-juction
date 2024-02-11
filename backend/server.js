const express = require("express");
const connectToDb = require("./config/dbConnect");
const userRouter = require("./routes/userRoutes")
const cors = require("cors");
const courseRouter = require("./routes/courseRoutes");

require("dotenv").config();

connectToDb();

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/course", courseRouter)


app.get("/", (req, res) => {
    res.send("server chalu hai");
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
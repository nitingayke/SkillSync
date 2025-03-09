import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import httpStatus from "http-status";
import connectDB from "./config/db.js";


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB()

app.get("/", (req, res) => {
    res.status(httpStatus.OK).json({ message: "API is running..." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
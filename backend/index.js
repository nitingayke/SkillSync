import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import httpStatus from "http-status";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.status(httpStatus.OK).json({ message: "API is running..." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
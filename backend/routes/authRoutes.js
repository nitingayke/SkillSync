import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";

const router = express.Router();

// Register a new user
router.post("/register", registerUser);
// Login user
router.post("/login", loginUser);



export default router;
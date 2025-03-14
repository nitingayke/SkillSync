import User from "../models/RegUser.js";
import jwt from "jsonwebtoken";

// Register User
export const registerUser = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        // Create new user
        const newUser = new User({ fullName, email, password });
        await newUser.save();

        res.status(201).json({ success: true, message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// Login User
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }

        // Validate password
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ success: true, message: "Login successful", token });
    } catch (err) {
        res.status(500).json({ success: false, message: "Server error" });
    }
};
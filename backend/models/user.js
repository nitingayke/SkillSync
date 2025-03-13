import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
    {
        profileImage: {
            type: String,
        },
        fullName: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            match: [/\S+@\S+\.\S+/, "Please enter a valid email"]
        },
        currentLocation: {
            type: String,
            default: ""
        },
        skills: {
            type: [String],
            default: []
        },
        experienceLevel: {
            type: String,
            enum: ["Beginner", "Intermediate", "Expert"],
            required: true
        },
        interests: {
            type: [String],
            default: []
        },
        availability: {
            type: Boolean,
            default: true
        }
    },
    { timestamps: true }
);
  
const User = mongoose.model("User", userSchema);
export default User;

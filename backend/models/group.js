import mongoose from "mongoose";

const groupSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        imageUrl: {
            type: String,
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        technologies: {
            type: [String],
            default: []
        },
        requiredSkills: {
            type: [String],
            default: []
        },
        experienceLevel: {
            type: String,
            enum: ["Beginner", "Intermediate", "Expert"],
            required: true
        },
        status: {
            type: String,
            enum: ["Active", "Open for Members", "Closed"],
            default: "Open for Members"
        },
        location: {
            type: String,
            default: "Remote"
        },
        members: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }],
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamps: true,
    }
);


const Group = mongoose.model("Group", groupSchema);

export default Group;

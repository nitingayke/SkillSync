import React, { useState } from "react";
import { Button, TextField, Select, MenuItem, Tooltip } from "@mui/material";
import { CameraAlt } from '@mui/icons-material';
import { useSnackbar } from "notistack";
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";

export default function UserProfileUpdate() {

    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [location, setLocation] = useState("");
    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState("");
    const [experience, setExperience] = useState("");
    const [availability, setAvailability] = useState("");
    const [profileImage, setProfileImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleAddSkill = () => {
        if (newSkill.trim() !== "" && !skills.includes(newSkill)) {
            setSkills([...skills, newSkill]);
            setNewSkill("");
        }
    };

    const handleRemoveSkill = (skillToRemove) => {
        setSkills(skills.filter((skill) => skill !== skillToRemove));
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = async () => {
        try {
            setIsLoading(true);

            const response = await updateUserProfile(userData);

            if (response.success) {
                enqueueSnackbar(response.message, { variant: "success" });
                navigate(`/user/profile/${response.data.user._id}`); // Ensure response.data contains user object
            } else {
                enqueueSnackbar(response.message || "Failed to update profile.", { variant: "error" });
            }

        } catch (error) {
            enqueueSnackbar("Something went wrong. Please try again later.", { variant: "error" });
        } finally {
            setIsLoading(false);
        }
    };


    if (isLoading) {
        return <div className="h-full w-full flex justify-center items-center"><CircularProgress /></div>
    }

    return (
        <div className="flex flex-col items-center w-full pb-10">
            <div className="w-full max-w-4xl border shadow-lg rounded-2xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Left Side */}
                    <div className="space-y-4">
                        <div className="space-y-1">
                            <p className="text-lg font-semibold">Profile Image</p>
                            <div className="w-30 h-30 relative border-2 border-dashed text-gray-400 rounded-lg flex items-center justify-center overflow-hidden">
                                {profileImage ? (
                                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                                ) : (
                                    <label htmlFor="profile-image-upload" className="cursor-pointer">
                                        <CameraAlt sx={{ fontSize: '3rem', color: 'gray' }} />
                                        <input
                                            id="profile-image-upload"
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={handleImageUpload}
                                        />
                                    </label>
                                )}
                            </div>
                        </div>
                        <div>
                            <TextField fullWidth label="Full Name" variant="outlined" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                        </div>
                        <div>
                            <TextField fullWidth label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <Select fullWidth displayEmpty value={gender} onChange={(e) => setGender(e.target.value)}>
                            <MenuItem value="" disabled>Select your gender</MenuItem>
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                            <MenuItem value="other">Other</MenuItem>
                        </Select>
                        <TextField fullWidth label="Location" variant="outlined" value={location} onChange={(e) => setLocation(e.target.value)} />
                    </div>

                    {/* Right Side */}
                    <div className="space-y-4">
                        <div>
                            <div className="flex space-x-2 gap-2">
                                <TextField label="Add Skill" className="flex-1" variant="outlined" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} size="small" />
                                <Button variant="contained" onClick={handleAddSkill}>+ Add</Button>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {skills?.map((skill, idx) => (
                                    <Tooltip title={`remove ${skill}`} key={idx}>
                                        <button onClick={() => handleRemoveSkill(skill)} className="border px-3 py-1 rounded text-gray-500 cursor-pointer break-words hover:bg-red-100 hover:text-red-500">{skill}</button>
                                    </Tooltip>
                                ))}
                            </div>
                        </div>
                        <Select fullWidth displayEmpty value={experience} onChange={(e) => setExperience(e.target.value)}>
                            <MenuItem value="" disabled>Select your Experience Level</MenuItem>
                            <MenuItem value="beginner">Beginner</MenuItem>
                            <MenuItem value="intermediate">Intermediate</MenuItem>
                            <MenuItem value="advanced">Advanced</MenuItem>
                        </Select>
                        <Select fullWidth displayEmpty value={availability} onChange={(e) => setAvailability(e.target.value)}>
                            <MenuItem value="" disabled>Select your Availability</MenuItem>
                            <MenuItem value="yes">Yes</MenuItem>
                            <MenuItem value="not-now">Not Now</MenuItem>
                        </Select>
                        <div className="flex gap-2">
                            <Button variant="contained" sx={{ background: '#80808091' }}>Cancel</Button>
                            <Button variant="contained" color="success" onClick={handleSave}>Save</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
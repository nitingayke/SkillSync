import React, { useState } from "react";
import { Button, TextField, Select, MenuItem, Tooltip } from "@mui/material";
import { CameraAlt } from '@mui/icons-material';

export default function UserProfileUpdate() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [location, setLocation] = useState("");
    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState("");
    const [experience, setExperience] = useState("");
    const [availability, setAvailability] = useState("");

    const handleAddSkill = () => {
        if (newSkill.trim() !== "" && !skills.includes(newSkill)) {
            setSkills([...skills, newSkill]);
            setNewSkill("");
        }
    };

    const handleRemoveSkill = (skillToRemove) => {
        setSkills(skills.filter((skill) => skill !== skillToRemove));
    };

    return (
        <div className="flex flex-col items-center w-full pb-10">
            <div className="w-full max-w-4xl border shadow-lg rounded-2xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                    <div className="md:grid gap-3">
                        <div className="space-y-1">
                            <p>Profile Image</p>
                            <div className="w-30 h-30 relative border text-gray-500 rounded flex items-center justify-center">
                                <img src="" alt="" />
                                <button><CameraAlt sx={{fontSize: '3rem'}}/></button>
                            </div>
                        </div>
                        <TextField fullWidth label="Full Name" variant="outlined" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                        <TextField fullWidth label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
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
                                {skills.map((skill, idx) => (
                                    <Tooltip title={`remove ${skill}`} key={idx}>
                                        <button onClick={() => handleRemoveSkill(skill)} className="border px-3 py-1 rounded text-gray-500 cursor-pointer break-words">{skill}</button>
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
                            <Button variant="contained" color="primary">Edit</Button>
                            <Button variant="outlined">Save</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

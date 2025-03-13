import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const skillsList = [
  "JavaScript",
  "C++",
  "Full-Stack Developer",
  "Android Developer",
  "MongoDB",
  "Java",
  "Communication Skills",
  "Python",
  "Generative AI",
];

const UserProfile = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [profileImage, setProfileImage] = useState("https://via.placeholder.com/100");

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : [...prev, skill]
    );
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

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full border">
        <div className="flex justify-between items-center mb-6">
          <Link to='/' ><button className="text-2xl">←</button></Link>
          <h2 className="text-xl font-semibold">User Profile</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Profile Image */}
          <div className="col-span-1 flex flex-col items-center relative">
            <img
              src={profileImage}
              alt="Profile"
              className="w-34 h-34 rounded-md border mb-2"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>

          {/* User Details */}
          <div className="col-span-2 space-y-3">
            <div>
              <label className="text-sm font-semibold">Name</label>
              <input type="text" className="border rounded p-2 w-full" />
            </div>

            <div>
              <label className="text-sm font-semibold">Email</label>
              <input type="email" className="border rounded p-2 w-full" />
            </div>

            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="text-sm font-semibold">Gender</label>
                <input type="text" className="border rounded p-2 w-full" />
              </div>
              <div className="w-1/2">
                <label className="text-sm font-semibold">Experience</label>
                <input type="text" className="border rounded p-2 w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Location and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-sm font-semibold">Location</label>
            <input type="text" className="border rounded p-2 w-full"/>
          </div>
          <div>
            <label className="text-sm font-semibold">Phone</label>
            <input type="text" className="border rounded p-2 w-full"/>
            <p className="text-xs text-gray-500">when user accepted request then it shows number</p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-4">
          <label className="text-sm font-semibold">Select Skills</label>
          <div className="flex flex-wrap gap-2 mt-2">
            {skillsList.map((skill, index) => (
              <button
                key={index}
                onClick={() => toggleSkill(skill)}
                className={`px-3 py-1 rounded-md text-sm transition-all ${
                  selectedSkills.includes(skill)
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className="mt-4">
          <label className="text-sm font-semibold gap-5">Availability</label>
          <input type="text" className="ml-5 border rounded p-2 w-20 text-center gap-10" defaultValue="Yes" />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
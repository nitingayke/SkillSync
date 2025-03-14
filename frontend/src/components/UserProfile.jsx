import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { enqueueSnackbar } from "notistack";
import axios from "axios";

const UserProfile = () => {
  
  const { id } = useParams(); 
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getUserProfileData();
  }, []);

  const getUserProfileData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/api/user/${id}`);

      if (response.data.success) {
        const fetchedUser = response.data.user;
        setUser({
          ...fetchedUser,
          location: fetchedUser.location || "India",
          profileImage: fetchedUser.profileImage || "https://via.placeholder.com/150", // Default profile image
        });
      } else {
        enqueueSnackbar("Failed to load user data", { variant: "error" });
      }
    } catch (error) {
      enqueueSnackbar(error?.response?.data?.message || "Error fetching user data", { variant: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      {!user ? (
        <div className="h-full flex items-center justify-center bg-gray-100 text-gray-500 text-xl">
          User not found
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
          {isLoading ? (
            <p className="text-gray-500">Loading...</p>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full border">
              <div className="flex justify-between items-center mb-6">
                <Link to="/">
                  <button className="text-2xl">←</button>
                </Link>
                <h2 className="text-xl font-semibold">User Profile</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Profile Image */}
                <div className="col-span-1 flex flex-col items-center relative">
                  <img
                    src={user.profileImage}
                    alt="Profile"
                    className="w-34 h-34 rounded-md border mb-2"
                  />
                </div>

                {/* User Details */}
                <div className="col-span-2 space-y-3">
                  <div>
                    <p className="text-sm font-semibold">Name</p>
                    <p className="border rounded p-2 w-full">{user.fullName}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold">Email</p>
                    <p className="border rounded p-2 w-full">{user.email}</p>
                  </div>

                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <p className="text-sm font-semibold">Gender</p>
                      <p className="border rounded p-2 w-full">{user.gender || "Not Specified"}</p>
                    </div>
                    <div className="w-1/2">
                      <p className="text-sm font-semibold">Experience</p>
                      <p className="border rounded p-2 w-full">{user.experienceLevel || "Unknown"}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-sm font-semibold">Location</p>
                  <p className="border rounded p-2 w-full">{user.location}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold">Phone</p>
                  <p className="border rounded p-2 w-full">{user.phoneNo || "Hidden"}</p>
                  <p className="text-xs text-gray-500">
                    When user accepts request, phone number will be shown
                  </p>
                </div>
              </div>

              {/* Skills Section */}
              <div className="mt-4">
                <p className="text-sm font-semibold">Skills</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {user.skills?.length ? (
                    user.skills.map((skill, index) => (
                      <button
                        key={index + skill}
                        className="px-3 py-1 rounded-md text-sm transition-all bg-yellow-500 text-white"
                      >
                        {skill}
                      </button>
                    ))
                  ) : (
                    <p className="text-gray-500">No skills provided</p>
                  )}
                </div>
              </div>

              {/* Availability */}
              <div className="mt-4">
                <p className="text-sm font-semibold gap-5">Availability</p>
                <p className="border rounded p-1 w-20 text-center mt-1">
                  {user.availability ? "Yes" : "No"}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default UserProfile;

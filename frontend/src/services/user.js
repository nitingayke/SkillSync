import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

// Register User
const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return { success: true, message: "Registration successful!", data: response.data };
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || "Registration failed. Please try again."
        };
    }
};

// Login User
const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData);
        return { success: true, message: "Login successful!", data: response.data };
    } catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || "Login failed. Check your credentials."
        };
    }
};

const updateUserProfile = async (userData) => {
    try {
        const formData = new FormData();
        formData.append("fullName", userData.fullName);
        formData.append("email", userData.email);
        formData.append("gender", userData.gender);
        formData.append("location", userData.location);
        formData.append("experience", userData.experience);
        formData.append("availability", userData.availability);

        // Append skills as an array
        userData.skills.forEach((skill, index) => {
            formData.append(`skills[${index}]`, skill);
        });

        // Append profile image if available
        if (userData.profileImage) {
            formData.append("profileImage", userData.profileImage);
        }

        const response = await axios.put("https://your-api-endpoint.com/api/user/profile", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        return response.data;
    } catch (error) {
        console.error("Error updating profile:", error.response?.data || error.message);

        return {
            success: false,
            message: error.response?.data?.message || "Failed to update profile. Please try again later."
        };
    }
};


export { registerUser, loginUser, updateUserProfile };

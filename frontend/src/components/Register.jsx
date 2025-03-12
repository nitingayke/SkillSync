import { useState } from "react";
import { registerUser } from "../services/user";
import { TextField, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

export default function Register() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleRegister = async () => {
        if (!fullName || !email || !password) {
            enqueueSnackbar("All fields are required!", { variant: "warning" });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            enqueueSnackbar("Please enter a valid email address!", { variant: "warning" });
            return;
        }

        try {
            setIsLoading(true);

            const response = await registerUser({ fullName, email, password });

            if (response.success) {
                enqueueSnackbar(response.message, { variant: "success" });
                navigate("/login"); // Redirect to login page
            } else {
                enqueueSnackbar(response.message, { variant: "error" });
            }
        } catch (error) {
            enqueueSnackbar(err)
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 shadow-md rounded-lg w-96 space-y-4">
                <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>

                <div>
                    <TextField label="Full Name" fullWidth className="mb-4" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div>
                    <TextField label="Email" type="email" fullWidth className="mb-4" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <TextField label="Password" type="password" fullWidth className="mb-4" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button onClick={handleRegister} className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600 transition">
                    {isLoading ? <CircularProgress size={20} color="inherit" /> : "Register"}
                </button>

                <p className="text-sm text-gray-600 text-center mt-3">
                    Already have an account? <a href="/login" className="text-blue-500">Login</a>
                </p>
            </div>
        </div>
    );
}

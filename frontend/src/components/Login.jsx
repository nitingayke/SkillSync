import { useState } from "react";
import { loginUser } from "../services/user";
import { TextField, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!email || !password) {
            enqueueSnackbar("Email and Password are required!", { variant: "warning" });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            enqueueSnackbar("Please enter a valid email address!", { variant: "warning" });
            return;
        }


        setIsLoading(true);

        const response = await loginUser({ email, password });

        if (response.success) {
            enqueueSnackbar(response.message, { variant: "success" });
            navigate("/dashboard"); // Redirect after login
        } else {
            enqueueSnackbar(response.message, { variant: "error" });
        }

        setIsLoading(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-5">
            <div className="bg-white p-8 shadow-md rounded-lg w-96 space-y-4">
                <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

                <div>
                    <TextField label="Email" type="email" fullWidth className="mb-4" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <TextField label="Password" type="password" fullWidth className="mb-4" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button onClick={handleLogin} className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600 transition">
                    {isLoading ? <CircularProgress size={20} color="inherit" /> : "Login"}
                </button>

                <p className="text-sm text-gray-600 text-center mt-3">
                    Don't have an account? <a href="/register" className="text-blue-500">Sign Up</a>
                </p>
            </div>
        </div>
    );
}

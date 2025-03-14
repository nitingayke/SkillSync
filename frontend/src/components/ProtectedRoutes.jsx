import { Navigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");

    if (!token) {
        enqueueSnackbar("Please login first", { variant: "warning" });
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
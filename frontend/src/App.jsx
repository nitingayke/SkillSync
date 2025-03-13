import React from "react";
import { Routes, Route } from "react-router-dom"; // Remove BrowserRouter
import ProfilePage from "./pages/ProfilePage";
import HomeScreen from "./screens/HomeScreen";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RequestProfile from "./components/RequestProfile";
import About from "./screens/About";
import Contact from "./screens/Contact";
import UserProfile from "./components/UserProfile";
import ProtectedRoute from "./components/ProtectedRoutes";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected Routes */}
        <Route
          path="/user/profile/:id"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/profile-update"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/notification"
          element={
            <ProtectedRoute>
              <RequestProfile />
            </ProtectedRoute>
          }
        />

        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
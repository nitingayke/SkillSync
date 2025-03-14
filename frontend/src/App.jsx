import React from "react";
import { Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import HomeScreen from "./screens/HomeScreen"
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import About from "./screens/About";
import Contact from "./screens/Contact";
import UserProfile from "./components/UserProfile";
import ProtectedRoute from "./components/ProtectedRoutes";
import ReqeustNotification from "./screens/RequestNotification";

function App() {
  return (
    <Routes>

      <Route path="/" element={<HomeScreen />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route
        path="/user/profile/:id"
        element={
          // <ProtectedRoute>
            <UserProfile />
          // </ProtectedRoute>
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
          // <ProtectedRoute>
          <ReqeustNotification />
          // </ProtectedRoute>
        }
      />

      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
}

export default App;
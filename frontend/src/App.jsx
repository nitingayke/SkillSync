import React from "react";

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import ProfilePage from './pages/ProfilePage';
import HomeScreen from "./screens/HomeScreen";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import About from "./screens/About";

function App() {

  return (
      <Routes>

        <Route path="/" element={<HomeScreen />} />
        {/* here i add the about page route  */}
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/user/profile-update" element={<ProfilePage />} />

        <Route path="*" element={<div>Here is skillsync</div>} />
      </Routes>
  );
}

export default App;

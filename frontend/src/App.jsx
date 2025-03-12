import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import HomeScreen from "./screens/HomeScreen"
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
<<<<<<< HEAD
import RequestProfile from "./components/RequestProfile";
=======
import About from "./screens/About";
import Contact from "./screens/Contact";
>>>>>>> contributor-fork/main

function App() {

  return (
    <Routes>

<<<<<<< HEAD
      <Route path="/" element={<HomeScreen />} />

=======
        <Route path="/" element={<HomeScreen />} />
        {/* here i add the about page route and contact*/}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
>>>>>>> contributor-fork/main

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />


      <Route path="/user/profile-update" element={<ProfilePage />} />
      <Route path="/user/notification" element={<RequestProfile />} />

      <Route path="*" element={<div>Here is skillsync</div>} />
    </Routes>
  );
}

export default App;

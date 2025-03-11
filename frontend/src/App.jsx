import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import HomeScreen from "./screens/HomeScreen";
<<<<<<< HEAD
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
=======
import RequestProfile from "./components/RequestProfile";
>>>>>>> fork/main

function App() {

  return (
      <Routes>

        <Route path="/" element={<HomeScreen />} />
<<<<<<< HEAD

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

=======
>>>>>>> fork/main
        <Route path="/user/profile-update" element={<ProfilePage />} />
        <Route path="/user/request" element={<RequestProfile/>}/>

        <Route path="*" element={<div>Here is skillsync</div>} />
      </Routes>
  );
}

export default App;

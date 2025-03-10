import React from "react";

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import ProfilePage from './pages/ProfilePage';
import HomeScreen from "./screens/HomeScreen";

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomeScreen />} />

        <Route path="/user/profile-update" element={<ProfilePage />} />

        <Route path="*" element={<div>Here is skillsync</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

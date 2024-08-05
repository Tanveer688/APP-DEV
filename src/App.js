import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Storybooks from './pages/Storybooks';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Progress from './components/Progress';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/storybooks" element={<Storybooks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

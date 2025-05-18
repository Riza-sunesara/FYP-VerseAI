import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Navbar from "./pages/subComponents/Navbar";
import Footer from "./pages/subComponents/Footer";
import AuthModal from "./pages/subComponents/AuthModel"; // Modal component for login/signup
import Community from './pages/Community';

const LayoutWrapper = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showNavAndFooter = location.pathname === "/" || location.pathname === "/profile" || location.pathname === "/community";

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      {showNavAndFooter && <Navbar toggleModal={toggleModal} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/community' element={<Community/>}/>
      </Routes>

      {showNavAndFooter && <Footer />}
      
      {/* Show the modal on login/signup click */}
      {isModalOpen && <AuthModal isOpen={isModalOpen} closeModal={toggleModal} />}
    </>
  );
};

function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}

export default App;

// src/components/LeftCornerLogo.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/banner.png';

const LeftCornerLogo = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="absolute cursor-pointer" 
      style={{ zIndex: 100 }} // Ensure it's on top of other elements
      onClick={() => navigate('/')} // Navigate home when clicked
    >
      <img src={logo} alt="Bakery Logo" className="h-[75px] w-auto" /> {/* Adjust size here as needed */}
    </div>
  );
};

export default LeftCornerLogo;

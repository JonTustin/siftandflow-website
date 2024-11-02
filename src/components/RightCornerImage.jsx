// src/components/RightCornerImage.jsx
import React from 'react';
import image from '../assets/images/CookieDude.png';

const RightCornerImage = () => {
  return (
    <div 
      className="fixed right-[10px] bottom-[100px] lg:top-4 lg:right-10" // Fixed position to avoid layout conflicts
      style={{ zIndex: 100 }} // Ensures it stays on top of other elements
    >
      <img src={image} alt="Right Corner Image" className="h-[80px] w-auto" /> {/* Adjust size as needed */}
    </div>
  );
};

export default RightCornerImage;

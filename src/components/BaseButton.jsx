// src/components/BaseButton.jsx
import React from 'react';

const BaseButton = ({ onClick, children, ariaLabel, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-full shadow-md transition duration-300 focus:outline-none ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default BaseButton;

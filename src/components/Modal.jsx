// src/components/Modal.jsx
import React from 'react';

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-background text-foreground p-6 rounded-lg shadow-lg max-w-md w-full relative">
        {/* Stylized Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold text-lightGray hover:text-gray-400 transition-colors duration-200 focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;

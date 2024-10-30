// src/components/CarouselButton.jsx
import React from 'react';

const CarouselButton = ({ direction, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 transition duration-300"
      aria-label={`Scroll ${direction}`}
    >
      {direction === 'left' ? (
        <span>&larr;</span> // Left arrow
      ) : (
        <span>&rarr;</span> // Right arrow
      )}
    </button>
  );
};

export default CarouselButton;

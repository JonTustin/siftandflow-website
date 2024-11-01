// src/components/CarouselButton.jsx
import React from 'react';
import BaseButton from './BaseButton';

const CarouselButton = ({ direction, onClick }) => {
  return (
    <BaseButton
      onClick={onClick}
      ariaLabel={`Scroll ${direction}`}
      className="bg-gray-800 text-white hover:bg-gray-700"
    >
      {direction === 'left' ? <span>&larr;</span> : <span>&rarr;</span>}
    </BaseButton>
  );
};

export default CarouselButton;

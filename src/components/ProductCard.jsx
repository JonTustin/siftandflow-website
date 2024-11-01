// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product, onClick }) => {
  return (
    <div
      onClick={onClick} // Trigger onClick function when the card is clicked
      className="bg-darkGray p-4 rounded-lg shadow-card cursor-pointer transition-shadow duration-300 flex flex-col items-center w-[250px] h-[260px]" // Styling classes for appearance and interactivity
    >
      <img
        src={product.image} // Load image from product data
        alt={product.title} // Set alt text for accessibility
        loading="lazy" // Lazy load the image to improve loading performance
        className="w-[150px] h-[150px] object-cover mb-1" // Image styling for size and layout within card
      />
      <h2 className="text-xl font-playfair text-center text-foreground">{product.title}</h2> {/* Display product title */}
      <p className="text-sm text-lightGray text-center">{product.description}</p> {/* Display product description */}
    </div>
  );
};

export default ProductCard;

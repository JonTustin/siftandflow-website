// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-darkGray p-1 rounded-lg shadow-md cursor-pointer transition-shadow duration-300 flex flex-col items-center w-[250px] h-[250px]"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-[150px] h-[150px] object-cover mb-1"
      />
      <h2 className="text-xl font-playfair text-center text-foreground">{product.title}</h2>
      <p className="text-sm text-lightGray text-center">{product.description}</p>
    </div>
  );
};

export default ProductCard;

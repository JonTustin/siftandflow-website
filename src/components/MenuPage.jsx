// src/components/MenuPage.jsx
import React, { useState } from 'react';
import { products } from '../constants/products';
import Modal from './Modal';
import Carousel from './Carousel';

const MenuPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter products by type
  const cookies = products.filter((product) => product.type === 'cookie');
  const biscotti = products.filter((product) => product.type === 'biscotti');

  return (
    <div className="bg-background min-h-screen p-8">
      {/* Main Menu Title */}
      <h1 className="text-5xl font-chomsky text-foreground mb-8 text-center">Our Menu</h1>

      {/* Cookies Carousel */}
      <Carousel title="Cookies" items={cookies} onCardClick={setSelectedProduct} />

      {/* Biscotti Carousel */}
      <Carousel title="Biscotti" items={biscotti} onCardClick={setSelectedProduct} />

      {/* Modal for additional product details */}
      {selectedProduct && (
        <Modal onClose={() => setSelectedProduct(null)}>
          <h2 className="text-2xl font-playfair mb-2">{selectedProduct.title}</h2>
          <p className="text-sm mb-4">{selectedProduct.description}</p>
          <h3 className="text-xl font-semibold">Ingredients</h3>
          <ul className="list-disc list-inside mb-4">
            {selectedProduct.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold">Pairings</h3>
          <p>{selectedProduct.pairings.join(", ")}</p>
        </Modal>
      )}
    </div>
  );
};

export default MenuPage;

// src/hooks/useModal.js
import { useState } from 'react';

const useModal = () => {
  // State to manage the visibility of the modal
  const [isOpen, setIsOpen] = useState(false);
  
  // State to store the product information to display in the modal
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Function to open the modal and set the selected product
  const openModal = (product) => {
    setSelectedProduct(product); // Set product details
    setIsOpen(true); // Open the modal
  };

  // Function to close the modal and reset the selected product
  const closeModal = () => {
    setIsOpen(false); // Close the modal
    setSelectedProduct(null); // Clear product details
  };

  return {
    isOpen, // Whether the modal is open
    selectedProduct, // The product to display in the modal
    openModal, // Function to open the modal
    closeModal, // Function to close the modal
  };
};

export default useModal;

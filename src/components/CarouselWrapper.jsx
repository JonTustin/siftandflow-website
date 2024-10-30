// src/components/CarouselWrapper.jsx
import React, { useState, useEffect } from 'react';
import { products } from '../constants/products';
import ImageSlide from './ImageSlide';

const CarouselWrapper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cycleImages = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  useEffect(() => {
    const timer = setInterval(cycleImages, 9000); // Total animation duration with pause
    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  // Preload the next image
  const nextIndex = (currentIndex + 1) % products.length;
  const nextImage = products[nextIndex].image;

  return (
    <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
      <ImageSlide image={products[currentIndex].image} nextImage={nextImage} key={currentIndex} />
    </div>
  );
};

export default CarouselWrapper;

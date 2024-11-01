// src/components/CarouselWrapper.jsx
import React, { useState, useEffect, useRef } from 'react';
import { products } from '../constants/products';
import ImageSlide from './ImageSlide';
import useImagePreloader from '../hooks/useImagePreloader';
import { gsap } from 'gsap';

const CarouselWrapper = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current image index
  const wrapperRef = useRef(null); // Ref to track the wrapper element for GSAP context

  // Preload current and next images to ensure smooth transitions
  const nextIndex = (currentIndex + 1) % products.length; // Calculate the next index in the product list
  const imagesToPreload = [products[currentIndex].image, products[nextIndex].image]; // Array of images to preload
  useImagePreloader(imagesToPreload); // Use custom hook to preload images

  useEffect(() => {
    // Define a function to cycle to the next image by updating currentIndex
    const cycleImages = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    // Create a GSAP context to ensure animations clean up correctly
    const ctx = gsap.context(() => {
      // Set an interval to automatically cycle images every 9 seconds
      const timer = setInterval(cycleImages, 9000);
      return () => clearInterval(timer); // Clear the interval on unmount to prevent memory leaks
    }, wrapperRef); // Pass wrapperRef as the root for this GSAP context

    return () => ctx.revert(); // Revert the GSAP context on component unmount
  }, [currentIndex]); // Re-run the effect whenever currentIndex changes

  return (
    <div ref={wrapperRef} className="absolute inset-0 flex justify-center items-center overflow-hidden">
      <ImageSlide image={products[currentIndex].image} nextImage={products[nextIndex].image} key={currentIndex} />
    </div>
  );
};

export default CarouselWrapper;

// src/components/Carousel.jsx
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import ProductCard from './ProductCard';

const Carousel = ({ title, items, onCardClick }) => {
  const [currentStartIndex, setCurrentStartIndex] = useState(0); // Track current start index
  const carouselRef = useRef(null);
  const visibleItems = items.length <= 5 ? 3 : 5; // Show 3 cards for small arrays, otherwise 5

  useEffect(() => {
    const carousel = carouselRef.current;
    const cardWidth = carousel.firstChild.offsetWidth;
    const visibleWidth = carousel.offsetWidth;

    // Center the first card in the carousel on initial load
    const initialScroll = (visibleWidth - cardWidth) / 2;
    gsap.set(carousel, { scrollLeft: initialScroll });
  }, []);

  // Calculate displayed items based on visibleItems count
  const displayedItems = Array.from({ length: visibleItems }, (_, i) =>
    items[(currentStartIndex + i) % items.length]
  );

  // Scroll function for infinite scrolling
  const scroll = (direction) => {
    const carousel = carouselRef.current;
    const cardWidth = carousel.firstChild.offsetWidth;
    const totalItems = items.length;

    // Update index with wraparound
    const newIndex =
      direction === 'right'
        ? (currentStartIndex + 1) % totalItems
        : (currentStartIndex - 1 + totalItems) % totalItems;

    setCurrentStartIndex(newIndex);

    // Animate scroll for large arrays; instant for smaller ones
    if (items.length > 5) {
      const targetScroll = carousel.scrollLeft + (direction === 'right' ? cardWidth : -cardWidth);
      gsap.to(carousel, { scrollLeft: targetScroll, duration: 0.3 });
    } else {
      gsap.set(carousel, { scrollLeft: carousel.scrollLeft + (direction === 'right' ? cardWidth : -cardWidth) });
    }
  };

  return (
    <div className="relative mb-8 flex flex-col items-center">
      <h2 className="text-3xl font-playfair text-foreground underline mb-4 text-center">{title}</h2>

      {/* Navigation buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full border-2 border-foreground bg-background text-foreground shadow-md hover:bg-foreground hover:text-background transition duration-300"
        aria-label="Scroll left"
      >
        <HiChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full border-2 border-foreground bg-background text-foreground shadow-md hover:bg-foreground hover:text-background transition duration-300"
        aria-label="Scroll right"
      >
        <HiChevronRight className="w-6 h-6" />
      </button>

      {/* Carousel Container */}
      <div className="w-full overflow-hidden flex justify-center">
        <div ref={carouselRef} className="flex space-x-4" style={{ width: 'max-content' }}>
          {displayedItems.map((product, index) => (
            <ProductCard
              key={`${product.id}-${index}`}
              product={product}
              onClick={() => onCardClick(product)}
              className="flex-shrink-0 w-[200px] h-[250px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

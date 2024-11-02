// src/components/Carousel.jsx
import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import ProductCard from './ProductCard';
import { gsap } from 'gsap';

const Carousel = ({ title, items, onCardClick }) => {
  const [currentStartIndex, setCurrentStartIndex] = useState(0); // Track current start index
  const carouselRef = useRef(null);
  const visibleItems = items.length <= 5 ? 3 : 5; // Show 3 cards for small arrays, otherwise 5

  useEffect(() => {
    const carousel = carouselRef.current;
    const cardWidth = 200; // Fixed card width for alignment
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
    const cardWidth = 200; // Consistent width of each card
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
    <div className="relative mb-[5px] flex flex-col items-center">
      <h2 className="text-2xl font-playfair text-foreground underline mb-[5px] text-center">{title}</h2>

      {/* Carousel Container */}
      <div className="w-full overflow-hidden flex justify-center">
        <div ref={carouselRef} className="flex space-x-4" style={{ width: 'max-content' }}>
          {displayedItems.map((product, index) => (
            <ProductCard
              key={`${product.id}-${index}`}
              product={product}
              onClick={() => onCardClick(product)}
              className="flex-shrink-0 w-[200px] h-[250px]" // Static dimensions
            />
          ))}
        </div>
      </div>

      {/* Dot Indicators with Arrow Buttons */}
      <div className="flex items-center space-x-4 mt-2">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="text-foreground focus:outline-none transition duration-300"
          aria-label="Scroll left"
          style={{ backgroundColor: 'transparent' }}
        >
          <FontAwesomeIcon icon={faCaretLeft} className="w-5 h-5" />
        </button>

        {/* Dot Indicators */}
        <div className="flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStartIndex(index)}
              className={`h-3 w-3 rounded-full ${
                index === currentStartIndex ? 'bg-foreground' : 'bg-lightGray'
              } transition duration-300`}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="text-foreground focus:outline-none transition duration-300"
          aria-label="Scroll right"
          style={{ backgroundColor: 'transparent' }}
        >
          <FontAwesomeIcon icon={faCaretRight} className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

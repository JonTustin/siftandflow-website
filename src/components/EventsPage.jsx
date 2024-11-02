// src/components/EventsPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { events } from '../constants/events';
import EventCard from './EventCard';
import NavigationButton from './NavigationButton';
import DotIndicator from './DotIndicator';
import { gsap } from 'gsap';

const CARD_WIDTH = 300; // Width of each card in pixels
const CARD_MARGIN = 12.5; // Margin on each side to achieve 25px spacing

const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

const EventsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Index of currently centered card
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024); // Check if screen is large
  const containerRef = useRef(null); // Ref for the container of all cards

  // Function to calculate and center the card(s) at currentIndex with GSAP animation
  const centerCards = (index = currentIndex) => {
    if (containerRef.current) {
      const containerCenter = window.innerWidth / 2; // Center of the viewport
      const offset = containerCenter - (CARD_WIDTH + CARD_MARGIN * 2) / 2;
      const position = -index * (CARD_WIDTH + CARD_MARGIN * 2) + offset;

      // Apply GSAP animation to the position change
      gsap.to(containerRef.current, {
        x: position,
        duration: 0.5, // Adjust duration for smoothness
        ease: 'sine.out', // Use easing for a smooth transition
      });
    }
  };

  // Center cards on load and whenever currentIndex changes
  useEffect(() => {
    centerCards(0); // Center on the first card at load
  }, []);

  useEffect(() => {
    centerCards(); // Center on the current index whenever it changes
  }, [currentIndex, isLargeScreen]);

  // Handle window resize for responsive adjustments
  useEffect(() => {
    const handleResize = debounce(() => {
      setIsLargeScreen(window.innerWidth >= 1024); // Update screen size state
      centerCards(); // Re-center cards on resize
    }, 100);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  // Handle left and right scroll without limiting based on visible cards
  const handleScroll = (direction) => {
    const maxIndex = events.length - 1; // Ensure full array is accessible
    if (direction === 'left' && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else if (direction === 'right' && currentIndex < maxIndex) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="bg-background text-foreground min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-4xl font-chomsky text-center underline mb-8">Tour Dates</h1>

      {/* Full-Width Carousel Display */}
      <div className="relative flex items-center overflow-hidden w-full">
        {/* Card Container */}
        <div ref={containerRef} className="flex space-x-[25px] w-full">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center mt-6 space-x-4">
        <NavigationButton
          direction="left"
          onClick={() => handleScroll('left')}
          disabled={currentIndex === 0}
        />

        {/* Dot Indicators */}
        <div className="flex space-x-2">
          {events.map((_, index) => (
            <DotIndicator
              key={index}
              active={index === currentIndex}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <NavigationButton
          direction="right"
          onClick={() => handleScroll('right')}
          disabled={currentIndex >= events.length - 1}
        />
      </div>
    </section>
  );
};

export default EventsPage;

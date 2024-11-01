// src/components/EventsPage.jsx
import React, { useState } from 'react';
import { events } from '../constants/events';
import MapButton from './MapButton';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const EventsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track current event index

  // Scroll navigation handler
  const handleScroll = (direction) => {
    if (direction === 'left' && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1); // Move to previous event
    } else if (direction === 'right' && currentIndex < events.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1); // Move to next event
    }
  };

  return (
    <section className="bg-background text-foreground min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-4xl font-chomsky text-center underline mb-8">Tour Dates</h1>

      {/* Navigation Buttons */}
      <div className="relative w-full flex items-center justify-center mb-6">
        {currentIndex > 0 && (
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-0 p-2 rounded-full border-2 border-foreground bg-background text-foreground shadow-md hover:bg-foreground hover:text-background transition duration-300"
            aria-label="Scroll left"
          >
            <HiChevronLeft className="w-6 h-6" />
          </button>
        )}

        {currentIndex < events.length - 1 && (
          <button
            onClick={() => handleScroll('right')}
            className="absolute right-0 p-2 rounded-full border-2 border-foreground bg-background text-foreground shadow-md hover:bg-foreground hover:text-background transition duration-300"
            aria-label="Scroll right"
          >
            <HiChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Display the Current Event Card */}
      <div className="bg-darkGray w-[300px] p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-playfair text-foreground mb-4">{events[currentIndex].title}</h2>

        {/* Event Details */}
        <div className="mb-2">
          <p className="font-playfair text-sm text-lightGray">Date:</p>
          <p className="text-lg text-foreground">{events[currentIndex].date}</p>
        </div>
        <div className="mb-2">
          <p className="font-playfair text-sm text-lightGray">Time:</p>
          <p className="text-foreground">{events[currentIndex].time}</p>
        </div>
        <div className="mb-2">
          <p className="font-playfair text-sm text-lightGray">Location:</p>
          <p className="text-foreground">{events[currentIndex].location}</p>
          <MapButton location={events[currentIndex].location} />
        </div>
        <div className="mt-4">
          <h3 className="font-playfair mb-2 text-lightGray">Product Assortment:</h3>
          <ul className="list-none">
            {events[currentIndex].productAssortment.map((product, idx) => (
              <li key={idx} className="text-lightGray">{product}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EventsPage;

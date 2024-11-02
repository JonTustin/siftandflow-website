// src/components/EventCard.jsx
import React from 'react';
import MapButton from './MapButton';

const EventCard = ({ event }) => (
  <div className="bg-darkGray w-[300px] h-[525px] p-6 rounded-lg shadow-md text-center flex-shrink-0">
    <h2 className="text-2xl font-playfair text-foreground mb-4">{event.title}</h2>
    <div className="mb-2">
      <p className="font-playfair text-sm text-lightGray">Date:</p>
      <p className="text-lg text-foreground">{event.date}</p>
    </div>
    <div className="mb-2">
      <p className="font-playfair text-sm text-lightGray">Time:</p>
      <p className="text-foreground">{event.time}</p>
    </div>
    <div className="mb-2">
      <p className="font-playfair text-sm text-lightGray">Location:</p>
      <p className="text-foreground">{event.location}</p>
      <MapButton location={event.location} />
    </div>
    <div className="mt-4">
      <h3 className="font-playfair mb-2 text-lightGray">Product Assortment:</h3>
      <ul className="list-none">
        {event.productAssortment.map((product, idx) => (
          <li key={idx} className="text-lightGray">{product}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default EventCard;

// src/components/MapButton.jsx
import React from 'react';

const MapButton = ({ location }) => {
  const openMap = () => {
    // Format the location and open Google Maps in a new tab
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
    window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={openMap}
      className="text-blue-500 hover:underline ml-2"
      aria-label={`Open map for ${location}`}
    >
      (map)
    </button>
  );
};

export default MapButton;

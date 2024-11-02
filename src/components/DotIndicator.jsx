// src/components/DotIndicator.jsx
import React from 'react';

const DotIndicator = ({ active, onClick }) => (
  <button
    onClick={onClick}
    className={`h-3 w-3 rounded-full ${
      active ? "bg-foreground" : "bg-lightGray"
    } transition duration-300`}
    aria-label="Dot Indicator"
  />
);

export default DotIndicator;

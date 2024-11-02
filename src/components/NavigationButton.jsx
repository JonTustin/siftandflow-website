// src/components/NavigationButton.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const NavigationButton = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`transition duration-300 focus:outline-none ${
      disabled ? "text-lightGray cursor-not-allowed" : "text-foreground hover:text-lightGray"
    }`}
    aria-label={`Scroll ${direction}`}
  >
    <FontAwesomeIcon icon={direction === 'left' ? faCaretLeft : faCaretRight} className="w-6 h-6" />
  </button>
);

export default NavigationButton;

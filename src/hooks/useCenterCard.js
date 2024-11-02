// src/hooks/useCenterCard.js
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const useCenterCard = (currentIndex, cardTotalWidth) => {
  const cardRefs = useRef([]);

  const centerCurrentCard = () => {
    cardRefs.current.forEach((card, index) => {
      const position = (index - currentIndex) * cardTotalWidth;
      gsap.set(card, {
        x: position,
      });
    });
  };

  useEffect(() => {
    centerCurrentCard();
  }, [currentIndex]);

  useEffect(() => {
    const handleResize = () => centerCurrentCard();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  return cardRefs;
};

export default useCenterCard;

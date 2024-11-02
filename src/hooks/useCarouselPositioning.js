// src/hooks/useCarouselPositioning.js
import { useRef, useEffect } from 'react';

const useCarouselPositioning = (currentIndex, cardWidth, cardMargin, totalCards) => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      const position = (index - currentIndex) * (cardWidth + cardMargin * 2);
      if (card) {
        card.style.transform = `translateX(${position}px)`;
      }
    });
  }, [currentIndex, cardWidth, cardMargin, totalCards]);

  return cardRefs;
};

export default useCarouselPositioning;

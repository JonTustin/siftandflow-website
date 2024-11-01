// src/hooks/useImagePreloader.js
import { useEffect } from 'react';

const useImagePreloader = (images = []) => {
  useEffect(() => {
    const imageElements = images.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    // Clean up to prevent memory leaks
    return () => {
      imageElements.forEach((img) => (img.onload = null));
    };
  }, [images]);
};

export default useImagePreloader;

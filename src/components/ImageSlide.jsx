// src/components/ImageSlide.jsx
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { products } from "../constants/products";
import useImagePreloader from "../hooks/useImagePreloader";

const ImageSlide = () => {
  const imageRef = useRef(null); // Reference to the current image element for animation
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current image index

  // Calculate next image index and preload images
  const nextIndex = (currentIndex + 1) % products.length; // Get index of next image
  const imagesToPreload = [products[currentIndex].image, products[nextIndex].image]; // Images to preload
  useImagePreloader(imagesToPreload); // Preload images to prevent lag

  useEffect(() => {
    // Restore default GSAP ticker settings for optimal performance
    gsap.ticker.fps(-1);

    // Create a GSAP timeline with refined duration and easing
    const tl = gsap.timeline({
      repeat: -1, // Infinite loop for continuous scrolling
      onRepeat: () => setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length), // Update image index on repeat
    });

    // Animation sequence for smoother transition
    tl.fromTo(
      imageRef.current,
      { x: "100vw", opacity: 1 }, // Start offscreen to the right with full opacity
      { x: "0vw", opacity: 1, duration: 1.8, ease: "power1.out" } // Slide in with moderate easing and slightly extended duration
    )
      .to(imageRef.current, { delay: 2.5 }) // Shorter pause duration to improve flow
      .to(imageRef.current, { x: "-100vw", opacity: 0, duration: 1.8, ease: "power1.in" }) // Slide out with refined easing and duration
      .set(imageRef.current, { x: "100vw" }); // Reset position for the next loop

    // Cleanup function to kill the timeline on component unmount
    return () => tl.kill(); // Destroy the timeline on cleanup
  }, [currentIndex]); // Re-run the effect when the currentIndex changes

  return (
    <div className="absolute inset-0 w-screen h-screen flex justify-center items-center overflow-hidden">
      <img
        ref={imageRef} // Attach ref to image element for GSAP animation
        src={products[currentIndex].image} // Set the current image based on the index
        alt="Product"
        loading="lazy" // Lazy load the image for better loading performance
        className="w-[350px] h-[350px] object-cover" // Control image styling for size and layout
      />
    </div>
  );
};

export default ImageSlide;

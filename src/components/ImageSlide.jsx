// src/components/ImageSlide.jsx
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { products } from "../constants/products";

const ImageSlide = () => {
  const imageRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1, // Infinite loop
      onRepeat: () => {
        // Update to the next image when the timeline repeats
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
      },
    });

    tl.fromTo(
      imageRef.current,
      { x: "100vw", opacity: 1 }, // Start offscreen to the right
      { x: "0vw", opacity: 1, duration: 1.5, ease: "power2.out" }, // Slide in
    )
      .to(imageRef.current, { delay: 3 }) // Pause in center
      .to(imageRef.current, {
        x: "-100vw",
        opacity: 0,
        duration: 1.5,
        ease: "power2.in",
      }) // Slide out
      .set(imageRef.current, { x: "100vw" }); // Reset position offscreen

    return () => tl.kill(); // Clean up on unmount
  }, []);

  return (
    <div className="absolute inset-0 w-screen h-screen flex justify-center items-center overflow-hidden">
      <img
        ref={imageRef}
        src={products[currentIndex].image}
        alt="Product"
        loading="lazy"
        className="w-[350px] h-[350px] object-cover"
      />

      {/* Preload the next image to ensure smooth transitions */}
      <img
        src={products[(currentIndex + 1) % products.length].image}
        alt=""
        className="hidden"
      />
    </div>
  );
};

export default ImageSlide;

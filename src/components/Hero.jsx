// src/components/Hero.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import ImageSlide from "./ImageSlide";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-background text-foreground flex flex-col items-center justify-between h-screen text-center">
      {/* Title and Subtitle Section */}
      <div className="absolute top-[45px] w-full flex flex-col items-center pt-[50px]">
        {" "}
        {/* Adjust pt-[50px] as needed */}
        <h1 className="text-6xl font-chomsky mb-4">Sift and Flow</h1>
        <p className="text-2xl font-playfair">Cookies and Confections</p>
      </div>

      {/* Carousel Section */}
      <div className="flex justify-center items-center mt-[100px] mb-[25px]">
        {" "}
        {/* Adjust mt-[100px] and mb-[25px] */}
        <ImageSlide />
      </div>

      {/* Button Section */}
      <div className="absolute bottom-[160px] w-full flex justify-center">
        <button
          onClick={() => navigate("/menu")}
          className="bg-foreground text-background p-2 px-4 rounded-md font-playfair hover:bg-lightGray transition duration-300"
        >
          The Menu
        </button>
      </div>
    </section>
  );
};

export default Hero;

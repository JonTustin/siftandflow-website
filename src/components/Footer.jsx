// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-darkGray text-lightGray p-4 text-center">
      <p className="text-sm font-playfair">
        &copy; {new Date().getFullYear()} siftandflow. All rights reserved.
      </p>
      <div className="flex justify-center space-x-4 mt-2">
        <a
          href="#contact"
          className="hover:text-foreground transition duration-200"
        >
          Contact Us
        </a>
        <a
          href="#instagram"
          className="hover:text-foreground transition duration-200"
        >
          Instagram
        </a>
        <a
          href="#facebook"
          className="hover:text-foreground transition duration-200"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;

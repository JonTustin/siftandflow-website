// src/components/Footer.jsx
import React from "react";
import { FaInstagram, FaTiktok, FaYoutube, FaSpotify } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-darkGray text-lightGray p-6 text-center flex flex-col items-center space-y-4">
      {/* Footer Text */}
      <p className="text-sm font-playfair tracking-wide">
        &copy; {new Date().getFullYear()} siftandflow. All rights reserved.
      </p>

      {/* Social Links */}
      <div className="flex items-center space-x-2">
        <span className="text-sm font-playfair mr-2">Follow Us:</span>
        <a
          href="https://www.instagram.com/siftandflow/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition duration-300 ease-in-out"
        >
          <FaInstagram className="w-5 h-5" aria-label="Instagram" />
        </a>
        <a
          href="https://www.tiktok.com/@siftandflow"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition duration-300 ease-in-out"
        >
          <FaTiktok className="w-5 h-5" aria-label="TikTok" />
        </a>
        <a
          href="https://www.youtube.com/@siftandflow"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition duration-300 ease-in-out"
        >
          <FaYoutube className="w-5 h-5" aria-label="YouTube" />
        </a>
        <a
          href="https://open.spotify.com/user/314wmkezgn44mmow6urfolwy7ply?si=948dab70bfab4f29"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition duration-300 ease-in-out"
        >
          <FaSpotify className="w-5 h-5" aria-label="Spotify" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

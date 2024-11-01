// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track if the mobile menu is open
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Function to toggle the mobile menu open/close state
  const toggleMenu = () => setIsOpen(!isOpen);

  // Single function to handle navigation and close the menu if it's open
  const navigateTo = (path) => {
    navigate(path); // Navigate to the given path
    setIsOpen(false); // Close the mobile menu if it’s open
  };

  return (
    <header className="bg-background text-foreground h-[55px] flex items-center justify-between px-6 fixed w-full z-50">
      {/* Centered Navigation Links - Visible in desktop view */}
      <nav className="hidden lg:flex flex-1 justify-center space-x-6 items-center">
        <button onClick={() => navigateTo('/')} className="hover:text-lightGray">Home</button>
        <button onClick={() => navigateTo('/menu')} className="hover:text-lightGray">Menu</button>
        <button onClick={() => navigateTo('/events')} className="hover:text-lightGray">Events</button>
        <a href="#about" className="hover:text-lightGray">About</a>
      </nav>

      {/* Mobile Menu Toggle Button - Positioned on the right */}
      <div className="lg:hidden flex justify-end w-full"> {/* Ensure it's positioned to the far right */}
        <button onClick={toggleMenu} className="text-foreground focus:outline-none">
          {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu - Conditionally rendered if `isOpen` is true */}
      {isOpen && (
        <div className="absolute top-16 right-6 bg-darkGray text-white rounded-lg p-4 shadow-lg flex flex-col space-y-2 lg:hidden">
          <button onClick={() => navigateTo('/')} className="hover:text-lightGray">Home</button>
          <button onClick={() => navigateTo('/menu')} className="hover:text-lightGray">Menu</button>
          <button onClick={() => navigateTo('/events')} className="hover:text-lightGray">Events</button>
          <a href="#about" className="hover:text-lightGray">About</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;

// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import logo from '../assets/images/banner.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogoClick = () => {
    navigate('/'); // Navigate to the home page
  };

  const handleMenuClick = () => {
    navigate('/menu');
  };

  const handleEventsClick = () => {
    navigate('/events');
  };

  const handleContactClick = () => {
    navigate('/contact'); // Navigate to the new Contact page
  };

  return (
    <header className="bg-background text-foreground h-16 fixed w-full z-50 flex items-center justify-between px-6">
      {/* Logo Section */}
      <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
        <img src={logo} alt="Bakery Logo" className="h-12 w-auto" />
      </div>

      {/* Centered Navigation for large screens */}
      <div className="flex-grow flex justify-center mr-[90px]">
        <nav className="hidden lg:flex space-x-6 items-center">
          <button onClick={() => navigate('/')} className="hover:text-lightGray">Home</button>
          <button onClick={handleMenuClick} className="hover:text-lightGray">Menu</button>
          <button onClick={handleEventsClick} className="hover:text-lightGray">Events</button>
          <button onClick={handleContactClick} className="hover:text-lightGray">Contact</button>
        </nav>
      </div>

      {/* Hamburger Icon for small screens */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-foreground focus:outline-none">
          {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 right-6 bg-darkGray text-white rounded-lg p-4 shadow-lg flex flex-col space-y-2 lg:hidden">
          <button onClick={() => { navigate('/'); toggleMenu(); }} className="hover:text-lightGray">Home</button>
          <button onClick={() => { handleMenuClick(); toggleMenu(); }} className="hover:text-lightGray">Menu</button>
          <button onClick={() => { handleEventsClick(); toggleMenu(); }} className="hover:text-lightGray">Events</button>
          <button onClick={() => { handleContactClick(); toggleMenu(); }} className="hover:text-lightGray">Contact</button>
        </div>
      )}
    </header>
  );
};

export default Navbar;

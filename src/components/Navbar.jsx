// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import logo from '../assets/images/logo.png';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogoClick = () => {
    navigate('/'); // Navigate to the home page
  };

  const scrollToHero = () => {
    if (location.pathname === '/') {
      // If already on the home page, scroll to Hero
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page and then scroll to Hero
      navigate('/');
    }
  };

  const handleMenuClick = () => {
    navigate('/menu'); // Navigate to the Menu page
  };

  return (
    <header className="bg-background text-foreground h-16 flex items-center justify-between px-6 fixed w-full z-50">
      {/* Logo Image */}
      <div className="h-full flex items-center cursor-pointer" onClick={handleLogoClick}>
        <img src={logo} alt="Bakery Logo" className="h-12 w-auto" />
      </div>

      {/* Desktop Menu (Visible on lg screens and up) */}
      <nav className="hidden lg:flex space-x-6 items-center">
        <button onClick={scrollToHero} className="hover:text-lightGray">Home</button>
        <button onClick={handleMenuClick} className="hover:text-lightGray">Menu</button>
        <a href="#events" className="hover:text-lightGray">Events</a>
        <a href="#about" className="hover:text-lightGray">About</a>
      </nav>

      {/* Mobile Menu Button (Visible on smaller screens) */}
      <button
        onClick={toggleMenu}
        className="lg:hidden text-foreground focus:outline-none"
      >
        {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Popup */}
      {isOpen && (
        <div className="absolute top-16 right-6 bg-darkGray text-white rounded-lg p-4 shadow-lg flex flex-col space-y-2 lg:hidden">
          <button onClick={() => { scrollToHero(); toggleMenu(); }} className="hover:text-lightGray">
            Home
          </button>
          <button onClick={() => { handleMenuClick(); toggleMenu(); }} className="hover:text-lightGray">
            Menu
          </button>
          <a href="#events" className="hover:text-lightGray">Events</a>
          <a href="#about" className="hover:text-lightGray">About</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;

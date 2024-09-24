import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-2xl">
          Fucturica
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto`}>
          <ul className="lg:flex space-y-2 lg:space-y-0 lg:space-x-6 text-center lg:text-left">
            <li><a href="#home" className="text-white hover:text-gray-300 block py-2 px-4 transition duration-300">Home</a></li>
            <li><a href="#features" className="text-white hover:text-gray-300 block py-2 px-4 transition duration-300">Features</a></li>
            <li><a href="#about-us" className="text-white hover:text-gray-300 block py-2 px-4 transition duration-300">About Us</a></li>
            <li><a href="#services" className="text-white hover:text-gray-300 block py-2 px-4 transition duration-300">Services</a></li>
            <li><a href="#gallery" className="text-white hover:text-gray-300 block py-2 px-4 transition duration-300">Gallery</a></li>
            <li><a href="#team" className="text-white hover:text-gray-300 block py-2 px-4 transition duration-300">Team</a></li>
            {/* <li><a href="#register" className="text-white hover:text-gray-300 block py-2 px-4 transition duration-300">Registrastion</a></li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

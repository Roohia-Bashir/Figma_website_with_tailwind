'use client';
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className="flex justify-between items-center p-6 bg-[#faf5f5] shadow-md">
        {/* Logo or Title */}
        <div className="text-2xl font-bold text-gray-800">My Website</div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex gap-6">
          <a href="#" className="text-gray-600 hover:text-gray-800 text-lg transition duration-300">
            Works
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 text-lg transition duration-300">
            Blog
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 text-lg transition duration-300">
            Contact
          </a>
        </nav>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden text-gray-600 hover:text-gray-800 text-2xl focus:outline-none"
        >
          ☰
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#faf5f5] shadow-md p-4 flex flex-col items-center gap-4">
          <a href="#" className="text-gray-600 hover:text-gray-800 text-lg transition duration-300">
            Works
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 text-lg transition duration-300">
            Blog
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 text-lg transition duration-300">
            Contact
          </a>
        </nav>
      )}
    </div>
  );
};

export default Header;

import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { IoLogoFacebook } from 'react-icons/io';
import { TfiTwitter } from 'react-icons/tfi';
import { IoLogoLinkedin } from 'react-icons/io';

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#faf5f5] py-6 text-center">
        {/* Social Icons Section */}
        <div className="flex justify-center flex-wrap space-x-4 md:space-x-6 mb-4">
          <a href="#" className="text-gray-600 hover:text-gray-800 text-2xl transition duration-300">
            <IoLogoFacebook />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 text-2xl transition duration-300">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 text-2xl transition duration-300">
            <TfiTwitter />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 text-2xl transition duration-300">
            <IoLogoLinkedin />
          </a>
        </div>

        {/* Copyright Section */}
        <p className="text-gray-800 text-sm md:text-lg font-semibold">
          Copyright ©2020 All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;

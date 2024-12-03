import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="flex justify-center h-auto">
      <section className="flex flex-col md:flex-row justify-between items-center px-6 md:px-[8%] py-8 bg-[#faf5f5] w-full">
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Hi, I am John, <br /> Creative Technologist
          </h1>
          <p className="text-gray-700 mt-2 md:mt-5 md:w-[80%] mx-auto md:mx-0">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#f98585] text-white shadow-lg hover:shadow-xl transition duration-300 rounded-lg">
            Download Resume
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/picture/hero-image.png"
            alt="John's profile picture"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

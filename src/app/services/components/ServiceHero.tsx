"use client"
import { ChevronRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const services = [
  {
    title: 'UI/UX Design',
    gif: '/uiuxgif.gif',
  },
  {
    title: 'Mobile App Development',
    gif: '/mobilegif.gif',
  },
  {
    title: 'Web App Development',
    gif: '/webgif.gif',
  },
  {
    title: 'Odoo ERP',
    gif: '/odoogif.gif',
  },
];

const ServiceHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === services.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  const currentService = services[currentIndex];

  return (
    <div
      className="relative w-full h-auto md:h-[90vh] flex flex-col md:flex-row items-center justify-center text-center md:text-left overflow-hidden bg-cover bg-center px-4 py-12 md:py-0"
      style={{ backgroundImage: "url('/bglines.png')" }}
    >
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <p className='text-[#a6aaae] text-left md:pl-8 text-sm md:text-base'>SERVICES</p>
        <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight">
            <span className="text-[#D8B4FE]">Innovate |</span>
            <span className="text-[#A78BFA]"> Accelerate |</span>
            <span className="text-[#c060f0]"> Thrive</span>
          </h1>
          <p className="max-w-md text-base sm:text-lg md:text-xl text-white/90">
            We craft scalable, future-ready digital solutions to drive your business forward.
          </p>
          <button className="rounded-xl px-5 py-2 text-sm border border-[#6d03c2] text-white hover:bg-[#6d03c2] hover:text-white transition-colors duration-300 bg-transparent flex items-center">
            Start Your Journey
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* GIF Section */}
      <div className="w-full md:w-1/3 flex items-center justify-center">
        <div className="backdrop-blur-md p-4 sm:p-6 rounded-xl flex flex-col items-center text-white transition-transform duration-500 ease-in-out w-full max-w-xs sm:max-w-sm">
          <img
            src={currentService.gif}
            alt={currentService.title}
            className="w-full object-contain mb-3"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;

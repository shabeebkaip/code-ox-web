'use client';

import React from 'react';

const HeroShimmer = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-5 md:px-10 py-10 animate-pulse gap-10 min-h-[80vh]">

      <div className="w-full md:w-2/3 space-y-5">
        <div className="h-10 lg:h-16 w-3/4 bg-gray-200 rounded-md" />
        <div className="h-4 w-full bg-gray-200 rounded-md" />
        <div className="h-4 w-5/6 bg-gray-200 rounded-md" />
        <div className="h-4 w-4/6 bg-gray-200 rounded-md" />
        <div className="h-4 w-3/4 bg-gray-200 rounded-md" />
      </div>

      <div className="w-full md:w-1/3 flex justify-center">
        <div className="w-full h-64 bg-gray-200 rounded-xl" />
      </div>
    </div>
      </div>
      
  );
};

export default HeroShimmer;

import React from 'react';

const Shimmer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl border animate-pulse">
      <div className="w-full md:w-1/3 flex justify-center">
        <div className="w-full max-w-[350px] h-[220px] md:h-[250px] lg:h-[300px] relative bg-gray-300 rounded-lg">
        </div>
      </div>

      <div className="w-full md:w-2/3 space-y-2 text-center md:text-left">
        <div className="h-6 w-2/3 bg-gray-300 rounded-md mb-4"></div> {/* Title Placeholder */}
        <div className="h-4 w-1/2 bg-gray-300 rounded-md mb-4"></div> {/* Subtitle Placeholder */}
        <div className="h-4 w-3/4 bg-gray-300 rounded-md mb-4"></div> {/* Description Placeholder */}
        <div className="h-8 w-32 bg-gray-300 rounded-full mx-auto md:mx-0"></div> {/* Button Placeholder */}
      </div>
    </div>
  );
};

export default Shimmer;

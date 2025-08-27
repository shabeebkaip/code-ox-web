"use client";
import React, { useState } from "react";

const regions = {
    "INDIA": [
      { name: "hub", logo: "/hub.svg" },
      { name: "nutric", logo: "/nutric.svg" },
      { name: "towridat", logo: "/towridat.svg" },
    ],
    "MIDDLE EAST": [
      { name: "welkins", logo: "/welkins1.svg" },
      { name: "isa", logo: "/isa.svg" },
    ],
  "EUROPE": [
    { name: "welkins", logo: "/welkins1.svg" },
    { name: "isa", logo: "/isa.svg" },
    { name: "diet", logo: "/diet.svg" },
  ],
};

const GlobalClient: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<keyof typeof regions>("INDIA");

  return (
    <section className="py-16 bg-white text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent z-0 pointer-events-none"></div>
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-normal mb-4 text-black">
         Supporting <br /> Industries on a Global Scale
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-black mb-8 max-w-xl mx-auto ">
        Our impact extends beyond borders—delivering excellence to clients worldwide
      </p>

      <div className="flex justify-center mb-12">
        <div className="bg-gray-200 rounded-xl flex gap-2 p-3">
          {Object.keys(regions).map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(region as keyof typeof regions)}
              className={`px-4 sm:px-6 py-2 rounded-lg font-semibold transition ${
                activeRegion === region
                  ? "bg-[#6d03c2] text-white shadow-md"
                  : "text-gray-700 hover:bg-[#6d03c2] hover:text-white cursor-pointer"
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 max-w-6xl mx-auto">
        {regions[activeRegion].map((client) => (
            <div
            key={client.name}
            className="flex items-center justify-center p-2 sm:p-4 hover:scale-105 transition"
            >
            <img
                src={client.logo}
                alt={client.name}
                className="h-12 sm:h-16 object-contain max-w-[120px]"
            />
            </div>
        ))}
        </div>
    </section>
  );
};

export default GlobalClient;

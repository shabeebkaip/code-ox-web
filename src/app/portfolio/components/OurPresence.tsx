import React from 'react';

const countries = [
  { name: 'India', flag: 'https://flagcdn.com/in.svg' },
  { name: 'Qatar', flag: 'https://flagcdn.com/qa.svg' },
  { name: 'Kuwait', flag: 'https://flagcdn.com/kw.svg' },
  { name: 'Saudi Arabia', flag: 'https://flagcdn.com/sa.svg' },
  { name: 'United Arab Emirates', flag: 'https://flagcdn.com/ae.svg' },
  { name: 'Bahrain', flag: 'https://flagcdn.com/bh.svg' },
  { name: 'Ireland', flag: 'https://flagcdn.com/ie.svg' },
];

const OurPresence = () => {
  return (
    <div className="relative bg-gray-100 py-16 px-6 rounded-t-3xl sm:px-12">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
         Projects Across Continents
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 justify-items-center">
          {countries.map((country, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={country.flag}
                alt={country.name}
                className="w-20 h-14 rounded  hover:scale-110 transition-transform duration-300"
              />
              <span className="mt-2 text-sm font-medium text-gray-700">
                {country.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPresence;

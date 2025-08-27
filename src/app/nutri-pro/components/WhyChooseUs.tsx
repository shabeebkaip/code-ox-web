'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface WhyChooseTitle {
  title: string;
  description: string;
}

interface WhyChooseCard {
  _id: string;
  image: {
    fileUrl: string;
    id: string;
  };
  title: string;
  description: string;
}

interface WhyChooseProps {
  title: WhyChooseTitle;
  cards: WhyChooseCard[];
}

const WhyChoose: React.FC<WhyChooseProps> = ({ title, cards }) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Gradient Circles */}
      <div className="absolute inset-0 z-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-72 h-72 rounded-full blur-3xl opacity-20 animate-pulse"
            style={{
              background: 'linear-gradient(45deg, rgba(34, 197, 94, 0.3), rgba(59, 130, 246, 0.3))',
              top: `${20 + i * 30}%`,
              left: `${10 + i * 25}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: '6s',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl lg:text-5xl font-bold mb-6 text-gray-300"
            dangerouslySetInnerHTML={{ __html: title?.title }}
          />
          <p className="text-xl text-gray-500 max-w-4xl mx-auto leading-relaxed">
            {title?.description}
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={card._id}
              className="group relative cursor-pointer"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div
                className={`relative backdrop-blur-sm p-8 rounded-xl border border-gray-700 transition-all duration-500 transform hover:scale-105 hover:border-transparent ${
                  activeCard === index ? 'translate-y-[-12px] shadow-2xl' : ''
                }`}
              >
                {/* Image instead of Icon */}
<div className="w-16 h-16 bg-gradient-to-r from-white to-gray-300 border border-gray-300 rounded-xl flex items-center justify-center mb-6 overflow-hidden">
  {card.image?.fileUrl && (
    <Image
      src={card.image.fileUrl}
      alt={card.title}
      width={40}
      height={40}
      className="object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 ease-in-out"
    />
  )}
</div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-500">
                    {card.title}
                  </h3>
                  <div className="h-[2px] bg-gradient-to-r from-transparent via-gray-600 to-transparent">
                    <div className="h-full bg-gradient-to-r from-white to-gray-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

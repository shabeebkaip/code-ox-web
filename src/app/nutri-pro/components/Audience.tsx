'use client';

import Image from 'next/image';
import { useState } from 'react';

interface AudienceTitle {
  title: string;
  description: string;
}

interface AudienceCard {
  _id: string;
  image: {
    fileUrl: string;
    id: string;
  };
  title: string;
  description: string;
}

interface AudienceProps {
  title: AudienceTitle;
  cards: AudienceCard[];
}

const Audience: React.FC<AudienceProps> = ({ title, cards }) => {
  const [selectedAudience, setSelectedAudience] = useState<number | null>(null);

  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(34,197,94,0.03)_50%,transparent_75%)] animate-pulse" />
        {cards.map((_, index) => (
          <div
            key={index}
            className={`absolute w-32 h-32 rounded-full blur-2xl opacity-20 animate-float`}
            style={{
              background: `linear-gradient(45deg, rgba(34, 197, 94, 0.2), rgba(59, 130, 246, 0.2))`,
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
              animationDelay: `${index * 1.5}s`,
              animationDuration: '8s',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-300">
            {title?.title?.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="bg-gradient-to-r from-[#AFAFAF] to-[#494949] bg-clip-text text-transparent relative">
              {title?.title?.split(' ').slice(-1)}
            </span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">{title.description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cards.map((audience, index) => (
            <div
              key={audience._id}
              className="group relative cursor-pointer"
              onClick={() => setSelectedAudience(selectedAudience === index ? null : index)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r from-white to-gray-300 border rounded-2xl blur-sm opacity-0 transition-all duration-500 ${
                  selectedAudience === index ? 'opacity-60' : ''
                }`}
              ></div>

              <div
                className={`relative bg-gradient-to-br backdrop-blur-sm p-8 rounded-2xl ${
                  selectedAudience === index ? 'scale-105 border-transparent shadow-2xl' : ''
                }`}
                style={{
                  boxShadow: ' rgba(0, 0, 0, 0.24) 0px 3px 8px',
                  height: '280px',
                }}
              >
                <div
                  className={`w-20 h-20 flex items-center justify-center mx-auto mb-6 relative overflow-hidden ${
                    selectedAudience === index ? 'rotate-12 scale-110' : ''
                  }`}
                >
                  {audience.image?.fileUrl && (
                    <Image
                      src={audience.image.fileUrl}
                      alt={audience.title}
                      className="object-contain"
                      width={60}
                      height={60}
                    />
                  )}
                  <div className="absolute inset-0 bg-white/20 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
                </div>

                <div className="text-center space-y-4">
                  <h3 className="text-xl font-semibold text-gray-500 transition-all duration-300">
                    {audience.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {audience.description}
                  </p>

                  <div
                    className={`overflow-hidden transition-all duration-500 space-y-2 ${
                      selectedAudience === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Interactive features coming soon</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;

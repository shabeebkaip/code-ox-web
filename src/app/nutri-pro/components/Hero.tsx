'use client';
import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface HeroData {
  badgeText: string;
  title: string;
  subtitle: string;
  description: string;
  extraDescription: string;
}

interface FeatureCard {
  _id: string;
  image: {
    fileUrl: string;
    id: string;
  };
  title: string;
}

interface Props {
  data: HeroData;
  features: FeatureCard[];
}

const Hero: React.FC<Props> = ({ data, features }) => {
  const router = useRouter();
  const handleNavigate = () => router.push('/contact-us'); 
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);

  const featureList = features.map((feature, i) => ({
    ...feature,
    color: [
      'from-green-500 to-emerald-500',
      'from-orange-500 to-red-500',
      'from-indigo-500 to-purple-500',
      'from-teal-500 to-green-500',
      'from-pink-500 to-rose-500',
      'from-cyan-500 to-blue-500',
    ][i % 6],
    delay: `${200 + i * 100}ms`,
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeatureIndex((prev) =>
        prev === featureList.length - 1 ? 0 : prev + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [featureList.length]);

  return (
    <section className="relative py-5 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
      <div className="container mx-auto px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6 animate-fade-in">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#AFAFAF] to-[#494949] text-white text-sm font-medium">
                {data.badgeText}
              </span>
            </div>
            <h1
              className="text-4xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-[#AFAFAF] to-[#494949] inline-block text-transparent bg-clip-text animate-fade-in"
              dangerouslySetInnerHTML={{ __html: data.title }}
            />
            <span role="img" aria-label="emoji">
              🥗
            </span>
            <p className="text-2xl lg:text-3xl text-gray-400 font-semibold mb-4 animate-fade-in">
              {data.subtitle}
            </p>
            <p className="text-xl lg:text-2xl text-gray-600 mb-4 leading-relaxed animate-fade-in">
              {data.description}
            </p>
            <p className="text-lg text-gray-500 mb-8 animate-fade-in">
              {data.extraDescription}
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featureList.map((feature, index) => (
                <div
                  key={feature._id}
                  className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 border transition-all duration-300 ${
                    activeFeatureIndex === index
                      ? 'border-gray-300/80 scale-105 shadow-lg'
                      : 'border-gray-200/50'
                  }`}
                  style={{ animationDelay: feature.delay }}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg`}
                    >
                      {feature.image?.fileUrl && (
                        <Image
                          src={feature.image.fileUrl}
                          alt={feature.title}
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-semibold text-sm leading-tight ${
                          activeFeatureIndex === index
                            ? 'text-gray-900'
                            : 'text-gray-800'
                        }`}
                      >
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={handleNavigate}
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#AFAFAF] to-[#494949] text-white text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Explore All Features
                <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
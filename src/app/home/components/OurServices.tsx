'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { 
  Database, 
  Smartphone, 
  Globe, 
  Palette, 
  Wrench, 
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

interface OurServices {
  _id: string;
  index: number;
  services: string;
  content: string;
  link: string;
}

interface ServicesProps {
  serviceData: OurServices[];
}

const Services: React.FC<ServicesProps> = ({ serviceData }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const dispatch = useDispatch();

  // Icon mapping for different services
  const getServiceIcon = (index: number) => {
    const icons = [Database, Smartphone, Globe, Palette, Wrench, Users];
    return icons[index % icons.length];
  };

  // Color mapping for different services
  const getServiceColor = (index: number) => {
    const colors = [
      "from-blue-500 to-cyan-500",
      "from-purple-500 to-pink-500", 
      "from-green-500 to-emerald-500",
      "from-orange-500 to-red-500",
      "from-indigo-500 to-blue-500",
      "from-teal-500 to-green-500"
    ];
    return colors[index % colors.length];
  };

  const handleNavigate = (link: string) => {
    router.push(`/${link}`);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px"
      }
    );

    const currentSectionRef = containerRef.current;

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  // Auto-cycle through services
  useEffect(() => {
    if (isVisible && serviceData?.length > 0) {
      const interval = setInterval(() => {
        setActiveService((prev) => (prev + 1) % serviceData.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isVisible, serviceData?.length]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
      id="services-section"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-white rounded-full blur-3xl opacity-3"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Our{' '}
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Innovative solutions that drive digital transformation and business growth
          </p>
        </motion.div>

        {/* Main Services Display */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Side - Service Showcase */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
          >
            {serviceData?.length > 0 && (
              <div className="relative bg-gray-900/30 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-800/50">
                {/* Active Service Display */}
                <div className="mb-8">
                  {(() => {
                    const service = serviceData[activeService];
                    const IconComponent = getServiceIcon(activeService);
                    const colorClass = getServiceColor(activeService);
                    
                    return (
                      <motion.div
                        key={activeService}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className={`w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                          <IconComponent className="h-10 w-10 text-black" />
                        </div>
                        
                        <h3 
                          className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight"
                          dangerouslySetInnerHTML={{ __html: service.services }}
                        />
                        
                        {service.content && (
                          <p 
                            className="text-gray-300 text-lg leading-relaxed mb-6"
                            dangerouslySetInnerHTML={{ __html: service.content }}
                          />
                        )}

                        <button 
                          onClick={() => handleNavigate(service.link)}
                          className={`group inline-flex items-center px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105`}
                        >
                          <span>Explore Service</span>
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </motion.div>
                    );
                  })()}
                </div>

                {/* Progress Indicator */}
                <div className="flex space-x-2">
                  {serviceData.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        index === activeService 
                          ? 'bg-white flex-1' 
                          : 'bg-gray-700 w-8'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Right Side - Services Navigation */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {serviceData?.map((service, index) => {
              const IconComponent = getServiceIcon(index);
              const colorClass = getServiceColor(index);
              const isActive = index === activeService;
              
              return (
                <motion.div
                  key={service._id}
                  className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-500 border-2 ${
                    isActive 
                      ? 'bg-gray-900/50 border-white/30 shadow-lg' 
                      : 'bg-gray-900/20 border-gray-800/30 hover:border-gray-700/50'
                  }`}
                  onClick={() => setActiveService(index)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Timeline Connection */}
                  {index < serviceData.length - 1 && (
                    <div className={`absolute left-8 top-full w-0.5 h-4 ${
                      isActive ? 'bg-white' : 'bg-gray-700'
                    } transition-colors duration-500`} />
                  )}
                  
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? `bg-white shadow-lg` 
                        : 'bg-gray-800'
                    }`}>
                      <IconComponent className={`h-6 w-6 ${isActive ? 'text-black' : 'text-gray-400'}`} />
                    </div>
                    
                    <div className="flex-1">
                      <h4 
                        className={`font-semibold transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-gray-300'
                        }`}
                        dangerouslySetInnerHTML={{ __html: service.services }}
                      />
                      <div className={`text-sm transition-colors duration-300 ${
                        isActive ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        Service {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                    
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-3 h-3 bg-white rounded-full"
                      />
                    )}
                  </div>
                  
                  {/* Active Service Highlight */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-white/5 rounded-2xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Stats/Features */}
        {/* <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {[
            { number: "100+", label: "Projects Delivered" },
            { number: "50+", label: "Happy Clients" },
            { number: "24/7", label: "Support" },
            { number: "5+", label: "Years Experience" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm lg:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default Services;
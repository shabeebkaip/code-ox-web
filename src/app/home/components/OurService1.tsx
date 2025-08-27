'use client';

import React, { useEffect, useRef } from 'react';
import { ChevronRight, Database, Smartphone, Globe, Palette, ArrowUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const OurService1: React.FC = () => {
const router = useRouter();
const sectionRef = useRef<HTMLDivElement>(null);
 const services = [
  {
    title: 'Odoo ERP',
    description: 'Seamless end-to-end Odoo ERP implementation and customization to streamline business operations and drive productivity.',
    icon: Database,
    gradient: 'from-blue-500/20 to-cyan-500/20',
    borderGradient: 'from-blue-500/30 to-cyan-500/30'
  },
  {
    title: 'Mobile App Development',
    description: 'Crafting AI-enhanced, scalable mobile applications with responsive design and native-like performance across platforms.',
    icon: Smartphone,
    gradient: 'from-purple-500/20 to-pink-500/20',
    borderGradient: 'from-purple-500/30 to-pink-500/30'
  },
  {
    title: 'Web App Development',
    description: 'Building dynamic, secure, and scalable web applications using modern frameworks and cloud-first architecture.',
    icon: Globe,
    gradient: 'from-green-500/20 to-emerald-500/20',
    borderGradient: 'from-green-500/30 to-emerald-500/30'
  },
  {
    title: 'UI/UX Design',
    description: 'Human-centered design powered by AI insights to create intuitive, impactful, and conversion-driven digital experiences.',
    icon: Palette,
    gradient: 'from-orange-500/20 to-red-500/20',
    borderGradient: 'from-orange-500/30 to-red-500/30'
  },
];

  useEffect(() => {
    if (!sectionRef.current) return;

    // Simple floating lights animation only - no opacity changes
    gsap.to(".floating-light", {
      y: "random(-20, 20)",
      x: "random(-15, 15)",
      duration: "random(3, 5)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        amount: 2,
        from: "random"
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black min-h-screen py-16 px-4 sm:px-8 md:px-12 overflow-hidden opacity-100"
    >
      {/* Dark base with 10% blue presence - matching Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950/60 to-blue-950/40 z-0" />
      
      {/* Atmosphere layers with blue hints - matching Hero */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-blue-950/25 to-black/80 z-1"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-slate-950/20 to-black/85 z-2"></div>
      
      {/* 10% blue atmospheric glow - matching Hero */}
      <div className="absolute inset-0 pointer-events-none z-4" style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(30,58,138,0.1) 0%, rgba(15,23,42,0.05) 50%, rgba(0,0,0,0.9) 100%)"
      }} />
      
      {/* Refined floating lights with Hero's color scheme */}
      <div className="floating-light absolute top-32 left-32 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl"></div>
      <div className="floating-light absolute bottom-32 right-32 w-96 h-96 bg-slate-400/6 rounded-full blur-3xl"></div>
      <div className="floating-light absolute top-1/4 right-1/3 w-64 h-64 bg-blue-500/6 rounded-full blur-3xl"></div>
      <div className="floating-light absolute bottom-1/3 left-1/4 w-72 h-72 bg-slate-400/6 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-20">
          {/* Professional badge - matching Hero style */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-800/40 to-slate-700/30 border border-slate-600/30 rounded-full text-sm text-slate-300 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
            Innovative Solutions
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 max-w-5xl mx-auto">
            <span className="text-transparent bg-gradient-to-r from-slate-200/90 via-blue-200/70 to-slate-300/90 bg-clip-text drop-shadow-[0_2px_8px_rgba(30,58,138,0.6)]">
              Discover innovative
            </span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-blue-300/80 via-cyan-200/70 to-blue-400/80 bg-clip-text drop-shadow-[0_2px_12px_rgba(59,130,246,0.5)]">
              software solutions built to support and grow your business.
            </span>
          </h2>

          <p className="text-slate-300/90 text-lg max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-[0_2px_8px_rgba(15,23,42,0.8)]">
            We create cutting-edge digital solutions that transform your business operations and drive sustainable growth through innovation and technology.
          </p>

          <button 
            className="group relative px-10 py-4 text-slate-200 rounded-2xl font-semibold transition-all duration-500 flex items-center gap-3 backdrop-blur-sm mx-auto overflow-visible hover:scale-105" 
            style={{
              background: "linear-gradient(135deg, rgba(30,41,59,0.6) 0%, rgba(15,23,42,0.8) 50%, rgba(8,47,73,0.6) 100%)",
              border: "1px solid rgba(51,65,85,0.4)",
              boxShadow: "inset 0 1px 0 rgba(148,163,184,0.1), 0 8px 32px rgba(30,58,138,0.15), 0 1px 4px rgba(0,0,0,0.3)",
            }}
            onClick={() => router.push('/case-study')}
          >
            {/* Professional glow layers - matching Hero */}
            <div className="absolute -inset-8 bg-blue-600/10 group-hover:bg-blue-500/20 transition-all duration-500 rounded-3xl blur-3xl"></div>
            <div className="absolute -inset-6 bg-slate-500/15 group-hover:bg-slate-400/25 transition-all duration-700 rounded-3xl blur-2xl"></div>
            <div className="absolute -inset-4 bg-blue-400/12 group-hover:bg-blue-300/25 transition-all duration-500 rounded-3xl blur-xl"></div>
            
            {/* Inner sophisticated glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-slate-400/25 to-blue-500/20 group-hover:from-blue-400/30 group-hover:via-slate-300/35 group-hover:to-blue-400/30 transition-all duration-300 rounded-2xl blur-sm"></div>
            
            {/* Professional highlight */}
            <div className="absolute inset-0 bg-slate-300/10 group-hover:bg-slate-200/20 transition-all duration-300 rounded-2xl"></div>
            
            {/* Subtle shimmer sweep effect */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-200/15 to-transparent -skew-x-12 animate-[shimmer_4s_ease-in-out_infinite] group-hover:via-slate-200/25"></div>
            </div>
            
            {/* Content */}
            <span className="relative z-10 font-medium group-hover:text-white transition-colors duration-300">Our Services</span>
            <ChevronRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 group-hover:text-white transition-all duration-300" />
          </button>
        </div>

        {/* Services Grid - Modern Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl p-6 backdrop-blur-sm transition-all duration-500 cursor-pointer overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(30,41,59,0.15) 0%, rgba(15,23,42,0.25) 50%, rgba(8,47,73,0.15) 100%)",
                  border: "1px solid rgba(51,65,85,0.3)",
                  boxShadow: "inset 0 1px 0 rgba(148,163,184,0.1), 0 8px 32px rgba(30,58,138,0.08), 0 1px 4px rgba(0,0,0,0.2)",
                }}
              >
                {/* Refined colored gradient overlay on hover - matching Hero's subtlety */}
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/6 via-transparent to-slate-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon container */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-xl p-0.5 group-hover:scale-110 transition-transform duration-300"
                         style={{
                           background: "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(30,58,138,0.25) 100%)",
                         }}>
                      <div className="w-full h-full rounded-xl flex items-center justify-center"
                           style={{
                             background: "linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(30,41,59,0.9) 100%)",
                           }}>
                        <IconComponent className="w-8 h-8 text-slate-300 group-hover:text-slate-100 transition-colors duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-slate-200 mb-3 group-hover:text-slate-50 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300 flex-1">
                    {service.description}
                  </p>

                  {/* Arrow icon */}
                  <div className="mt-4 flex justify-end">
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-slate-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurService1;

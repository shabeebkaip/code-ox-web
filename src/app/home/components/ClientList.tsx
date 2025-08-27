'use client';

import React, {  useRef } from "react";
import Image from "next/image";
import SwiperSlider from "@/app/shared/SwiperSlider";
import { SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const images = [
  "/nutric.svg",
  "/sunrise.svg",
  "/welkins1.svg",
  "/hub.svg",
  "/towridat.svg",
  "/diet.svg",
];

const ClientList: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-black py-20 overflow-hidden"
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
      <div className="floating-light absolute top-32 left-32 w-60 h-60 bg-blue-400/8 rounded-full blur-3xl"></div>
      <div className="floating-light absolute bottom-32 right-32 w-80 h-80 bg-slate-400/6 rounded-full blur-3xl"></div>
      <div className="floating-light absolute top-1/3 right-1/4 w-50 h-50 bg-blue-500/6 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Professional badge - matching Hero style */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-800/40 to-slate-700/30 border border-slate-600/30 rounded-full text-sm text-slate-300 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
            Trusted Partners
          </div>

          <h2 
            ref={titleRef}
            className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6"
          >
            <span className="text-transparent bg-gradient-to-r from-slate-200/90 via-blue-200/70 to-slate-300/90 bg-clip-text drop-shadow-[0_2px_8px_rgba(30,58,138,0.6)]">
              TRUSTED CLIENTS
            </span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-blue-300/80 via-cyan-200/70 to-blue-400/80 bg-clip-text drop-shadow-[0_2px_12px_rgba(59,130,246,0.5)]">
              WE&apos;RE PROUD OF
            </span>
          </h2>
          
          <p className="text-slate-300/90 max-w-2xl mx-auto text-lg leading-relaxed drop-shadow-[0_2px_8px_rgba(15,23,42,0.8)]">
            Building lasting partnerships with industry leaders who trust us to deliver exceptional solutions and drive their digital transformation.
          </p>
        </div>

        {/* Client Logos Slider */}
        <div className="relative">
          <SwiperSlider
            slidesPerViewMobile={1}
            slidesPerViewTablet={2}
            slidesPerViewDesktop={3}
            spaceBetween={24}
            centeredSlides={false}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="client-logo group relative rounded-3xl p-8 backdrop-blur-sm transition-all duration-500 h-[180px] md:h-[200px] flex items-center justify-center"
                     style={{
                       background: "linear-gradient(135deg, rgba(30,41,59,0.15) 0%, rgba(15,23,42,0.25) 50%, rgba(8,47,73,0.15) 100%)",
                       border: "1px solid rgba(51,65,85,0.3)",
                       boxShadow: "inset 0 1px 0 rgba(148,163,184,0.1), 0 8px 32px rgba(30,58,138,0.08), 0 1px 4px rgba(0,0,0,0.2)",
                     }}>
                  
                  {/* Multiple glow layers - matching Hero's 10% blue intensity */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/8 via-transparent to-slate-500/8 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-blue-950/15 via-transparent to-slate-950/15 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100"></div>
                  
                  {/* Enhanced glassmorphism effect with Hero's subtlety */}
                  <div className="absolute inset-0 rounded-3xl backdrop-blur-[2px] bg-gradient-to-br from-slate-800/10 via-transparent to-blue-900/10 border border-slate-600/20 opacity-0 group-hover:opacity-100 transition-all duration-400"></div>
                  
                  {/* Professional highlight - matching Hero's refinement */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-slate-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  <div className="relative z-10 flex items-center justify-center w-full h-full">
                    <Image
                      src={src}
                      alt={`Client ${index + 1}`}
                      width={140}
                      height={140}
                      className="object-contain w-[120px] h-[120px] md:w-[140px] md:h-[140px] transition-all duration-500 group-hover:scale-105 max-w-full max-h-full filter brightness-90 group-hover:brightness-110 drop-shadow-[0_2px_8px_rgba(30,58,138,0.3)]"
                      priority={index < 3}
                      onError={() => {
                        console.log(`Failed to load image: ${src}`);
                      }}
                    />
                  </div>
                  
                  {/* Subtle shine effect on hover - matching Hero's polish */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-200/8 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-[-100%] group-hover:translate-x-[100%] rounded-3xl" />
                </div>
              </SwiperSlide>
            ))}
          </SwiperSlider>
        </div>
      </div>
    </section>
  );
};

export default ClientList;

"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ChevronRight } from "lucide-react";

type HeroData = {
  title: string;
};

type HeroProps = {
  heroData: HeroData;
};

const Hero: React.FC<HeroProps> = () => {
  const animatedPart = " ideas ";
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const animatedWordRef = useRef<HTMLSpanElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current?.children, animatedWordRef.current, descriptionRef.current, buttonRef.current], {
        opacity: 0
      });

      // Professional timeline with refined timing
      const masterTL = gsap.timeline({ 
        delay: 0.5,
        ease: "power2.out"
      });

      // Background atmospheric entrance
      masterTL.fromTo(backgroundRef.current, 
        { 
          opacity: 0,
          scale: 1.05
        },
        { 
          opacity: 1,
          scale: 1,
          duration: 2,
          ease: "power2.out"
        }, 0
      );

      // Professional title reveal - subtle and elegant
      masterTL.fromTo(titleRef.current?.children || [],
        { 
          opacity: 0,
          y: 30,
          filter: "blur(4px)"
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          stagger: {
            each: 0.2,
            ease: "power2.out"
          },
          ease: "power2.out"
        }, 0.3
      );

      // Refined animated word - professional highlight
      masterTL.fromTo(animatedWordRef.current,
        {
          opacity: 0,
          y: 20,
          scale: 0.95,
          filter: "blur(2px)"
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power2.out"
        }, 0.7
      );

      // Subtle continuous glow for animated word
      masterTL.to(animatedWordRef.current, {
        textShadow: "0 0 15px rgba(59,130,246,0.4), 0 0 30px rgba(59,130,246,0.2)",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      }, 2);

      // Professional description reveal
      masterTL.fromTo(descriptionRef.current,
        {
          opacity: 0,
          y: 20,
          filter: "blur(2px)"
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power2.out"
        }, 1
      );

      // Elegant button entrance
      masterTL.fromTo(buttonRef.current,
        {
          opacity: 0,
          y: 25,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out"
        }, 1.3
      );

      // Subtle floating animation - very gentle
      masterTL.to(heroRef.current, {
        y: -5,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      }, 3);

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleButtonHover = () => {
    gsap.to(buttonRef.current, {
      y: -2,
      scale: 1.02,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  const handleButtonLeave = () => {
    gsap.to(buttonRef.current, {
      y: 0,
      scale: 1,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  return (
    <div ref={heroRef} className="relative w-full h-[80vh] md:h-[80vh] lg:h-[85vh] overflow-hidden flex flex-col justify-between items-center bg-black -mb-1" style={{ border: 'none', outline: 'none', boxShadow: 'none' }}>
      {/* Dark base with 10% blue presence */}
      <div ref={backgroundRef} className="absolute inset-0 bg-gradient-to-br from-black via-slate-950/60 to-blue-950/40 z-0" />
      
      {/* Atmosphere layers with blue hints */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-blue-950/25 to-black/80 z-1"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-slate-950/20 to-black/85 z-2"></div>
      
      {/* 10% blue atmospheric glow */}
      <div className="absolute inset-0 pointer-events-none z-4" style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(30,58,138,0.1) 0%, rgba(15,23,42,0.05) 50%, rgba(0,0,0,0.9) 100%)"
      }} />

      {/* Title Section */}
      <div className="relative z-20 flex justify-center items-center h-full w-full bg-transparent px-4 py-12 sm:py-20">
        <div className="text-white font-normal text-center max-w-6xl w-full">
          <div ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[64px] font-medium leading-tight flex flex-wrap justify-center break-words whitespace-normal mb-6">
            <h2 className="tracking-wide text-transparent bg-gradient-to-r from-slate-200/90 via-blue-200/70 to-slate-300/90 bg-clip-text drop-shadow-[0_2px_8px_rgba(30,58,138,0.6)]">Empowering</h2>
            <span
              ref={animatedWordRef}
              className="inline-block ml-2 text-transparent bg-gradient-to-r from-blue-300/80 via-cyan-200/70 to-blue-400/80 bg-clip-text drop-shadow-[0_2px_12px_rgba(59,130,246,0.5)]"
            >
              {animatedPart}
            </span>
            <h2 className="tracking-wide text-transparent bg-gradient-to-r from-slate-200/90 via-blue-200/70 to-slate-300/90 bg-clip-text drop-shadow-[0_2px_8px_rgba(30,58,138,0.6)]">through engineered solutions</h2>
          </div>
          <p ref={descriptionRef} className="text-slate-300/90 max-w-5xl mx-auto mb-8 text-base sm:text-lg drop-shadow-[0_2px_8px_rgba(15,23,42,0.8)]">
            At Code-ox, we build secure, scalable software solutions that solve real business challenges. As a forward-thinking development partner, we drive digital transformation with cutting-edge technology and deep industry expertise—delivering innovative solutions that make a lasting impact.
          </p>
          <div className="flex justify-center">
            <button 
              ref={buttonRef}
              className="group relative px-12 py-5 bg-slate-900/90 border border-blue-600/30 text-slate-200 rounded-2xl font-medium transition-all duration-300 flex items-center gap-3 backdrop-blur-sm mx-auto overflow-hidden" 
              onClick={() => window.location.href = '/contact-us'}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
            >
              {/* Refined atmospheric glow */}
              <div className="absolute -inset-6 bg-blue-500/10 group-hover:bg-blue-400/20 transition-all duration-500 rounded-3xl blur-2xl"></div>
              <div className="absolute -inset-3 bg-blue-400/15 group-hover:bg-blue-300/25 transition-all duration-500 rounded-2xl blur-xl"></div>
              
              {/* Professional inner glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-slate-400/15 to-blue-500/10 group-hover:from-blue-400/20 group-hover:via-slate-300/25 group-hover:to-blue-400/20 transition-all duration-400 rounded-2xl"></div>
              
              {/* Subtle shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Button background */}
              <div className="absolute inset-[1px] bg-slate-900/95 group-hover:bg-slate-800/95 transition-all duration-300 rounded-[15px]"></div>
              
              {/* Content */}
              <span className="relative z-10 font-medium group-hover:text-blue-50 transition-colors duration-300">Connect Us</span>
              <ChevronRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 group-hover:text-blue-50 transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

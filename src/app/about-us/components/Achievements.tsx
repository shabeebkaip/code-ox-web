"use client";
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

type CountUpProps = {
  end: number;
  duration?: number;
};

const CountUp: React.FC<CountUpProps & { isVisible: boolean }> = ({ end, duration = 2, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    // GSAP powered counter animation
    gsap.to({ count: 0 }, {
      count: end,
      duration: duration,
      ease: "power2.out",
      onUpdate: function() {
        setCount(Math.floor(this.targets()[0].count));
      }
    });

    return () => setCount(0);
  }, [end, duration, isVisible]);

  return count;
};

type StatData = {
  number: number;
  label: string;
  description: string;
};

type StatCardProps = StatData;

const StatCard: React.FC<StatCardProps> = ({ number, label, description }) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const numberRef = React.useRef<HTMLDivElement>(null);
  const lineRef = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const numberEl = numberRef.current;
    const lineEl = lineRef.current;

    // GSAP Timeline for entrance animation
    const tl = gsap.timeline({ paused: true });

    // Set initial states
    gsap.set(card, {
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotationX: 15
    });

    gsap.set(numberEl, {
      opacity: 0,
      scale: 0.5,
      rotationY: 90
    });

    gsap.set(lineEl, {
      scaleX: 0,
      transformOrigin: "left center"
    });

    // Create entrance animation
    tl.to(card, {
      opacity: 1,
      y: 0,
      scale: 1,
      rotationX: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    })
    .to(numberEl, {
      opacity: 1,
      scale: 1,
      rotationY: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4")
    .to(lineEl, {
      scaleX: 1,
      duration: 0.8,
      ease: "power2.inOut"
    }, "-=0.3")
    .call(() => {
      setIsVisible(true);
    });

    // Hover animations
    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.02,
        y: -5,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(numberEl, {
        scale: 1.1,
        color: "#cbd5e1",
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(numberEl, {
        scale: 1,
        color: "#94a3b8",
        duration: 0.3,
        ease: "power2.out"
      });
    };

    if (inView) {
      tl.play();
    }

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      tl.kill();
    };
  }, [inView]);

  return (
    <div ref={ref} className="relative group perspective-1000">
      <div
        ref={cardRef}
        className="relative rounded-2xl p-8 backdrop-blur-sm overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(30,41,59,0.15) 0%, rgba(15,23,42,0.25) 50%, rgba(8,47,73,0.15) 100%)",
          border: "1px solid rgba(51,65,85,0.3)",
          boxShadow: "inset 0 1px 0 rgba(148,163,184,0.1), 0 8px 32px rgba(30,58,138,0.08), 0 1px 4px rgba(0,0,0,0.2)",
        }}
      >
        {/* Refined ambient glow effect - matching Hero's subtlety */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-slate-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
        
        {/* Floating particles effect - refined with Hero's palette */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-slate-500/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-6 left-6 w-1 h-1 bg-blue-400/40 rounded-full animate-pulse delay-1000"></div>
        
        <div className="relative z-10">
          {/* Animated number */}
          <div ref={numberRef} className="mb-4">
            <h2 className="text-5xl font-bold text-slate-300 mb-2">
              +{isVisible ? <CountUp end={number} duration={2} isVisible={isVisible} /> : 0}
            </h2>
            {/* Animated underline */}
            <div 
              ref={lineRef}
              className="h-0.5 w-16 bg-gradient-to-r from-blue-400/60 to-slate-500/60"
            />
          </div>

          {/* Label with typewriter effect */}
          <p className="text-lg font-semibold text-slate-200 uppercase tracking-wider mb-4 leading-tight">
            {label}
          </p>

          {/* Description */}
          <p className="text-slate-400 leading-relaxed text-sm">
            {description}
          </p>
        </div>

        {/* Corner accents - refined with Hero's palette */}
        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-slate-600/30 rounded-tl-2xl"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-slate-600/30 rounded-br-2xl"></div>
      </div>
    </div>
  );
};

// type AchievementsProps = {
//   data: StatData[];
// };

const Achievements: React.FC = () => {
  const data: StatData[] = [
    {
      number: 50,
      label: "Solutions Designed and Delivered",
      description:
        "We’ve built and delivered over 50 custom tech solutions, helping businesses with systems that are scalable, efficient, and ready for the future.",
    },
    {
      number: 15,
      label: "Projects Ongoing",
      description:
        "Our team is currently engaged in over 15 active projects, delivering end-to-end digital solutions across domains with agile methodologies and continuous innovation.",
    },
    {
      number: 30,
      label: "Industries Mastered",
      description:
        "Leveraging deep domain knowledge, we've built expertise across 30+ industries, enabling us to address unique business challenges with impactful and relevant digital strategies.",
    },
    {
      number: 25,
      label: "Skilled Talent",
      description:
        "Our squad of over 25 seasoned technologists and innovation advocates drive transformation with next-gen technologies, delivering unmatched value to clients worldwide.",
    },
   
  ];

  return (
    <section className="relative min-h-screen py-20 bg-black overflow-hidden">
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
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-slate-400/6 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500/6 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Modern header with midnight blue styling */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-800/40 to-slate-700/30 border border-slate-600/30 rounded-full text-sm text-slate-300 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
            Our Impact in Numbers
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-transparent bg-gradient-to-r from-slate-200/90 via-blue-200/70 to-slate-300/90 bg-clip-text drop-shadow-[0_2px_8px_rgba(30,58,138,0.6)]">
              Why We Stand Out as a
            </span>{' '}
            <span className="block text-transparent bg-gradient-to-r from-blue-300/80 via-cyan-200/70 to-blue-400/80 bg-clip-text drop-shadow-[0_2px_12px_rgba(59,130,246,0.5)]">
              Software Development Company
            </span>
          </h1>
          
          <p className="text-slate-300/90 text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(15,23,42,0.8)]">
            Numbers that reflect our journey through the digital landscape, illuminating paths of innovation in the darkness of complexity
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {data?.map((stat, index) => (
            <div key={index} className="transform-gpu">
              <StatCard number={stat.number} label={stat.label} description={stat.description}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
"use client";
import { BedDouble, ClipboardList, CreditCard, Factory, GraduationCap, ShoppingCart, TrendingUp, Utensils } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const industries = [
  {
    title: "Trading",
    icon: TrendingUp,
    description: "Develop dynamic trading platforms with real-time data visualization, analytics, and seamless transaction support.",
    gradient: "from-gray-600/20 to-gray-700/20",
    iconColor: "text-gray-300",
    glowColor: "gray-400/10"
  },
  {
    title: "POS",
    icon: CreditCard,
    description: "Implement robust Point-of-Sale systems with inventory integration, secure payments, and real-time sales tracking.",
    gradient: "from-gray-600/20 to-gray-700/20",
    iconColor: "text-gray-300",
    glowColor: "gray-400/10"
  },
  {
    title: "Education",
    icon: GraduationCap,
    description:"Design interactive learning environments with customizable curricula, progress tracking, and virtual classrooms.",
    gradient: "from-gray-600/20 to-gray-700/20",
    iconColor: "text-gray-300",
    glowColor: "gray-400/10"
  },
  {
    title: "Manufacturing",
    icon: Factory,
    description: "Streamline manufacturing processes through automation, predictive maintenance, and production analytics.",
    gradient: "from-gray-600/20 to-gray-700/20",
    iconColor: "text-gray-300",
    glowColor: "gray-400/10"
  },
  {
    title: "E-Commerce",
    icon: ShoppingCart,
    description: "Launch scalable e-commerce platforms with personalized shopping, inventory management, and secure checkouts.",
    gradient: "from-gray-600/20 to-gray-700/20",
    iconColor: "text-gray-300",
    glowColor: "gray-400/10"
  },
  {
    title: "Service Management",
    icon: ClipboardList,
    description: "Manage services efficiently with task automation, ticketing systems, and customer feedback tools.",
    gradient: "from-gray-600/20 to-gray-700/20",
    iconColor: "text-gray-300",
    glowColor: "gray-400/10"
  },
  {
    title: "Restaurant Management",
    icon: Utensils,
    description: "Optimize restaurant operations with table reservations, order tracking, menu management, and analytics.",
    gradient: "from-gray-600/20 to-gray-700/20",
    iconColor: "text-gray-300",
    glowColor: "gray-400/10"
  },
  {
    title: "Hotel Management",
    icon: BedDouble,
    description: "Elevate guest experiences with booking engines, room service tracking, and staff coordination tools.",
    gradient: "from-gray-600/20 to-gray-700/20",
    iconColor: "text-gray-300",
    glowColor: "gray-400/10"
  },
];

const IndustryCard = ({ item, index }: { item: typeof industries[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (!cardRef.current || !inView) return;

    const card = cardRef.current;
    const icon = iconRef.current;
    const title = titleRef.current;
    const desc = descRef.current;

    // GSAP Timeline for entrance
    const tl = gsap.timeline({ delay: index * 0.1 });

    // Set initial states
    gsap.set(card, {
      opacity: 0,
      y: 30,
      scale: 0.95
    });

    gsap.set(icon, {
      opacity: 0,
      scale: 0.8
    });

    gsap.set([title, desc], {
      opacity: 0,
      y: 20
    });

    // Smooth entrance animation sequence
    tl.to(card, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "power2.out"
    })
    .to(icon, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: "power2.out"
    }, "-=0.3")
    .to(title, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out"
    }, "-=0.2")
    .to(desc, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out"
    }, "-=0.2");

    // Hover animations
    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -8,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(icon, {
        scale: 1.1,
        rotation: 5,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(icon, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      tl.kill();
    };
  }, [inView, index]);

  return (
    <div ref={ref} className="perspective-1000">
      <div
        ref={cardRef}
        className="group relative rounded-2xl p-8 backdrop-blur-sm overflow-hidden transition-all duration-500 h-80"
        style={{
          background: "linear-gradient(135deg, rgba(30,41,59,0.15) 0%, rgba(15,23,42,0.25) 50%, rgba(8,47,73,0.15) 100%)",
          border: "1px solid rgba(51,65,85,0.3)",
          boxShadow: "inset 0 1px 0 rgba(148,163,184,0.1), 0 8px 32px rgba(30,58,138,0.08), 0 1px 4px rgba(0,0,0,0.2)",
        }}
      >
        {/* Refined ambient glow effect - matching Hero's subtlety */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-slate-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
        
        {/* Floating particles - refined with Hero's palette */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-slate-500/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-6 left-6 w-1 h-1 bg-blue-400/40 rounded-full animate-pulse delay-1000"></div>
        
        {/* Icon container with sophisticated glow - matching Hero */}
        <div ref={iconRef} className="relative mb-6">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 relative overflow-hidden"
               style={{
                 background: "linear-gradient(135deg, rgba(51,65,85,0.25) 0%, rgba(30,41,59,0.35) 100%)",
               }}>
            <item.icon className="w-8 h-8 text-slate-300 relative z-10" />
            {/* Inner glow effect - refined */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-4">
          <h3 ref={titleRef} className="text-xl font-bold text-slate-200 leading-tight">
            {item.title}
          </h3>
          <p ref={descRef} className="text-slate-400 leading-relaxed text-sm">
            {item.description}
          </p>
        </div>

        {/* Corner accents - refined with Hero's palette */}
        <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-slate-600/30 rounded-tr-2xl"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-slate-600/30 rounded-bl-2xl"></div>
      </div>
    </div>
  );
};

const Industries = () => {
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
      <div className="absolute top-32 left-32 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 right-32 w-96 h-96 bg-slate-400/6 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-blue-500/6 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-slate-400/6 rounded-full blur-3xl"></div>
      <div className="absolute top-2/3 left-2/3 w-56 h-56 bg-blue-400/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          {/* Professional badge - matching Hero style */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-800/40 to-slate-700/30 border border-slate-600/30 rounded-full text-sm text-slate-300 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
            Industrial Landscapes
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 max-w-5xl mx-auto">
            <span className="text-transparent bg-gradient-to-r from-slate-200/90 via-blue-200/70 to-slate-300/90 bg-clip-text drop-shadow-[0_2px_8px_rgba(30,58,138,0.6)]">
              A Singular Vision Serving
            </span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-blue-300/80 via-cyan-200/70 to-blue-400/80 bg-clip-text drop-shadow-[0_2px_12px_rgba(59,130,246,0.5)]">
              Diverse Industrial Landscapes
            </span>
          </h2>
          
          <p className="text-slate-300/90 text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(15,23,42,0.8)]">
            Empowering businesses across multiple sectors with tailored solutions that drive innovation and excellence in every industrial landscape
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {industries.map((item, index) => (
            <IndustryCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* Bottom atmospheric element - refined with Hero's palette */}
        <div className="mt-20 flex justify-center">
          <div className="relative">
            <div className="w-40 h-0.5 bg-gradient-to-r from-transparent via-slate-600/40 to-transparent"></div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500/20 rounded-full blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;

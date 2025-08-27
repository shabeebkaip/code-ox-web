"use client";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Clock, Cpu, DollarSign, MessageCircle, Star, Users } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const specialties = [
  {
    icon: Users,
    title: "Experienced Team",
    desc: "Being backed up by a team of expert software developers, we have a successful track record of providing efficient and effective solutions matching your exact business requirements.",
    gradient: "from-slate-700/20 to-slate-800/20",
    iconColor: "text-slate-300",
    glowColor: "slate-400/10"
  },
  {
    icon: Cpu,
    title: "Technological Competitive Edge",
    desc: "Our company is proficient in the latest technology stack to help clients get future-ready software development solutions to meet their business objectives easily.",
    gradient: "from-slate-700/20 to-slate-800/20",
    iconColor: "text-slate-300",
    glowColor: "slate-400/10"
  },
  {
    icon: MessageCircle,
    title: "Effective Communication",
    desc: "We maintain complete transparency with our clients and keep them informed about the latest updates on their projects.",
    gradient: "from-slate-700/20 to-slate-800/20",
    iconColor: "text-slate-300",
    glowColor: "slate-400/10"
  },
  {
    icon: Clock,
    title: "Reduced Time to Market",
    desc: "When you hire us as your software development partner, you can be assured that you will get efficient solutions quickly so that you can reach the target users on time.",
    gradient: "from-slate-700/20 to-slate-800/20",
    iconColor: "text-slate-300",
    glowColor: "slate-400/10"
  },
  {
    icon: Star,
    title: "Top Quality",
    desc: "We make sure that you get top-quality software from Code-ox. We are known for offering complete client satisfaction for all projects with our high coding standards.",
    gradient: "from-slate-700/20 to-slate-800/20",
    iconColor: "text-slate-300",
    glowColor: "slate-400/10"
  },
  {
    icon: DollarSign,
    title: "Best Value for Money",
    desc: "At Code-ox, we ensure that our clients get the maximum ROI for software development projects. We walk the extra mile to deliver the best solutions for our clients worldwide.",
    gradient: "from-slate-700/20 to-slate-800/20",
    iconColor: "text-slate-300",
    glowColor: "slate-400/10"
  }
];

const SpecialityCard = ({ item, index }: { item: typeof specialties[0], index: number }) => {
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

    // GSAP Timeline for spectacular entrance
    const tl = gsap.timeline({ delay: index * 0.15 });

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
        y: -5,
        scale: 1.01,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(icon, {
        scale: 1.05,
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
        className={`group relative bg-gradient-to-br from-slate-900/40 to-slate-950/60 border border-slate-700/30 rounded-2xl p-8 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-slate-600/50`}
      >
        {/* Ambient glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br from-${item.glowColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
        
        {/* Floating particles */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-slate-500/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-6 left-6 w-1 h-1 bg-slate-400/40 rounded-full animate-pulse delay-1000"></div>
        
        {/* Icon container with magical glow */}
        <div ref={iconRef} className="relative mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-slate-700/40 to-slate-800/40 rounded-2xl flex items-center justify-center group-hover:from-slate-600/50 group-hover:to-slate-700/50 transition-all duration-300 relative overflow-hidden">
            <item.icon className={`w-8 h-8 ${item.iconColor} relative z-10`} />
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-4">
          <h3 ref={titleRef} className="text-xl font-bold text-slate-200 leading-tight">
            {item.title}
          </h3>
          <p ref={descRef} className="text-slate-400 leading-relaxed text-sm">
            {item.desc}
          </p>
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-slate-600/30 rounded-tr-2xl"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-slate-600/30 rounded-bl-2xl"></div>
      </div>
    </div>
  );
};

const Speciality = () => {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!containerRef.current || typeof window === 'undefined') return;

    // GSAP ScrollTrigger for header animation
    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Set initial states
    gsap.set([titleRef.current, subtitleRef.current], {
      opacity: 0,
      y: 30
    });

    // Header entrance animation
    headerTl
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.4");

    // Floating particles animation
    const particles = containerRef.current.querySelectorAll('.floating-particle');
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        y: "random(-20, 20)",
        x: "random(-10, 10)",
        duration: "random(6, 10)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.5
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen py-20 bg-black overflow-hidden"
    >
      {/* Dark base with 10% blue presence - matching Hero and Achievements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950/60 to-blue-950/40 z-0" />
      
      {/* Atmosphere layers with blue hints - matching Hero and Achievements */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-blue-950/25 to-black/80 z-1"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-slate-950/20 to-black/85 z-2"></div>
      
      {/* 10% blue atmospheric glow - matching Hero and Achievements */}
      <div className="absolute inset-0 pointer-events-none z-4" style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(30,58,138,0.1) 0%, rgba(15,23,42,0.05) 50%, rgba(0,0,0,0.9) 100%)"
      }} />
      
      {/* Refined floating lights with Hero's color scheme */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/8 rounded-full blur-3xl floating-particle"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-slate-400/6 rounded-full blur-3xl floating-particle"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500/6 rounded-full blur-3xl floating-particle"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header with midnight blue styling */}
        <div className="text-center mb-20">
          {/* Professional badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-800/40 to-slate-700/30 border border-slate-600/30 rounded-full text-sm text-slate-300 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse floating-particle"></div>
            Our Specialities
          </div>

          <h2 
            ref={titleRef}
            className="text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            <span className="text-transparent bg-gradient-to-r from-slate-200/90 via-blue-200/70 to-slate-300/90 bg-clip-text drop-shadow-[0_2px_8px_rgba(30,58,138,0.6)]">
              Why Choose Our
            </span>
            <span className="block text-transparent bg-gradient-to-r from-blue-300/80 via-cyan-200/70 to-blue-400/80 bg-clip-text drop-shadow-[0_2px_12px_rgba(59,130,246,0.5)]">
              Expertise
            </span>
          </h2>
          
          <p 
            ref={subtitleRef}
            className="text-slate-300/90 text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(15,23,42,0.8)]"
          >
            Discover the distinctive advantages that set us apart in the digital landscape, where innovation meets excellence in the depths of technological mastery
          </p>
        </div>

        {/* Speciality Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((item, index) => (
            <SpecialityCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* Bottom atmospheric element */}
        <div className="mt-20 flex justify-center">
          <div className="relative">
            <div className="w-40 h-0.5 bg-gradient-to-r from-transparent via-slate-600/40 to-transparent floating-particle"></div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-500/20 rounded-full blur-sm floating-particle"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speciality;

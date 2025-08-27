"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote } from "lucide-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Testimonial {
  _id?: string;
  id?: string;
  name: string;
  position?: string;
  company?: string;
  companyName?: string;
  avatar?: string;
  rating?: number;
  description: string;
  createdAt?: string;
  image?: {
    fileUrl: string;
  };
}

interface TestimonialsSectionProps {
  testimonialData: Testimonial[] | undefined;
}

// Static testimonial data
const staticTestimonials: Testimonial[] = [
  {
    _id: "1",
    image: { fileUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" },
    name: "John Smith",
    companyName: "Tech Solutions Inc",
    description: "Incredible attention to detail and top-tier service."
  },
  {
    _id: "2",
    image: { fileUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" },
    name: "Sarah Johnson",
    companyName: "Digital Marketing Pro",
    description: "The team's innovative approach truly elevated our business. They understood our needs, executed brilliantly, and stayed engaged throughout the process."
  },
  {
    _id: "3",
    image: { fileUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" },
    name: "Michael Chen",
    companyName: "StartUp Ventures",
    description: "Precise execution from a highly professional and results-oriented team."
  },
  {
    _id: "4",
    image: { fileUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" },
    name: "Emily Davis",
    companyName: "Creative Studio",
    description: "They went above and beyond. The final product exceeded expectations, and their support throughout was phenomenal. It’s rare to find a team this committed to quality and client success."
  },
  {
    _id: "5",
    image: { fileUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" },
    name: "David Wilson",
    companyName: "Global Enterprises",
    description: "Fast, focused, and effective.y went above and beyond. The final product exceeded expectations, and their support throughout was phenomenal. It’s rare to find a team this commy went above and beyond. The final product exceeded expectations, and their support throughout was phenomenal. It’s rare to find a team this comm"
  },
  {
    _id: "6",
    image: { fileUrl: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face" },
    name: "Lisa Anderson",
    companyName: "Innovation Labs",
    description: "They nailed the brief. Communication was seamless, and the end product was polished, professional, and exactly what we envisioned. Truly collaborative from start to finish."
  },
  {
    _id: "7",
    image: { fileUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face" },
    name: "Robert Taylor",
    companyName: "Future Tech",
    description: "Great experience overall!"
  },
  {
    _id: "8",
    image: { fileUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face" },
    name: "Jennifer Brown",
    companyName: "Design Co",
    description: "Our vision came to life thanks to their incredible skillset. The team was responsive and insightful, making collaboration easy and enjoyable from start to finish."
  },
  {
    _id: "9",
    image: { fileUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face" },
    name: "James Miller",
    companyName: "Business Solutions",
    description: "Couldn’t be happier!"
  },
  {
    _id: "10",
    image: { fileUrl: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face" },
    name: "Amanda Rodriguez",
    companyName: "Creative Agency",
    description: "Creative, driven, and attentive. From brainstorming to delivery, they surpassed every expectation. The outcome was not only beautiful but also aligned perfectly with our goals."
  },
  {
    _id: "11",
    image: { fileUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" },
    name: "Christopher Lee",
    companyName: "Tech Innovations",
    description: "Delivered exactly what we asked for, on time and with excellent quality."
  },
  {
    _id: "12",
    image: { fileUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face" },
    name: "Michelle Thompson",
    companyName: "Digital Solutions",
    description: "Fantastic from beginning to end. y went above and beyond. The final product exceeded expectations, and their support throughout was phenomenal. It’s rare to find a team this commTheir attention to detail and professionalism made a huge difference in the outcome. Highly recommend!"
  },
  {
    _id: "13",
    image: { fileUrl: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face" },
    name: "Steven Garcia",
    companyName: "Modern Enterprises",
    description: "Highly recommended."
  },
  {
    _id: "14",
    image: { fileUrl: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=150&h=150&fit=crop&crop=face" },
    name: "Rachel Martinez",
    companyName: "Creative Works",
    description: "They brought fresh ideas, kept us involved every step of the way, and created something even better than we imagined. The results speak for themselves."
  },
  {
    _id: "15",
    image: { fileUrl: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face" },
    name: "Daniel Clark",
    companyName: "Innovation Hub",
    description: "Smooth collaboration and excellent outcomes. Couldn’t have asked for more."
  }
];


// Masonry layout helper function
const createMasonryColumns = (items: Testimonial[], columns: number) => {
  const columnArrays: Testimonial[][] = Array(columns).fill(null).map(() => []);
  
  items.forEach((item, index) => {
    const columnIndex = index % columns;
    columnArrays[columnIndex].push(item);
  });
  
  return columnArrays;
};

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonialData }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Use staticTestimonials as fallback if no testimonialData provided
  const testimonials = testimonialData && testimonialData.length > 0 ? testimonialData : staticTestimonials;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate section title - simplified to avoid visibility issues
      gsap.fromTo(
        ".testimonials-title",
        {
          y: 30,
        },
        {
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".testimonials-title",
            start: "top 90%",
            markers: false,
          },
        }
      );

      // Floating lights animation
      gsap.to(".floating-light", {
        y: "random(-15, 15)",
        x: "random(-10, 10)",
        duration: "random(6, 10)",
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });

      // Glow pulse animation
      gsap.to(".glow-pulse", {
        scale: "random(0.95, 1.05)",
        opacity: "random(0.5, 1)",
        duration: "random(3, 5)",
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3
      });

      // Mystical fog movement
      gsap.to(".fog-layer", {
        x: "random(-30, 30)",
        duration: "random(8, 12)",
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 1
      });

      // Sparkle lights animation
      gsap.to(".sparkle", {
        opacity: "random(0.3, 0.8)",
        scale: "random(0.8, 1.2)",
        duration: "random(2, 4)",
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.2
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [testimonials]);

  const columns = isMobile ? 1 : 3;
  const masonryColumns = createMasonryColumns(testimonials, columns);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-black py-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen"
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
      <div className="floating-light glow-pulse absolute top-32 left-32 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl" />
      <div className="floating-light glow-pulse absolute bottom-32 right-32 w-96 h-96 bg-slate-400/6 rounded-full blur-3xl" />
      <div className="floating-light glow-pulse absolute top-1/4 right-1/3 w-64 h-64 bg-blue-500/6 rounded-full blur-3xl" />
      <div className="floating-light glow-pulse absolute bottom-1/4 left-1/4 w-72 h-72 bg-slate-400/6 rounded-full blur-3xl" />
      <div className="floating-light glow-pulse absolute top-2/3 left-2/3 w-56 h-56 bg-blue-400/5 rounded-full blur-3xl" />
      
      {/* Sparkle effects - refined with Hero's palette */}
      <div className="sparkle absolute top-32 left-1/3 w-2 h-2 bg-slate-300/40 rounded-full" />
      <div className="sparkle absolute top-48 right-1/4 w-1 h-1 bg-blue-400/50 rounded-full" />
      <div className="sparkle absolute bottom-32 left-1/5 w-1.5 h-1.5 bg-slate-500/30 rounded-full" />
      <div className="sparkle absolute bottom-48 right-1/5 w-2 h-2 bg-blue-300/35 rounded-full" />
      <div className="sparkle absolute top-64 left-2/3 w-1 h-1 bg-slate-400/45 rounded-full" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          {/* Professional badge - matching Hero style */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-800/40 to-slate-700/30 border border-slate-600/30 rounded-full text-sm text-slate-300 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
            Client Testimonials
          </div>

          <h2 className="testimonials-title text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 max-w-5xl mx-auto">
            <span className="text-transparent bg-gradient-to-r from-slate-200/90 via-blue-200/70 to-slate-300/90 bg-clip-text drop-shadow-[0_2px_8px_rgba(30,58,138,0.6)]">
              What Our Clients Say
            </span>
          </h2>
          
          <p className="text-slate-300/90 text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(15,23,42,0.8)]">
            Discover how we&apos;ve helped businesses transform their digital presence with innovative solutions and exceptional service.
          </p>
        </div>

        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-6`}>
          {masonryColumns.map((column: Testimonial[], columnIndex: number) => (
            <div key={columnIndex} className="space-y-6">
              {column.map((testimonial, index) => (
                <div
                  key={testimonial._id || testimonial.id || `testimonial-${index}`}
                  className="testimonial-card group relative rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl backdrop-blur-sm overflow-hidden opacity-100"
                  style={{ 
                    visibility: 'visible', 
                    transform: 'none',
                    background: "linear-gradient(135deg, rgba(30,41,59,0.15) 0%, rgba(15,23,42,0.25) 50%, rgba(8,47,73,0.15) 100%)",
                    border: "1px solid rgba(51,65,85,0.3)",
                    boxShadow: "inset 0 1px 0 rgba(148,163,184,0.1), 0 8px 32px rgba(30,58,138,0.08), 0 1px 4px rgba(0,0,0,0.2)",
                  }}
                >
                  {/* Refined glow effect on hover - matching Hero's subtlety */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-slate-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  {/* Quote icon */}
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-all duration-300"
                         style={{
                           background: "linear-gradient(135deg, rgba(51,65,85,0.25) 0%, rgba(30,41,59,0.35) 100%)",
                         }}>
                      <Quote className="w-6 h-6 text-slate-300" />
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating || 5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4 fill-blue-400/60 text-blue-400/60" 
                        />
                      ))}
                    </div>
                    
                    {/* Description */}
                    <p className="text-slate-300 text-lg leading-relaxed mb-8 font-light">
                      &ldquo;{testimonial.description}&rdquo;
                    </p>
                    
                    {/* Author info */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-slate-200 font-semibold text-sm"
                           style={{
                             background: "linear-gradient(135deg, rgba(51,65,85,0.20) 0%, rgba(30,41,59,0.30) 100%)",
                           }}>
                        {testimonial.name.split(' ').map((n: string) => n[0]).join('')}
                      </div>
                      <div>
                        <h4 className="text-slate-200 font-semibold text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-slate-400 text-sm">
                          {testimonial.position || ''}{(testimonial.company || testimonial.companyName) && ` at ${testimonial.company || testimonial.companyName}`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const services = [
  {
    id: "product-design",
    name: "Product Design & Ideation",
    description: "Unwaving commitment to perfection",
    buttons: ["UI/UX Design"],
    paragraph: " We formulate, design, and engineer creativity through our ideation and product design services that give you maximum value and help you captivate your audience with designs and products that are unparalleled in quality.",
    showcases: [
      {
        video: ["/isavideo.mp4"],
        title: "ISA",
        summary: "We redesigned ISA app boosting conversion and retention by identifying and fixing UI/UX problem areas.",
      },
      {
        video: ["/tha8afavideo.mp4"],
        title: "tha8afa",
        summary: "Complete redesign of the game experience with enhanced user flow and modern interface design.",
      }
    ]
  },
  {
    id: "mobile-app",
    name: "Mobile App Development",
    description: "Unwaving commitment to perfection",
    buttons: ["iOS", "Android"],
    paragraph: "Our mobile app development team builds scalable, secure, and high-performing applications. Whether it's native or cross-platform, we ensure your users get a seamless experience that drives engagement and meets your business goals.",
    showcases: [
      {
        video: ["/isamobile.mp4"],
        title: "ISA",
        summary: "We enhanced ISA's mobile experience by refining their ordering flow and improving user engagement.",
      },
      // {
      //   images: ["/img22.jpg", "/img22.jpg"],
      //   title: "diet",
      //   summary: "Native mobile app development with seamless shopping experience and integrated payment solutions.",
      // }
    ]
  },
  {
    id: "web-development",
    name: "Web Development",
    description: "Unwaving commitment to perfection",
    buttons: ["Frontend", "Backend", "Full Stack"],
    paragraph: "From dynamic websites to complex web applications, we build responsive, SEO-optimized, and fast-performing web platforms. We focus on delivering robust code architecture with intuitive UI that reflects your brand.",
    showcases: [
      {
        images: ["/portfolio/tha8afaa.png"],
        title: "Tha8afa",
        summary: "Complete redesign of the game experience with enhanced user flow and modern interface design.",
      }
    ]
  },
  {
    id: "odoo",
    name: "Odoo",
    description: "Unwaving commitment to perfection",
    buttons: ["Odoo ERP", "Odoo Setup", "Training", "Integration", "Custom Reports"],
    paragraph: "We specialize in end-to-end Odoo implementation, tailored to your business processes. From custom module development to full ERP integration, we streamline operations and help you maximize efficiency using Odoo's flexible platform.",
    showcases: [
      {
        images: ["/idealink.jpg", "/easyshope.jpg", "/shammasy.jpg"],
        title: "ERP Solution",
        summary: "Custom Odoo implementation with tailored modules for inventory and sales management.",
      }
    ]
  },
  {
    id: "it-support",
    name: "IT Support",
    description: "Unwaving commitment to perfection",
    buttons: ["System Maintenance"],
    paragraph: "Our IT support solutions offer proactive monitoring, maintenance, and troubleshooting to ensure your systems run at peak performance. Minimize downtime and get expert assistance when you need it — any time, any day.",
    showcases: [
      {
        images: ["/itsupport.jpg"],
        title: "codeox",
        summary: "Comprehensive IT support solution with monitoring, maintenance, and rapid response capabilities.",
      }
    ]
  }
];

const AllServices = () => {
  const [activeId, setActiveId] = useState(services[0].id);
  const [currentShowcase, setCurrentShowcase] = useState<Record<string, number>>({});
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [slideIndex, setSlideIndex] = useState<Record<string, number>>({});

  useEffect(() => {
    const initialShowcase: Record<string, number> = {};
    services.forEach((service) => {
      initialShowcase[service.id] = 0;
    });
    setCurrentShowcase(initialShowcase);
  }, []);

  useEffect(() => {
  const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    services.forEach((service) => {
      const el = sectionRefs.current[service.id];
      if (el) observer.observe(el);
    });

    return () => {
      services.forEach((service) => {
        const el = sectionRefs.current[service.id];
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  useEffect(() => {
    const intervals = services.map((service) =>
      setInterval(() => {
        setSlideIndex((prev) => {
          const currentShowcaseIndex = currentShowcase[service.id] || 0;
          const currentShowcaseData = service.showcases[currentShowcaseIndex];
          const imagesLength = currentShowcaseData?.images?.length || 0;
          
          if (imagesLength <= 1) return prev; 
          
          return {
            ...prev,
            [service.id]:
              prev[service.id] !== undefined
                ? (prev[service.id] + 1) % imagesLength
                : 1,
          };
        });
      }, 3000)
    );

    return () => intervals.forEach((id) => clearInterval(id));
  }, [currentShowcase]);

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  const nextShowcase = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    if (service && service.showcases.length > 1) {
      setCurrentShowcase(prev => ({
        ...prev,
        [serviceId]: (prev[serviceId] + 1) % service.showcases.length
      }));
    }
  };

  const prevShowcase = (serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    if (service && service.showcases.length > 1) {
      setCurrentShowcase(prev => ({
        ...prev,
        [serviceId]: prev[serviceId] > 0 ? prev[serviceId] - 1 : service.showcases.length - 1
      }));
    }
  };

  return (
    <div className="text-white bg-black min-h-screen">
      <div className="sticky top-0 z-50 bg-black">
        <div className="flex justify-center">
          <div className="flex justify-center overflow-x-auto p-3 border rounded-xl border-gray-600 max-w-4xl">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => scrollToSection(service.id)}
                className={`px-6 py-4 text-sm whitespace-nowrap transition-colors hover:cursor-pointer ${
                  activeId === service.id
                    ? "text-purple-500"
                    : "text-gray-300 hover:text-gray-200"
                }`}
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {services.map((service, index) => {
          // const isEven = index % 2 === 0;
          const showcaseIndex = currentShowcase[service.id] || 0;
          const currentShowcaseData = service.showcases[showcaseIndex];
          
          // Fixed: Added proper null checks
          const hasVideo = currentShowcaseData?.video && currentShowcaseData.video.length > 0;
          const hasImages = currentShowcaseData?.images && currentShowcaseData.images.length > 0;
          const currentImageIndex = slideIndex[service.id] || 0;
          const currentImage = hasImages ? currentShowcaseData.images[currentImageIndex] : null;

          return (
            <div
              key={service.id}
              id={service.id}
              ref={(el) => (sectionRefs.current[service.id] = el)}
              className="flex flex-col gap-8 py-12 relative max-w-7xl mx-auto px-4"
            >
              <div
                className={`flex flex-col gap-12 lg:flex-row 
                  `}
              >
                <div className="lg:w-1/2 p-3">
                  <h2 className="text-4xl lg:text-5xl font-semibold my-4">
                    {service.name}
                  </h2>
                  <p className="text-lg font-normal text-gray-200 py-4">{service.paragraph}</p>
                  <div className="flex flex-wrap gap-3 pt-10">
                    {service.buttons?.map((btn, index) => (
                      <button
                        key={index}
                        className="group relative min-w-[200px] border border-white/30 rounded-lg px-4 py-3 text-sm hover:bg-purple-600 hover:text-white transition backdrop-blur-sm"
                      >
                        <div className="flex items-center gap-1">
                          <span className="px-2">{btn}</span>
                          <span className="absolute right-3 icon-move">
                            <ChevronRight className="w-4 h-4" />
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="lg:w-1/2 p-3">
                  <div className="flex flex-col gap-4">
                    <div className="relative h-80 lg:h-96 rounded-lg border border-gray-600/50 overflow-hidden backdrop-blur-sm">
                      {hasVideo ? (
                        <video
                          src={currentShowcaseData.video[0]}
                          controls
                          autoPlay
                          muted
                          loop
                          className="w-full h-full object-contain"
                        />
                      ) : hasImages && currentImage ? (
                        <img
                          src={currentImage}
                          alt={currentShowcaseData.title}
                          className="w-full h-full object-cover transition-all duration-700"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                          <span className="text-gray-400">No media available</span>
                        </div>
                      )}
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                        <h3 className="text-2xl font-bold">{currentShowcaseData?.title}</h3>
                        <p className="text-sm mt-2 text-gray-200">{currentShowcaseData?.summary}</p>
                      </div>
                    </div>

                    {service.showcases.length > 1 && (
                      <div className="flex items-center gap-5">
                        <button
                          onClick={() => prevShowcase(service.id)}
                          className="p-2 cursor-pointer hover:text-purple-500 transition-colors"
                        >
                          <ChevronLeft className="w-8 h-8" />
                        </button>
                        <button
                          onClick={() => nextShowcase(service.id)}
                          className="p-2 cursor-pointer hover:text-purple-500 transition-colors"
                        >
                          <ChevronRight className="w-8 h-8" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllServices;
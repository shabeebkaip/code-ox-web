import React, { useState } from "react";
import { FaReact, FaPython, FaNodeJs, FaBrain, FaPhp, FaAndroid, FaDocker, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiFlutter, SiKotlin, SiNextdotjs, SiOpenai, SiJavascript, SiMeta, SiCss3, SiHtml5 } from "react-icons/si";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const techData = [
  {
    category: "AI & ML",
    items: [
      { name: "OpenAI", icon: <SiOpenai className="text-green-600" /> },
      { name: "Meta", icon: <SiMeta className="text-blue-400" /> },
      { name: "Google AI", icon: <FaBrain className="text-green-400" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
    ],
  },
  {
    category: "Frontend",
    items: [
        { name: "HTML", icon: <SiHtml5 className="text-orange-400" /> },
        { name: "CSS", icon: <SiCss3 className="text-sky-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Python", icon: <FaPython className="text-yellow-300" /> },
      { name: "Php", icon: <FaPhp className="text-purple-300" /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "My SQL", icon: <FaDatabase className="text-blue-500" /> },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "Flutter", icon: <SiFlutter className="text-sky-400" /> },
      { name: "Kotlin", icon: <SiKotlin className="text-orange-400" /> },
      { name: "Android", icon: <FaAndroid className="text-green-400" /> },
      { name: "React Native", icon: <FaReact className="text-cyan-400" /> },
    ],
  },
];

const Technologies = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative bg-black text-white py-14 px-6 md:px-20 overflow-hidden">
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
      <div className="absolute top-16 left-16 w-60 h-60 bg-blue-400/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-16 right-16 w-80 h-80 bg-slate-400/6 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-center mb-8">
        <div className="w-32 sm:w-64 h-0.5 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
        <h2 className="text-transparent bg-gradient-to-r from-slate-200/90 via-blue-200/70 to-slate-300/90 bg-clip-text drop-shadow-[0_2px_8px_rgba(30,58,138,0.6)] mx-4 text-lg sm:text-xl md:text-2xl font-semibold text-center">
         Technologies we use for custom solutions
        </h2>
        <div className="w-32 sm:w-64 h-0.5 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
      </div>
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {techData.map((tech, idx) => (
          <div
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              activeTab === idx
                ? "text-white backdrop-blur-sm" 
                : "hover:bg-slate-800/50"
            }`}
            style={activeTab === idx ? {
              background: "linear-gradient(135deg, rgba(30,41,59,0.6) 0%, rgba(59,130,246,0.4) 50%, rgba(30,41,59,0.6) 100%)",
              border: "1px solid rgba(59,130,246,0.3)",
              boxShadow: "0 4px 16px rgba(30,58,138,0.2)"
            } : {
              background: "linear-gradient(135deg, rgba(30,41,59,0.2) 0%, rgba(15,23,42,0.3) 100%)",
              border: "1px solid rgba(51,65,85,0.3)"
            }}
          >
            {tech.category}
          </div>
        ))}
      </div>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        speed={600}
        onSlideChange={(swiper) => setActiveTab(swiper.realIndex)}
        className="w-full"
      >
        {techData.map((techdata, idx) => (
          <SwiperSlide key={idx}>
        <div className="flex justify-center gap-4 flex-wrap md:flex-nowrap min-w-full">
          {techData[activeTab].items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 py-3 rounded-xl transition min-w-[180px] backdrop-blur-sm hover:scale-105"
              style={{
                background: "linear-gradient(135deg, rgba(30,41,59,0.15) 0%, rgba(15,23,42,0.25) 50%, rgba(8,47,73,0.15) 100%)",
                border: "1px solid rgba(51,65,85,0.3)",
                boxShadow: "inset 0 1px 0 rgba(148,163,184,0.1), 0 8px 32px rgba(30,58,138,0.08), 0 1px 4px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)";
                e.currentTarget.style.boxShadow = "inset 0 1px 0 rgba(148,163,184,0.1), 0 8px 32px rgba(30,58,138,0.15), 0 1px 4px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(51,65,85,0.3)";
                e.currentTarget.style.boxShadow = "inset 0 1px 0 rgba(148,163,184,0.1), 0 8px 32px rgba(30,58,138,0.08), 0 1px 4px rgba(0,0,0,0.2)";
              }}
            >
              <div className="text-2xl">{item.icon}</div>
              <span className="text-base text-slate-200">{item.name}</span>
            </div>
          ))}
        </div>
    </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
  );
};

export default Technologies;

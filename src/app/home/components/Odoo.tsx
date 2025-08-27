import React from "react";
import Image from "next/image";
import { ChevronRight, Zap, PenTool, BookOpen, LifeBuoy, Link, UserPlus, HelpCircle, Repeat, Smartphone, ShieldCheck, DollarSign, Briefcase, Award, MonitorSmartphone } from "lucide-react";

const techItems = [
  { 
    icon: <Zap size={18} />,
    title: "Odoo Implementation",
    desc: "Proper implementation is key to leveraging Odoo for your business success."
  },
  { 
    icon: <PenTool size={18} />,
    title: "Odoo Customization",
    desc: "Tailor Odoo features to fit your exact business needs with expert customization."
  },
  { 
    icon: <BookOpen size={18} />,
    title: "Odoo Training",
    desc: "Learn from top experts to master Odoo and boost your team's productivity."
  },
  { 
    icon: <LifeBuoy size={18} />,
    title: "Odoo Support",
    desc: "Reliable support to keep your Odoo running smoothly, anytime you need."
  },
  { 
    icon: <Link size={18} />,
    title: "Odoo Integration",
    desc: "Seamlessly connect Odoo with other tools and platforms, hardware and software."
  },
  { 
    icon: <UserPlus size={18} />,
    title: "Hire Odoo Developers",
    desc: "Access the best Odoo developers to accelerate your projects."
  },
  { 
    icon: <HelpCircle size={18} />,
    title: "Odoo Consultancy",
    desc: "Get expert advice on modules, partners, localization, and industry-specific solutions."
  },
  { 
    icon: <Repeat size={18} />,
    title: "Odoo Migration",
    desc: "Upgrade or switch your Odoo system with expert migration services."
  },
  { 
    icon: <Smartphone size={18} />,
    title: "Odoo Apps",
    desc: "Discover and deploy industry-leading Odoo applications."
  },
  { 
    icon: <ShieldCheck size={18} />,
    title: "Odoo Licensing",
    desc: "Optimize your licensing costs with tailored expert guidance."
  },
  { 
    icon: <DollarSign size={18} />,
    title: "Odoo Pricing",
    desc: "Simplify your understanding of Odoo's pricing models and options."
  },
  { 
    icon: <Briefcase size={18} />,
    title: "Odoo for Industries",
    desc: "Explore how Odoo fits various industries and business categories."
  },
  { 
    icon: <Award size={18} />,
    title: "Odoo Expertise",
    desc: "Leverage our global expertise across diverse sectors and countries."
  },
  { 
    icon: <MonitorSmartphone size={18} />,
    title: "Odoo Demo",
    desc: "Schedule a live demo to experience Odoo's capabilities firsthand."
  },
];

const Odoo = () => {
  return (
    <section className="relative bg-black text-gray-100 min-h-screen px-6 py-16 overflow-hidden">
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
      <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-blue-500/6 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-slate-400/6 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        {/* Centered Title Section at Top */}
        <div className="text-center mb-16 space-y-8">
          {/* Professional badge - matching Hero style */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-800/40 to-slate-700/30 border border-slate-600/30 rounded-full text-sm text-slate-300 backdrop-blur-sm">
            <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
            Enterprise Solutions Available
          </div>

          {/* Main heading with midnight blue gradient - centered */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-transparent bg-gradient-to-r from-slate-200/90 via-blue-200/70 to-slate-300/90 bg-clip-text drop-shadow-[0_2px_8px_rgba(30,58,138,0.6)]">
                Empower Your
              </span>
              <span className="block text-transparent bg-gradient-to-r from-blue-300/80 via-cyan-200/70 to-blue-400/80 bg-clip-text drop-shadow-[0_2px_12px_rgba(59,130,246,0.5)]">
                Business Growth with
              </span>
            </h1>
            <div className="flex items-center justify-center gap-3 mt-4">
              <Image
                src="/odoologo.svg"
                alt="Odoo"
                width={80}
                height={64}
                className="h-12 lg:h-16 w-auto object-contain drop-shadow-[0_2px_8px_rgba(30,58,138,0.3)]"
              />
            </div>
            <p className="text-slate-300/90 text-lg leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_8px_rgba(15,23,42,0.8)]">
              Transform your business operations with expert Odoo implementation, customization, and support from certified specialists worldwide.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button className="group relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg backdrop-blur-sm"
                    style={{
                      background: "linear-gradient(135deg, rgba(30,41,59,0.6) 0%, rgba(15,23,42,0.8) 50%, rgba(8,47,73,0.6) 100%)",
                      border: "1px solid rgba(51,65,85,0.4)",
                      boxShadow: "inset 0 1px 0 rgba(148,163,184,0.1), 0 8px 32px rgba(30,58,138,0.15), 0 1px 4px rgba(0,0,0,0.3)",
                    }}>
              <span className="relative z-10 flex items-center gap-2 text-slate-200 group-hover:text-white transition-colors duration-300">
                Innovate With Us
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-slate-400/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </button>
          </div>
        </div>

        {/* Odoo Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {techItems.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, rgba(30,41,59,0.15) 0%, rgba(15,23,42,0.25) 50%, rgba(8,47,73,0.15) 100%)",
                border: "1px solid rgba(51,65,85,0.3)",
                boxShadow: "inset 0 1px 0 rgba(148,163,184,0.1), 0 8px 32px rgba(30,58,138,0.08), 0 1px 4px rgba(0,0,0,0.2)",
              }}
            >
              {/* Refined ambient glow effect - matching Hero's subtlety */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-slate-500/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl transition-all duration-300"
                       style={{
                         background: "linear-gradient(135deg, rgba(51,65,85,0.25) 0%, rgba(30,41,59,0.35) 100%)",
                       }}>
                    <div className="text-slate-300">{item.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-slate-200 group-hover:text-slate-50 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <ChevronRight 
                  size={20} 
                  className="text-slate-500 group-hover:text-slate-300 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 ml-4" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Odoo;
import React from "react";
import { Briefcase, CheckCircle, ThumbsUp, Users } from "lucide-react";

const Contact = () => {
  return (
    <section className="relative min-h-screen py-20 bg-black overflow-hidden">
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
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-slate-400/6 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500/6 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left side - AI Agent inspired content */}
        <div className="flex flex-col justify-center space-y-8">
          {/* Professional badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-800/40 to-slate-700/30 border border-slate-600/30 rounded-full text-sm text-slate-300 backdrop-blur-sm w-fit">
            <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
            Development Solutions Available
          </div>

          {/* Main heading with midnight blue gradient */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-transparent bg-gradient-to-r from-slate-200/90 via-blue-200/70 to-slate-300/90 bg-clip-text drop-shadow-[0_2px_8px_rgba(30,58,138,0.6)]">
                Contact Our
              </span>
              <span className="block text-transparent bg-gradient-to-r from-blue-300/80 via-cyan-200/70 to-blue-400/80 bg-clip-text drop-shadow-[0_2px_12px_rgba(59,130,246,0.5)]">
                Development Team
              </span>
            </h1>
            <p className="text-slate-300/90 text-xl leading-relaxed max-w-lg drop-shadow-[0_2px_8px_rgba(15,23,42,0.8)]">
              Connect with our expert development team. We leverage cutting-edge technologies to transform your business processes.
            </p>
          </div>

          {/* Professional stats with midnight blue styling */}
          <div className="grid grid-cols-2 gap-4">
            <div className="group relative rounded-2xl p-6 backdrop-blur-sm transition-all duration-500"
              style={{
                background: "linear-gradient(135deg, rgba(30,41,59,0.15) 0%, rgba(15,23,42,0.25) 50%, rgba(8,47,73,0.15) 100%)",
                border: "1px solid rgba(51,65,85,0.3)",
                boxShadow: "inset 0 1px 0 rgba(148,163,184,0.1), 0 8px 32px rgba(30,58,138,0.08), 0 1px 4px rgba(0,0,0,0.2)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-slate-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-slate-700/30 rounded-lg">
                    <Briefcase className="w-6 h-6 text-slate-400" />
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-slate-600/30 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-bold text-slate-300">5+</h3>
                <p className="text-slate-400 text-sm">Years of Expertise</p>
              </div>
            </div>

            <div className="group relative rounded-2xl p-6 backdrop-blur-sm transition-all duration-500"
              style={{
                background: "linear-gradient(135deg, rgba(30,41,59,0.15) 0%, rgba(15,23,42,0.25) 50%, rgba(8,47,73,0.15) 100%)",
                border: "1px solid rgba(51,65,85,0.3)",
                boxShadow: "inset 0 1px 0 rgba(148,163,184,0.1), 0 8px 32px rgba(30,58,138,0.08), 0 1px 4px rgba(0,0,0,0.2)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-slate-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-slate-700/30 rounded-lg">
                    <Users className="w-6 h-6 text-slate-400" />
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-slate-600/30 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-bold text-slate-300">25+</h3>
                <p className="text-slate-400 text-sm">Developers</p>
              </div>
            </div>

            <div className="group relative rounded-2xl p-6 backdrop-blur-sm transition-all duration-500"
              style={{
                background: "linear-gradient(135deg, rgba(30,41,59,0.15) 0%, rgba(15,23,42,0.25) 50%, rgba(8,47,73,0.15) 100%)",
                border: "1px solid rgba(51,65,85,0.3)",
                boxShadow: "inset 0 1px 0 rgba(148,163,184,0.1), 0 8px 32px rgba(30,58,138,0.08), 0 1px 4px rgba(0,0,0,0.2)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-slate-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-slate-700/30 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-slate-400" />
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-slate-600/30 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-bold text-slate-300">50+</h3>
                <p className="text-slate-400 text-sm">Projects Delivered</p>
              </div>
            </div>

            <div className="group relative rounded-2xl p-6 backdrop-blur-sm transition-all duration-500"
              style={{
                background: "linear-gradient(135deg, rgba(30,41,59,0.15) 0%, rgba(15,23,42,0.25) 50%, rgba(8,47,73,0.15) 100%)",
                border: "1px solid rgba(51,65,85,0.3)",
                boxShadow: "inset 0 1px 0 rgba(148,163,184,0.1), 0 8px 32px rgba(30,58,138,0.08), 0 1px 4px rgba(0,0,0,0.2)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-slate-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-slate-700/30 rounded-lg">
                    <ThumbsUp className="w-6 h-6 text-slate-400" />
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-slate-600/30 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-bold text-slate-300">99%</h3>
                <p className="text-slate-400 text-sm">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Professional Chat Interface */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-lg">
            {/* Subtle accent rings */}
            <div className="absolute -top-10 -left-10 w-20 h-20 border border-slate-600/20 rounded-full"></div>
            <div className="absolute -bottom-10 -right-10 w-16 h-16 border border-slate-600/15 rounded-full"></div>
            
            {/* Main chat interface with professional styling */}
            <div className="relative rounded-3xl p-8 backdrop-blur-sm shadow-2xl shadow-black/50"
              style={{
                background: "linear-gradient(135deg, rgba(30,41,59,0.15) 0%, rgba(15,23,42,0.25) 50%, rgba(8,47,73,0.15) 100%)",
                border: "1px solid rgba(51,65,85,0.3)",
                boxShadow: "inset 0 1px 0 rgba(148,163,184,0.1), 0 8px 32px rgba(30,58,138,0.08), 0 1px 4px rgba(0,0,0,0.2)",
              }}
            >
              {/* Chat header */}
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-700/30">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-slate-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <h3 className="text-slate-300 font-semibold">Development Chat</h3>
                  <p className="text-slate-400 text-sm">Ready to help you build</p>
                </div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
              </div>

              {/* Chat message from team */}
              <div className="mb-6 p-4 bg-gradient-to-r from-slate-800/30 to-slate-700/20 border border-slate-600/20 rounded-2xl">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full flex items-center justify-center text-xs font-bold text-slate-300">
                    CX
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Hello! I&apos;m here to help you get started with our development solutions. What project are you working on?
                    </p>
                  </div>
                </div>
              </div>

              {/* Form inputs styled with midnight blue theme */}
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your name..."
                    className="w-full bg-slate-900/40 border border-slate-700/30 focus:border-slate-500/40 focus:ring-2 focus:ring-slate-500/20 rounded-xl px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email address..."
                    className="w-full bg-slate-900/40 border border-slate-700/30 focus:border-slate-500/40 focus:ring-2 focus:ring-slate-500/20 rounded-xl px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Phone number..."
                    className="w-full bg-slate-900/40 border border-slate-700/30 focus:border-slate-500/40 focus:ring-2 focus:ring-slate-500/20 rounded-xl px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <textarea
                    placeholder="Describe your project needs..."
                    rows={4}
                    className="w-full bg-slate-900/40 border border-slate-700/30 focus:border-slate-500/40 focus:ring-2 focus:ring-slate-500/20 rounded-xl px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                {/* Send button with professional styling */}
                <button className="w-full bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 hover:from-slate-600 hover:via-slate-500 hover:to-slate-600 text-slate-200 px-6 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-black/30 hover:shadow-slate-700/20 relative overflow-hidden group border border-slate-600/30">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span>Send to Development Team</span>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

              {/* Team response indicator */}
              <div className="mt-4 flex items-center gap-2 text-slate-500 text-sm">
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-slate-500 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-slate-500 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1 h-1 bg-slate-500 rounded-full animate-bounce delay-150"></div>
                </div>
                <span>Development team will respond within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
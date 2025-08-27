import { ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer: "We specialize in web application development, mobile app development, and Odoo ERP customization and implementation.",
  },
  {
    question: "Can you customize Odoo to fit our business needs?",
    answer: "Yes, we tailor Odoo modules to match your specific business workflows and requirements.",
  },
  {
    question: "How long does it take to build a custom web application?",
    answer: "Timelines vary depending on the complexity, but we typically deliver MVPs within 4-8 weeks.",
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes, we provide ongoing support, updates, and maintenance for all projects we develop.",
  },
  {
    question: "What industries have you worked with?",
    answer: "We've served clients in retail, logistics, healthcare, education, and manufacturing.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const router = useRouter(); 

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Modern heading with gradient */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-800/40 to-slate-700/30 border border-slate-600/30 rounded-full text-sm text-slate-300 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
            Common Questions
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-transparent bg-gradient-to-r from-slate-200/90 via-blue-200/70 to-slate-300/90 bg-clip-text drop-shadow-[0_2px_8px_rgba(30,58,138,0.6)]">
              Frequently Asked
            </span>
            <span className="block text-transparent bg-gradient-to-r from-blue-300/80 via-cyan-200/70 to-blue-400/80 bg-clip-text drop-shadow-[0_2px_12px_rgba(59,130,246,0.5)]">
              Questions
            </span>
          </h1>
          <p className="text-slate-300/90 text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(15,23,42,0.8)]">
            Find answers to the most common questions about our development solutions and services
          </p>
        </div>
        {/* Modern FAQ Items */}
        <div className="space-y-6">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-500"
                style={{
                  background: "linear-gradient(135deg, rgba(30,41,59,0.15) 0%, rgba(15,23,42,0.25) 50%, rgba(8,47,73,0.15) 100%)",
                  border: "1px solid rgba(51,65,85,0.3)",
                  boxShadow: "inset 0 1px 0 rgba(148,163,184,0.1), 0 8px 32px rgba(30,58,138,0.08), 0 1px 4px rgba(0,0,0,0.2)",
                }}
              >
                {/* Refined ambient glow effect - matching Hero's subtlety */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-slate-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <button
                  onClick={() => toggleFAQ(index)}
                  className="relative z-10 w-full flex justify-between items-center px-8 py-6 text-left transition-all duration-300"
                >
                  <span className="text-slate-200 font-medium text-lg pr-4 leading-relaxed">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0 ml-4">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r from-slate-700/50 to-slate-600/50 flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                      {isOpen ? (
                        <svg
                          className="h-5 w-5 text-slate-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                        </svg>
                      ) : (
                        <svg
                          className="h-5 w-5 text-slate-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                        </svg>
                      )}
                    </div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="relative">
                        <div className="h-px bg-gradient-to-r from-transparent via-slate-600/30 to-transparent"></div>
                        <div className="px-8 py-6 text-slate-400 leading-relaxed text-base">
                          {item.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <div className="relative rounded-3xl p-8 backdrop-blur-sm"
            style={{
              background: "linear-gradient(135deg, rgba(30,41,59,0.15) 0%, rgba(15,23,42,0.25) 50%, rgba(8,47,73,0.15) 100%)",
              border: "1px solid rgba(51,65,85,0.3)",
              boxShadow: "inset 0 1px 0 rgba(148,163,184,0.1), 0 8px 32px rgba(30,58,138,0.08), 0 1px 4px rgba(0,0,0,0.2)",
            }}
          >
            {/* Refined ambient glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-slate-500/8 rounded-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-slate-200 mb-3">
                Still have questions?
              </h3>
              <p className="text-slate-400 mb-8 max-w-md mx-auto">
                Our development experts are here to help you find the perfect solution for your business needs
              </p>
              
              <button
                onClick={() => router.push('/contact-us')}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 hover:from-slate-600 hover:via-slate-500 hover:to-slate-600 text-slate-200 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-black/30 hover:shadow-slate-700/20 border border-slate-600/30"
              >
                <span>Ask Our Experts</span>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

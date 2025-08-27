'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Step {
  number: string;
  title: string;
  points: string[];
}

interface DevelopmentData {
  developmentHeader: string;
  developmentParagraphs: string[];
  steps: Step[];
}

const Development = () => {
  const [data, setData] = useState<DevelopmentData | null>(null);

  useEffect(() => {
    const devData: DevelopmentData = {
      developmentHeader:
        'How We Developed an Engaging Spearfishing Academy Mobile App in the Middle East?',
      developmentParagraphs: [
        'Spearfishing is a deeply rooted tradition in many coastal regions of the Middle East, blending cultural heritage with adventure and sustainability. However, aspiring spearfishers often struggle to find structured, reliable training resources. The lack of accessible, formal education and certified instructors has created a significant gap in the sport’s ecosystem.',
        'While interest in spearfishing continues to grow—especially among younger, adventure-seeking audiences—there are very few platforms that offer comprehensive training, safety guidelines, and community engagement in one place. This disconnect between growing demand and limited learning infrastructure called for an innovative solution.',
        'Our mobile app was designed to bridge this gap by offering on-demand courses, interactive video tutorials, equipment guidance, and a regional leaderboard to connect enthusiasts across the Middle East. The goal was not just to teach, but to build a thriving digital community around the sport.',
      ],
      steps: [
        {
          number: '1',
          title: 'Design',
          points: ['Wireframing and Prototyping', 'User Journey Mapping'],
        },
        {
          number: '2',
          title: 'Development',
          points: ['API Integration & Backend', 'Architecture & Database Setup'],
        },
        {
          number: '3',
          title: 'Support & Maintenance',
          points: ['Quality Assurance Testing', 'Post-launch Monitoring'],
        },
      ],
    };

    setData(devData);
  }, []);

  if (!data) return <div className="p-10 text-gray-600">Loading...</div>;

  return (
    <div className="px-6 lg:px-20 py-16 bg-white text-gray-800">
        <div className=' max-w-7xl mx-auto'>
      <div className="flex gap-5">
        <motion.div
        initial={{ opacity: 0, scale: 1.2, x: -20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.6 }}
         className="flex justify-center items-start w-[50%]">
          <h3 className="text-3xl font-semibold mb-4">{data.developmentHeader}</h3>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, scale: 1.2, x: -20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.6 }}
         className="w-[50%]">
          {data.developmentParagraphs.map((text, idx) => (
            <p
              key={idx}
              className={`text-gray-600 leading-relaxed ${idx > 0 ? 'mt-4' : ''}`}
            >
              {text}
            </p>
          ))}
        </motion.div>
      </div>

      <div className="mt-20">
        <div className="flex flex-wrap gap-10 justify-between items-start">
          <div>
            <h2 className="text-4xl font-semibold mb-4">Our Process</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-5">
            {data.steps.map((step, index) => (
              <div key={index} className="relative">
                <span className="absolute -top-8 left-0 text-6xl lg:text-7xl font-bold text-gray-200 z-0">
                  {step.number}
                </span>
                <div className="relative z-10">
                  <h4 className="font-bold text-lg mb-4">{step.title}</h4>
                  <ul className="text-gray-700 space-y-2">
                    {step.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Development;

'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface JourneyData {
  title: string;
  paragraphs: string[];
  images: string[]; 
}

const Journey = () => {
  const [journeyData, setJourneyData] = useState<JourneyData | null>(null);

  useEffect(() => {
    const staticJourneyData: JourneyData = {
      title: "Code-ox's Development Journey with ISA",
      paragraphs: [
        "We began our development journey by identifying key challenges faced by beginners and enthusiasts in the spearfishing community. Our process started by diving into community forums, feedback from past training participants, and social media discussions to understand the real obstacles faced by aspiring spearfishers. These insights helped us step into the shoes of a learner and shaped how we approached the design of our academy’s digital experience.",
        "After analyzing the feedback and immersing ourselves in the user experience, we identified major pain points — including a lack of structured learning content, difficulty accessing essential safety information, and an overwhelming interface that discouraged beginners. Even small issues like unclear navigation and poor mobile responsiveness were affecting engagement.",
        "With a clearer understanding of where users were struggling and which parts of the platform needed attention, we moved on to reimagining the spearfishing academy’s digital experience. We revisited our course structure, reorganized the user flow, and began work on an intuitive interface that prioritized learning progression and safety.",
        "Given that spearfishing requires both skill and caution, our new design approach emphasized clarity, focus, and ease of access. We carefully selected typography, visuals, and layouts to ensure that learners could navigate the platform without distraction — whether they were reviewing gear tutorials, safety checklists, or booking dive sessions.",
      ],
      images: [
        "/nutri-1.png", 
        "/nutri-1.png", 
      ],
    };

    setJourneyData(staticJourneyData);
  }, []);

  if (!journeyData)  {
        return <div className="p-10 text-gray-600">Loading...</div>
  };

  return (
    <div className="px-6 lg:px-20 py-16 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto">
         <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-10">
            {journeyData.title}
          </h2>
        </motion.div>

        <div className="space-y-6 mb-12">
          {journeyData.paragraphs.map((para, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="text-lg leading-relaxed text-gray-700"
            >
              {para}
            </motion.p>
          ))}
        </div>
         <div className="flex flex-wrap justify-center py-2 gap-6">
        {journeyData.images.map((src, index) => (
            <motion.img
            key={index}
            src={src}
            alt={`Journey image ${index + 1}`}
            className="w-80 h-full object-cover rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            />
        ))}
        </div>

        {/* <div className="py-12 flex flex-wrap justify-between items-start">
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold">The Results</h2>
        </div>

        <div className="w-full lg:w-2/4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center lg:text-left">
            <div>
            <h3 className="text-4xl font-extrabold">50k+</h3>
            <p className="text-gray-600">App Downloads</p>
            </div>
            <div>
            <h3 className="text-4xl font-extrabold">30%</h3>
            <p className="text-gray-600">Conversion Rate<br />Increased</p>
            </div>
            <div>
            <h3 className="text-4xl font-extrabold">7secs</h3>
            <p className="text-gray-600">Screen Transition<br />Time Increased</p>
            </div>
        </div>
        </div> */}

      </div>
    </div>
  );
};

export default Journey;

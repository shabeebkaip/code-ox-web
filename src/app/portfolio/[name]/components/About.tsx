'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface InfoCard {
  label: string;
  value: string;
  type?: 'link';
}

interface AboutData {
  aboutText: string;
  infoCards: InfoCard[];
  images: string[];
}

const About = () => {
  const [data, setData] = useState<AboutData | null>(null);

  useEffect(() => {
    const staticData: AboutData = {
      aboutText: `A comprehensive mobile application for a spearfishing academy, designed to serve as a central hub for underwater enthusiasts. The platform offers a range of features including detailed course information, online enrollment, and booking for in-person or virtual training sessions. Users can explore various spearfishing courses tailored to all skill levels—from beginners to advanced divers—along with safety guidelines and certification options.

In addition to educational content, the platform fosters a vibrant community through forums, event calendars, and member profiles, allowing users to connect, share experiences, and organize group dives. Integrated tools such as dive logs, gear checklists, and location-based recommendations enhance the user experience, making the app an essential companion for anyone passionate about the sport of spearfishing.`,
      infoCards: [
        { label: 'Industry', value: 'Education', type: 'link' },
        {
          label: 'Services',
          value: 'Design, Development, Support & Maintenance',
        },
        { label: 'Business Type', value: 'Enterprise' },
        {
          label: 'Build your idea',
          value: 'Consult our experts',
          type: 'link',
        },
      ],
      images: ['/nutri-1.png', '/nutri-2.png', '/nutri-1.png', '/nutri-1.png'],
    };

    setData(staticData);
  }, []);

  if (!data) {
    return <div className="p-10 text-gray-600">Loading...</div>;
  }

  return (
    <div
      className="px-6 lg:px-20 py-16 bg-white text-gray-800"
    >
      <div className='max-w-7xl mx-auto'>
      <div className="flex justify-between gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 1.2, x: -20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-[50%]"
        >
          <h2 className="text-4xl font-semibold mb-4">About</h2>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            {data.aboutText}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.2, x: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 gap-y-8 p-5 text-sm w-[40%]"
        >
          {data.infoCards.map((card, index) => (
            <div key={index}>
              <h4 className="text-gray-400 text-lg mb-1">{card.label}</h4>
              <p
                className={`${
                  card.type === 'link'
                    ? 'text-blue-600 hover:underline cursor-pointer'
                    : 'text-gray-800 font-semibold'
                }`}
              >
                {card.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-20 px-6 lg:px-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {data.images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              className="flex justify-center"
            >
              <img
                src={src}
                alt={`image-${index}`}
                className="w-[400px] h-[400px] object-cover shadow-md"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
      </div>
    </div>
  );
};

export default About;

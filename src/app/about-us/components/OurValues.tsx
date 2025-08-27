


import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, MapPin, Shield, UserCheck } from 'lucide-react';

const data = [
 {
    id: '1',
    title: 'Innovation Solution',
    description: 'We specialize in delivering cutting-edge, forward-thinking solutions that empower businesses to innovate, adapt, and grow in an ever-evolving digital landscape. Our goal is to turn ideas into impactful results that drive measurable success.',
    icon: Lightbulb
  },
  {
    id: '2',
    title: 'Robust Security',
    description: 'Our security-first approach ensures that your data, systems, and users are protected through advanced encryption, regular audits, and industry-best protocols. Trust us to safeguard what matters most to your organization.',
    icon: Shield
  },
  {
    id: '3',
    title: 'Advance Tech',
    description: 'Harnessing the latest advancements in technology, we build high-performance web and mobile applications that are scalable, reliable, and tailored to meet the unique needs of modern businesses across industries.',
    icon: Code
  },
  {
    id: '4',
    title: 'Client Priority',
    description: 'Clients are at the core of everything we do. We strive to deeply understand their objectives, deliver exceptional service, and exceed expectations by offering solutions that are both innovative and personalized.',
    icon: UserCheck
  },
  {
    id: '5',
    title: 'Find',
    description: 'With our smart location and discovery solutions, we help users easily find services, places, and opportunities with precision and ease—bringing convenience and value to both businesses and consumers.',
    icon: MapPin
  },
];

const OurValues = () => {
  return (
    <div className="relative bg-black py-20 px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-white md:text-5xl text-3xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our <span className="text-[#6d03c2]">Values</span>
        </motion.h2>

      <div className="grid  grid-cols-1 gap-6 max-w-6xl mx-auto">
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group relative p-8 rounded-3xl bg-gradient-to-br  from-[#6d03c2]/20 to-[#21032c] backdrop-blur-md transition-all duration-300 shadow-md shadow-[#6d03c2]/30 cursor-pointer overflow-hidden"
          >
            <div className='flex flex-row gap-3 items-center '>
              <div>
            <div className="w-20 h-20  flex items-center justify-center  rounded-xl group-hover:scale-110 transition-transform duration-300">
              <item.icon className="w-8 h-8 text-white group-hover:text-[#6d03c2]" />
            </div>
            </div>
            <div>
            <h3 className="text-white text-xl sm:text-2xl font-semibold group-hover:text-[#6d03c2] transition-colors duration-300 mb-2">
              {item.title}
            </h3>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
              {item.description}
            </p>
            </div>
            </div>

            <div className="absolute inset-0 rounded-3xl opacity-100 transition-all duration-500 bg-gradient-to-tr from-[#6d03c2]/30 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurValues;



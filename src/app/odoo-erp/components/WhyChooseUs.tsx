import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface WhyChooseUsItem {
  _id: string;
  image: {
    fileUrl: string;
  };
  title: string;
  description: string;
}

interface WhyChooseUsProps {
  whyChooseUs: WhyChooseUsItem[];
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 100, 
    scale: 0.95,  // Slightly smaller
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, // Normal size
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    }
  }
};

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ whyChooseUs }) => {
  return (
    <div className="w-full mx-auto container py-10">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 p-5">
        {whyChooseUs?.map((item) => (
          <motion.div
            key={item._id}
            className="flex flex-col justify-center md:items-start items-center p-5 bg-white rounded-lg shadow-lg"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative w-[60px] h-[60px] mb-4">
              {item?.image.fileUrl && (
                <Image
                  src={item.image.fileUrl}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              )}
            </div>
            <h1 className="text-black font-semibold text-lg mb-2">
              {item.title}
            </h1>
            <p className="text-[#9CA3AF] text-center md:text-start">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;

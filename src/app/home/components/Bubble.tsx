import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import bubble from '../../../assets/svg/bubble.svg';

const Bubble = () => {
  return (
    <motion.div
      className="absolute top-[-10%] left-[30%] h-[180px] w-[180px] sm:top-[-5%] sm:left-[20%] sm:h-[200px] sm:w-[200px] md:top-[-25%] md:left-[25%] md:h-[220px] md:w-[220px] lg:top-[-15%]  xl:top-[-18%] 2xl:top-[-12%] lg:left-[30%] lg:h-[250px] lg:w-[250px] xl:h-[280px] xl:w-[280px] 2xl:h-[300px] 2xl:w-[300px]"
      animate={{
        y: ["0%", "-10%", "0%"],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 0.5,
      }}
    >
      <Image
        src={bubble}
        alt="Bubble"
        fill
        className="object-contain"
        sizes="(max-width: 640px) 150px, (max-width: 768px) 200px, (max-width: 1024px) 250px, 300px"
      />
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400 text-[25px] sm:text-[28px] md:text-[30px] lg:text-[40px] xl:text-[48px] whitespace-nowrap font-bold">
        Our products
      </span>
    </motion.div>
  );
};

export default Bubble;

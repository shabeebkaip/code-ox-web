import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import gradientglass from "../../../assets/png/gradientglass.png";
import cubeGlass1 from "../../../assets/png/cubeGlass1.png";

type ServiceData = {
  title: string;
};

type ServiceCardItem = {
  title: string;
  description: string;
};

type ServicesProps = {
  serviceData: ServiceData;
  serviceCardData: ServiceCardItem[];
};

const Services: React.FC<ServicesProps> = ({ serviceData, serviceCardData }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div ref={ref} className="relative">
      <motion.div
        className="absolute top-[12%] right-[6px] w-[5%] h-[5%]"
        animate={{
          y: [0, -15, 0, 10, 0],
          scale: [1, 1.03, 1, 0.97, 1],
          rotate: [0, 1, 0, -1, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <Image
          src={gradientglass}
          alt="gradientglass"
          width={450}
          height={450}
          className="object-contain"
        />
      </motion.div>

      <div className="md:absolute bottom-0 left-[0%] w-[5%] h-[5%] hidden">
        <Image
          src={cubeGlass1}
          alt="Orb"
          width={450}
          height={450}
          className="object-contain opacity-50"
        />
      </div>

      {/* Animated Container */}
      <motion.div
        className="w-full mx-auto container md:p-5 p-2"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="flex flex-col justify-around items-center md:p-4 p-0 mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="text-5xl mb-8 font-bold  text-[#A3A3A3]">Services.</h1>
          <p
            className="text-[#A3A3A3] text-center font-light text-base md:text-lg lg:text-xl leading-7 md:leading-8 lg:leading-10 w-[90%] md:w-[85%] lg:w-[80%]"
            dangerouslySetInnerHTML={{ __html: serviceData?.title }}
          ></p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 grid-cols-1 gap-5 text-center md:px-0 px-3"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {serviceCardData?.map((item, index) => (
            <motion.div
              key={index}
              className="md:p-8 p-5 rounded-4xl border-t-1 border-t-black border-r-1 border-r-black border-b-1 border-b-[#9CA3AF] border-l-1 border-l-[#9CA3AF]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.5 + index * 0.2, // Staggered animation for cards
                ease: "easeOut",
              }}
            >
              <h1 className="font-semibold mb-2 text-[#494949]">{item.title}</h1>
              <p className="text-[#A3A3A3] text-lg">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
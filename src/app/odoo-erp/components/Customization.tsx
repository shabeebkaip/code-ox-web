import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface OdooCustomization {
  title: string;
}

interface Props {
  customizationData: OdooCustomization | null;
}

const Customization: React.FC<Props> = ({ customizationData }) => {
  const ref = useRef(null); 
  const isInView = useInView(ref, { once: false }); 

  if (!customizationData) return null;

  return (
    <div ref={ref} className="relative">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full h-full bg-white">
          <div className="absolute bottom-0 left-0 w-[50%] h-[100%] bg-gradient-to-tr from-gray-700 via-gray-100 to-transparent opacity-15 transform"></div>
          <div className="absolute bottom-0 right-0 w-[50%] h-[100%] bg-gradient-to-tl from-gray-700 via-gray-100 to-transparent opacity-15 transform"></div>
        </div>
      </motion.div>
      <motion.div
        className="relative w-full mx-auto container lg:h-[60vh] h-full flex flex-col justify-center overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative z-10 flex flex-col justify-center items-center p-5">
          <motion.h1
            className="bg-gradient-to-r from-[#AFAFAF] to-[#494949] inline-block text-transparent bg-clip-text text-4xl lg:text-5xl xl:text-6cl font-bold mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Odoo Customization For Manufacture.
          </motion.h1>
          <motion.p
            className="text-[#9CA3AF] md:text-center text-start sm:text-base text-sm md:text-lg lg:text-xl leading-7 md:leading-8 lg:leading-9 w-[90%] md:w-[85%] lg:w-[80%]"
            dangerouslySetInnerHTML={{ __html: customizationData.title }}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          ></motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Customization;
import React from "react";
import Image from "next/image";
import cubeGlass1 from "../../../assets/png/cubeGlass1.png";
import { motion, Variants  } from "framer-motion";

interface WhyChooseOdooItem {
  description: string;
}

interface WhyChooseOdooProps {
  whyChoosData: WhyChooseOdooItem[];
}

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const cubeImageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 0.5,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
  float: {
    y: [0, -40, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};



const WhyChooseOdoo: React.FC<WhyChooseOdooProps> = ({ whyChoosData }) => {

  return (
    <div className=" relative">
      <div className="mx-auto container w-full  h-auto py-16">
      <motion.div 
          className="absolute left-[-15%] md:left-[-13%] lg:left-[-12%] xl:left-[-8%] 2xl:left-[-5%] top-[10%] lg:top-[33%] xl:top-[35%] hidden sm:block"
          variants={cubeImageVariants}
          initial="hidden"
          animate={["visible", "float"]}
        >
          <Image
            src={cubeGlass1}
            alt="cubeGlass1"
            width={250}
            height={250}
            className="object-contain"
          />
        </motion.div>

        <div className="lg:hidden">
          <div className="absolute top-[20%] bottom-[14%] right-[90%] w-[2px] bg-black " >

          </div>
          <div className="absolute top-[20%] left-[10%]  right-[82%]  h-[2px] bg-black ">

          </div>
          <div className="absolute top-[36%] left-[10%]  right-[82%]  h-[2px] bg-black ">

          </div>
          <div className="absolute top-[53%] left-[10%]  right-[82%]  h-[2px] bg-black ">

          </div>
          <div className="absolute bottom-[31%] left-[10%]  right-[82%]  h-[2px] bg-black ">

          </div>
          <div className="absolute bottom-[14%] left-[10%]  right-[82%]  h-[2px] bg-black ">

          </div>

        </div>
        <div className="hidden lg:block">
          <div className="absolute top-[52%] bottom-[45%] right-[82%] xl:right-[78%] 2xl:right-[67%] w-[2px] bg-black " />
          <div className="absolute top-[52%] bottom-[45%] right-[50%] xl:right-[50%] 2xl:right-[50%] w-[2px] bg-black " />
          <div className="absolute top-[52%] bottom-[45%] right-[18%] xl:right-[23%] 2xl:right-[32%] w-[2px] bg-black " />

          <div className="absolute top-[55%] bottom-[42%] right-[34%] xl:right-[36%] 2xl:right-[41%] w-[2px] bg-black " />
          <div className="absolute top-[55%] bottom-[42%] right-[66%] xl:right-[63%] 2xl:right-[59%] w-[2px] bg-black " />

          <div className="absolute top-[55%] left-[10%] 2xl:left-[22%] right-[10%] 2xl:right-[22%] h-[2px] bg-black " />
        </div>

        <div className="flex flex-col justify-items-center items-center">
          <h1 className="pb-5 bg-gradient-to-r from-[#AFAFAF] to-[#494949] inline-block text-transparent bg-clip-text md:text-5xl text-4xl font-bold">
            Why Choose Odoo?
          </h1>

          <motion.div
            className="relative flex flex-wrap justify-end lg:justify-center gap-10 lg:gap-16 py-10 mx-auto container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible" 
          >
            {whyChoosData?.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col w-[80%] lg:w-[25%] items-start border-[#E7DAED] border-1 rounded-2xl p-4 bg-white mr-5 md:mr-0"
                variants={itemVariants}
              >
                <p className="text-[#718096] text-md xl:text-xl">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default WhyChooseOdoo;

import React, { useEffect } from "react";
import Image from "next/image";
import tick from "../../../assets/svg/tick.svg";
import glassBubble from "../../../assets/png/glassBubble.png";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

type RevolutionizingItem = {
  description: string;
};

type RevolutionProps = {
  revolutionizingData: RevolutionizingItem[];
};

const Revolution: React.FC<RevolutionProps> = ({ revolutionizingData }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Unique staggered "wave" effect for the text items
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Unique "elastic" entry for the bubble
  const bubbleVariants: Variants = {
    hidden: { 
      scale: 0.2, 
      opacity: 0,
      rotate: -20,
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.5,
        repeat: Infinity,
        repeatType: "loop",
      }
    }
  };

  // "Typing" effect for the headings
  const headingVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut"
      }
    }
  };

  // Custom "slide and reveal" for list items
  const itemVariants: Variants = {
    hidden: { 
      x: -40, 
      opacity: 0,
      filter: "blur(5px)"
    },
    visible: { 
      x: 0, 
      opacity: 1,
      filter: "blur(0px)",
      transition: { 
        type: "spring", 
        stiffness: 60,
        duration: 0.8 
      }
    }
  };

  // Unique hover effect for tick icons
  const tickVariants: Variants = {
    hidden: { scale: 0, rotate: -45 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 10 
      }
    },
    hover: { 
      scale: 1.15, 
      rotate: [0, 5, -5, 0],
      transition: { 
        duration: 0.5,
        ease: "easeOut" 
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={controls}
      className="mx-auto container w-full lg:h-[50vh] h-full flex flex-col justify-center p-5"
    >
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="text-[#494949] relative">
          <motion.h1 
            variants={headingVariants}
            className="text-xl md:text-2xl lg:text-3xl xl:text-4xl md:pb-6 pb-2"
          >
            CODE-OX + ODOO
          </motion.h1>
          
          <motion.h2 
            variants={headingVariants}
            className="text-xl md:text-2xl lg:text-3xl xl:text-4xl"
          >
            Revolutionizing Business Efficiency.
          </motion.h2>
          
          <motion.div 
            animate={{
              translateX: ['0%', '-130%', '0%'],
              rotate: [0, 10, -90, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.1,
            }}
            className="absolute top-[-15%] md:top-[-2%] lg:top-[-5%] xl:top-[-15%] right-[20%] w-[13%] h-[35%] xl:w-[180px] xl:h-[180px]"
          >
            <Image
              src={glassBubble}
              alt="glassBubble"
              width={100}
              height={100}
              className="object-contain w-full h-auto"
            />
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          className="md:pt-0 pt-8 md:px-8 px-0 flex flex-col gap-3"
        >
          {revolutionizingData?.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="flex flex-row gap-4"
            >
              <motion.div
                variants={tickVariants}
                whileHover="hover"
              >
                <Image
                  src={tick}
                  alt="tick"
                  width={100}
                  height={100}
                  className="object-contain lg:h-[40px] lg:w-[40px] md:w-[70px] h-[30px] w-[35px] cursor-pointer"
                />
              </motion.div>
              <motion.p 
                className="text-[#9CA3AF] sm:leading-8 leading-6 md:text-xl text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Revolution;
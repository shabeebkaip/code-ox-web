'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import cube from "../../../assets/svg/leftCube.png";
import curve from "../../../assets/svg/bannerGradient.png";
import bubble from "../../../assets/png/glassBubble.png";
import { motion } from 'framer-motion';

type BannerData = {
  image?: {
    fileUrl?: string;
  };
};


const BannerSection: React.FC<{ bannerData: BannerData }> = ({ bannerData }) => {
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-[100vh] lg:h-screen pt-[60px] md:mt-[140px] mb-[-350px] sm:mb-[-170px] md:mb-[-100px] lg:mb-[0]">
      <motion.div
        className="absolute top-[-5%] sm:top-[-4%] md:top-[-5%] left-0 z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -5, 0, 5, 0],
          rotate: [0, 2, 0, -2, 0],
        }}
        transition={{
          opacity: { duration: 0.8 },
          x: { duration: 0.8 },
          y: { repeat: Infinity, duration: 8, ease: "easeInOut" },
          rotate: { repeat: Infinity, duration: 10, ease: "easeInOut" },
        }}
      >
        <div className="h-[110px] w-[88px] sm:h-[125px] sm:w-[100px] md:h-[50%] md:w-[50%] lg:w-[60%]">
          <Image
            src={curve}
            alt="Curve"
            width={200}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>


      <motion.div
        className="absolute top-[-8%] sm:top-[-9%] md:top-[-15%] right-1 z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -3, 0, -3, 0],
          rotate: [0, -1.5, 0, 1.5, 0]
        }}
        transition={{
          opacity: { duration: 0.8 },
          x: { duration: 0.8 },
          y: { repeat: Infinity, duration: 8, ease: "easeInOut" },
          rotate: { repeat: Infinity, duration: 12, ease: "easeInOut" }
        }}
      >
        <div className="w-[80px] sm:w-[90px] md:w-[130px] lg:w-[140px] xl:w-[180px] 2xl:w-[220px]">
          <Image
            src={cube}
            alt="Cube"
            width={400}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>

      <motion.div className="absolute z-20 
    w-[180px] sm:w-[250px] md:w-[330px] lg:w-[360px] xl:w-[450px] 2xl:w-[550px] 
    left-[70%] sm:left-[74%] md:left-[68%] lg:left-[70%] xl:left-[65%] 
    top-[14%] sm:top-[17%] md:top-[20%] lg:top-[18%] xl:top-[28%] 
    transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          translateX: ['0%', '-50%', '0%'],
        }}
        transition={{
          duration: isMobile ? 4 : 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}>
        <Image
          src={bubble}
          alt="Glass Bubble"
          width={500}
          height={500}
          className="w-full h-auto object-contain"
          priority
        />
      </motion.div>

      {/* Main Banner Content */}
      <div className="relative flex justify-center items-start h-full z-30">
        <div className="h-[45%] sm:h-[70%] md:h-[80%] lg:h-full flex justify-center items-center md:w-[90%] xl:w-[60%] 2xl:w-[50%]">
          {bannerData?.image?.fileUrl ? (
            <Image
              src={bannerData.image.fileUrl}
              alt="Banner"
              width={900}
              height={1000}
              className="object-contain h-full w-auto relative"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
'use client';

import SwiperSlider from "@/app/shared/SwiperSlider";
import React from "react";
import { SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import Image from "next/image";

interface SliderImage {
  _id: string;
  image: {
    fileUrl: string;
  };
}

interface NutriSliderProps {
  slides: SliderImage[];
}

const NutriSlider: React.FC<NutriSliderProps> = ({ slides }) => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-8 relative">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <SwiperSlider
              slidesPerViewMobile={1}
              slidesPerViewTablet={1}
              slidesPerViewDesktop={1}
              spaceBetween={20}
              centeredSlides={true}
            >
              {slides.map((item, index) => (
                <SwiperSlide key={item._id || index}>
                  <motion.div
                    className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden bg-white"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Image
                      src={item.image.fileUrl}
                      alt={`nutri-slide-${index}`}
                      fill
                      className="object-contain"
                      unoptimized
                      priority
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </SwiperSlider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutriSlider;

'use client';

import React, { useEffect, useState } from "react";
import { Swiper } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface SwiperSliderProps {
  children: React.ReactNode;
  slidesPerViewMobile?: number;
  slidesPerViewTablet?: number;
  slidesPerViewDesktop?: number;
  spaceBetween?: number;
  centeredSlides?: boolean;
}

const SwiperSlider: React.FC<SwiperSliderProps> = ({
  children,
  slidesPerViewMobile = 1,
  slidesPerViewTablet = 2,
  slidesPerViewDesktop = 3,
  spaceBetween = 30,
  centeredSlides = false,
}) => {

  const [delay, setDelay] = useState(4000);

  useEffect(() => {
    const updateDelay = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDelay(1500);
      } else {
        setDelay(4000);
      }
    };

    updateDelay();
    window.addEventListener("resize", updateDelay);
    return () => window.removeEventListener("resize", updateDelay);
  }, []);
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        loop
        autoplay={{ delay, disableOnInteraction: false }}
        centeredSlides={centeredSlides}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: slidesPerViewMobile,
            spaceBetween,
            centeredSlides,
          },
          640: {
            slidesPerView: slidesPerViewTablet,
            spaceBetween,
            centeredSlides,
          },
          1024: {
            slidesPerView: slidesPerViewDesktop,
            spaceBetween,
            centeredSlides,
          },
        }}
      >
        {children}
        <div className="swiper-pagination mt-10 !relative !z-0" />
      </Swiper>
    </div>
  );
};

export default SwiperSlider;

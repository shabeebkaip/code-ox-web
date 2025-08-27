'use client';

import React from "react";
import Image from "next/image";
import SwiperSlider from "@/app/shared/SwiperSlider";
import { SwiperSlide } from "swiper/react";

interface ClientImage {
  image: {
    fileUrl: string;
  };
}

interface ClientProps {
  clientData: ClientImage[];
}

const Client: React.FC<ClientProps> = ({ clientData }) => {

  return (
    <div className="w-full md:h-[45vh] h-full">
      <SwiperSlider
        slidesPerViewMobile={1}
        slidesPerViewTablet={2}
        slidesPerViewDesktop={4}
        spaceBetween={20}
        centeredSlides={false}
      >
        {clientData?.map((img, index) => (
          <SwiperSlide key={index} className="!flex !justify-center">
            <Image
              src={img?.image?.fileUrl}
              alt={`Client ${index + 1}`}
              width={200}
              height={200}
              className="object-contain w-[200px] h-[200px]"
            />
          </SwiperSlide>
        ))}
      </SwiperSlider>
    </div>
  );
};

export default Client;

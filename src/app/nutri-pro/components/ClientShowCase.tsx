'use client';
import React from 'react';
import { SwiperSlide } from 'swiper/react';
import SwiperSlider from '@/app/shared/SwiperSlider';
import Image from 'next/image';

interface ClientShowcaseProps {
  titleData: {
    title: string;
    description: string;
  };
  testimonials: {
    _id: string;
    image: {
      fileUrl: string;
      id: string;
    };
    message: string;
    name: string;
    designation: string;
  }[];
}

const ClientShowcase: React.FC<ClientShowcaseProps> = ({ titleData, testimonials }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            {titleData?.title}
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            {titleData?.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <SwiperSlider
            slidesPerViewMobile={1}
            slidesPerViewTablet={1}
            slidesPerViewDesktop={2}
            spaceBetween={30}
            centeredSlides={false}
          >
            {testimonials.map((client) => (
              <SwiperSlide key={client._id}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in flex flex-col items-center justify-center">
                  {/* Image */}
                  <div className="flex justify-center mb-6">
                    <div className="w-32 h-16 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                      {client.image?.fileUrl && (
                        <Image
                          src={client.image.fileUrl}
                          alt={`${client.name} image`}
                          className="object-contain"
                          width={128}
                          height={64}
                        />
                      )}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <blockquote
                    className="text-gray-700 text-lg leading-relaxed mb-6 text-center italic overflow-hidden"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 5,
                      WebkitBoxOrient: 'vertical',
                      height: '120px',
                    }}
                  >
                    "{client.message}"
                  </blockquote>

                  <div className="text-center">
                    <div className="font-semibold text-gray-800">{client.name}</div>
                    <div className="text-gray-600 text-sm">{client.designation}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </SwiperSlider>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;

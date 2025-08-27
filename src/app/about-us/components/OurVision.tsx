import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface OurVisionItem {
  point: string;
  image?: {
    fileUrl: string;
  };
  description: string;
}

const OurVision = ({ data }: { data: OurVisionItem[] }) => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center">
        <h2 className="bg-gradient-to-r from-[#848282] to-[#AFAFAF] inline-block text-transparent bg-clip-text font-bold mb-10 md:text-5xl text-3xl">
          Our Vision
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        {data?.map((item, index) => (
          <motion.div
            key={item.image?.fileUrl || index}
            className="flex flex-col items-center text-center rounded-2xl p-5 gap-5 border-2 border-gray-200"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{  amount: 0.1 }}
            transition={{
              delay: index * 0.2,
              duration: 0.6,
              ease: 'easeOut',
            }}
          >
            <div className="w-24 h-24 relative rounded-full overflow-hidden">
              {item.image?.fileUrl ? (
                <Image
                  src={item.image.fileUrl}
                  alt="Vision image"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200" />
              )}
            </div>

            <h3
              className="text-lg md:text-xl font-semibold text-gray-600"
              dangerouslySetInnerHTML={{ __html: item.point }}
            />
            <p className="text-base text-gray-500">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurVision;

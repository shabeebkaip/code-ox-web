'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

interface OurMissionItem {
    point: string;
    image?: {
        fileUrl: string;
    };
    description: string;
}

const cardVariant = {
    offscreen: {
        opacity: 0,
        scale: 0.8,
        rotate: -4,
    },
    onscreen: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            type: 'spring',
            bounce: 0.4,
            duration: 0.8,
        },
    },
};

const OurMission = ({ data }: { data: OurMissionItem[] }) => {
    return (
        <div className="container mx-auto px-4 py-10 text-center">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#848282] to-[#AFAFAF] inline-block text-transparent bg-clip-text font-bold mb-10 md:text-5xl text-3xl"
            >
                Our Mission
            </motion.h2>

            <div className="grid gap-20 sm:grid-cols-2 max-w-5xl mx-auto">
                {data?.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariant}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.3 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-white rounded-2xl p-6 flex flex-col items-center text-center gap-5 transition-all duration-300 cursor-pointer"
                    >
                        <div className="w-24 h-24 relative">
                            {item?.image?.fileUrl && (
                                <Image
                                    src={item.image.fileUrl}
                                    alt="mission"
                                    fill
                                    className="object-cover rounded-full"
                                />
                            )}
                        </div>
                        <h3
                            className="text-lg md:text-xl font-semibold text-gray-700"
                            dangerouslySetInnerHTML={{ __html: item.point }}
                        />
                        <p className="text-md md:text-lg text-gray-600">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default OurMission;

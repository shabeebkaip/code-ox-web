import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import glassBubble from '../../../assets/png/glassBubble.png';
import dispersion_glass_5_copy_6 from '../../../assets/png/dispersion_glass_5_copy_6.png';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image?: {
    fileUrl: string;
  };
}

const OurTeam = ({ data }: { data: TeamMember[] }) => {
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const threshold = isMobile ? 0.1 : 0.3;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredViewport(true);
        }
      },
      {
        threshold,
        rootMargin: '200px 0px'
      }
    );

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, [isMobile]);

  return (
    <div
      ref={sectionRef}
      className="relative bg-black py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* <motion.div
        className="absolute top-[1%] md:top-[3%] lg:top-[4%] 2xl:right-[33%] xl:right-[28%] lg:right-[23%] md:right-[18%] sm:right-[15%] right-[5%] z-0"
        animate={{
          opacity: hasEnteredViewport ? 1 : 0,
          translateX: ['-20%', '-70%', '-20%'],
          rotate: [0, 10, -90, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: isMobile ? 0.05 : 0.1,
        }}
      >
        <Image src={glassBubble} alt="glassBubble" width={150} height={150} />
      </motion.div>


      <motion.div
        className="absolute bottom-[10%] left-[-2px]"
        animate={{
          opacity: hasEnteredViewport ? 1 : 0,
          translateY: ['0%', '-50%', '0%', '50%', '0%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: isMobile ? 2 : 3,
        }}
      >
        <Image src={dispersion_glass_5_copy_6} alt="dispersion_glass_5_copy_6" width={100} height={100} />
      </motion.div> */}


      {/* Section Title */}
      <motion.div
        className="relative text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: hasEnteredViewport ? 1 : 0 }}
        transition={{ duration: 0.5, delay: isMobile ? 0.2 : 0.3 }}
      >
        <h2 className="text-white font-semibold md:text-[58px] sm:text-[36px] text-[36px]">
          Meet Our Team
        </h2>
      </motion.div>

      {/* Team Members */}
      <div className="relative overflow-hidden w-full max-w-7xl mx-auto">
        <motion.div
          className="flex w-max gap-10 animate-scroll"
          initial={{ x: 0 }}
          animate={{ x: ['0%', '-50%'] }}
            transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30, // adjust speed
            ease: 'linear',
          }}
        >
          {[...data, ...data].map((member, index) => (
            <div
              key={`${member.id}-${index}`}
              className="flex flex-col items-center text-center min-w-[200px]"
            >
              <div className="w-40 h-45 relative rounded-lg overflow-hidden mb-2">
              {member?.image?.fileUrl && (
                <Image
                  src={member.image.fileUrl}
                  alt={member.name}
                  className='object-cover'
                  width={1000}
                  height={1000}
                />
              )}
            </div>
            <h3 className="text-md font-semibold text-white">{member.name}</h3>
            <p className="text-sm text-white/80">{member.role}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurTeam;

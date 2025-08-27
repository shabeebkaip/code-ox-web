'use client'

import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const timelineData = [
  {
    year: '2021',
    description:
      'Our journey began in 2021 with just 3 passionate individuals and a shared vision to create meaningful digital solutions. Starting small, we focused on building trust, delivering quality, and laying a strong foundation for growth.',
    image: '/isaportfolio.jpg',
    stats: { employees: '3', projects: '1', countries: '1' },
  },
  {
    year: '2022',
    description:
      'We secured our first few clients and expanded our services across different industries. With a growing reputation for reliability and creativity, our small team began to scale and deliver impactful work.',
    image: '/isaportfolio.jpg',
    stats: { employees: '8', projects: '6', countries: '2' },
  },
  {
    year: '2023',
    description:
      'Our solutions reached new markets as we took on more complex projects and international clients. We grew steadily, built new partnerships, and enhanced our technical capabilities.',
    image: '/isaportfolio.jpg',
    stats: { employees: '15', projects: '16', countries: '4' },
  },
  {
    year: '2024',
    description:
      'With a portfolio of successful projects across multiple countries, our brand began to gain recognition for innovation and quality. We focused on refining our processes and expanding our international presence.',
    image: '/isaportfolio.jpg',
    stats: { employees: '20', projects: '30', countries: '6' },
  },
  {
    year: '2025',
    description:
      'Today, we are a growing team of 25 professionals, delivering technology solutions across 7 countries. Our mission remains to drive innovation, empower businesses, and create a lasting impact through our work.',
    image: '/isaportfolio.jpg',
    stats: { employees: '25', projects: '50+', countries: '7' },
  },
]


const Story = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

 useEffect(() => {
  let hasScrolled = false

  const handleScroll = () => {
    if (!hasScrolled) {
      hasScrolled = true
      return
    }

    const scrollY = window.scrollY
    const viewportHeight = window.innerHeight
    const maxScroll = (timelineData.length - 1) * viewportHeight
    
    // Calculate progress (0 to 1)
    const progress = Math.min(scrollY / maxScroll, 1)
    setScrollProgress(progress)
    
    const newIndex = Math.min(
      Math.floor(scrollY / viewportHeight),
      timelineData.length - 1
    )
    setActiveIndex(newIndex)
  }

  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])

  return (
    <div className="relative h-[500vh] bg-black text-white">
      {/* <div className=" w-full flex flex-col items-center text-center bg-black z-20 py-10">
        <h2 className="text-4xl font-bold mb-2">A <span className='text-[#6d03c2]'>timeline</span> of our journey</h2>
        <p className="text-gray-400 text-lg">Close to five years of driving growth, innovation, and meaningful impact.</p>
      </div> */}
      <div className="sticky top-0 md:top-5 h-screen flex items-center justify-center">
        <div className="w-[90%] h-[80%]  rounded-lg flex flex-col md:flex-row overflow-hidden shadow-xl">
          {/* Left Content */}
          <div className="w-full md:w-1/2 p-5 flex flex-col justify-center z-10">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-7xl text-[#6d03c2]/80 font-bold md:mb-6">
                {timelineData[activeIndex].year}
              </h1>
              <p className="text-white md:mb-6 text-lg md:text-2xl leading-relaxed">
                {timelineData[activeIndex].description}
              </p>
              {/* <div className="flex gap-8 text-sm mt-4 text-[#6d03c2]">
                <div>
                  <p className="text-white text-[18px] md:text-[20px]">Employees</p>
                  <p className="text-[20px] md:text-[24px] font-semibold">
                    {timelineData[activeIndex].stats.employees}
                  </p>
                </div>
                <div>
                  <p className="text-white text-[18px] md:text-[20px]">Projects</p>
                  <p className="text-[20px] md:text-[24px] font-semibold">
                    {timelineData[activeIndex].stats.projects}
                  </p>
                </div>
                <div>
                  <p className="text-white text-[18px] md:text-[20px]">Countries</p>
                  <p className="text-[20px] md:text-[24px] font-semibold">
                    {timelineData[activeIndex].stats.countries}
                  </p>
                </div>
              </div> */}
            </motion.div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2  md:relative flex items-center justify-center">
            {/* Simple Scroll Bar */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
              <div className="w-1 h-[340px] bg-gray-800 relative rounded-full overflow-hidden">
                <motion.div
                  className="bar"
                  animate={{
                    transform: `translate3d(0px, ${scrollProgress * (340 - 80)}px, 0px)`
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="md:absolute md:inset-0 flex items-center justify-center"
              >
                <img
                  src={timelineData[activeIndex].image }
                  alt={`Timeline ${timelineData[activeIndex].year}`}
                  className="w-full md:w-[80%] h-[250px] md:h-[400px] object-cover rounded-lg"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story
import React from 'react'
import { Target, Eye} from 'lucide-react'

const MissionVision = () => {
  return (
    <div className="px-6 py-16 bg-black text-white">
      {/* <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Purpose & Direction
        </h1>
      </div> */}

      <div className="space-y-16 max-w-7xl mx-auto flex gap-8">
        {/* Mission Section */}
        
        <section className='w-[50%]'>
          <div className="mb-6 flex flex-col gap-4">
            {/* <div className="w-14 h-14 bg-[#6d03c2] rounded-full flex items-center justify-center">
              <Target className="w-7 h-7 text-white" />
            </div> */}
            <div>
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              <p className="text-[#6d03c2] font-medium">What We Do</p>
            </div>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed">
           At Code-Ox, we believe in empowering businesses with complete digital transformation by engineering groundbreaking and scalable solutions. Our mission is to tackle every tech challenge and pave the path for fresh opportunities and positive ROIs.
          </p>
        </section>

        {/* Vision Section */}
        <section className='w-[50%]'>
          <div className="mb-6 flex flex-col gap-4">
            {/* <div className="w-14 h-14 bg-[#6d03c2] rounded-full flex items-center justify-center">
              <Eye className="w-7 h-7 text-white" />
            </div> */}
            <div>
              <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              <p className="text-[#6d03c2] font-medium">Where We're Going</p>
            </div>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed">
            We believe in charting the path to technological innovation in every aspect. From driving business growth to pioneering cutting-edge solutions that transform industries, we catalyze the tech revolution.
          </p>
        </section>
      </div>
    </div>
  )
}

export default MissionVision

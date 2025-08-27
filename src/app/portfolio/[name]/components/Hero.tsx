"use client"
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'

const Hero = () => {
  const router = useRouter();

  return (
    <div className="relative bg-blue-400 w-full h-[60vh] md:h-[100vh] overflow-hidden"
     style={{ backgroundImage: "url('/isa1.png')" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/20 z-0 "></div>
     

      <div className="absolute inset-0  flex flex-col gap-10 justify-center items-center text-center px-4">
        <div> 
          <h1 className="text-white text-4xl md:text-6xl font-bold">International Spearfishing Academy</h1>
          </div>
        <div>
        <button
        onClick={()=>{router.push("/contact-us")}}
         className='group relative flex items-center px-6 py-2 text-xl font-medium underline hover:cursor-pointer'>
          Expand Your Business
          <span>
            <ArrowRight className="w-6 h-6 ml-2 icon-move"/>
          </span>
        </button>
        </div>
      </div>
    </div>
  );
}

export default Hero
'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const JoinUs = () => {
    const router =useRouter();
  return (
    <div
      className="relative h-[500px] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/officespace.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Bring Your Vision to Life With Us
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          We've teamed up with amazing brands and big ideas from all over the world, across all kinds of industries
        </p>
        <button 
        onClick={() => router.push('/contact-us')} 
        className="text-white bg-purple-500 font-semibold px-6 py-3 rounded-lg shadow-lg transition hover:cursor-pointer">
          Partner with us
        </button>
      </div>
    </div>
  )
}

export default JoinUs

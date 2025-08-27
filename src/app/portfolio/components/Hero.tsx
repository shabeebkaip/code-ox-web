import React from "react";

const Hero = () => {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/portbg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      <div className="relative z-20 flex flex-col justify-center h-full text-center text-[white] px-4 max-w-7xl mx-auto">
        <p className="text-[#a6aaae] md:text-left mb-2">PORTFOLIO</p>
        <h1 className="text-3xl sm:text-4xl md:text-[50px] font-medium mb-6 flex flex-wrap justify-center">
          We've partnered with <span className="text-[#6d03c2]"> numerous global companies</span> to transform their businesses through our unmatched tech solutions.
        </h1>
      </div>
    </section>
  );
};

export default Hero;

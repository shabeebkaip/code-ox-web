"use client"
import React from "react";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

type ConnectProps = {
  paragraphText: string;
  buttonText: string;
};

const Connect: React.FC<ConnectProps> = ({ paragraphText, buttonText }) => {
    const router = useRouter();
  return (
    <div className="flex justify-center items-center h-[40%] bg-black p-4">
      <div className="max-w-6xl mx-auto w-full text-center rounded-2xl p-10 border border-solid border-[#6d03c2] bg-gradient-to-b to-[#773bb8] from-[#1e0c22]">
        
        <p className="text-white md:text-[28px] font-semibold  leading-relaxed">
          {paragraphText}
        </p>

        <div className="mt-6 flex justify-center w-full">
          <button
            className="group relative w-[220px] cursor-pointer flex items-center gap-2 bg-[#6d03c2] transition-all duration-300 px-6 py-3 rounded-lg font-medium"
            onClick={() => router.push('/contact-us')}
          >
            {buttonText}
            <span className="absolute right-3 icon-move">
              <ChevronRight className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Connect;

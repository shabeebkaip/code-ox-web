"use client";
import React, { useEffect, useState } from "react";
import { ChevronRight, ShoppingCart, Utensils, BookOpen, CreditCard, Package, Truck, Pizza, GraduationCap, Laptop, TrendingUp, BarChart2, DollarSign, Factory, Settings, ChefHat, Tablet, ShoppingBag, Bed, Key, ConciergeBell, ClipboardList, UserCheck, Headset,} from "lucide-react";

const industries = ["Trading","Manufacturing","Restaurant Management","POS","Hotel Management", "E-Commerce", "Education", "Service Management"];

const industryIcons = {
  "Trading": [
    <TrendingUp key="trending-up" size={48} className="text-green-400" />,
    <BarChart2 key="bar-chart" size={48} className="text-green-300" />,
    <DollarSign key="dollar" size={48} className="text-green-200" />,
  ],
  "Manufacturing": [
    <Factory key="factory" size={48} className="text-gray-400" />,
    <Settings key="settings" size={48} className="text-gray-300" />,
    <Package key="package" size={48} className="text-gray-200" />,
  ],
  "Restaurant Management": [
    <Utensils key="utensils" size={48} className="text-orange-400" />,
    <Pizza key="pizza" size={48} className="text-orange-300" />,
    <ChefHat key="chef-hat" size={48} className="text-orange-200" />,
  ],
  "POS": [
    <CreditCard key="credit-card" size={48} className="text-cyan-400" />,
    <Tablet key="tablet" size={48} className="text-cyan-300" />,
    <ShoppingBag key="shopping-bag" size={48} className="text-cyan-200" />,
  ],
  "Hotel Management": [
    <Bed key="bed" size={48} className="text-purple-400" />,
    <ConciergeBell key="bell" size={48} className="text-purple-300" />,
    <Key key="key" size={48} className="text-purple-200" />,
  ],
  "E-Commerce": [
    <ShoppingCart key="cart" size={48} className="text-blue-400" />,
    <Package key="package" size={48} className="text-blue-300" />,
    <Truck key="truck" size={48} className="text-blue-200" />,
  ],
  "Education": [
    <BookOpen key="book" size={48} className="text-yellow-400" />,
    <GraduationCap key="grad" size={48} className="text-yellow-300" />,
    <Laptop key="laptop" size={48} className="text-yellow-200" />,
  ],
  "Service Management": [
    <ClipboardList key="clipboard" size={48} className="text-teal-400" />,
    <UserCheck key="user-check" size={48} className="text-teal-300" />,
    <Headset key="headset" size={48} className="text-teal-200" />,
  ],
};

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % industries.length);
      setAnimationKey((prev) => prev + 1)
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentIndustry = industries[index];
  const iconsToShow = industryIcons[currentIndustry as keyof typeof industryIcons] || [];

  return (
    <div className="bg-black text-white w-full h-auto py-16 px-4">
    <section className=" max-w-7xl mx-auto py-16 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left text */}
      <div className="w-full md:max-w-[60%] text-center md:text-left">
        <p className="text-[#A6AAAE] ">INDUSTRIES</p>
        <h1 className="text-3xl md:text-[50px] font-medium leading-tight mb-6">
          Driving Innovation and Strategy for Global Leaders in{" "}
          <span className="text-[#6d03c2] transition-all duration-500 ease-in-out">
            {currentIndustry}
          </span>
        </h1>
      <div className="flex justify-center md:justify-start">
        <button className="bg-[#6d03c2] text-white font-medium px-6 py-3 rounded-md flex items-center gap-2">
          Consult Our Experts
          <ChevronRight size={18} />
        </button>
        </div>
      </div>

      {/* Right icons */}
      <div className="w-full md:max-w-[40%]">
      <div className="mt-10 md:mt-0 flex flex-wrap justify-center gap-4 md:gap-6 relative max-w-sm mx-auto">
        {iconsToShow.map((icon, i) => (
          <div
             key={`${animationKey}-${i}`}
            className="flex items-center justify-center w-20 h-20 md:w-40 md:h-40 rounded-lg bg-white/5 backdrop-blur-md shadow-lg transform transition-all duration-500 ease-in-out drop-animation hover:scale-105"
            style={{
                  animationDelay: `${i * 0.05}s`,
                }}
          >
              <div className="text-[32px] md:text-[48px]">{icon}</div>
          </div>
        ))}
      </div>
      </div>
    </section>
    </div>
  );
};

export default Hero;

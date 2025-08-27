"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "The organisation-wide policies have helped me plan my personal life better, which motivates me to do more at work.",
    name: "John Doe",
    role: "Frontend Developer",
    img: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    text: "I have found great friends and mentors across hierarchies, completely opposite to the Corporate stereotypes I have come across.",
    name: "Jane Smith",
    role: "Project Manager",
    img: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    text: "I never thought professional environments could get as candid and colorful as the parties here do.",
    name: "Alice Johnson",
    role: "Social Media Copywriter",
    img: "https://via.placeholder.com/50",
  },
];

const Thoughts = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // animate only inside this section
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[200vh] bg-white/50">
      {/* Beyond image overlay */}
      <motion.div
        style={{ scale, opacity }}
        className="sticky top-0 left-0 w-full h-screen flex items-center justify-center bg-black"
      >
        <img
          src="/beyondwork.png"
          alt="Beyond Work"
          className="w-full h-full object-contain "
        />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto text-center py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">
          Here are a few thoughts shared by our{" "}
          <span className="text-blue-600">Employees</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-gray-50 rounded-2xl p-10 text-left shadow-sm hover:shadow-md transition min-h-[300px]"
            >
              <p className="text-xl text-gray-800 mb-8 leading-relaxed">
                “{t.text}”
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-black text-lg">{t.name}</h4>
                  <p className="text-sm text-gray-500 italic">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Thoughts;

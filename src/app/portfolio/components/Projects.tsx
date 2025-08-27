"use client"
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const portfolioData = [
  {
    id: 1,
    title: "ISA",
    description: "A website and mobile application for a spearfishing academy, offering courses, booking, and community features for underwater enthusiasts.",
    image: "/isaportfolio.jpg",
    alt: "ISA",
    technologies:"Flutter",
    catagory:"App"
  },
  {
    id: 2,
    title: "Tha8afa",
    description: "An interactive quiz game that challenges users with engaging trivia questions across various topics, promoting learning through fun.",
    image: "/portfolio/tha8afaa.png",
    alt: "Tha8afa",
    technologies:"React",
    catagory:"Website"
  },
  {
    id: 3,
    title: "Easy to Shopee",
    description: "A modern trading platform offering a curated range of quality products with seamless ordering, fast delivery, and a focus on convenience, reliability, and customer satisfaction.",
    image: "/portfolio/easytoshope.png",
    alt: "Easy to Shopee",
    technologies:["Python"],
    catagory:"Odoo"
  },
  {
    id: 4,
    title: "Shammasy",
    description: "Shammasy is a sleek, secure platform connecting buyers and sellers for seamless, transparent trade and business growth.",
    image: "/portfolio/shammasy.png",
    alt: "Shammasy",
    technologies:"Python",
    catagory:"Odoo"
  },
  {
    id: 5,
    title: "Flytern",
    description: "Flytern, a flight booking app, distinguishes itself through meticulous design and development crafted to deliver an unparalleled user experience",
    image: "/portfolio/flyternmob.png",
    alt: "Shammasy",
    technologies:"Flutter",
    catagory:"App"
  },
  {
    id: 6,
    title: "Shahad Al-jazeera",
    description: "Shahad Al jazeera bakery is a delightful heaven for connoisseurs of Middle Eastern cuisane and baked qoods.",
    image: "/portfolio/shahad.png",
    alt: "Shammasy",
    technologies:"React",
    catagory:"Website"
  },
  {
    id: 7,
    title: "OG HUB",
    description: `The "Og Hub" project was initiated to develop a cutting-edge, dynamic website tailored to meet th multifaceted needs of Oghub`,
    image: "/portfolio/oghub.png",
    alt: "Shammasy",
    technologies:"React",
    catagory:"Website"
  },
];

const Portfolio = () => {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(portfolioData.map((p) => p.catagory))];

  const filteredProjects = selectedCategory === "All" ? portfolioData : portfolioData.filter((p) => p.catagory === selectedCategory);


  return (
    <div className="bg-black min-h-screen py-8">
      <div className="max-w-7xl mx-auto  flex flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg text-white font-semibold ${
              selectedCategory === category
                ? "bg-[#6d03c2]"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {filteredProjects.map((project, index) => {
        return (
           <React.Fragment key={project.id}>
          <div className={`max-w-7xl mx-auto py-4 `}>
            <div className="flex flex-col lg:flex-row items-start gap-8 p-5 rounded-2xl hover:bg-[#0f0f0f]">
              <div className="lg:w-[50%] ">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-auto md:h-[400px] object-cover"
                  />
                </div>
              </div>

              <div className="lg:w-[50%] text-white flex flex-col gap-10 justify-between w-full">
                <div>
               <div className="mb-8">
                <h1 className="text-[32px] font-bold">{project.title}</h1>
               </div>
                <p className="text-lg text-gray-300 mb-10 leading-relaxed ">
                  {project.description}
                </p>
                <p className="text-xl text-gray-300 mb-5 leading-relaxed w-full">
                 Technology Used :
                  <span className="px-5">
                    {Array.isArray(project.technologies)
                      ? project.technologies.join(", ")
                      : project.technologies.split(",").map((tech) => tech.trim()).join(", ")}
                  </span>
                </p>
                </div>
                 <div className="py-5">
                <button className="group relative w-[200px] cursor-pointer flex items-center gap-2 bg-[#6d03c2]  transition-all duration-300 px-6 py-3 rounded-lg font-medium"
                onClick={() => router.push('/portfolio/[name]')}>
                  View Case Study
                  <span className="absolute right-3  icon-move">
                      <ChevronRight className="w-4 h-4" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        </React.Fragment>
        );
      })}
    </div>
  );
};

export default Portfolio;
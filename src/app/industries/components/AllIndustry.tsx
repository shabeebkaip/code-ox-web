"use client";
import React from "react";
import { Factory, LineChart, ChefHat, CreditCard, ShoppingCart, Hotel, BookOpen, Wrench } from "lucide-react";

const industries = [
  {
    id: 1,
    title: "Trading",
    description:
      "We build custom trading platforms with real-time data integration, analytics dashboards, and user-friendly interfaces to optimize your financial operations.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    Icon: LineChart,
  },
  {
    id: 2,
    title: "Manufacturing",
    description:
      "Our technology solutions streamline manufacturing workflows, including inventory control, supply chain management, and production monitoring.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    Icon: Factory,
  },
  {
    id: 3,
    title: "Restaurant Management",
    description:
      "We help restaurants with custom management systems including reservations, menu management, services and customer feedback tracking.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    Icon: ChefHat,
  },
  {
    id: 4,
    title: "POS",
    description:
      "We develop powerful and user-friendly POS systems tailored to your business, including sales tracking, customer data, and inventory management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    Icon: CreditCard,
  },
  {
    id: 5,
    title: "E-Commerce",
    description:
      "From storefronts to back-end systems, we design and develop scalable eCommerce platforms that enhance shopping experiences and boost conversions.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    Icon: ShoppingCart,
  },
  {
    id: 6,
    title: "Hotel Management",
    description:
      "Our hotel management solutions cover booking systems, housekeeping, guest services, and data analytics to optimize operations and guest satisfaction.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    Icon: Hotel,
  },
  {
    id: 7,
    title: "Education",
    description:
      "We create digital learning platforms, student management systems, and tools that foster engaging, interactive education for institutions and ed-tech startups.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    Icon: BookOpen,
  },
  {
    id: 8,
    title: "Service Management",
    description:
      "Our service management apps help businesses schedule, track, and manage customer service tasks in real-time for enhanced client satisfaction.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop",
    Icon: Wrench,
  },
];

const AllIndustry = () => {
  return (
    <div className="bg-black min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl font-bold mb-4">
            Industries We Work With
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We provide custom technology solutions to help different industries
            work better, faster, and grow their business with cutting-edge
            digital platforms.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {industries.map(({ id, title, description, image, Icon }) => (
            <div
              key={id}
              className="relative w-full md:w-[400px] rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group hover:scale-105 h-[500px]"
            >
              <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>

             <div className="relative z-10 p-5 mt-auto flex flex-col justify-end h-full">
              <div className=" p-4 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-purple-600 p-2 rounded-xl inline-flex">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-white text-xl font-bold">{title}</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllIndustry;
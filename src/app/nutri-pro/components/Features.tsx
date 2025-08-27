"use client";

import {
  BarChart3,
  Users,
  Calendar,
  Utensils,
  Truck,
  UserCheck,
  Star,
  Gift,
  CreditCard,
  Bell,
  Shield,
  FileText,
} from "lucide-react";
import { useState } from "react";

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      icon: BarChart3,
      title: "Real-Time Dashboard",
      description:
        "Live operational snapshot, sales tracking, meal ratings, and financial overviews",
      color: "from-blue-500 to-cyan-500",
      delay: "0ms",
    },
    {
      icon: Users,
      title: "Customer Management",
      description:
        "Bilingual profiles, dietary preferences, smart segmentation, and dual addresses",
      color: "from-purple-500 to-pink-500",
      delay: "100ms",
    },
    {
      icon: Calendar,
      title: "Plan & Subscription Management",
      description:
        "Flexible diet plans, auto invoice generation, and subscription controls",
      color: "from-green-500 to-emerald-500",
      delay: "200ms",
    },
    {
      icon: Utensils,
      title: "Meal & Ingredient Management",
      description:
        "Recipe builder, macro tracking, ingredient exclusion, and inventory management",
      color: "from-orange-500 to-red-500",
      delay: "300ms",
    },
    {
      icon: Truck,
      title: "Delivery Management",
      description:
        "Multi-shift planning, auto driver assignments, and real-time tracking",
      color: "from-indigo-500 to-purple-500",
      delay: "400ms",
    },
    {
      icon: UserCheck,
      title: "Dietitian & Health Module",
      description:
        "Professional profiles, appointment scheduling, and health record tracking",
      color: "from-teal-500 to-green-500",
      delay: "500ms",
    },
    {
      icon: Star,
      title: "Customer Feedback",
      description:
        "Meal rating system, delivery notes, and experience optimization",
      color: "from-yellow-500 to-orange-500",
      delay: "600ms",
    },
    {
      icon: Gift,
      title: "Promotions & Offers",
      description:
        "Promo codes, referral rewards, spin-the-wheel, and loyalty points",
      color: "from-pink-500 to-rose-500",
      delay: "700ms",
    },
    {
      icon: CreditCard,
      title: "Payments & Invoicing",
      description:
        "Integrated gateways, auto invoicing, and secure financial handling",
      color: "from-slate-500 to-gray-500",
      delay: "800ms",
    },
    {
      icon: Bell,
      title: "Notification Engine",
      description:
        "Push notifications, bulk announcements, and personalized messages",
      color: "from-violet-500 to-purple-500",
      delay: "900ms",
    },
    {
      icon: Shield,
      title: "User & Role Management",
      description:
        "Role-based access, self-service features, and activity tracking",
      color: "from-emerald-500 to-teal-500",
      delay: "1000ms",
    },
    {
      icon: FileText,
      title: "Reports & Analytics",
      description:
        "Comprehensive reports, meal stickers, and data export capabilities",
      color: "from-cyan-500 to-blue-500",
      delay: "1100ms",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div> */}

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 text-sm font-medium mb-6 animate-bounce">
            🔍 Comprehensive Features
          </div> */}
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-300">
            Key{" "}
            <span className="bg-gradient-to-r from-[#AFAFAF] to-[#494949] bg-clip-text text-transparent ">
              Features
            </span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Everything you need to run a successful diet and nutrition business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: feature.delay }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Animated border */}
              <div className="absolute inset-0  rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>

              {/* Main card */}
              <div
                className={`
                relative  backdrop-blur-sm p-6 rounded-xl border border-gray-700 
                transition-all duration-500 transform 
                hover:scale-105 hover:border-transparent hover:shadow-2xl
                ${hoveredIndex === index ? "translate-y-[-8px]" : ""}
                animate-fade-in
              `}
              >
                {/* Floating icon */}
                <div
                  className={`
                  w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl 
                  flex items-center justify-center mb-6 
                  transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110
                  shadow-lg group-hover:shadow-xl
                `}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-500 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#AFAFAF] group-hover:to-[#494949] group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Hover indicator */}
                {/* <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive CTA */}
        <div className="text-center mt-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-[#AFAFAF] to-[#494949] rounded-xl text-white font-semibold text-lg overflow-hidden">
            <span className="relative z-10">Explore All Features</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#494949] to-[#AFAFAF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;

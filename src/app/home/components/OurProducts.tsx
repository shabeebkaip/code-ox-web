'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface BannerImage {
  fileUrl: string;
  id: string;
}

interface Product {
  _id: string;
  index: number;
  products: string;
  content: string;
  bannerImage: BannerImage[];
}

interface OurProductsProps {
  productData: Product[];
}

const OurProducts: React.FC<OurProductsProps> = ({ productData }) => {
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const products = productData || [];
  const productsRef = useRef(null);
  const router = useRouter();

  const handleNavigate = (id: string) => {
    router.push(`/our-product/${id}`);
  };

  // Function to truncate content to 3 lines
  const truncateContent = (htmlContent: string, maxLength: number = 120) => {
    // Remove HTML tags and get plain text
    const plainText = htmlContent.replace(/<[^>]*>/g, '');
    if (plainText.length <= maxLength) return plainText;
    return plainText.substr(0, maxLength).trim() + '...';
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredViewport(true);
          setAnimationKey(prevKey => prevKey + 1);
        } else {
          setHasEnteredViewport(false);
        }
      },
      { threshold: 0.06, rootMargin: '0px 0px -10% 0px' }
    );
    const currentSectionRef = productsRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 flex items-center justify-center bg-gray-50">
      <div
        ref={productsRef}
        className="relative z-10 w-full max-w-6xl mx-auto"
      >
        {/* Section Title */}
        <motion.div
          className="text-center mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={hasEnteredViewport ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive solutions built on Odoo to streamline your business operations
          </p>
        </motion.div>

        {/* Products Grid - Average size cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={`${product._id}-${animationKey}`}
              className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-gray-300/30 hover:border-gray-300 h-80"
              initial={{ opacity: 0, y: 50 }}
              animate={hasEnteredViewport ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleNavigate(product._id)}
            >
              {/* Banner Image - Average height */}
              <div className="relative h-44 overflow-hidden">
                {product.bannerImage && product.bannerImage.length > 0 && (
                  <motion.div
                    className="w-full h-full relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Image
                      src={product.bannerImage[0].fileUrl}
                      alt={`${product.products} banner`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    {/* Black shadow overlay */}
                    <div className="absolute inset-0 bg-black/40 z-10" />
                  </motion.div>
                )}
                
                {/* Live Product Badge */}
                <div className="absolute top-3 left-3 z-20">
                  <div className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                    Live Product
                  </div>
                </div>
                
                {/* Status Badge based on index */}
                {product.index > 2 && (
                  <div className="absolute top-3 right-3 z-20">
                    <div className="bg-gray-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                      {product.index === 3 ? 'Coming Soon' : 'In Development'}
                    </div>
                  </div>
                )}
              </div>

              {/* Card Content - Always visible part */}
              <div className="p-5 h-36 flex flex-col justify-between">
                {/* Product Title */}
                <div 
                  className="text-gray-900 text-base font-bold mb-3 leading-tight line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: product.products }}
                />

                {/* Learn More Button */}
                <motion.button
                  className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 flex justify-center items-center gap-2"
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Learn More</span>
                  <motion.svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </motion.svg>
                </motion.button>
              </div>

              {/* Hover Overlay with Description - Only shows on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="p-4 text-white w-full">
                  <div 
                    className="text-white text-xl font-bold mb-3 leading-tight"
                    dangerouslySetInnerHTML={{ __html: product.products }}
                  />
                  
                  <motion.p 
                    className="text-gray-200 text-sm leading-relaxed mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    {truncateContent(product.content)}
                  </motion.p>

                  <motion.button
                    className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 flex justify-center items-center gap-2 border border-white/30"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Explore Details</span>
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
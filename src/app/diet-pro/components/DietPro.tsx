'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getDietPro } from '@/app/apiServices/apiServices';
import { useRouter } from "next/navigation";
import HeroShimmer from '@/app/about-us/components/HeroShimmer';
import Shimmer from './Shimmer';

interface DietProList {
  title: string;
  subTitle: string;
  description: string;
  link: string;
  image?: {
    fileUrl: string;
  };
}

const DietPro = () => {
  const [allCaseStudies, setAllCaseStudies] = useState<DietProList[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        const data = await getDietPro("");
        setAllCaseStudies(data);
      } catch (error) {
        console.error('Error fetching diet pro:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const handleNavigate = (href: string) => {
    const isExternal = /^https?:\/\//.test(href);
    if (isExternal) {
      window.open(href, '_blank');
    } else {
      router.push(href);
    }
  };

  if (loading) {
    return (
      <div>
        <HeroShimmer />
      </div>
    );
  }

  return (
    <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        {loading ? (
          Array(3)
            .fill(null)
            .map((_, index) => <Shimmer key={index} />)
        ) : allCaseStudies.length > 0 ? (
          allCaseStudies.map((prod, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl border ${index === 0 ? 'border-teal-300' : 'border-gray-300'
                }`}
            >
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-full max-w-[350px] h-[220px] md:h-[250px] lg:h-[300px] relative">
                  <Image
                    src={prod.image?.fileUrl || '/placeholder.jpg'}
                    alt={prod.title}
                    fill
                    className="object-contain rounded-lg"
                    unoptimized
                  />
                </div>
              </div>

              <div className="w-full md:w-2/3 space-y-2 text-center md:text-left">
                <h3 className="text-lg sm:text-xl md:text-[28px] lg:text-[40px] font-semibold text-gray-800">
                  {prod.title}
                </h3>
                <h4 className="text-base sm:text-lg md:text-[28px] lg:text-[40px] text-gray-600">
                  {prod.subTitle}
                </h4>
                <p
                  className="text-sm sm:text-base md:text-lg text-gray-500"
                  dangerouslySetInnerHTML={{ __html: prod?.description }}
                />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No data available.
          </p>
        )}
      </div>
    </section>
  );
};

export default DietPro;

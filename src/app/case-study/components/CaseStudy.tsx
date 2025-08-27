'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getCaseStudy } from '@/app/apiServices/apiServices';
import { useRouter } from "next/navigation";
import Shimmer from './Shimmer';
import Map from './Map';
import WorldMaps from './WorldMap';
import HeroShimmer from '@/app/about-us/components/HeroShimmer';

const categories = [
  {
    displayName: "All",
    value: "All"
  },
  {
    displayName: "Apps",
    value: "Apps"
  },
  {
    displayName: "Websites",
    value: "Web"
  },
  {
    displayName: "Odoo",
    value: "Odoo"
  }
];

interface CaseStudyItem {
  title: string;
  subTitle: string;
  description: string;
  link: string;
  image?: {
    fileUrl: string;
  };
}


const CaseStudy = () => {
  const [activeTab, setActiveTab] = useState(categories[0].value);
  const [allCaseStudies, setAllCaseStudies] = useState<CaseStudyItem[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        const data = await getCaseStudy(activeTab);
        setAllCaseStudies(data);
      } catch (error) {
        console.error('Error fetching case studies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [activeTab]);

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

  const getActiveDisplayName = () => {
    const activeCategory = categories.find(cat => cat.value === activeTab);
    return activeCategory?.displayName || activeTab;
  };

  return (
    <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-12 bg-white min-h-screen">

      <div className='w-full'>
        <WorldMaps />
      </div>

      <div className="flex justify-center flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveTab(cat.value)}
            className={`px-5 py-2 w-28 rounded-full border text-sm font-medium cursor-pointer transition ${activeTab === cat.value
              ? 'bg-black text-white'
              : 'bg-white text-black border-black'
              }`}
          >
            {cat.displayName}
          </button>
        ))}
      </div>

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
                {/* <button className="mt-3 px-4 py-1 text-sm border border-black rounded-full hover:bg-gray-100 text-black transition cursor-pointer" onClick={() => handleNavigate(prod?.link)}>
                  Read more
                </button> */}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No case studies available for {getActiveDisplayName()}.
          </p>
        )}
      </div>
    </section>
  );
};

export default CaseStudy;
'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Shimmer from '@/app/home/components/Shimmer';
import { getOurProductDetailPage } from '@/app/apiServices/apiServices';

type ProductDetail = {
  content: string;
  products: string;
  bannerImage?: {
    fileUrl: string;
    id: string;
  }[];
};

const OurProductDetail = () => {
  const [data, setData] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const params = useParams();
  const router = useRouter();
  
      const handleNavigate = (href: string) => {
          router.push(href);
      };

  useEffect(() => {
    const fetchData = async () => {
      if (!params?.id) return;

      try {
        const response = await getOurProductDetailPage(params.id as string);
        setData(response);
      } catch (error) {
        console.error('Error fetching product detail:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params?.id]);

  useEffect(() => {
    if (!data?.bannerImage || data.bannerImage.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % data.bannerImage!.length
      );
    }, 6000); 

    return () => clearInterval(interval); 
  }, [data?.bannerImage]);

  if (loading) {
    return (
      <div className="bg-white">
        <Shimmer />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-[70vh] text-black flex flex-col justify-center p-5">
      {data ? (
        <>
          <div className="flex flex-col md:flex-row justify-between gap-10 h-full container mx-auto">
            {data.bannerImage && data.bannerImage.length > 0 && (
              <div className="flex justify-center w-full md:w-3/5">
                <div
                  className="w-full h-[60vh] rounded-[24px] transition-all duration-700"
                  style={{
                    backgroundImage: `url(${data.bannerImage[currentIndex].fileUrl})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat:'no-repeat'
                  }}
                ></div>
              </div>
            )}

            <div className="w-full md:w-1/2 flex flex-col justify-center gap-5">
            <h1
                className="text-[#999999] text-xl sm:text-2xl md:text-3xl lg:text-[36px] xl:text-[40px] leading-tight"
                dangerouslySetInnerHTML={{ __html: data.products }}
              />
            
              <h1
                className="text-xl sm:text-xl font-normal"
                dangerouslySetInnerHTML={{ __html: data.content }}
              />
            </div>
          </div>

          <div className="flex justify-center py-10">
            <button className="px-6 py-2 bg-gray-800 text-white rounded-lg transition hover:bg-gray-700 w-[160px]" onClick={() => handleNavigate('/contact-us')}>
              Know More
            </button>
          </div>
        </>
      ) : (
        <div className="text-center py-10 text-red-500 w-full">No data found.</div>
      )}
    </div>
  );
};

export default OurProductDetail;

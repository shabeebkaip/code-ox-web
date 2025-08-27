"use client";

import React, { useEffect, useState } from "react";
import {
  getAboutUsPageData,
  getHomePageData,
} from "@/app/apiServices/apiServices";
import Shimmer from "./Shimmer";
import Hero from "./Hero";
// import BannerSection from "./Banner";
import Achievements from "@/app/about-us/components/Achievements";
import TestimonialsSlider from "./Testimonials";
import ClientList from "./ClientList";
import OurService1 from "./OurService1";
import Odoo from "./Odoo";
import Industries from "./Industries";
import Technologies from "./Technologies";
import Speciality from "./Speciality";
import FAQ from "./FAQ";

// ----------------- TYPES -----------------

interface HeroContent {
  title: string;
}


interface Testimonial {
  _id: string;
  image: {
    fileUrl: string;
    id: string;
  };
  name: string;
  companyName: string;
  description: string;
}

interface StatData {
  number: number;
  label: string;
}




interface SectionItem {
  _id: string;
  section:
    | "heroSection"
    | "banner"
    | "ourServices"
    | "ourProducts"
    | "testimonials"
    | "testimonials"
    | "achievements";
  content: unknown;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const findSections = <T,>(
  sectionName: SectionItem["section"],
  data: SectionItem[] | null
): T | undefined => {
  return data?.find((item) => item.section === sectionName)?.content as
    | T
    | undefined;
};

const HomeComponent = () => {
  const [homeData, setHomeData] = useState<SectionItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState({
    aboutData: [],
  });

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        setLoading(true);
        const data = await getHomePageData();
        setHomeData(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching home page data:", err);
        setError("Failed to load home page content");
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [aboutPageData] = await Promise.all([getAboutUsPageData()]);
        setData({
          aboutData: aboutPageData,
        });
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const heroData = findSections<HeroContent>("heroSection", homeData);
  // const bannerData = findSections<BannerContent>("banner", homeData);
  // const serviceData = findSections<OurService[]>("ourServices", homeData);
  // const productData = findSections<OurProduct[]>("ourProducts", homeData);
  const testimonialData = findSections<Testimonial[]>("testimonials", homeData);
  // const countryData = findSections<Location[]>('location', homeData);
  const achievementData = findSections<StatData[]>(
    "achievements",
    data.aboutData
  );

  if (loading) {
    return (
      <div>
        <Shimmer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-white">
      {heroData && <Hero heroData={heroData} />}
      {/* {bannerData && <BannerSection bannerData={bannerData} />} */}
      <ClientList />
      <OurService1 />
      {/* {serviceData && <Services serviceData={serviceData} />} */}
      {/* {productData && <OurProducts productData={productData} />} */}
      {testimonialData && (
        <TestimonialsSlider testimonialData={testimonialData} />
      )}
      <Industries />
      <Odoo />
      <Technologies />
      {achievementData && <Achievements  />}
      <Speciality />
      <FAQ />
      {/* <Contact/> */}
      {/* {countryData && <BasicMap country={countryData} />} */}
      {/* <WorldMaps /> */}
    </div>
  );
};

export default HomeComponent;

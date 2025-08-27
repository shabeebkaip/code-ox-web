"use client";

import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import NutriSlider from "./NutriSlider";
// import Shimmer from '.';

import { getNutriProPageData } from "../../apiServices/apiServices";

// ---------------- INTERFACES ----------------

interface HeroContent {
  badgeText: string;
  title: string;
  subtitle: string;
  description: string;
  extraDescription: string;
}

interface SliderItem {
  _id: string;
  image: string;
}

interface SectionItem {
  _id: string;
  section:
    | "heroSection"
    | "nutriSlider"
    | "whyChooseDiet"
    | "whyChooseCards"
    | "nutriFeatureCards"
    | "whoCanUse"
    | "audienceCards"
    | "testimonials"
    | "innovatorsInHealth";
  content: unknown;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

// ---------------- HELPER ----------------

const findSection = <T,>(
  sectionName: SectionItem["section"],
  data: SectionItem[] | null
): T | undefined => {
  return data?.find((item) => item.section === sectionName)?.content as
    | T
    | undefined;
};

// ---------------- MAIN COMPONENT ----------------

const DietMain = () => {
  const [nutriData, setNutriData] = useState<SectionItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  console.log("Nutri Data:", loading);
  useEffect(() => {
    const fetchNutriProData = async () => {
      try {
        const data = await getNutriProPageData(); // API call for "nutri-pro"
        setNutriData(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching Nutri Pro page data:", err);
        setError("Failed to load Nutri Pro page content.");
      } finally {
        setLoading(false);
      }
    };

    fetchNutriProData();
  }, []);

  const heroData = findSection<HeroContent>("heroSection", nutriData);
  const sliderData = findSection<SliderItem[]>("nutriSlider", nutriData);

  // const featureCards = findSection<FeatureCard[]>('nutriFeatureCards', nutriData);

  // if (loading) return <Shimmer />;
  if (error)
    return (
      <div className="h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );

  return (
    <div>
      {heroData && <Hero data={heroData} features={[]} />}
      {sliderData && <NutriSlider slides={[]} />}
    </div>
  );
};

export default DietMain;

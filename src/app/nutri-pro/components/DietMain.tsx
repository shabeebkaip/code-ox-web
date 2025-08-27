'use client';

import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import NutriSlider from './NutriSlider';
import WhyChoose from './WhyChooseUs';
import Features from './Features';
import Audience from './Audience';
import ClientShowcase from './ClientShowCase';
import Innovators from './Innovators';
// import Shimmer from '.';

import { getNutriProPageData } from '../../apiServices/apiServices';

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

interface WhyChooseTitle {
  title: string;
  description: string;
}

interface WhyChooseCard {
  _id: string;
  icon: string;
  title: string;
  description: string;
}

interface FeatureCard {
  _id: string;
  icon: string;
  title: string;
}

interface AudienceTitle {
  title: string;
  description: string;
}

interface AudienceCard {
  _id: string;
  icon: string;
  title: string;
  description: string;
}

interface Testimonial {
  _id: string;
  logo: string;
  message: string;
  name: string;
  designation: string;
}

interface InnovatorSection {
  title: string;
  description: string;
}

interface SectionItem {
  _id: string;
  section:
    | 'heroSection'
    | 'nutriSlider'
    | 'whyChooseDiet'
    | 'whyChooseCards'
    | 'nutriFeatureCards'
    | 'whoCanUse'
    | 'audienceCards'
    | 'testimonials'
    | 'innovatorsInHealth';
  content: any;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

// ---------------- HELPER ----------------

const findSection = <T,>(sectionName: SectionItem['section'], data: SectionItem[] | null): T | undefined => {
  return data?.find((item) => item.section === sectionName)?.content as T | undefined;
};

// ---------------- MAIN COMPONENT ----------------

const DietMain = () => {
  const [nutriData, setNutriData] = useState<SectionItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNutriProData = async () => {
      try {
        const data = await getNutriProPageData(); // API call for "nutri-pro"
        setNutriData(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching Nutri Pro page data:', err);
        setError('Failed to load Nutri Pro page content.');
      } finally {
        setLoading(false);
      }
    };

    fetchNutriProData();
  }, []);

  const heroData = findSection<HeroContent>('heroSection', nutriData);
  const sliderData = findSection<SliderItem[]>('nutriSlider', nutriData);
  const whyChooseTitle = findSection<WhyChooseTitle>('whyChooseDiet', nutriData);
  const whyChooseCards = findSection<WhyChooseCard[]>('whyChooseCards', nutriData);
  const featureCards = findSection<FeatureCard[]>('nutriFeatureCards', nutriData);
  const audienceTitle = findSection<AudienceTitle>('whoCanUse', nutriData);
  const audienceCards = findSection<AudienceCard[]>('audienceCards', nutriData);
  const testimonials = findSection<Testimonial[]>('testimonials', nutriData);
  const innovatorsData = findSection<InnovatorSection>('innovatorsInHealth', nutriData);

  // if (loading) return <Shimmer />;
  if (error) return <div className="h-screen flex items-center justify-center text-red-500">{error}</div>;

  return (
    <div>
      {heroData && featureCards && <Hero data={heroData} features={featureCards} />}
      {sliderData && <NutriSlider slides={sliderData} />}
      {(whyChooseTitle || whyChooseCards) && (
      <WhyChoose title={whyChooseTitle} cards={whyChooseCards} />
      )}      {/* {featureCards && <Features features={featureCards} />} */}
      {(audienceTitle || audienceCards) && (
        <Audience title={audienceTitle} cards={audienceCards} />
      )}
{testimonials && innovatorsData && (
  <ClientShowcase titleData={innovatorsData} testimonials={testimonials} />
)}    </div>
  );
};

export default DietMain;

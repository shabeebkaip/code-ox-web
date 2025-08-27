'use client'
import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'
import OurTeam from './components/OurTeam'
import { getAboutUsPageData, getOurTeam } from '../apiServices/apiServices'
import { findSections } from '../shared/SectionFilter'
import HeroShimmer from './components/HeroShimmer'
import Story from './components/Story'
import Connect from '../shared/Connect'
import MissionVision from './components/MissionVision'

const Page = () => {
  const [data, setData] = useState({
    team: [],
    aboutData: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [aboutPageData, ourTeamData] = await Promise.all([
          getAboutUsPageData(),
          getOurTeam()
        ]);
        setData({
          aboutData: aboutPageData,
          team: ourTeamData
        });
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const heroData = findSections('heroSection', data.aboutData);
  // const overValueData = findSections('ourValues', data.aboutData);
  // const achievementData = findSections('achievements', data.aboutData);
  // const ourMissionData = findSections('ourMission', data.aboutData);
  // const ourVisionnData = findSections('ourVision', data.aboutData);

  if (loading) return (
    <div>
      <HeroShimmer />
    </div>
  );


  return (
    <div className='bg-white'>
      <Hero data={heroData} />
      <Story/>
      {/* <Achievements data={achievementData} /> */}
      {/* <OurMission data={ourMissionData} />
      <OurVision data={ourVisionnData} /> */}
      <MissionVision/>
      <Connect
      paragraphText="Boost your business with expert development services that lead the way in digital transformation."
      buttonText="Lets Grow Together"/>
      {/* <OurValues data={overValueData} /> */}
      {/* <Thoughts/> */}
      <OurTeam data={data.team} />
      {/* <Connect
        paragraphText="Drive your business forward with tailored development solutions that power lasting digital success."
        buttonText="Start Your Journey"
      /> */}
    </div>
  )
}

export default Page;
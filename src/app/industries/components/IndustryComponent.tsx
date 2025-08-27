import React from 'react'
import Hero from './Hero'
import AllIndustry from './AllIndustry'
import Connect from '@/app/shared/Connect'
import GlobalClient from './GlobalClient'

const IndustryComponent = () => {
  return (
    <div>
        <Hero/>
        <AllIndustry/>
        <Connect
      paragraphText="Accelerate your digital transformation with expert development services trusted by the industry."
      buttonText="Contact our team"/>
      <GlobalClient/>
    </div>
  )
}

export default IndustryComponent
import React from 'react'
import Hero from './Hero'
import Projects from './Projects'
import OurPresence from './OurPresence'
import Connect from '@/app/shared/Connect'

const PortfolioComponents = () => {
  return (
    <div>
        <Hero/>
        <OurPresence/>
        <Projects/>
        <Connect
          paragraphText="Create digital revenue streams that scale your business to new landscapes of efficiency, profitability and leadership"
          buttonText="Talk to Our Experts"
        />
    </div>
  )
}

export default PortfolioComponents
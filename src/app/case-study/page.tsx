import React from 'react'
import CaseStudy from './components/CaseStudy'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Case Studies"
};

const page = () => {
  return (
    <div>
      
      <CaseStudy/>
    </div>
  )
}

export default page
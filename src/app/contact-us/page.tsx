import React from 'react'
import ContactForm from './components/ContactForm'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Connect Us"
};

const page = () => {
  return (
    <div className='bg-white'>
      <ContactForm />
    </div>
  )
}

export default page
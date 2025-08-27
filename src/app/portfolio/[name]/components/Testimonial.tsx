'use client';
import React, { useEffect, useState } from 'react';

interface TestimonialData {
  id: number;
  name: string;
  role: string;
  image: string;
  message: string;
}

const testimonials: TestimonialData = {
  id: 1,
  name: 'Abdullah',
  role: 'Product Manager at ISA',
  image: '/isaicon.png',
  message:
    '" This product completely transformed the way we work. The team was super helpful and the results exceeded expectations! "',
};

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState<TestimonialData | null>(null);

  useEffect(() => {
    setTestimonial(testimonials);

  }, []);

  if (!testimonial) {
    return <p className="text-center text-gray-500">Loading testimonial...</p>;
  }

  return (
    <div className="bg-white p-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">

        <div className="md:w-1/3 flex justify-center ">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-40 h-40 rounded-full shadow-md object-cover"
          />
        </div>
        <div className="md:w-2/3 text-center md:text-left relative">
          <p className="text-gray-800 text-2xl leading-relaxed italic relative">
           
            {testimonial.message}
           
          </p>
          <div className="mt-6">
            <h3 className="font-semibold text-lg text-purple-600">{testimonial.name}</h3>
            <p className="text-gray-600 text-lg">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import img2 from "../../../assets/svg/bubble.svg";
import img3 from "../../../assets/svg/herocube1.png";
import { createEnquiry } from '@/app/apiServices/apiServices';
import { enqueueSnackbar, SnackbarProvider } from 'notistack';

const ContactForm = () => {

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    content: '',
  });

  const validate = () => {
    if (!data.firstName.trim()) {
      return 'First name is required';
    }
    if (!data.lastName.trim()) {
      return 'Last name is required';
    }
    if (!data.email.trim()) {
      return 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      return 'Email is invalid';
    }
    if (!data.phone.trim()) {
      return 'Phone number is required';
    } else if (!/^[0-9]{10,15}$/.test(data.phone)) {
      return 'Phone number is invalid';
    }
    if (!data.content.trim()) {
      return 'Message is required';
    }
    return '';
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      enqueueSnackbar(validationError, {
        variant: "warning",
        autoHideDuration: 2000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      return;
    }

    try {
      const response = await createEnquiry(data);
      enqueueSnackbar(response?.message || "Enquiry created successfully", {
        variant: "success",
        autoHideDuration: 2000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
      setData({ firstName: '', lastName: '', email: '', phone: '', content: '' });
    } catch (error: any) {
      enqueueSnackbar(error?.response?.message || "An error occurred while creating an enquiry", {
        variant: "error",
        autoHideDuration: 2000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };



  return (
    <>
      <SnackbarProvider>

        <div className="bg-white relative w-full min-h-screen flex items-center justify-center overflow-hidden p-5 px-4 sm:px-6 md:px-10">
          <div className="bg-white rounded-4xl shadow-lg p-5 md:p-12  w-full max-w-3xl  relative z-10 border border-black">
            <div className="absolute top-6 right-0 z-0 w-[13%] h-[20%]">
              <Image src={img3}
                alt="Cube SVG"
                width={100}
                height={100}
              />
            </div>

            <h2 className="text-[35px] md:text-[40px] font-light bg-gradient-to-r from-[#B9B9B9] to-[#535353] inline-block text-transparent bg-clip-text mb-2">Get in Touch</h2>
            <p className="text-gray-400 text-[17px] md:text-[20px] mb-6">You can reach us anytime</p>

            <form onSubmit={handleSubmit} className='text-black'>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 ">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={data.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full px-4 py-2 rounded-full border border-[#c5c6cc] focus:outline-none focus:ring-1 focus:ring-gray-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={data.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full px-4 py-2 rounded-full border border-[#c5c6cc] focus:outline-none focus:ring-1 focus:ring-gray-300"
                  />
                </div>
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-full border border-[#c5c6cc] focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
              </div>

              <div className="mb-4">
                <input
                  type="tel"
                  name="phone"
                  value={data.phone}
                  onChange={handleChange}
                  placeholder="Phone no"
                  className="w-full px-4 py-2 rounded-full border border-[#c5c6cc] focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
              </div>

              <div className="mb-6">
                <textarea
                  name="content"
                  placeholder="Your Message"
                  value={data.content}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 rounded-2xl border border-[#c5c6cc] focus:outline-none focus:ring-1 focus:ring-gray-300"
                />
              </div>

              <div className="flex justify-center relative mt-10 md:mt-14 ">
                <div className='relative '>
                  <button
                    type="submit"
                    className="z-10 bg-white bg-gradient-to-r from-[#ebe9e9] text-gray-800 font-semibold text-xl py-2 md:py-4 px-16 md:px-20 rounded-2xl border border-[#c5c6cc] transition-colors duration-300 cursor-pointer"

                  >
                    Submit
                  </button>

                  <div className="absolute bottom-[-20px] right-0 z-[-1]">
                    <Image src={img2} alt="Bubble decoration" width={40} height={40} />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </SnackbarProvider>
    </>
  );
};

export default ContactForm;

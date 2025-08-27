'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logofooter from "../../../public/logofooter.svg";
import { getFooterData } from "@/app/apiServices/apiServices";
import { useRouter } from "next/navigation";
import { findSections } from "@/app/shared/SectionFilter";
import kuwaitImg from "../../../public/kuwait2.png"
import indiaImg from "../../../public/india2.png"
import Contact from "@/app/home/components/Contact";

interface FooterItem {
  points: string;
  link: string;
  _id:string;
  image?: {
    fileUrl: string;
  };
}

const Footer = () => {
  const [year, setYear] = useState<number | null>(null);
  const router = useRouter()
  const [footer, setFooter] = useState<any | null>(null);

  const handleNavigate = (href: string) => {
    router.push(href);
  };


  const handleOdooNavigate = (link: string) => {
    router.push(`/${link}`);
  };

  const handleSolutionNavigate = (id: string) => {
    router.push(`our-service/${id}`);
  };

  const fetchFooter = async () => {
    try {
      const footerData = await getFooterData();
      setFooter(footerData);
    } catch (error) {
      console.error('Error fetching footer data:', error);
    }
  };

  useEffect(() => {

    fetchFooter();
    setYear(new Date().getFullYear());

  }, []);

  const mediaData = findSections('social-media', footer);
  const indAddress = findSections('ind_address', footer);
  const kwAddress = findSections('kw_address', footer);
  const serviceData = findSections('services', footer);
  const erpSolution = findSections('erp-solutions', footer);

  return (
    <div>
      <Contact/>
    <footer className="relative bg-black overflow-hidden">
      {/* Dark base with 10% blue presence - matching Hero and Achievements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950/60 to-blue-950/40 z-0" />
      
      {/* Atmosphere layers with blue hints - matching Hero and Achievements */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-blue-950/25 to-black/80 z-1"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-slate-950/20 to-black/85 z-2"></div>
      
      {/* 10% blue atmospheric glow - matching Hero and Achievements */}
      <div className="absolute inset-0 pointer-events-none z-4" style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(30,58,138,0.1) 0%, rgba(15,23,42,0.05) 50%, rgba(0,0,0,0.9) 100%)"
      }} />
      
      {/* Refined floating lights with Hero's color scheme */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-slate-400/6 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Top section with logo and social media */}
            <div className="flex flex-wrap justify-between items-center mb-16 gap-8">
              <div className="flex flex-col items-start">
                <Image
                  src={logofooter}
                  alt="logo"
                  height={200}
                  width={200}
                  className="object-contain mb-4"
                />
                <p className="text-lg font-semibold text-slate-300 mb-2">Transforming Ideas into Reality</p>
                <p className="text-slate-400 text-sm max-w-md leading-relaxed">
                  Building innovative solutions with cutting-edge technology and expert craftsmanship
                </p>
              </div>
              
              <div className="flex flex-col items-start gap-6">
                <div className="text-start">
                  <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-slate-200/90 via-blue-200/70 to-slate-300/90 bg-clip-text drop-shadow-[0_2px_8px_rgba(30,58,138,0.6)] mb-2">
                    Social Media
                  </h2>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    Don't Miss To Follow Us On Our Social Networks
                  </p>
                </div>

                <div className="flex flex-row gap-4">
                  {mediaData?.map((item: FooterItem, index: number) => (
                    <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" 
                       className="group relative p-3 rounded-xl backdrop-blur-sm transition-all duration-300"
                       style={{
                         background: "linear-gradient(135deg, rgba(30,41,59,0.15) 0%, rgba(15,23,42,0.25) 50%, rgba(8,47,73,0.15) 100%)",
                         border: "1px solid rgba(51,65,85,0.3)",
                         boxShadow: "inset 0 1px 0 rgba(148,163,184,0.1), 0 8px 32px rgba(30,58,138,0.08), 0 1px 4px rgba(0,0,0,0.2)",
                       }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-slate-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                      {item?.image?.fileUrl && (
                        <Image
                          src={item.image.fileUrl}
                          alt="social-icon"
                          width={24}
                          height={24}
                          className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:scale-110"
                        />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {/* Office locations */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="group relative rounded-2xl p-8 backdrop-blur-sm transition-all duration-500"
                style={{
                  background: "linear-gradient(135deg, rgba(30,41,59,0.15) 0%, rgba(15,23,42,0.25) 50%, rgba(8,47,73,0.15) 100%)",
                  border: "1px solid rgba(51,65,85,0.3)",
                  boxShadow: "inset 0 1px 0 rgba(148,163,184,0.1), 0 8px 32px rgba(30,58,138,0.08), 0 1px 4px rgba(0,0,0,0.2)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-slate-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <div className="relative z-10 text-center">
                  <Image
                    src={indiaImg}
                    alt="India"
                    width={120}
                    height={120}
                    className="mx-auto mb-6 rounded-xl"
                  />
                  <h3 className="text-slate-200 font-semibold text-xl mb-4">
                    {indAddress?.country}
                  </h3>
                  <div className="text-slate-400 leading-relaxed space-y-2">
                    <p>{indAddress?.address}</p>
                    <p className="text-blue-300/80">{indAddress?.email}</p>
                    <p>{indAddress?.phone}</p>
                  </div>
                </div>
              </div>

              <div className="group relative rounded-2xl p-8 backdrop-blur-sm transition-all duration-500"
                style={{
                  background: "linear-gradient(135deg, rgba(30,41,59,0.15) 0%, rgba(15,23,42,0.25) 50%, rgba(8,47,73,0.15) 100%)",
                  border: "1px solid rgba(51,65,85,0.3)",
                  boxShadow: "inset 0 1px 0 rgba(148,163,184,0.1), 0 8px 32px rgba(30,58,138,0.08), 0 1px 4px rgba(0,0,0,0.2)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-slate-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <div className="relative z-10 text-center">
                  <Image
                    src={kuwaitImg}
                    alt="Kuwait"
                    width={120}
                    height={120}
                    className="mx-auto mb-6 rounded-xl"
                  />
                  <h3 className="text-slate-200 font-semibold text-xl mb-4">
                    {kwAddress?.country}
                  </h3>
                  <div className="text-slate-400 leading-relaxed space-y-2">
                    <p>{kwAddress?.address}</p>
                    <p className="text-blue-300/80">{kwAddress?.email}</p>
                    <p>{kwAddress?.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Links section with professional styling */}
        <div className="relative px-6 py-12"
          style={{
            background: "linear-gradient(135deg, rgba(15,23,42,0.3) 0%, rgba(8,47,73,0.2) 50%, rgba(30,41,59,0.3) 100%)",
            borderTop: "1px solid rgba(51,65,85,0.3)",
          }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="font-bold text-slate-200 text-lg mb-4">About</h3>
                <ul className="space-y-3">
                  <li><a href="/about-us" className="text-slate-400 hover:text-blue-300/80 transition-colors duration-300">Our company</a></li>
                  <li><a href="/about-us" className="text-slate-400 hover:text-blue-300/80 transition-colors duration-300">Core Team</a></li>
                  <li><a href="/career" className="text-slate-400 hover:text-blue-300/80 transition-colors duration-300">Career</a></li>
                  <li><a href="/blog" className="text-slate-400 hover:text-blue-300/80 transition-colors duration-300">Blog</a></li>
                  <li><a href="/about-us" className="text-slate-400 hover:text-blue-300/80 transition-colors duration-300">How We Work</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-slate-200 text-lg mb-4">Services</h3>
                <ul className="space-y-3">
                  {serviceData?.map((item: FooterItem, index: number) => (
                    <li key={index}>
                      <a 
                        className="text-slate-400 hover:text-blue-300/80 transition-colors duration-300 cursor-pointer"
                        onClick={() => handleSolutionNavigate(item._id)}
                      >
                        {item.points}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-slate-200 text-lg mb-4">ERP Solutions</h3>
                <ul className="space-y-3">
                  {erpSolution?.map((item: FooterItem, index: number) => (
                    <li key={index}>
                      <a
                        className="text-slate-400 hover:text-blue-300/80 transition-colors duration-300 cursor-pointer"
                        onClick={() => handleOdooNavigate(item.link)}
                      >
                        {item.points}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-slate-200 text-lg mb-4">Portfolio</h3>
                <ul className="space-y-3">
                  <li><a href="/portfolio" className="text-slate-400 hover:text-blue-300/80 transition-colors duration-300">ISA</a></li>
                  <li><a href="/portfolio" className="text-slate-400 hover:text-blue-300/80 transition-colors duration-300">Tha8afa</a></li>
                  <li><a href="/portfolio" className="text-slate-400 hover:text-blue-300/80 transition-colors duration-300">Nutripro</a></li>
                  <li><a href="/portfolio" className="text-slate-400 hover:text-blue-300/80 transition-colors duration-300">Diet Done</a></li>
                  <li><a href="/portfolio" className="text-slate-400 hover:text-blue-300/80 transition-colors duration-300">Mint</a></li>
                  <li><a href="/portfolio" className="text-slate-400 hover:text-blue-300/80 transition-colors duration-300">More...</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-slate-200 text-lg mb-4">Industries</h3>
                <ul className="space-y-3">
                  <li><a href="/industries" className="text-slate-400 hover:text-blue-300/80 transition-colors duration-300">Healthcare</a></li>
                  <li><a href="/industries" className="text-slate-400 hover:text-blue-300/80 transition-colors duration-300">Education</a></li>
                  <li><a href="/industries" className="text-slate-400 hover:text-blue-300/80 transition-colors duration-300">Hotel</a></li>
                  <li><a href="/industries" className="text-slate-400 hover:text-blue-300/80 transition-colors duration-300">Finance</a></li>
                  <li><a href="/industries" className="text-slate-400 hover:text-blue-300/80 transition-colors duration-300">E-commerce</a></li>
                </ul>
              </div>
            </div>

            {/* Professional Bottom Section */}
            <div 
              className="mt-12 pt-8 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-center gap-6"
            >
              <div className="text-center md:text-left">
                {year && (
                  <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center text-sm">
                    <p className="text-slate-400">&copy; {year} Codeox Technologies LLP</p>
                    <p className="text-slate-500">All rights reserved.</p>
                  </div>
                )}
              </div>

              <div className="flex gap-6 items-center text-sm">
                <a href="/privacy" className="text-slate-400 hover:text-blue-300/80 transition-colors duration-300">Privacy Policy</a>
                <a href="/terms" className="text-slate-400 hover:text-blue-300/80 transition-colors duration-300">Terms of Service</a>
                <a href="/contact-us" className="text-slate-400 hover:text-blue-300/80 transition-colors duration-300">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;

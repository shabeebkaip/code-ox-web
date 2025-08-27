"use client";
import { BedDouble, ChevronRight, Circle, ClipboardList,  Computer, CreditCard, Factory,  GraduationCap,  MonitorSmartphone, PhoneCall, Settings2, ShoppingCart, TrendingUp, Utensils } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import type { LucideIcon } from "lucide-react";

interface MenuItem {
  name: string;
  href: string;
   icon?: LucideIcon;
  logo?: string;
  desc?: string;
}

interface MenuSection {
  title: string;
   icon?: LucideIcon;
  items: MenuItem[];
}

interface MegaMenu {
  data: MenuSection[];
  name: string;
}
interface CompactMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuData: MenuSection[];
  onNavigate: (href: string) => void;
  activeMegaMenu: MegaMenu | null;
}

// Compact Mega Menu Component
const CompactMegaMenu: React.FC<CompactMegaMenuProps> = ({ isOpen, onClose, menuData, onNavigate, activeMegaMenu }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div
      className={`absolute bg-white shadow-xl border border-gray-100 rounded-lg overflow-hidden z-50 transition-all duration-300 ease-out ${
        isOpen
          ? "opacity-100 visible scale-100 translate-y-0"
          : "opacity-0 invisible scale-95 -translate-y-2"
      }`}
      style={{ 
        top: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        minWidth: "1100px",
        maxWidth: "900px",
        height:"auto"
      }}
    >
      <div className="p-8">
        <div className={`flex ${activeMegaMenu?.name === "About" ? "gap-6" : "flex-nowrap gap-10 overflow-x-auto px-2"}`}>
      <div className={`${activeMegaMenu?.name === "About" ? "w-2/3" : "w-full"}`}>
        <div className="flex flex-nowrap gap-10 overflow-x-auto px-2">
          {menuData.map((section, sectionIndex) => (
            <div
              key={section.title}
              className={`transition-all duration-500 ease-out w-full ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${sectionIndex * 80}ms` }}
            >
              <div className="mb-3 pb-2 border-b border-gray-100">
                <div className="flex items-center gap-2 pb-2">
                  {section.icon && <section.icon className="w-5 h-5 text-[#6d03c2]" />}
                  <div className="flex justify-between items-center w-full">
                  <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
                    {section.title}
                  </h3>
                  {activeMegaMenu?.name === "Portfolio" && (
                  <div className="flex justify-end items-center">
                    <button
                    onClick={() => {
                      onNavigate("/case-study");
                      onClose();
                    }}
                    className="group relative w-[100px] flex items-center text-sm text-black border p-2 border-black hover:text-white hover:bg-black rounded-lg transition font-medium cursor-pointer"
                  >
                    View All
                    <span className="absolute right-4 icon-move">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </button>

                  </div>
                )}
                  </div>
                </div>
              </div>


              
              <ul
                className={`${
                  activeMegaMenu?.name === "Portfolio"
                    ? "grid grid-cols-2 gap-6"
                    : activeMegaMenu?.name === "Industries"
                    ? "grid grid-cols-3 gap-4 "
                    : "space-y-2"
                }`}
              >
                {section.items.map((item, itemIndex) => (
                  <li key={item.name}>
                    {activeMegaMenu?.name === "Portfolio" ? (
                      // Custom Portfolio Card
                      <button
                        onClick={() => {
                          onNavigate(item.href);
                          onClose();
                        }}
                        className="flex items-start gap-4 text-left  p-3 rounded-lg hover:bg-blue-50 transition w-full"
                      >
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="w-15 h-15 object-contain rounded"
                        />
                        <div>
                          <h4 className="text-md font-semibold text-gray-800">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                            {item.desc}
                          </p>
                        </div>
                      </button>
                    ) : (
                      // other Menu Item
                    <button
                      onClick={() => {
                        onNavigate(item.href);
                        onClose();
                      }}
                      onMouseEnter={() => setHoveredItem(`${sectionIndex}-${itemIndex}`)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className={`text-md font-normal text-gray-600  transition-all duration-200 block w-full text-left py-1 px-2 rounded-md ${
                        hoveredItem === `${sectionIndex}-${itemIndex}` 
                          ? "bg-blue-50 text-blue-600 translate-x-1" 
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                      {item.icon && <item.icon className="w-4 h-4 text-[#6d03c2]" />}
                      <span>{item.name}</span>
                    </div>
                    </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {activeMegaMenu?.name === "About" && (
        <div className="w-2/3 pl-6 border-l border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Featured Insight</h3>
          <img 
            src="/img22.jpg" 
            alt="Codeox" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="mt-4">
            <h4 className="font-semibold text-gray-800 mb-2">
              Code-ox Wins Big: Consecutive Codeox Tech Fast 50 Awards in 2023 & 2024
            </h4>
            <a href="/blog"><button className="text-blue-600 hover:text-blue-700 font-medium transition-colors cursor-pointer">
              Read Full Article →
            </button></a>
            
          </div>
        </div>
      )}
    </div>
    
    {activeMegaMenu?.name && ["Services", "Industries"].includes(activeMegaMenu.name) && (
    <div className="bg-yellow-50 px-6 py-4 mt-6 text-sm text-gray-700 rounded-lg flex justify-between items-center">
      <span>
        {`Didn't find what you're looking for? Let us know your needs, and we'll tailor a solution just for you.`}
      </span>
      <button className="bg-white text-black border border-black hover:bg-black hover:text-white px-4 py-2 rounded-lg  transition">
        Consult Our Experts
      </button>
    </div>
  )}
  </div>
    </div>
  );
};

// Menu data structure
const serviceItems = [
  { name: "Odoo Services", href: "/services/odoo" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "Mobile App Development", href: "/services/mobile-apps" },
];

// const productItems = [
//   { name: "Nutri Pro", href: "/nutri-pro" },
//   { name: "Clinic Pro", href: "/clinic-pro" },
//   { name: "Host Pro", href: "/host-pro" },
//   { name: "Groom Pro", href: "/our-product/330343" },
// ];

// const productMegaMenu = [
// {  
//   title:"Our Products",
//   items:productItems
// }
// ]

// Odoo mega menu data structure
const odooMegaMenuData = [
  {
    title: "Industries",
    items: [
      { name: "Trading", href: "/industries/trading", icon: TrendingUp },
      { name: "Manufacturing", href: "/industries/manufacturing", icon: Factory },
      { name: "Restaurant Management", href: "/industries/restaurant", icon: Utensils },
      { name: "POS", href: "/industries/pos", icon: CreditCard },
      { name: "E-commerce Website", href: "/industries/ecommerce", icon: ShoppingCart },
      { name: "Hotel Management", href: "/industries/hotel", icon: BedDouble },
      { name: "Education", href: "/industries/education", icon: GraduationCap },
      { name: "Service Management", href: "/industries/service", icon: ClipboardList },
    ],
  },
];
// Services mega menu data
const servicesMegaMenuData = [
  {
    title: "PRODUCT DEVELOPMENT & ENGINEERING",
    icon: Computer,
    items: [
      { name: "Product Design - UI/UX", href: "/services/web/custom" },
      { name: "Mobile Application Development", href: "/services/web/ecommerce" },
      { name: "Web Development", href: "/services/web/cms" },
      // { name: "QA and Testing", href: "/services/web/webapp" },
      // { name: "DevOps", href: "/services/web/webapp" },
      // { name: "Product Management", href: "/services/web/webapp" },
    ]
  },
  {
    title: "ODOO ",
    icon:Circle,
    items: [
      { name: "Odoo Implementation", href: "/services/odoo/implementation" },
      { name: "Odoo Customization", href: "/services/odoo/customization" },
      { name: "Odoo Migration", href: "/services/odoo/migration" },
      { name: "Odoo Support", href: "/services/odoo/support" },
    ]
  },
  {
    title: "CONSULTING SERVICES",
    icon:MonitorSmartphone,
    items: [
      { name: "IT Consulting", href: "/services/consulting/tech" },
    ]
  }
];

const aboutItems = [
  { name: "About Code-ox", href: "/about-us" },
  { name: "Blog", href: "/blog" },
  { name: "Career", href: "/career" },
];

const aboutMegaMenu=[
  {
    title:"About",
    items:aboutItems
  }

]

const portfolioItems=[
  {
    logo: "/isa.svg",
    name: "ISA",
    desc: "International spearfish academy for divers",
    href: "https://isa-staging.code-ox.com/",
  },
  {
    logo: "/nutri-1.png",
    name: "NUTRIPRO",
    desc: "A mobile app to digitalise & expand KFC’s digital footprint",
    href: "/portfolio/kfc",
  },
  {
    logo: "/isa.svg",
    name: "DIET DONE",
    desc: "Healthy living, effortlessly—personalized plans at your doorstep.",
    href: "/portfolio/jobget",
  },
  {
    logo: "/nutri-1.png",
    name: "THA8AFA",
    desc: "Interactive Quiz Game Platform",
    href: "https://staging.tha8afa.com/",
  },
  {
    logo: "/nutri-1.png",
    name: "SHAMMASY",
    desc: "Empowering trade with trust, speed, and simplicity.",
    href: "/portfolio/dominos",
  },
  {
    logo: "/nutri-1.png",
    name: "WELLKINS",
    desc: "From chaos to clarity—healthcare reimagined",
    href: "/portfolio/edfundo",
  },
]

const portfolioMegaMenuData = [
  {
    title:"Projects",
    items: portfolioItems,
  },
];

const menuItems = [
  { name: "Home", href: "/" },
  { 
    name: "Services", 
    href: "/services", 
    hasDropdown: true, 
    dropdownItems: serviceItems,
    hasMegaMenu: true,
    megaMenuData: servicesMegaMenuData
  },
  {
  name: "Portfolio",
  href: "/portfolio",
  hasDropdown: true,
  hasMegaMenu: true,
  megaMenuData: portfolioMegaMenuData,
},
  { 
    name: "Industries", 
    href: "/industries",
    hasMegaMenu: true,
    megaMenuData: odooMegaMenuData
  },
  // { name: "Our Products", href: "#", hasMegaMenu: true, megaMenuData: productMegaMenu },
   { 
    name: "About", 
    href: "/about-us", 
    hasMegaMenu: true,
    megaMenuData: aboutMegaMenu, 
    },
];

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<string | false>(false);
  const [showMegaMenu, setShowMegaMenu] = useState<boolean>(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<MegaMenu | null>(null);
  const [showMobileSubmenu, setShowMobileSubmenu] = useState<string | null>(null);

  const handleNavigate = (href:string) => {
    if (href !== "#") {
      router.push(href);
      setIsOpen(false);
      setShowDropdown(false);
      setShowMegaMenu(false);
      setActiveMegaMenu(null);
      setShowMobileSubmenu(null);
    }
  };

  const handleMegaMenuOpen = (menuData: MenuSection[], menuName: string) => {
    setActiveMegaMenu({ data: menuData, name: menuName });
    setShowMegaMenu(true);
    setShowDropdown(false);
  };

  const handleMegaMenuClose = () => {
    setShowMegaMenu(false);
    setActiveMegaMenu(null);
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleMobileSubmenu = (name: string) => {
    setShowMobileSubmenu(showMobileSubmenu === name ? null : name);
  };

  return (
    <div className="sticky top-0 z-40">
      {/* Sophisticated glassmorphism navbar with midnight blue accents */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/90 to-slate-950/95 backdrop-blur-2xl border-b border-slate-700/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/10 via-transparent to-slate-900/20" />
      {/* Atmospheric glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent blur-xl" />
      
      {/* Desktop Navbar */}
      <div className="relative hidden lg:flex items-center justify-between px-8 py-3 container mx-auto h-20">
        <div onClick={() => handleNavigate("/")} className="cursor-pointer transform hover:scale-105 transition-all duration-300 ease-out">
          <img src="/CodeOxLogo.svg" alt="code-ox" className="w-[130px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]" />
        </div>

        <div className="flex items-center gap-8">
          {menuItems.map(({ name, href, hasDropdown, dropdownItems, hasMegaMenu, megaMenuData }) => (
            <div
              key={name}
              // className="relative"
              onMouseEnter={() => {
                if (hasMegaMenu) {
                  handleMegaMenuOpen(megaMenuData, name);
                } else if (hasDropdown) {
                  setShowDropdown(name);
                  setShowMegaMenu(false);
                }
              }}
              onMouseLeave={() => {
                if (hasDropdown && !hasMegaMenu) {
                  setShowDropdown(false);
                }
              }}
            >
              <div
                onClick={() => handleNavigate(href)}
                className={`flex items-center text-[15px] font-medium cursor-pointer transition-all duration-300 ease-in-out group relative px-4 py-2.5 rounded-xl backdrop-blur-sm ${
                  pathname === href
                    ? "text-white bg-gradient-to-r from-blue-500/20 to-slate-700/30 border border-blue-400/20 shadow-[0_4px_16px_rgba(59,130,246,0.15)]"
                    : "text-slate-200 hover:text-white hover:bg-gradient-to-r hover:from-slate-700/30 hover:to-blue-900/20 hover:border hover:border-slate-600/30 hover:shadow-[0_4px_16px_rgba(148,163,184,0.1)]"
                }`}
              >
                <span className="relative tracking-wide">
                  {name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-slate-400 transition-all duration-300 ${
                    pathname === href ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </span>
                {/* {(hasDropdown || hasMegaMenu) && (
                  <svg
                    className={`ml-2 w-4 h-4 transition-all duration-200 ${
                      (showDropdown === name || (showMegaMenu && activeMegaMenu?.name === name)) 
                        ? "rotate-180 text-white" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )} */}
              </div>

              {/* Regular Dropdown */}
              {hasDropdown && !hasMegaMenu && dropdownItems && (
                <div
                  className={`absolute left-0 top-full min-w-[220px] bg-white shadow-xl border border-gray-100 rounded-lg overflow-hidden z-50 transition-all duration-300 ${
                    showDropdown === name
                      ? "opacity-100 visible translate-y-0 scale-100 pointer-events-auto"
                      : "opacity-0 invisible -translate-y-2 scale-95 pointer-events-none"
                  }`}
                  style={{ marginTop: "0px" }}
                >
                  {dropdownItems.map((item, index) => (
                    <div
                      key={item.name}
                      onClick={() => handleNavigate(item.href)}
                      className={`px-4 py-3 hover:bg-blue-50 cursor-pointer transition-all duration-200 border-b border-gray-50 last:border-b-0 ${
                        pathname === item.href
                          ? "font-semibold text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                      style={{ 
                        animationDelay: `${index * 50}ms`,
                        animation: showDropdown === name ? 'fadeInUp 0.3s ease-out forwards' : 'none'
                      }}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              )}

              {/* Mega Menu */}
              {/* {hasMegaMenu && showMegaMenu && activeMegaMenu?.name === name && (
                <div
                  onMouseEnter={() => setShowMegaMenu(true)}
                  onMouseLeave={handleMegaMenuClose}
                >
                  <CompactMegaMenu
                    isOpen={showMegaMenu}
                    onClose={handleMegaMenuClose}
                    menuData={activeMegaMenu.data}
                    onNavigate={handleNavigate}
                    // triggerRef={true}
                     activeMegaMenu={activeMegaMenu}
                  />
                </div>
              )} */}
            </div>
          ))}
        </div>
        <button
          className={`group relative flex items-center text-white text-base font-medium px-6 py-3 rounded-xl backdrop-blur-sm transition-all duration-300 ease-out cursor-pointer transform hover:scale-105 ${
            pathname === "/contact-us"
              ? "bg-gradient-to-r from-blue-600/80 to-slate-700/60 border border-blue-400/40 shadow-[0_8px_32px_rgba(59,130,246,0.25)]"
              : "bg-gradient-to-r from-slate-700/40 to-slate-800/30 border border-slate-600/30 hover:bg-gradient-to-r hover:from-slate-600/50 hover:to-blue-900/30 hover:border-slate-500/40 hover:shadow-[0_8px_32px_rgba(148,163,184,0.15)]"
          }`}
          onClick={() => handleNavigate("/contact-us")}
        >
         <span className="absolute left-3 p-1 animate-pulse">
            <PhoneCall className="w-4 h-4" />
          </span>
          <span className="ml-6 tracking-wide">Connect Us</span>
        </button>
      </div>

      {/* Mobile Navbar */}
      <div className="relative flex items-center justify-between lg:hidden px-6 py-4">
        <div onClick={() => handleNavigate("/")} className="cursor-pointer transform hover:scale-105 transition-all duration-300">
          <img src="/logo.svg" alt="code-ox" className="w-[100px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]" />
        </div>
        <button
          onClick={toggleMenu}
          className="p-3 text-slate-200 hover:text-white rounded-xl bg-gradient-to-r from-slate-700/40 to-slate-800/30 backdrop-blur-sm border border-slate-600/30 hover:border-slate-500/40 transition-all duration-300 cursor-pointer transform hover:scale-105"
        >
          <svg
            className="w-6 h-6 transition-all duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 transform w-[320px] 
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        transition-transform duration-300 ease-in-out lg:hidden
        flex flex-col px-6 py-6 space-y-4 overflow-y-auto
        bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/95 backdrop-blur-2xl
        border-l border-slate-700/30 shadow-2xl`}
      >
        <button
          onClick={toggleMenu}
          className="self-end p-3 text-slate-300 hover:text-white rounded-xl bg-gradient-to-r from-slate-700/40 to-slate-800/30 backdrop-blur-sm border border-slate-600/30 hover:border-slate-500/40 transition-all duration-300 cursor-pointer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {menuItems.map(({ name, href, hasDropdown, dropdownItems, hasMegaMenu, megaMenuData }) => (
          <div key={name} className="border-b border-slate-700/30 pb-3">
            {hasDropdown || hasMegaMenu ? (
              <div>
                <div
                  onClick={() => toggleMobileSubmenu(name)}
                  className="cursor-pointer text-[16px] flex items-center justify-between font-medium text-slate-200 hover:text-white transition-all duration-300 py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-slate-700/40 hover:to-slate-800/30"
                >
                  {name}
                    <svg
                    className={`w-5 h-5 transform transition-transform duration-200 text-slate-400 ${
                      showMobileSubmenu === name ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {showMobileSubmenu === name && (
                  <div className="ml-4 mt-3 space-y-2 max-h-80 overflow-y-auto">
                    {/* Regular dropdown items */}
                    {dropdownItems && dropdownItems.map((item) => (
                      <div
                        key={item.name}
                        onClick={() => handleNavigate(item.href)}
                        className={`cursor-pointer text-[14px] py-3 px-4 rounded-lg transition-all duration-300 ${
                          pathname === item.href
                            ? "font-semibold text-blue-400 bg-gradient-to-r from-blue-500/20 to-slate-700/30"
                            : "text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-slate-700/40 hover:to-slate-800/30"
                        }`}
                      >
                        {item.name}
                      </div>
                    ))}
                    
                    {/* Mega menu items */}
                    {megaMenuData && megaMenuData.map((section) => (
                      <div key={section.title} className="mb-4">
                        <h4 className="font-semibold text-slate-200 text-sm mb-2 px-3 py-2 bg-gradient-to-r from-slate-700/40 to-slate-800/30 rounded-lg">
                          {section.title}
                        </h4>
                        <div className="ml-2 space-y-1">
                          {section.items.map((item) => (
                            <div
                              key={item.name}
                              onClick={() => handleNavigate(item.href)}
                              className={`cursor-pointer text-[13px] py-2 px-3 rounded-lg transition-all duration-300 ${
                                pathname === item.href
                                  ? "font-semibold text-blue-400 bg-gradient-to-r from-blue-500/20 to-slate-700/30"
                                  : "text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-slate-700/40 hover:to-slate-800/30"
                              }`}
                            >
                              {item.name}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div
                onClick={() => handleNavigate(href)}
                className={`cursor-pointer text-[16px] font-medium py-3 px-4 rounded-xl transition-all duration-300 ${
                  pathname === href
                    ? "font-semibold text-blue-400 bg-gradient-to-r from-blue-500/20 to-slate-700/30"
                    : "text-slate-200 hover:text-white hover:bg-gradient-to-r hover:from-slate-700/40 hover:to-slate-800/30"
                }`}
              >
                {name}
              </div>
            )}
          </div>
        ))}

        <button
          className={`flex items-center justify-center text-white font-medium px-8 py-4 rounded-xl text-base transition-all duration-300 cursor-pointer mt-6 transform hover:scale-105 ${
            pathname === "/contact-us"
              ? "bg-gradient-to-r from-blue-600/80 to-slate-700/60 border border-blue-400/40 shadow-[0_8px_32px_rgba(59,130,246,0.25)]"
              : "bg-gradient-to-r from-slate-700/50 to-slate-800/40 border border-slate-600/40 hover:bg-gradient-to-r hover:from-slate-600/60 hover:to-blue-900/40 hover:shadow-[0_8px_32px_rgba(148,163,184,0.15)]"
          }`}
          onClick={() => handleNavigate("/contact-us")}
        >
          Connect Us
        </button>
      </div>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={toggleMenu}
        ></div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        .glass-effect {
          background: linear-gradient(135deg, rgba(148,163,184,0.1), rgba(71,85,105,0.05));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(148,163,184,0.1);
        }
        
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(148,163,184,0.2), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
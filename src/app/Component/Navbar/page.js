
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaMobileAlt, FaShoppingCart, FaJsSquare } from 'react-icons/fa';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import icons for dropdown

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesMobileMenuOpen, setIsServicesMobileMenuOpen] = useState(false); // State for mobile services dropdown
  const [isContactMobileMenuOpen, setIsContactMobileMenuOpen] = useState(false); // State for mobile contact dropdown
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false); // Desktop services dropdown
  const [isContactMenuOpen, setIsContactMenuOpen] = useState(false); // Desktop contact dropdown

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsServicesMobileMenuOpen(false); // Close other mobile menus when toggling
    setIsContactMobileMenuOpen(false);
  };

  const toggleMobileServicesMenu = () => {
    setIsServicesMobileMenuOpen(!isServicesMobileMenuOpen);
  };

  const toggleMobileContactMenu = () => {
    setIsContactMobileMenuOpen(!isContactMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0  bg-[#0e0a2e] h-[90px] shadow-lg z-50">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center mt-10 justify-left">
            <motion.h1 className="flex-shrink-0 mr-4">
              <motion.img
                src='/Maccotech1-removebg-preview.png'
                alt="MaccoTech Logo"
                className="h-15 w-auto"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              />
            </motion.h1>

            {/* Animated Text */}
            <motion.div
              className="text-[#1eb4e4] text-3xl font-bold"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>M</motion.span>
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>acco</motion.span>
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>Tech</motion.span>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white mt-10 mr-8 hover:text-purple-700 focus:outline-none">
              <svg className="h-10 w-10 fill-current" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829z" clipRule="evenodd" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z" clipRule="evenodd" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center relative mt-10">
            <Link href="/home"><button className="text-white text-[17px] hover:text-purple-700 transition-all cursor-pointer">Home</button></Link>

            {/* Services with Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesMenuOpen(true)}
              onMouseLeave={() =>  setIsContactMenuOpen(false)}
            >
              <Link href='/service'>
                <button className="text-white text-[17px] hover:text-purple-700 transition-all cursor-pointer">Services</button>
              </Link>

              {isServicesMenuOpen && (
                <div className="custom-scroll absolute top-full left-4 -translate-x-1/2 bg-white shadow-lg z-50 py-6 px-6 w-[320px] rounded-md max-h-[300px] overflow-y-auto grid gap-4 scrollbar-none">
                  <div className="bg-[#f9f9f9] p-4 rounded-md shadow-md hover:shadow-lg transition-all">
                    <div className="text-purple-700 font-bold mb-2">Mobile App Development</div>
                    <ul className="space-y-1 text-sm">
                      <li><Link href="/AndroidAppDevelopment" className="hover:text-purple-500">Android App Development</Link></li>
                      <li><Link href="/iOSAppDevelopment" className="hover:text-purple-500">iOS App Development</Link></li>
                      <li><Link href="/ReactNativeAppDevelopment" className="hover:text-purple-500">React-Native App</Link></li>
                      <li><Link href="/ecommerce-application-development" className="hover:text-purple-500">E-Commerce App</Link></li>
                    </ul>
                  </div>

                  <div className="bg-[#f9f9f9] p-4 rounded-md shadow-md hover:shadow-lg transition-all">
                    <div className="text-purple-700 font-bold mb-2">Ecommerce Solution</div>
                    <ul className="space-y-1 text-sm">
                      <li><Link href="/ShopifyDevelopment" className="hover:text-purple-500">Shopify Development</Link></li>
                      <li><Link href="/Graphics-design" className="hover:text-purple-500">Graphic Design</Link></li>
                      <li><Link href="/Branding" className="hover:text-purple-500">Branding</Link></li>
                    </ul>
                  </div>

                  <div className="bg-[#f9f9f9] p-4 rounded-md shadow-md hover:shadow-lg transition-all">
                    <div className="text-purple-700 font-bold mb-2">JS Frameworks</div>
                    <ul className="space-y-1 text-sm">
                      <li><Link href="/ReactJsDevelopment" className="hover:text-purple-500">React Js Development</Link></li>
                      <li><Link href="/Social" className="hover:text-purple-500">Social Media</Link></li>
                      <li><Link href="/email" className="hover:text-purple-500">Email Marketing</Link></li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about-us"><button className="text-white text-[17px] hover:text-purple-700 cursor-pointer">About Us</button></Link>
            <Link href="/careers"><button className="text-white text-[17px] hover:text-purple-700 cursor-pointer">Careers</button></Link>
            <Link href="/portfolio"><button className="text-white text-[17px] hover:text-purple-700 cursor-pointer">Portfolio</button></Link>
            <Link href="/case-study"><button className="text-white text-[17px] hover:text-purple-700 cursor-pointer">Case Study</button></Link>
            <Link href="/pricing"><button className="text-white text-[17px] hover:text-purple-700 cursor-pointer">Pricing</button></Link>

            <div
              className="relative"
              onMouseEnter={() => setIsContactMenuOpen(true)}
              onMouseLeave={() => {
                // Add a small delay before closing
                setTimeout(() => setIsContactMenuOpen(false), 8000);
              }}
            >
              <Link href="/contact">
                <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" type="button" className="bg-blue-600 text-white text-[17px] font-change rounded-[30px] px-6 py-2 hover:bg-purple-600 transition-all cursor-pointer">Contact Us</button>
              </Link>

              {isContactMenuOpen && (
                <div id="dropdownHover"
                  className="absolute top-full left-1/2 -translate-x-1/2 bg-[#f9f9f9] p-4 rounded-md shadow-lg hover:shadow-xl transition-all z-50 w-[calc(100vw-40px)] max-w-[280px] grid gap-4 mt-4 mr-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200"
                >
                  <ul className="space-y-2 text-sm text-center" aria-labelledby="dropdownHoverButton">
                    <li>
                      <a
                        href="https://wa.me/+919525104860"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-center items-center gap-2 text-green-600 hover:text-green-800"
                      >
                        <FaWhatsapp className="w-5 h-5" />
                        <span>+91-9525104860</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:info@maccotech.com"
                        className="flex justify-center items-center gap-2 text-blue-700 hover:text-blue-900"
                      >
                        <FaEnvelope className="w-5 h-5" />
                        <span>info@maccotech.com</span>
                      </a>
                    </li>
                  </ul>
                </div>

              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 w-full bg-gradient-to-b from-white via-gray-100 to-gray-200 shadow-lg z-40 rounded-b-lg" style={{top: '100px'}}>
            <div className="px-6 py-4 space-y-3">

              <Link href="/home">
                <button className="w-full text-left py-2 px-3 rounded-md hover:bg-gray-100 transition-all font-medium">Home</button>
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleMobileServicesMenu}
                  className="w-full text-left py-2 px-3 flex justify-between items-center rounded-md hover:bg-gray-100 transition-all font-medium"
                >
                  Services
                  {isServicesMobileMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>

                {isServicesMobileMenuOpen && (
                  <div className="ml-4 mt-2 space-y-1 border-l border-gray-300 pl-4">
                    {[
                      { href: "/AndroidAppDevelopment", label: "Android App Development" },
                      { href: "/iOSAppDevelopment", label: "iOS App Development" },
                      { href: "/ReactNativeAppDevelopment", label: "React-Native App" },
                      { href: "/ecommerce-application-development", label: "E-Commerce App" },
                      { href: "/ShopifyDevelopment", label: "Shopify Development" },
                      { href: "/Graphics-design", label: "Graphic Design" },
                      { href: "/Branding", label: "Branding" },
                      { href: "/ReactJsDevelopment", label: "React Js Development" },
                      { href: "/Social", label: "Social Media" },
                      { href: "/email", label: "Email Marketing" },
                      { href: "/angular", label: "Angular Development" },
                      { href: "/vue", label: "Vue.js Development" },
                      { href: "/svelte", label: "Svelte Development" },
                    ].map(({ href, label }) => (
                      <Link key={href} href={href}>
                        <button className="block text-sm text-left w-full py-1 px-2 hover:bg-gray-100 rounded-md transition">{label}</button>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Links */}
              {[
                { href: "/about-us", label: "About Us" },
                { href: "/careers", label: "Careers" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/case-study", label: "Case Study" },
                { href: "/pricing", label: "Pricing" },
              ].map(({ href, label }) => (
                <Link key={href} href={href}>
                  <button className="w-full text-left py-2 px-3 rounded-md hover:bg-gray-100 transition-all font-medium">{label}</button>
                </Link>
              ))}

              {/* Contact Us Section */}
              <div className="pt-4 border-t border-gray-300">
                <button
                  onClick={toggleMobileContactMenu}
                  className="bg-blue-600 text-white font-semibold w-full text-center rounded-full py-2 hover:bg-purple-600 transition-all"
                >
                  Contact Us
                </button>

                {isContactMobileMenuOpen && (
                  <div className="mt-2 space-y-2 pl-2">
                    <a
                      href="https://wa.me/+919525104860"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-green-600 hover:text-green-800"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      <span>+91-9525104860</span>
                    </a>
                    <a
                      href="mailto:info@maccotech.com"
                      className="flex items-center gap-2 text-blue-700 hover:text-blue-900"
                    >
                      <FaEnvelope className="w-5 h-5" />
                      <span>info@maccotech.com</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

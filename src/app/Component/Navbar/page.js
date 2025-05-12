
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#0e0a2e] h-[90px] shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center mt-10 justify-left">
            <motion.h1 className="flex-shrink-0 mr-4">
              <motion.img
                src='/Maccotech4.png'
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
            <button onClick={toggleMobileMenu} className="text-white mt-10 mr-5 hover:text-purple-700 focus:outline-none">
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
            <Link href="/home"><button className="text-white text-xl hover:text-purple-700 transition-all cursor-pointer">Home</button></Link>

            {/* Services with Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesMenuOpen(true)}
              onMouseLeave={() => setIsServicesMenuOpen(false)}
            >
              <Link href='/service'>
                <button className="text-white text-xl hover:text-purple-700 transition-all cursor-pointer">Services</button>
              </Link>

              {isServicesMenuOpen && (
                <div className="absolute top-full left-4 -translate-x-1/2 bg-white shadow-lg z-50 py-6 px-6 w-[320px] rounded-md max-h-[300px] overflow-y-auto grid gap-4">
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

            <Link href="/about-us"><button className="text-white text-xl hover:text-purple-700 cursor-pointer">About Us</button></Link>
            <Link href="/careers"><button className="text-white text-xl hover:text-purple-700 cursor-pointer">Careers</button></Link>
            <Link href="/portfolio"><button className="text-white text-xl hover:text-purple-700 cursor-pointer">Portfolio</button></Link>
            <Link href="/case-study"><button className="text-white text-xl hover:text-purple-700 cursor-pointer">Case Study</button></Link>
            <Link href="/pricing"><button className="text-white text-xl hover:text-purple-700 cursor-pointer">Pricing</button></Link>
            <Link href="/contact">
              <button className="bg-blue-600 text-white text-xl rounded-[30px] px-6 py-2 hover:bg-purple-600 transition-all cursor-pointer">Contact Us</button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-40">
            <div className="px-4 py-2 space-y-2">
              <Link href="/service"><button className="block w-full text-left py-2 hover:bg-gray-100">Services</button></Link>
              <Link href="/about-us"><button className="block w-full text-left py-2 hover:bg-gray-100">About Us</button></Link>
              <Link href="/careers"><button className="block w-full text-left py-2 hover:bg-gray-100">Careers</button></Link>
              <Link href="/portfolio"><button className="block w-full text-left py-2 hover:bg-gray-100">Portfolio</button></Link>
              <Link href="/case-study"><button className="block w-full text-left py-2 hover:bg-gray-100">Case Study</button></Link>
              <Link href="/pricing"><button className="block w-full text-left py-2 hover:bg-gray-100">Pricing</button></Link>
              <Link href="/contact"><button className="block w-full text-left py-2 hover:bg-gray-100">Contact Us</button></Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}





"use client";

import React, { useState, useEffect } from 'react';

import Navbar from '../Component/Navbar/page';
import CareerBenefits from '../Component/benefits/pages';
import WhyWorkWithUs from '../Component/WhyWorkWithUs/page';
import InterviewProcess from '../Component/InterviewProcess/page';
import OurOpenings from '../Component/OurOpenings/page';
import Footerpage from '../Component/Footerpage/page';
import LifeAtMacco from '../Component/LifeAtMcco/page';
import Banner from '../Component/Banner/page';
import { motion } from "framer-motion";

import Image from 'next/image';

function Careers() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <Navbar />


      <section className="relative overflow-hidden">
  <div
    className="min-h-[86vh] bg-gradient-to-r from-purple-900 to-indigo-900 text-white flex flex-col md:flex-row items-center justify-center px-10 pt-23 py-12 gap-10"
  >
    {/* Animated Background Elements - Moved outside the left content */}
    <div className="absolute top-0 left-0 w-full h-full opacity-20">
      <svg
        className="absolute top-1/4 left-1/15 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 fill-current text-blue-500 animate-pulse"
        viewBox="0 0 20 20"
      >
        <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-2a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
      </svg>
      <svg
        className="absolute bottom-1/8 right-1/30 transform translate-x-1/2 translate-y-1/2 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 fill-current text-purple-500 animate-pulse"
        viewBox="0 0 20 20"
      >
        <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-2a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
      </svg>
    </div>

    {/* Left Content */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="md:w-1/2 text-center md:text-left relative z-10" // Added relative and z-10
    >
      <h2 className="text-3xl md:text-3xl font-bold mb-3 leading-snug">
        The Future of Macco Tech Starts with You.
      </h2>
      <p className="text-base md:text-lg">
        We are a group of young, dynamic, and creative experts who are eager to break new ground in IT services and consulting.
      </p>
    </motion.div>

    {/* Form Card */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="md:w-[500px] w-full bg-gradient-to-br from-[#41c5fc] to-[#864adb] p-6 rounded-md shadow-lg relative z-10" // Added relative and z-10
    >
      <form className="space-y-3 text-sm">
        {/* Name */}
        <input
          type="text"
          placeholder="Name *"
          required
          className="w-full px-4 py-2.5 rounded-md bg-white/20 text-white placeholder-white outline-none"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email *"
          required
          className="w-full px-4 py-2.5 rounded-md bg-white/20 text-white placeholder-white outline-none"
        />

        {/* Mobile Number with Dropdown */}
        <div className="flex items-center gap-2">
          <select
            className="bg-white/20 text-white px-3 py-2.5 rounded-md outline-none"
            defaultValue="+91"
          >
            <option value="+91" className="text-black">+91 (India)</option>
            <option value="+1" className="text-black">+1 (USA)</option>
            <option value="+44" className="text-black">+44 (UK)</option>
            <option value="+61" className="text-black">+61 (Australia)</option>
            <option value="+81" className="text-black">+81 (Japan)</option>
            {/* Add more if needed */}
          </select>

          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full px-4 py-2.5 rounded-md bg-white/20 text-white placeholder-white outline-none"
          />
        </div>

        {/* Message */}
        <textarea
          placeholder="Message..."
          rows="4"
          className="w-full px-4 py-2.5 rounded-md bg-white/20 text-white placeholder-white outline-none resize-none"
        ></textarea>

        {/* Upload Resume */}
        <div className="text-xs text-white mt-2">
          Upload Your Resume *(File size should not be more than 10 MB)
        </div>
        <div className="flex items-center bg-white/20 text-black rounded-md overflow-hidden">
          <label htmlFor="resume" className="bg-gray-200 px-4 py-2 cursor-pointer text-sm">
            Choose File
          </label>
          <span className="px-3 text-sm truncate text-white">No file chosen</span>
          <input id="resume" type="file" className="hidden" />
        </div>

        {/* reCAPTCHA */}
        <div className="bg-white max-w-[270px] border border-gray rounded-md flex items-center px-4 py-3 text-white">
          <input type="checkbox" className="mr-2" />
          <label className="text-black text-sm">I&apos;m not a robot</label>

          <div className="ml-18">
          <Image
  src="/recapcha.png"
  alt="reCAPTCHA"
  width={32}
  height={32}
  className="w-8 h-8"
/>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#3d0070] hover:bg-[#5b0da8] text-white font-semibold py-2.5 px-6 rounded-md w-full text-sm"
        >
          SEND
        </button>
      </form>
    </motion.div>
  </div>
</section>



      {/* ----second section start--- */}
      <CareerBenefits />

      {/* ----second section end---- */}


      <WhyWorkWithUs />

      <OurOpenings />
      <LifeAtMacco />
      <InterviewProcess />
      <Banner />
      <Footerpage />
    </>
  );
}

export default Careers;




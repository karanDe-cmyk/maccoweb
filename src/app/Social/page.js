
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Component/Navbar/page';
import HireUsSection from '../Component/HireUsSection/page';
import IOSFeatures from '../Component/IOSFeatures/page';
import Footerpage from '../Component/Footerpage/page';

function HeroSection() {
  return (
    <>
      <Navbar />
      <section>
  <div
  className="relative bg-cover bg-center bg-no-repeat min-h-[85vh] flex items-center justify-center"
  style={{
    backgroundImage: 'url(/social.png)',
    background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/social.png)',
  }}
>
  {/* आपकी अन्य सामग्री यहाँ */}
    
    {/* Overlay with blur effect but no opacity */}
    <div className="absolute inset-0 backdrop-blur-md z-0"></div>

    {/* Content with animation */}
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative z-10 text-center text-white px-4 md:px-8"
    >
      <p className="text-sm uppercase mb-2 tracking-wider text-gray-300">Our Expertise</p>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-shadow-lg">
        Social Media Marketing
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
        Elevate your brand and engage your audience with our expert social media marketing strategies. We help businesses build communities and achieve success across social platforms.
      </p>
      <button className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-full shadow hover:bg-gray-100 transition">
        TALK OUR EXPERTS →
      </button>
    </motion.div>
  </div>
</section>






      {/* ----second Section---- */}

      <div className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:flex lg:items-center lg:justify-between">

      {/* LEFT SIDE WITH ANIMATION */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-6 lg:mb-0 lg:w-1/2"
      >
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Ignite Your Brand`s Presence with Strategic Social Media
        </h2>
        <p className="mt-4 text-base text-gray-700">
          Transform your social media from a task to a powerful tool for connection and growth.
        </p>
        <p className="mt-4 text-base text-gray-600">
          Macco Tech helps businesses thrive in the social landscape. We craft tailored strategies that resonate with your audience, build vibrant communities, and drive tangible results. Our experts leverage the latest trends and platforms to enhance your brand`s visibility, engagement, and ultimately, your bottom line. From compelling content creation to insightful analytics and community management, we provide the expertise to make your social media efforts truly impactful.
        </p>
      </motion.div>

      {/* RIGHT SIDE IMAGE WITH ANIMATION */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="lg:w-1/2 lg:pl-8"
      >
        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c29jaWFsJTIwbWVkaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="Social Media Marketing"
          className="rounded-lg shadow-xl w-full h-[370px] object-cover"
        />
      </motion.div>

    </div>
  </div>
</div>  {/* second section end */}



<section>
  <div className="py-16 bg-gradient-to-r from-pink-200 via-blue-200 to-purple-200">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 opacity-20"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
      />
      
      <motion.h2
        className="text-2xl font-bold text-gray-700 sm:text-3xl lg:text-3xl text-center mb-6 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Why Choose Macco Tech for Social Media Marketing
      </motion.h2>

      <motion.div
        className="border-b-2 border-blue-400 w-16 mx-auto mb-8"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      />

      <motion.div
        className="text-gray-700 leading-relaxed text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="mb-4 text-base">
          At Macco Tech, we specialize in delivering impactful social media marketing solutions designed to elevate your brand and drive engagement. Our expertise lies in crafting and executing strategies that build communities, amplify your message, and achieve your business objectives across various social platforms.
        </p>
        <p className="mb-4 text-base">
          With a finger on the pulse of the ever-evolving social media landscape, our skilled team utilizes the latest trends, analytics, and creative approaches to ensure your brand not only stands out but also fosters meaningful connections with your target audience. From content creation to community management and performance tracking, we`re your dedicated partner every step of the way.
        </p>
        <p className="text-base">
          Whether you`re a startup aiming to establish your presence or an enterprise looking to enhance your social impact, Macco Tech offers a collaborative and transparent approach, focused on delivering measurable results, fostering innovation, and ensuring your long-term success in the social sphere. Partner with us to transform your social media vision into a high-performing marketing engine.
        </p>
      </motion.div>
    </div>
  </div>
</section>
<HireUsSection/>
<Footerpage/>
    </>
  );
}

export default HeroSection;

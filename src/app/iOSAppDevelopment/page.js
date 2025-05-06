
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
          className="relative bg-cover bg-center bg-no-repeat min-h-[70vh] flex items-center justify-center"
          style={{
            backgroundImage:
              'url(https://pixelplex.io/next/images/ios-app-development/header/ios-app-development-background.jpg)',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0  bg-opacity-50 z-0"></div>

          {/* Content with animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-10 text-center text-white px-4 md:px-8"
          >
            <p className="text-sm uppercase mb-2 tracking-wider text-gray-300">Services</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              iOS App Development
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
              Craft feature-rich, intuitive, and innovative iOS applications to strengthen your brand identity.
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
              Building Next-Gen iOS Apps That Define Excellence
            </h2>
            <p className="mt-4 text-base text-gray-700">
              Begin your iOS journey with confidence and deliver unforgettable mobile experiences to your users.
            </p>
            <p className="mt-4 text-base text-gray-600">
              Macco Tech empowers businesses to bring their ideas to life through immersive and high-impact iOS applications. Our expert developers focus on crafting intuitive user experiences and enhancing brand value using the latest tools and Apple technologies. With deep domain knowledge and a commitment to quality, we build every app with care, precision, and technical excellence.
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
              src="https://www.rootquotient.com/blog/content/images/2023/06/01-2.png"
              alt="iOS App Development"
              className="rounded-lg shadow-xl w-full h-[370px]"
            />
          </motion.div>

        </div>
      </div>
    </div>    {/* second section end */}



    <section>
  <div className="py-16 bg-[#FEEFEF]">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <motion.h2
        className="text-2xl font-bold text-gray-700 sm:text-3xl lg:text-3xl text-center mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Why Choose Macco Tech for iOS App Development
      </motion.h2>

      <motion.div
        className="border-b-2 border-blue-400 w-16 mx-auto mb-8"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      />

      <motion.div
        className="text-gray-700 leading-relaxed  text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="mb-4 text-base">
          At Macco Tech, we specialize in delivering top-tier iOS app development solutions tailored to meet your business goals. Our expertise lies in building fast, secure, and scalable iOS applications that offer seamless performance and intuitive user experiences across all Apple devices.
        </p>
        <p className="mb-4 text-base">
          With a deep understanding of the Apple ecosystem, our skilled development team uses the latest tools, frameworks, and best practices to ensure your app not only stands out in the App Store but also delivers real business value. From ideation to launch and ongoing support, we’re with you at every step.
        </p>
        <p className='text-base'>
          Whether you’re a startup or an enterprise, Macco Tech offers a collaborative and transparent development process, focusing on quality, innovation, and long-term success. Partner with us to turn your iOS app vision into a high-impact digital product.
        </p>
      </motion.div>
    </div>
  </div>
</section>

<HireUsSection/>
<IOSFeatures/>
<Footerpage/>
    </>
  );
}

export default HeroSection;

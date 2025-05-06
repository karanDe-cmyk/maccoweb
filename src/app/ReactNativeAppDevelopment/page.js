'use client';
import React from 'react';
import Navbar from '../Component/Navbar/page';
import { motion } from "framer-motion";
import Footerpage from '../Component/Footerpage/page';
// import LatestFromBlogSection from '../Component/LatestFromBlogSection/page';
import ReactServiceCard from '../Component/ReactServiceCard/page';
import { MdDevices, MdThumbUp, MdLink, MdExtension, MdCode } from 'react-icons/md';
import Image from 'next/image';


function ReactNative() {

  const benefits = [
    {
      icon: MdDevices,
      title: 'Cross-Platform',
      description: 'There\'s just one codebase for both iOS and Android apps (and more if needed).',
    },
    {
      icon: MdThumbUp,
      title: 'Trusted by Billions of Users',
      description: 'React Native\'s open-source framework is used to empower Facebook and Instagram.',
    },
    {
      icon: MdLink,
      title: 'Third-Party Integrations',
      description: 'JavaScript strengthens React Native app development with a huge pool of third-party services.',
    },
    {
      icon: MdExtension,
      title: 'Modular Structure',
      description: 'Modules can be reused with different APIs to deliver quick solutions.',
    },
    {
      icon: MdCode,
      title: 'Open-Source',
      description: 'React Native is backed by a big developer community that delivers great tools and wide libraries.',
    },
    // You can add more benefits here if needed
  ];
  return (
    <>
      <Navbar />
      <div className="bg-black py-24 md:py-32 lg:py-48 relative overflow-hidden">
        {/* Content with Zoom-in Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            React Native App Development Company
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-8">
            Offer native-like experiences to your users in half the development
            time with our React Native app development services.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full text-lg">
            Talk Our Experts
            <span className="ml-2">›</span>
          </button>
        </motion.div>

        {/* Background Pattern / Image */}
        <div
          className="absolute bg-cover bg-center bg-no-repeat top-0 left-0 w-full h-full opacity-20"
          style={{
            backgroundImage:
              "url(https://cdn.moontechnolabs.com/live/images/services/react_native_banner_new.webp)",
            backgroundSize: "cover",
            backgroundRepeat: "repeat",
          }}
        ></div>
      </div>



      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">

            {/* Left Side: Text Content with animation */}
            <motion.div
              className="mb-8 lg:mb-0 lg:w-1/2"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-blue-700 sm:text-3xl lg:text-3xl mb-6">
                React-Native App Development
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At Macco Tech, we transform ideas into high-performance React Native
                applications that redefine user experiences. As a leading IT and mobile
                app development company in India, we specialize in crafting cross-
                platform apps that deliver seamless performance, native-like feel,
                and global scalability.
              </p>
            </motion.div>

            {/* Right Side: Image with animation */}
            <motion.div
              className="lg:w-1/2 lg:pl-10"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* <img
            src="https://viitorcloud.com/blog/wp-content/uploads/2022/06/React-Native-Framework-for-Mobile-App-Development.jpg"
            alt="React Native App Development Illustration"
            className="rounded-lg shadow-lg w-full h-auto"
          /> */}
              <Image
                src="https://viitorcloud.com/blog/wp-content/uploads/2022/06/React-Native-Framework-for-Mobile-App-Development.jpg"
                alt="React Native App Development Illustration"
                width={600} // Approx width
                height={400} // Approx height
                className="rounded-lg shadow-lg w-full h-auto"
              />

            </motion.div>

          </div>
        </div>
      </div>


      {/* <section className="px-4 py-12 md:px-16 bg-white"> */}
      <div className="py-16 bg-[#FEEFEF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="lg:flex lg:items-center lg:justify-between">
            {/* Left Side: Image */}
            <div className="mb-8 lg:mb-0 lg:w-1/2">
              {/* <img
              src="http://127.0.0.1:5500/images/react-benefit.webp" // Replace with your actual image URL
              alt="Why Choose React Native"
              className="rounded-lg shadow-lg w-full h-auto"
            /> */}
              <Image
                src="http://127.0.0.1:5500/images/react-benefit.webp"
                alt="Why Choose React Native"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />


            </div>

            {/* Right Side: Text Content */}
            <div className="lg:w-1/2 lg:pl-10">
              <h2 className="text-2xl font-bold text-blue-700 sm:text-3xl lg:text-4xl mb-4">
                Why Choose React-Native
              </h2>
              <h3 className="text-lg text-gray-600 mb-4">
                For Mobile App Development?
              </h3>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                Now, you must understand why you need react native for mobile app development. From faster development time to native-like performance and enhanced user interface to platform-specific look and feel, it offers numerous benefits. This cross-platform framework has been the top choice of developers around the globe.
              </p>
              <ul className="list-disc text-base list-inside text-gray-700 leading-relaxed mb-6">
                <li>One Code, Multiple Platforms - Faster development, reduced costs</li>
                <li>Lightning-Fast Performance - Optimized for smooth</li>
                <li>Scalability & Security - Robust architecture for future expansion</li>
                <li>User-Centric Design - Intuitive and engaging UI/UX</li>
              </ul>
              <p className="text-gray-700 text-base leading-relaxed">
                The popularity of this framework also sparks the react native vs flutter debate but they both have separate fan bases among developers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* </section>  */}
      <section>
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-700 sm:text-4xl">
                Benefits of React Native
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                React Native mobile app development services are quickly flooding the market. This is easily
                explainable by the benefits it brings to the world of development.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg  p-6 flex flex-col items-center text-center "
                >
                  <div className="p-3 bg-indigo-100 rounded-full text-indigo-700 mb-4">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2"  >
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ReactServiceCard />
      <Footerpage />
    </>

  );
}

export default ReactNative;
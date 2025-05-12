'use client';
import React from 'react';
import Navbar from '../Component/Navbar/page';
import { motion } from "framer-motion";
import Footerpage from '../Component/Footerpage/page';
// import LatestFromBlogSection from '../Component/LatestFromBlogSection/page';
import ReactServiceCard from '../Component/ReactServiceCard/page';
import { MdEmail, MdCampaign, MdOutlineMail, MdMessage, MdAnalytics } from 'react-icons/md';
import Image from 'next/image';

function EmailMarketing() {

  const benefits = [
    {
      icon: MdEmail,
      title: 'Wide Reach',
      description: 'Email marketing allows you to reach a large audience instantly and cost-effectively.',
    },
    {
      icon: MdCampaign,
      title: 'Targeted Campaigns',
      description: 'You can segment your audience and tailor messages to specific groups for better engagement.',
    },
    {
      icon: MdOutlineMail,
      title: 'Personalized Content',
      description: 'Emails can be personalized with user names, product recommendations, and more, improving conversion rates.',
    },
    {
      icon: MdMessage,
      title: 'Interactive Emails',
      description: 'Emails can include interactive elements like surveys, forms, and calls-to-action to engage users.',
    },
    {
      icon: MdAnalytics,
      title: 'Performance Tracking',
      description: 'Email campaigns allow for detailed tracking of open rates, click rates, and conversions to improve future campaigns.',
    },
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
            Email Marketing Services
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-8">
            Unlock the full potential of email marketing to grow your business with our expert services.
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
    backgroundImage: "url(/mail.png)", // Path from the 'public' folder
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
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
                Email Marketing Services
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At Macco Tech, we specialize in designing and executing powerful email marketing strategies
                that drive engagement and conversions. Whether you`re aiming to nurture leads or boost sales, 
                our services are tailored to meet your specific business goals.
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
              <Image
  src="/email1.png"  // Correct path from the 'public' folder
  alt="Email Marketing"
  width={600}  // Approx width
  height={400}  // Approx height
  className="rounded-lg shadow-lg w-full h-auto"
/>

            </motion.div>

          </div>
        </div>
      </div>

      <section className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-semibold text-gray-800 sm:text-5xl">
        Benefits of Email Marketing
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Learn how our email marketing services can enhance your business growth.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl p-8 flex flex-col items-center text-center border border-gray-200"
        >
          <div className="bg-gradient-to-r from-indigo-400 to-pink-500 p-4 rounded-full mb-6">
            <benefit.icon className="h-10 w-10 text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            {benefit.title}
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            {benefit.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


    
      <Footerpage />
    </>
  );
}

export default EmailMarketing;

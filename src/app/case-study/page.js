'use client';
import React from 'react';
import Image from 'next/image';
import Navbar from '../Component/Navbar/page';
import DevelopmentProcessSection from '../Component/DevelopmentProcessSection/page';
import ProjectChallenges from '../Component/ProjectChallenges/page';
import { motion } from "framer-motion";
import ResultsSection from '../Component/ResultsSection/page';
import Footerpage from '../Component/Footerpage/page';

const caseStudies = [
  {
    title: 'Modernizing Legacy Systems for Enhanced Performance',
    company: 'Tech Solutions Group',
    description:
      'Successfully migrated a large-scale legacy system to a microservices architecture, resulting in a 40% improvement in application performance and increased scalability.',
    link: '/case-studies/legacy-modernization',
    imageSrc: '/casestudy1.jpg',
  },
  {
    title: 'Building a Scalable E-commerce Platform from Scratch',
    company: 'E-Commerce Innovations Inc.',
    description:
      'Developed a fully responsive and scalable e-commerce platform with features like personalized recommendations, secure payment gateways, and real-time inventory management.',
    link: '/case-studies/ecommerce-platform',
    imageSrc: '/casestudy2.jpg',
  },
  {
    title: 'Developing a Cutting-Edge Mobile Application for Healthcare',
    company: 'HealthCare Mobility Solutions',
    description:
      'Created a user-friendly mobile application for patients to schedule appointments, access medical records, and communicate with healthcare providers securely.',
    link: '/case-studies/healthcare-app',
    imageSrc: '/casestudy3.webp',
  },
];

function CaseStudiesSection() {
  return (
    <>
      <Navbar />
      <section>
        <div className="bg-gradient-to-br from-blue-100 to-purple-100 py-16 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl lg:text-4xl mb-6">
              Case Studies
            </h1>
            <p className="mt-4 text-lg text-gray-700 sm:leading-relaxed lg:text-1xl">
              Explore how our strategic engineering and cutting-edge solutions are empowering businesses to achieve remarkable outcomes.
            </p>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <svg className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 fill-current text-blue-500 animate-pulse" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-2a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
            </svg>
            <svg className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 fill-current text-purple-500 animate-bounce" viewBox="0 0 20 20">
              <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 9v2H6v-2h1zm2 2V9h1v2H9zm2-2v2h-1v-2h1zm2 2V9h1v2h-1zm2-2v2h-1v-2h1z" />
            </svg>
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gray-800 text-center mb-8"
            >
              Our Successful Projects
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 30 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white rounded-md shadow-md overflow-hidden"
                >
                  <Image
                    src={study.imageSrc}
                    alt={study.title}
                    width={600}
                    height={240}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-base font-semibold text-indigo-600 mb-2">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Client: {study.company}
                    </p>
                    <p className="text-gray-500 text-sm mb-4">
                      {study.description}
                    </p>
                    <a
                      href={study.link}
                      className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out"
                    >
                      Learn More
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <DevelopmentProcessSection />
      <ProjectChallenges />

      <section>
        <div className="bg-[#FEEFEF] py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between gap-10 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2 text-center lg:text-left rounded-xl p-8"
            >
              <h2 className="text-1xl font-bold text-gray-900 tracking-tight sm:text-2xl lg:text-2xl mb-4">
                <span className="text-indigo-600">Unlock</span> First Page Visibility for Explosive Growth
              </h2>
              <p className="mt-2 text-base text-gray-700 leading-relaxed">
                Imagine your brand dominating the top search results. Achieving first-page visibility isn&apos;t just about
                ranking; it&apos;s about capturing attention, driving qualified traffic, and converting prospects into loyal
                customers. Our strategic SEO approach ensures your message reaches the right audience at the precise moment
                they&apos;re searching for what you offer.
              </p>
              <ul className="mt-6 space-y-3 text-gray-600">
                {[
                  'Increased Organic Traffic',
                  'Enhanced Brand Authority',
                  'Higher Conversion Rates',
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-base">
                    <svg
                      className="w-5 h-5 mr-2 text-indigo-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <Image
                src="/casestudy.jpg"
                alt="Abstract digital marketing and SEO concept"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <ResultsSection />
      <Footerpage />
    </>
  );
}

export default CaseStudiesSection;

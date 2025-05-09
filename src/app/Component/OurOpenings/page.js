"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Import the Image component

const JobCard = ({ title, experience, location, type, daysAgo, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 150);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`bg-white rounded-md shadow-md p-6 border border-gray-200 flex flex-col justify-between h-full transition-all duration-700 ${ // duration-700 kiya
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}
    >
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-1">Required Experience: {experience}</p>
        <p className="text-gray-600 text-sm mb-1">Number of Positions: 2</p>
        <p className="text-gray-600 text-sm mb-1">Job Location: {location}</p>
        <p className="text-gray-600 text-sm mb-4">Job Type: {type}</p>
      </div>
      <div className="flex justify-between items-end">
        <span className="text-gray-500 text-sm">{daysAgo}</span>
        <button className="text-blue-500 hover:underline focus:outline-none">
          Apply Now →
        </button>
      </div>
    </div>
  );
};

const OurOpenings = () => {
  const jobOpenings = [
    { title: "Wordpress Developer", experience: "3 to 6 years", location: "Jaipur, India", type: "Remote", daysAgo: "2 days Ago" },
    { title: "SEO Expert", experience: "3 to 6 years", location: "Jaipur, India", type: "Remote", daysAgo: "3 days Ago" },
    { title: "Business Analyst", experience: "3 to 6 years", location: "Jaipur, India", type: "Full Time", daysAgo: "25 days Ago" },
    { title: "Web Designer", experience: "3 to 6 years", location: "Jaipur, India", type: "Full Time", daysAgo: "50 days Ago" },
    { title: "IOS Developer", experience: "3 to 6 years", location: "Jaipur, India", type: "Full Time", daysAgo: "51 days Ago" },
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Openings</h2>
            <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
          </div>
          {/* Replaced <img> with <Image /> */}
          <Image
            src="/stock.jpg"
            alt="Welcome to the team"
            className="hidden sm:block h-16"
            width={64} // Define width and height
            height={64} // Define width and height
          />
        </div>
        <p className="text-gray-700 mb-8">
          We seek engineers at heart and mind who are self-driven, proactive, unafraid of challenges and commitment, and passionate about making an impact. Feeling like one of us? Apply to join!
        </p>
        <div className="mb-8 flex items-center">
          <div className="relative flex-grow">
            {/* Other content */}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobOpenings.map((job, index) => (
            <JobCard key={index} {...job} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurOpenings;

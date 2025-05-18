
"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image"; // Import Image component from next/image
import EmployeeTestimonials from "../Component/testimonials/page";
import HomeBanner from "../Component/HomeBanner/page";
import Navbar from "../Component/Navbar/page";
import Footerpage from "../Component/Footerpage/page";
import Contact from "../Component/Contact/page";
import FAQSection from "../Component/FAQItem/page";

export default function Home1() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const fadeInElements = document.querySelectorAll('.fade-in-up');
    
    fadeInElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      fadeInElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  const technologies = [
    { name: "iOS", icon: "https://www.freeiconspng.com/thumbs/ios-png/app-ios-png-4.png" },
    { name: "Android", icon: "https://w7.pngwing.com/pngs/546/448/png-transparent-android-mobile-app-development-logo-android-logo-grass-mobile-app-development-thumbnail.png" },
    { name: "Flutter", icon: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" },
    { name: "Java", icon: "https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png" },
    { name: "React Native", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyjnyv5ek2a6qk88oUt76RCsdS5gqBiZ0Aog&s" },
    { name: "Python", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHCtCtWfdUmyhwQExAENCDH-Y38UUyck8jRw&s" },
    { name: "Node.js", icon: "https://e7.pngegg.com/pngimages/306/37/png-clipart-node-js-logo-node-js-javascript-web-application-express-js-computer-software-others-miscellaneous-text.png" },
    { name: "Swift", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWovRpJJxcjFdPav8-pkS-pNQQFsxQlhCMww&s" },
    { name: "PWA", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL0qoMqXLsTp4Mz66Be-MwijCAY2Fx7hhzIA&s" },
  ];

  return (
    <>
      <Navbar />
      <HomeBanner />
      
      <div className="w-full bg-white min-h-[70vh] flex items-start justify-center">
        <div
          className={`w-full rounded-lg shadow-1xl overflow-hidden min-h-[70vh] p-6 md:p-10 lg:p-14 transform transition-all duration-700 ease-in-out ${
            isVisible
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-95 translate-y-4'
          }`}
        >
          <p className="text-orange-500 font-semibold uppercase mb-2 text-center tracking-wide mt-[40px]">
            WE ARE MACCO TECH
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 text-center leading-snug">
            Innovative App Development Company Delivering Excellence and Building Trust
          </h2>
          <p className="text-lg text-gray-700 mb-6 text-center">
            A Leading Mobile App Development Company
          </p>
          <div className="text-gray-600 text-justify px-4 md:px-12">
          <p>
  Macco Tech is a globally recognized Web, App, Game, and Digital Marketing company with branches in India and Australia. Since our inception, we have been delivering top-tier solutions in Web Design, App Development, Game Development, Digital Marketing, Product Design, and Cloud Services. Our expertise in game development sets us apart, creating immersive and engaging experiences that captivate players worldwide. Combined with our commitment to customer satisfaction and a high rate of repeat business, we stand as pioneers in the industry. Whether it&apos;s a cutting-edge app, an innovative game, or a robust digital strategy, we turn your ideas into reality with unmatched precision and creativity. Let&apos;s build the future together – Your success is our mission.
</p>

          </div>
        </div>
      </div>
   
      <section className=" bg-[#FEEFEF] py-12 w-full min-h-[70vh]">
        <div className=" mx-auto px-4 md:px-8 lg:px-12 mb-7">
          <div className="text-center mb-8">
            <p className="text-orange-500 font-semibold uppercase mb-2">MACCO TECH</p>
            <h2 className="text-3xl font-bold text-gray-800">Empowering Ideas with Innovative Digital Solutions.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Mobile App Development Card */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 opacity-0 translate-y-6 fade-in-up">
              <div className="w-12 h-12 bg-pink-100 rounded-md flex items-center justify-center mb-4">
                <Image 
                  src="/img1.webp" 
                  alt="Mobile App Development" 
                  width={48} 
                  height={48} 
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mobile App Development</h3>
              <p className="text-gray-600 text-sm mb-4">We build user-friendly mobile apps that turn ideas into reality using the latest technology. Our focus is on delivering seamless performance.</p>
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold text-sm">Read More →</a>
            </div>

            {/* Software Development Card */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 opacity-0 translate-y-6 fade-in-up">
              <div className="w-12 h-12 bg-pink-100 rounded-md flex items-center justify-center mb-4">
                <Image 
                  src="/image.png" 
                  alt="Software Development" 
                  width={48} 
                  height={48} 
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Software Development</h3>
              <p className="text-gray-600 text-sm mb-4">We have a team of highly skilled & experienced professionals who are capable of developing custom software solutions that are tailored to meet your unique needs.</p>
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold text-sm">Read More →</a>
            </div>

            {/* Hybrid App Development Card */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 opacity-0 translate-y-6 fade-in-up">
              <div className="w-12 h-12 bg-orange-100 rounded-md flex items-center justify-center mb-4">
                <Image 
                  src="/image3.png" 
                  alt="Hybrid App Development" 
                  width={48} 
                  height={48} 
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Hybrid App Development</h3>
              <p className="text-gray-600 text-sm mb-4">We offer cutting-edge hybrid app development that provides the best of both worlds: native-like performance and cross-platform functionality.</p>
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold text-sm">Read More →</a>
            </div>
          </div>
        </div>
      </section>
      
      <EmployeeTestimonials />
      <FAQSection/>
      <Contact />
      <Footerpage />
    </>
  );
}



"use client";

import React, { useState, useEffect } from "react";

// import HomeBanner from "../HomeBanner/page";
// import Testimonials from "../testimonials/page";
// import Contact from "../Contact/page";
import EmployeeTestimonials from "../Component/testimonials/page";
import HomeBanner from "../Component/HomeBanner/page";
import Navbar from "../Component/Navbar/page";
import Footerpage from "../Component/Footerpage/page";
import Contact from "../Component/Contact/page";

// const slides = [
//   {
//     heading: "Technology That Transforms, Solutions That Deliver",
//     text: "Customized technology solutions to optimize, automate, and scale your business.",
//     images: ["/img1.png", "/img2.png"],
//     background: "https://tudip.com/wp-content/uploads/slider/cache/a80bd1529c1b7f33bdb73b2cb05d9be0/eLearning_Slider.webp",
//   },
//   {
//     heading: "Innovative Design, Seamless Experience",
//     text: "Creating intuitive and responsive designs for modern platforms.",
//     images: ["/img3.png", "/img4.png"],
//     background: "https://tudip.com/wp-content/uploads/slider/cache/f627fa020b703df5d7c2e7e4ceff3d38/Telecom_and_Network.jpg",
//   },
//   {
//     heading: "Smart Systems, Smarter Results",
//     text: "Empowering growth through intelligent technology infrastructure.",
//     images: ["/img5.png", "/img6.png"],
//     background: "https://tudip.com/wp-content/uploads/slider/cache/487f8d405d7d69b0926039877eb724ce/AI-ML.webp",
//   },
// ];



export default function Home1() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }, []);



    useEffect(() => {
        // Create an IntersectionObserver instance
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Add the 'animate' class when the element comes into view
              entry.target.classList.add('animate');
              // Stop observing after animation is triggered
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.5 });  // Trigger when 50% of the element is visible
    
        // Select all elements with the 'fade-in-up' class
        const fadeInElements = document.querySelectorAll('.fade-in-up');
        
        fadeInElements.forEach(element => {
          // Start observing each element
          observer.observe(element);
        });
    
        // Clean up observer on component unmount
        return () => {
          fadeInElements.forEach(element => {
            observer.unobserve(element);
          });
        };
      }, []); // Empty dependency array means this effect runs only once on mount
    

    
      const technologies = [
        { name: "iOS", icon: "https://www.freeiconspng.com/thumbs/ios-png/app-ios-png-4.png" }, // अपनी आइकन इमेज के पाथ बदलें
        { name: "Android", icon: "https://w7.pngwing.com/pngs/546/448/png-transparent-android-mobile-app-development-logo-android-logo-grass-mobile-app-development-thumbnail.png" },
        { name: "Flutter", icon: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" },
        { name: "Java", icon: "https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png" },
        { name: "React Native", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyjnyv5ek2a6qk88oUt76RCsdS5gqBiZ0Aog&s" },
        { name: "Python", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHCtCtWfdUmyhwQExAENCDH-Y38UUyck8jRw&s" },
        { name: "Node.js", icon: "https://e7.pngegg.com/pngimages/306/37/png-clipart-node-js-logo-node-js-javascript-web-application-express-js-computer-software-others-miscellaneous-text.png" },
        { name: "Swift", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWovRpJJxcjFdPav8-pkS-pNQQFsxQlhCMww&s" },
        { name: "PWA", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL0qoMqXLsTp4Mz66Be-MwijCAY2Fx7hhzIA&s" },
        // आप और टेक्नोलॉजीज़ यहाँ जोड़ सकते हैं
      ];

  return (
    <>
      <Navbar/>
      <HomeBanner/>
      {/* bg-gradient-to-br from-blue-100 via-gray-100 to-blue-100 */}
      {/* bg-gradient-to-r from-gray-100 via-white to-gray-200 */}
      <div className="w-full bg-white min-h-[70vh] flex items-start justify-center">
      <div
        className={`w-full  rounded-lg shadow-1xl overflow-hidden min-h-[70vh] p-6 md:p-10 lg:p-14 transform transition-all duration-700 ease-in-out ${
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
            Macco Tech is a globally recognized Web, App, Game, and Digital Marketing company with branches in India and Australia. Since our inception, we have been delivering top-tier solutions in Web Design, App Development, Game Development, Digital Marketing, Product Design, and Cloud Services. Our expertise in game development sets us apart, creating immersive and engaging experiences that captivate players worldwide. Combined with our commitment to customer satisfaction and a high rate of repeat business, we stand as pioneers in the industry. Whether it's a cutting-edge app, an innovative game, or a robust digital strategy, we turn your ideas into reality with unmatched precision and creativity. Let's build the future together – Your success is our mission.
          </p>
        </div>
      </div>
    </div>
    {/* ---second section end------- */}

    
    {/*--------------- third Section---------- */}
    {/* <section className=" py-12 w-full min-h-[70vh]" style={{
      backgroundImage: "linear-gradient(45deg,rgb(225, 248, 248) 0%,rgb(245, 202, 223) 100%)",
    }}> */}
      <section className=" bg-[#FEEFEF] py-12 w-full min-h-[70vh]" 
    >
     
      <div className=" mx-auto px-4 md:px-8 lg:px-12  mb-7">
        <div className="text-center mb-8">
          <p className="text-orange-500 font-semibold uppercase mb-2">MACCO TECH</p>
          <h2 className="text-3xl font-bold text-gray-800">Empowering Ideas with Innovative Digital Solutions.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Mobile App Development Card */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 opacity-0 translate-y-6 fade-in-up">
            <div className="w-12 h-12 bg-pink-100 rounded-md flex items-center justify-center mb-4"><img src="https://static.vecteezy.com/system/resources/thumbnails/041/318/447/small/mobile-app-development-language-development-software-programming-3d-render-png.png"/></div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Mobile App Development</h3>
            <p className="text-gray-600 text-sm mb-4">We build user-friendly mobile apps that turn ideas into reality using the latest technology. Our focus is on delivering seamless performance.</p>
            <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold text-sm">Read More →</a>
          </div>

          {/* Software Development Card */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 opacity-0 translate-y-6 fade-in-up">
            <div className="w-12 h-12 bg-pink-100 rounded-md flex items-center justify-center mb-4"><img src="https://static.vecteezy.com/system/resources/thumbnails/036/584/129/small_2x/3d-illustration-of-software-development-free-png.png"/></div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Software Development</h3>
            <p className="text-gray-600 text-sm mb-4">We have a team of highly skilled & experienced professionals who are capable of developing custom software solutions that are tailored to meet your unique needs.</p>
            <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold text-sm">Read More →</a>
          </div>

          {/* Hybrid App Development Card */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 opacity-0 translate-y-6 fade-in-up">
            <div className="w-12 h-12 bg-orange-100 rounded-md flex items-center justify-center mb-4"><img src="https://www.codekingsolutions.com/frontend/images/mobile-app/hybrid-apps-development.png"/></div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Hybrid App Development</h3>
            <p className="text-gray-600 text-sm mb-4">We deliver flexible hybrid apps that work across platforms, saving time and cost while providing native-like performance.</p>
            <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold text-sm">Read More →</a>
          </div>

          {/* Wearable Development Card */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 opacity-0 translate-y-6 fade-in-up">
            <div className="w-12 h-12 bg-teal-100 rounded-md flex items-center justify-center mb-4"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBabNyZZqwf7QRkllxN3EvMuNAhDZd4nvrkg&s"/></div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Wearable Development</h3>
            <p className="text-gray-600 text-sm mb-4">We create applications for wearable devices, enabling seamless connectivity and real-time tracking for smart gadgets.</p>
            <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold text-sm">Read More →</a>
          </div>

          {/* UI/UX Designing Card */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 opacity-0 translate-y-6 fade-in-up">
            <div className="w-12 h-12 bg-indigo-100 rounded-md flex items-center justify-center mb-4"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT35IT1ljwZvky69BAOcVXIGOdMsIOFX52DiA&s"/></div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">UI/UX Designing</h3>
            <p className="text-gray-600 text-sm mb-4">Our highly experienced designers comprehend your vision and business objectives to deliver intuitive and attractive UI/UX designs.</p>
            <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold text-sm">Read More →</a>
          </div>

          {/* Web App Development Card */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 opacity-0 translate-y-6 fade-in-up ">
            <div className="w-12 h-12 bg-lime-100 rounded-md flex items-center justify-center mb-4"><img src="https://img.favpng.com/22/16/8/web-development-responsive-web-design-web-developer-web-application-development-png-favpng-70FxeW0K33UR8AYzFhJF2JUn3.jpg"/></div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Web App Development</h3>
            <p className="text-gray-600 text-sm mb-4">We create high-performing web apps with robust architecture and modern frameworks tailored to your business goals.</p>
            <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold text-sm">Read More →</a>
          </div>
        </div>
      </div>
    </section>
    {/* --------------third section end------------ */}

{/* fourth section start */}
<EmployeeTestimonials/>
{/* fourth section end */}
{/* <section className="py-16 bg-white"> */}
<section className="py-16  bg-[#FEEFEF]">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-10">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">Technologies</span> we work with
        </h2>
        <div className="flex justify-center"> {/* फ्लेक्स कंटेनर जोड़ा */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                  {tech.icon ? (
                    <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
                  ) : (
                    <span className="text-2xl text-teal-500 font-bold">{tech.name.charAt(0)}</span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-700">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
{/* fifth section start */}
<Contact/>
{/* fifth section end */}
<Footerpage/>
         </>
        
  );
}

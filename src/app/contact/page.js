"use client";
import React, { useState, useEffect } from "react";
import Footerpage from "../Component/Footerpage/page";
import Navbar from "../Component/Navbar/page";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
    <Navbar/>
    <section className=" min-h-[30vh] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center py-16 bg-rose-100">


      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Text Content */}
        <div className={`lg:w-1/2 mb-10 lg:mb-0 pr-8 transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <h2 className="text-2xl font-bold text-blue-300 mb-4 uppercase tracking-wide">Custom Software & Web Solutions</h2>
          <h3 className="text-4xl font-extrabold text-gray-800 mb-6 leading-snug">You Know What You Want. We Make It Happen.</h3>
          <p className="text-gray-400 mb-4 text-lg">
          We craft bespoke software and web solutions tailored to your unique business goals. Let’s collaborate to build something meaningful.
          </p>
          <p className="text-gray-400 mb-6 text-md">
          With over a decade of expertise, we’ve empowered startups and enterprises worldwide to scale with confidence.
          </p>
          <div>
            {/* <h4 className="text-lg font-semibold text-gray-600 mb-3">Trusted by 100+ global clients.</h4> */}
            {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-sm text-white">
              {[""].map((name) => (
                <div key={name} className="text-center border border-gray-600 rounded py-2 bg-slate-800 hover:shadow-md transition">{name}</div>
              ))}
            </div> */}
          </div>
        </div>

        {/* Right Form */}
        <div className={`lg:w-1/2 backdrop-blur-md bg-white rounded-2xl shadow-xl p-10 border border-blue-100 transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Let’s Discuss Your Project</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input type="text" id="firstName" className="mt-1 input-style" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" id="lastName" className="mt-1 input-style" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
              <input type="text" id="companyName" className="mt-1 input-style" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                <input type="email" id="email" required className="mt-1 input-style" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" id="phone" className="mt-1 input-style" />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" rows="4" className="mt-1 input-style resize-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-full shadow-lg">
               Submit
            </button>
            <p className="text-xs text-center text-gray-500 mt-3">We sign NDAs and you retain full IP rights.</p>
          </form>
        </div>
      </div>

      {/* Reusable Input Style */}
      <style jsx>{`
        .input-style {
          width: 100%;
          padding: 0.625rem 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          color: #374151;
          outline: none;
          transition: box-shadow 0.2s, border-color 0.2s;
        }
        .input-style:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
        }
      `}</style>
    </section>
    <Footerpage/>
    </>
  );
}

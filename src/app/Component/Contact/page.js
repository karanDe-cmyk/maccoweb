// "use client";
// import React, { useState, useEffect } from "react";

// export default function Contact() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timeout = setTimeout(() => setIsVisible(true), 300);
//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <section className=" min-h-[30vh] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center py-16 bg-rose-100">


//       <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
//         {/* Left Text Content */}
//         <div className={`lg:w-1/2 mb-10 lg:mb-0 pr-8 transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
//           <h2 className="text-2xl font-bold text-blue-300 mb-4 uppercase tracking-wide">Custom Software & Web Solutions</h2>
//           <h3 className="text-4xl font-extrabold text-gray-800 mb-6 leading-snug">You Know What You Want. We Make It Happen.</h3>
//           <p className="text-gray-400 mb-4 text-lg">
//           We craft bespoke software and web solutions tailored to your unique business goals. Let’s collaborate to build something meaningful.
//           </p>
//           <p className="text-gray-400 mb-6 text-md">
//           With over a decade of expertise, we’ve empowered startups and enterprises worldwide to scale with confidence.
//           </p>
//           <div>
//             {/* <h4 className="text-lg font-semibold text-gray-600 mb-3">Trusted by 100+ global clients.</h4> */}
//             {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-sm text-white">
//               {[""].map((name) => (
//                 <div key={name} className="text-center border border-gray-600 rounded py-2 bg-slate-800 hover:shadow-md transition">{name}</div>
//               ))}
//             </div> */}
//           </div>
//         </div>

//         {/* Right Form */}
//         <div className={`lg:w-1/2 backdrop-blur-md bg-white rounded-2xl shadow-xl p-10 border border-blue-100 transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">Let’s Discuss Your Project</h2>
//           <form>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
//                 <input type="text" id="firstName" className="mt-1 input-style" />
//               </div>
//               <div>
//                 <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
//                 <input type="text" id="lastName" className="mt-1 input-style" />
//               </div>
//             </div>
//             <div className="mb-4">
//               <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
//               <input type="text" id="companyName" className="mt-1 input-style" />
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
//                 <input type="email" id="email" required className="mt-1 input-style" />
//               </div>
//               <div>
//                 <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
//                 <input type="tel" id="phone" className="mt-1 input-style" />
//               </div>
//             </div>
//             <div className="mb-6">
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
//               <textarea id="message" rows="4" className="mt-1 input-style resize-none"></textarea>
//             </div>
//             <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-full shadow-lg">
//                Submit
//             </button>
//             <p className="text-xs text-center text-gray-500 mt-3">We sign NDAs and you retain full IP rights.</p>
//           </form>
//         </div>
//       </div>

//       {/* Reusable Input Style */}
//       <style jsx>{`
//         .input-style {
//           width: 100%;
//           padding: 0.625rem 0.75rem;
//           border: 1px solid #d1d5db;
//           border-radius: 0.5rem;
//           font-size: 0.875rem;
//           color: #374151;
//           outline: none;
//           transition: box-shadow 0.2s, border-color 0.2s;
//         }
//         .input-style:focus {
//           border-color: #2563eb;
//           box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
//         }
//       `}</style>
//     </section>
//   );
// }



"use client";
import React, { useState, useEffect } from "react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="min-h-[40vh] mx-auto px-6 sm:px-8 lg:px-12 py-24 bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between shadow-xl rounded-3xl overflow-hidden">
        {/* Left Text Content */}
        <div className={`lg:w-1/2 p-10 bg-indigo-200/80 backdrop-blur-sm text-gray-700 transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <h2 className="text-2xl font-semibold text-blue-600 mb-6 uppercase tracking-wider">Let's Innovate Together</h2>
          <h3 className="text-4xl font-bold text-gray-800 mb-9 leading-tight">Ready to Build Something Amazing?</h3>
          <p className="text-lg text-gray-600 mb-7">
            Tell us about your ambitious project. We specialize in crafting intelligent and scalable digital solutions.
          </p>
          <p className="text-md text-gray-500 mb-9">
            Our team of experts is passionate about leveraging the latest technologies to bring your vision to life.
          </p>
          {/* Optional: Add a subtle graphic icon here */}
        </div>

        {/* Right Form */}
        <div className={`lg:w-1/2 p-14 bg-white transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <h2 className="text-2xl font-bold text-gray-800 mb-7">Discuss Your Ideas</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input type="text" id="firstName" className="mt-1 input-tech" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" id="lastName" className="mt-1 input-tech" />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
              <input type="text" id="companyName" className="mt-1 input-tech" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                <input type="email" id="email" required className="mt-1 input-tech" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" id="phone" className="mt-1 input-tech" />
              </div>
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Project Details</label>
              <textarea id="message" rows="5" className="mt-1 input-tech resize-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-white font-semibold py-3 rounded-md shadow-md transition duration-200">
              Explore Possibilities
            </button>
            <p className="text-xs text-center text-gray-500 mt-4">We're excited to help you innovate.</p>
          </form>
        </div>
      </div>

      {/* Tech-Focused Input Style */}
      <style jsx>{`
        .input-tech {
          width: 100%;
          padding: 0.8rem 1.1rem;
          border: 1.5px solid #c6d4ff; /* Light blue border */
          border-radius: 0.5rem;
          font-size: 0.95rem;
          color: #333;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .input-tech:focus {
          border-color: #3b82f6; /* A more vibrant blue focus color */
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
        }
      `}</style>
    </section>
  );
}
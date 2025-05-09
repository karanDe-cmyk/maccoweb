"use client";

import React, { useState, useEffect } from 'react';

import Navbar from '../Component/Navbar/page';
import CareerBenefits from '../Component/benefits/pages';
import WhyWorkWithUs from '../Component/WhyWorkWithUs/page';
import InterviewProcess from '../Component/InterviewProcess/page';
import OurOpenings from '../Component/OurOpenings/page';
import Footerpage from '../Component/Footerpage/page';




function Careers() {
   
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 200); // Adjust delay as needed
      return () => clearTimeout(timer);
    }, []);
  
  
  return (
    <>
    <Navbar/>
   
    {/* <div
  className="bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.sw.cdn.siemens.com/siemens-disw-assets/public/7x85Fa0whDvfMlnsHmEFVM/en-US/careers-is677807458-gradient-hero-1920x1080.jpg?auto=format,compress&w=1920&q=60')",
  }}
>

  <div className=" bg-opacity-60 min-h-[70vh] flex items-center justify-center text-white text-center relative">
  
    <div className="container mx-auto px-4">
      <h1 className="text-5xl font-bold  mb-6 animate-fade-in">
        Join Our Team at Macco Tech
      </h1>
      <p className="text-xl text-gray-200 mb-8 animate-fade-in delay-200">
        Shape the future of technology with us.
      </p>
      <a
        href="#openings"
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full text-lg animate-bounce"
      >
        Explore Opportunities
      </a>
    </div>
  </div>
</div> */}

<div
      className="bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/careerbanner.avif')",
      }}
    >
      {/* बैकग्राउंड इमेज */}
      <div className="bg-opacity-60 min-h-[70vh] flex items-center justify-center text-white text-center relative">
        {/* ओवरले */}
        <div className="container mx-auto px-4">
          <h1
            className={`text-5xl font-bold mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            Join Our Team at Macco Tech
          </h1>
          <p
            className={`text-xl text-gray-200 mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            Shape the future of technology with us.
          </p>
          <a
            href="#openings"
            className={`bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            Explore Opportunities
          </a>
        </div>
      </div>
    </div>


    {/* ----second section start--- */}
<CareerBenefits/>

    {/* ----second section end---- */}


    <WhyWorkWithUs/>
    <InterviewProcess/>
    <OurOpenings/>
<Footerpage/>
    </>
  );
}

export default Careers;



// "use client";

// import React, { useState, useEffect } from 'react';
// import Navbar from '../Component/Navbar/page';
// import CareerBenefits from '../Component/benefits/pages';
// import WhyWorkWithUs from '../Component/WhyWorkWithUs/page';
// import InterviewProcess from '../Component/InterviewProcess/page';
// import OurOpenings from '../Component/OurOpenings/page';
// import { useTheme } from '../theme-context';




// function Careers() {
//   const [isVisible, setIsVisible] = useState(false);
//   const { darkMode } = useTheme();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 200);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <Navbar />

//       <div
//         className={`bg-cover bg-center ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
//         style={{
//           backgroundImage:
//             "url('https://images.sw.cdn.siemens.com/siemens-disw-assets/public/7x85Fa0whDvfMlnsHmEFVM/en-US/careers-is677807458-gradient-hero-1920x1080.jpg?auto=format,compress&w=1920&q=60')",
//         }}
//       >
//         <div className="bg-opacity-60 min-h-[70vh] flex items-center justify-center text-center relative">
//           <div className="container mx-auto px-4">
//             <h1
//               className={`text-5xl font-bold mb-6 transition-all duration-700 ${
//                 isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
//               }`}
//             >
//               Join Our Team at Macco Tech
//             </h1>
//             <p
//               className={`text-xl mb-8 transition-all duration-700 ${
//                 isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
//               }`}
//             >
//               Shape the future of technology with us.
//             </p>
//             <a
//               href="#openings"
//               className={`bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-all duration-700 ${
//                 isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
//               }`}
//             >
//               Explore Opportunities
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Other Sections */}
//       <CareerBenefits />
//       <WhyWorkWithUs />
//       <InterviewProcess />
//       <OurOpenings />
//     </>
//   );
// }

// export default Careers;

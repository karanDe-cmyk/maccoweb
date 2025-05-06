// import React from 'react';
// import { FaBolt, FaMousePointer, FaTachometerAlt, FaChartLine } from 'react-icons/fa'; // Example icons

// const WhyChooseReact = () => {
//   const reasons = [
//     {
//       title: 'Speed',
//       description: 'The utilization of individual, modular parts of an app on the client and server offers a benefit to the speed of the development process.',
//       icon: FaBolt,
//     },
//     {
//       title: 'Usability',
//       description: "React's deployment won't take much time if you have basic knowledge of JavaScript, which is easy to learn due to its simple learning curve.",
//       icon: FaMousePointer,
//     },
//     {
//       title: 'Top-notch Performance',
//       description: 'The core of React framework provides server-side rendering using Next.js and a virtual DOM program that makes even complex apps run fast.',
//       icon: FaTachometerAlt,
//     },
//     {
//       title: 'Simple Learning Curve',
//       description: 'Compared to other front-end web frameworks like Angular & Vue, React is much easier to learn.',
//       icon: FaChartLine,
//     },
//   ];

//   return (
//     <div className="bg-gray-50 py-16">
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
//         <div className="mb-8 flex justify-between items-center">
//           <div>
//             <h2 className="text-2xl font-bold text-gray-800">Why Choose React for Web Development?</h2>
//             <p className="text-gray-600 text-sm">As the most popular front-end library among web developers worldwide. Here are the leading reasons that will boost your confidence to choose ReactJS.</p>
//           </div>
//           <button className="bg-gray-900 text-white rounded-full px-4 py-2 text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400">
//             LET'S DISCUSS <span className="ml-1 text-xs"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 inline-block"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06.02z" clipRule="evenodd" /></svg></span>
//           </button>
//         </div>

//         <div className="relative overflow-x-auto">
//           <div className="inline-flex space-x-6 py-4">
//             {reasons.map((reason, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-md p-6 w-80 flex-shrink-0">
//                 <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-800 flex items-center justify-center mb-3">
//                   <reason.icon className="w-5 h-5" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">{reason.title}</h3>
//                 <p className="text-gray-600 text-sm">{reason.description}</p>
//               </div>
//             ))}
//           </div>
//           {/* Optional: Add navigation buttons if you want to implement scrolling */}
//           {/* <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
//             <button className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gray-400">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" /></svg>
//             </button>
//           </div>
//           <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
//             <button className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gray-400">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06.02z" clipRule="evenodd" /></svg>
//             </button>
//           </div> */}
//         </div>

//         {/* Optional: Responsive navigation dots */}
//         <div className="mt-6 flex justify-center space-x-2">
//           {reasons.map((_, index) => (
//             <button key={index} className={`w-3 h-3 rounded-full bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${index === 0 ? 'bg-blue-500' : ''}`}></button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseReact;






import React, { useState, useRef, useEffect } from 'react';
import { FaBolt, FaMousePointer, FaTachometerAlt, FaChartLine } from 'react-icons/fa';

const WhyChooseReactSlider = () => {
  const reasons = [
    {
      title: 'Speed',
      description: 'The utilization of individual, modular parts of an app on the client and server offers a benefit to the speed of the development process.',
      icon: FaBolt,
    },
    {
      title: 'Usability',
      description: "React's deployment won't take much time if you have basic knowledge of JavaScript, which is easy to learn due to its simple learning curve.",
      icon: FaMousePointer,
    },
    {
      title: 'Top-notch Performance',
      description: 'The core of React framework provides server-side rendering using Next.js and a virtual DOM program that makes even complex apps run fast.',
      icon: FaTachometerAlt,
    },
    {
      title: 'Simple Learning Curve',
      description: 'Compared to other front-end web frameworks like Angular & Vue, React is much easier to learn.',
      icon: FaChartLine,
    },
    
    // You can add more reasons here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const nextSlide = () => {
    if (sliderRef.current) {
      const newIndex = Math.min(currentIndex + 1, reasons.length - 1);
      sliderRef.current.scrollLeft = newIndex * getCardWidth();
      setCurrentIndex(newIndex);
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      const newIndex = Math.max(currentIndex - 1, 0);
      sliderRef.current.scrollLeft = newIndex * getCardWidth();
      setCurrentIndex(newIndex);
    }
  };

  const getCardWidth = () => {
    if (typeof window === 'undefined') return 320; // Default value
    const baseWidth = 320; // Base width from your CSS (w-80)
    const margin = 24;      // Space between cards (space-x-6)
    return baseWidth + margin;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (reasons.length > 0) {
        const nextIndex = (currentIndex + 1) % reasons.length;
        if (sliderRef.current) {
          sliderRef.current.scrollLeft = nextIndex * getCardWidth();
        }
        setCurrentIndex(nextIndex);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [reasons.length, currentIndex]);

    // Update scroll position on resize to handle dynamic card width
    useEffect(() => {
      const handleResize = () => {
        if (sliderRef.current) {
          sliderRef.current.scrollLeft = currentIndex * getCardWidth();
        }
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [currentIndex]);


  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Why Choose React for Web Development?</h2>
            <p className="text-gray-600 text-sm">As the most popular front-end library among web developers worldwide. Here are the leading reasons that will boost your confidence to choose ReactJS.</p>
          </div>
          <button className="bg-blue-900 text-white rounded-full px-4 py-2 text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400">
            LET'S DISCUSS
            <span className="ml-1 text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 inline-block">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06.02z" clipRule="evenodd" />
              </svg>
            </span>
          </button>
        </div>

        <div className="relative">
          <div
            ref={sliderRef}
            className="overflow-x-auto scroll-smooth snap-x snap-mandatory"
            style={{
              scrollSnapType: 'x mandatory',
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch',
              msOverflowStyle: 'none', // Hide scrollbar for IE and Edge
              scrollbarWidth: 'none'  // Hide scrollbar for Firefox
            }}
          >
            <style jsx global>{`
              /* Hide scrollbar for Chrome, Safari and Opera */
              .overflow-x-auto::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div className="inline-flex space-x-6 py-4 w-full transition-transform duration-300 ease-in-out"
              style={{ display: 'flex' }}
            >
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 w-80 flex-shrink-0 snap-start"
                  style={{ width: '320px', flexShrink: 0, scrollSnapAlign: 'start' }}
                >
                  <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-800 flex items-center justify-center mb-3">
                    <reason.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{reason.title}</h3>
                  <p className="text-gray-600 text-sm">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {reasons.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </>
          )}

          {/* Responsive navigation dots */}
          <div className="mt-6 flex justify-center space-x-2">
            {reasons.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${currentIndex === index ? 'bg-blue-500' : 'bg-blue-300'}`}
                onClick={() => {
                  if (sliderRef.current) {
                    sliderRef.current.scrollLeft = index * getCardWidth();
                    setCurrentIndex(index);
                  }
                }}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseReactSlider;

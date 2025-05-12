// 'use client';
// import React from 'react';
// import Navbar from '../Component/Navbar/page'; // Ensure this is the correct path
// import {
//     SiDribbble,
//     SiBehance,
//     SiDeviantart,
//     SiInstagram,
//     SiArtstation,
// } from 'react-icons/si';
// import PortfolioSection from '../Component/PortfolioSection/page';
// import { useState ,useEffect} from 'react';
// import Footerpage from '../Component/Footerpage/page';

// function portfolio() {


//     const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target); // Stop observing after it becomes visible
//         }
//       });
//     });

//     const target = document.getElementById('creativeWorkSection');
//     if (target) {
//       observer.observe(target);
//     }

//     return () => {
//       if (target) {
//         observer.unobserve(target);
//       }
//     };
//   }, []);
//     return (
//         <>
//             <Navbar />
//   <div
//       id="creativeWorkSection"
//       className="bg-gradient-to-br from-gray-100 to-gray-50 py-16 md:py-24 bg-cover bg-center"
//       style={{
//         backgroundImage: `url('/portfoliobanner.jpg')`,
//       }}
//     >
//       <div className="container min-h-[30vh] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
//         <div className="text-center">
//           <h2
//             className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 transition-all duration-700 ${
//               isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
//             }`}
//           >
//             Our Creative Work
//           </h2>
//           <p
//             className={`text-white text-base sm:text-lg max-w-2xl mx-auto transition-all duration-700 ${
//               isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
//             }`}
//           >
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's standard dummy text ever
//             since.
//           </p>
//         </div>
//       </div>
//     </div>


//             <div className="bg-white py-12">
//                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center">
//                         <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
//                             Quality is more important than quantity
//                         </h2>
//                         <p className="text-gray-600 text-base sm:text-lg mb-8">
//                             Take a look at our latest work. Check our portfolio on other websites as well.
//                         </p>
//                         <div className="flex justify-center items-center gap-6 sm:gap-8">
//                             <a
//                                 href="#"
//                                 className="text-gray-700 hover:text-pink-500 transition-colors duration-200"
//                                 aria-label="Dribbble"
//                             >
//                                 <SiDribbble className="w-6 h-6" />
//                                 <span className="sr-only">Dribbble</span>
//                             </a>
//                             <a
//                                 href="#"
//                                 className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
//                                 aria-label="Behance"
//                             >
//                                 <SiBehance className="w-6 h-6" />
//                                 <span className="sr-only">Behance</span>
//                             </a>
//                             <a
//                                 href="#"
//                                 className="text-gray-700 hover:text-green-500 transition-colors duration-200"
//                                 aria-label="Deviantart"
//                             >
//                                 <SiDeviantart className="w-6 h-6" />
//                                 <span className="sr-only">Deviantart</span>
//                             </a>
//                             <a
//                                 href="#"
//                                 className="text-gray-700 hover:text-pink-600 transition-colors duration-200"
//                                 aria-label="Instagram"
//                             >
//                                 <SiInstagram className="w-6 h-6" />
//                                 <span className="sr-only">Instagram</span>
//                             </a>
//                             <a
//                                 href="#"
//                                 className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
//                                 aria-label="Artstation"
//                             >
//                                 <SiArtstation className="w-6 h-6" />
//                                 <span className="sr-only">Artstation</span>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//             {/* -------- */}

//             <PortfolioSection />
//             <Footerpage/>
//         </>
//     );
// }

// export default portfolio;'use client';
'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../Component/Navbar/page';
import {
    SiDribbble,
    SiBehance,
    SiDeviantart,
    SiInstagram,
    SiArtstation,
} from 'react-icons/si';
import PortfolioSection from '../Component/PortfolioSection/page';
import Footerpage from '../Component/Footerpage/page';
import Image from 'next/image';

function Portfolio() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        });

        const target = document.getElementById('creativeWorkSection');
        if (target) {
            observer.observe(target);
        }

        return () => {
            if (target) {
                observer.unobserve(target);
            }
        };
    }, []);

    return (
        <>
            <Navbar />
            <div
                id="creativeWorkSection"
                className="bg-gradient-to-br from-gray-100 to-gray-50 py-16 md:py-24 bg-cover bg-center"
                style={{
                    backgroundImage: `url('/Portfolio-banner.jpg')`,
                }}
            >
                <div className="container min-h-[30vh] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                    <div className="text-center">
                        <h2
                            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 transition-all duration-700 ${
                                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                            }`}
                        >
                            Our Creative Work
                        </h2>
                        <p
                            className={`text-white text-base sm:text-lg max-w-2xl mx-auto transition-all duration-700 ${
                                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                            }`}
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                            Quality is more important than quantity
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg mb-8">
                            Take a look at our latest work. Check our portfolio on other websites as well.
                        </p>
                        <div className="flex justify-center items-center gap-6 sm:gap-8">
                            <a
                                href="#"
                                className="text-gray-700 hover:text-pink-500 transition-colors duration-200"
                                aria-label="Dribbble"
                            >
                                <SiDribbble className="w-6 h-6" />
                                <span className="sr-only">Dribbble</span>
                            </a>
                            <a
                                href="#"
                                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                aria-label="Behance"
                            >
                                <SiBehance className="w-6 h-6" />
                                <span className="sr-only">Behance</span>
                            </a>
                            <a
                                href="#"
                                className="text-gray-700 hover:text-green-500 transition-colors duration-200"
                                aria-label="Deviantart"
                            >
                                <SiDeviantart className="w-6 h-6" />
                                <span className="sr-only">Deviantart</span>
                            </a>
                            <a
                                href="#"
                                className="text-gray-700 hover:text-pink-600 transition-colors duration-200"
                                aria-label="Instagram"
                            >
                                <SiInstagram className="w-6 h-6" />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a
                                href="#"
                                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
                                aria-label="Artstation"
                            >
                                <SiArtstation className="w-6 h-6" />
                                <span className="sr-only">Artstation</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <PortfolioSection />
            <Footerpage />
        </>
    );
}

export default Portfolio;

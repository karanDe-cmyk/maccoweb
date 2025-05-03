// 'use client';
// import { useState } from 'react';
// import Link from 'next/link'; 

// export default function Navbar() {
//   const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false);
//   const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
//   const [isWhoWeAreOpen, setIsWhoWeAreOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isMobileWhatWeDoOpen, setIsMobileWhatWeDoOpen] = useState(false);
//   const [isMobileWhoWeAreOpen, setIsMobileWhoWeAreOpen] = useState(false);
//   const [isBankingOpen, setIsBankingOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const toggleMobileWhatWeDo = () => {
//     setIsMobileWhatWeDoOpen(!isMobileWhatWeDoOpen);
//   };

//   const toggleMobileWhoWeAre = () => {
//     setIsMobileWhoWeAreOpen(!isMobileWhoWeAreOpen);
//   };

//   return (
//     <nav className="bg-transparent shadow-md">
//       <div className="max-w-7xl mx-auto px-4 relative">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <h1 className="text-3xl font-bold text-purple-700">Macco</h1>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
//               <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
//                 {isMobileMenuOpen ? (
//                   <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829z" clipRule="evenodd" />
//                 ) : (
//                   <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z" clipRule="evenodd" />
//                 )}
//               </svg>
//             </button>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6 items-center">
//           <Link href="/home">
//             <button className="text-gray-700 hover:text-purple-700 cursor-pointer">Home</button>
//             </Link>
//             {/* What We Do */}
//             <div
//               className="relative group"
//               onMouseEnter={() => {
//                 setIsWhatWeDoOpen(true);
//                 setIsWhoWeAreOpen(false);
//               }}
//               onMouseLeave={() => {
//                 setIsWhatWeDoOpen(false);
//                 setIsIndustriesOpen(false);
//               }}
//             >
                
//               {/* <button className="text-gray-700 hover:text-purple-700 flex items-center cursor-pointer">
//                 What We Do <span className="ml-1 text-gray-500"><img src='https://www.wipro.com/content/dam/wipro/icons/angle-down.svg' className="w-3 h-3 align-text-bottom" alt="Dropdown Arrow" /></span>
//               </button> */}


//               {/* Dropdown for What We Do */}
//               {isWhatWeDoOpen && (
//                 <div className="absolute left-0 top-full mt-2 bg-white rounded shadow-lg p-4 flex w-[600px] border-t">
//                   {/* Services Column */}
//                   <div className="pr-8 w-1/2">
//                     <h3 className="text-lg font-bold text-gray-800 mb-2">Services</h3>
//                     <ul className="space-y-3 text-sm">
//                       <li className="hover:text-purple-700 cursor-pointer">Applications</li>
//                       <li className="hover:text-purple-700 cursor-pointer">Artificial Intelligence</li>
//                       <li className="hover:text-purple-700 cursor-pointer">Business Process Services</li>
//                       <li className="hover:text-purple-700 cursor-pointer">Cloud</li>
//                       <li className="hover:text-purple-700 cursor-pointer">Consulting</li>
//                       <li className="hover:text-purple-700 cursor-pointer">Cybersecurity</li>
//                       <li className="hover:text-purple-700 cursor-pointer">Data & Analytics</li>
//                       <li className="hover:text-purple-700 cursor-pointer">Digital Experiences</li>
//                       <li className="hover:text-purple-700 cursor-pointer">Engineering</li>
//                       <li className="hover:text-purple-700 cursor-pointer">Sustainability</li>
//                     </ul>
//                   </div>

//                   {/* Industries Column */}
//                   <div className="relative w-1/2">
//                     <h3 className="text-lg font-bold text-gray-800 mb-2">Industries</h3>
//                     <ul className="space-y-2 text-sm">
//                       <li
//                         className="hover:text-purple-700 cursor-pointer flex justify-between items-center"
//                         onMouseEnter={() => setIsIndustriesOpen(true)}
//                         onMouseLeave={() => setIsIndustriesOpen(false)}
//                       >
//                         Banking & Financial Services <span className="ml-1 text-black"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMt7mEnXnVBxquLAOX6g-GS7c5M2ffszHqZQ&s' className="w-3 h-3 align-text-bottom" alt="Dropdown Arrow" /></span>
//                       </li>
//                       {/* <li className="hover:text-purple-700 cursor-pointer">Comms, Media & Information</li> */}
//                       <li
//                         className="hover:text-purple-700 cursor-pointer flex justify-between items-center"
//                         onMouseEnter={() => setIsBankingOpen(true)}
//                         onMouseLeave={() => setIsBankingOpen(false)}
//                       >
//                         Comms, Media & Information <span className="ml-1 text-black"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMt7mEnXnVBxquLAOX6g-GS7c5M2ffszHqZQ&s' className="w-3 h-3 align-text-bottom" alt="Dropdown Arrow" /></span>
//                       </li>
//                       <li className="hover:text-purple-700 cursor-pointer">Services</li>
//                       <li className="hover:text-purple-700 cursor-pointer">Consumer</li>
//                       <li className="hover:text-purple-700 cursor-pointer">Energy, Manufacturing and Resources</li>
//                       <li className="hover:text-purple-700 cursor-pointer">Hi-Tech</li>
//                       <li className="hover:text-purple-700 cursor-pointer">Technology Products and Services</li>
//                       <li className="hover:text-purple-700 cursor-pointer">Healthcare</li>
//                       <li className="hover:text-purple-700 cursor-pointer">Life Sciences & Pharma</li>
//                       <li className="hover:text-purple-700 cursor-pointer">Medical Devices</li>
//                       <li className="hover:text-purple-700 cursor-pointer">Platforms, Software Products and Gaming</li>
//                     </ul>

//                     {/* Industries Submenu */}
//                     {isIndustriesOpen && (
//                       <div className="absolute left-full top-0 ml-2 bg-gray-100 border rounded shadow-lg p-4 w-64 border-t">

//                         <ul className="space-y-2 text-sm">
//                         <li className="hover:text-purple-700 cursor-pointer">Banking & Financial Services</li>
//                           <li className="hover:text-purple-700 cursor-pointer">Banking</li>
//                           <li className="hover:text-purple-700 cursor-pointer">Capital Markets</li>
//                           <li className="hover:text-purple-700 cursor-pointer">Insurance</li>
//                         </ul>
//                       </div>
//                     )}
//                     {isBankingOpen && (
//                       <div className="absolute left-full top-0 ml-2 bg-gray-100 border rounded shadow-lg p-4 w-64 border-t">

//                         <ul className="space-y-2 text-sm">
//                         <li className="hover:text-purple-700 cursor-pointer">Communications</li>
//                           <li className="hover:text-purple-700 cursor-pointer">Media & Info Services</li>

//                         </ul>
//                       </div>
//                     )}


//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* About Wipro */}
//             <div
//               className="relative group"
//               onMouseEnter={() => {
//                 setIsWhoWeAreOpen(true);
//                 setIsWhatWeDoOpen(false);
//               }}
//               onMouseLeave={() => setIsWhoWeAreOpen(false)}
//             >
//               <button className="text-gray-700 hover:text-purple-700 flex items-center cursor-pointer">
//                 About Us <span className="ml-1 text-gray-500"><img src='https://www.wipro.com/content/dam/wipro/icons/angle-down.svg' className="w-3 h-3 align-text-bottom" alt="Dropdown Arrow" /></span>
//               </button>

//               {/* Dropdown for Who We Are */}
//               {isWhoWeAreOpen && (
//                 <div className="absolute left-0 top-full mt-2 w-52 bg-white rounded shadow-lg p-4 border-t">
//                   <ul className="space-y-2 text-sm">
//                     <li>
//                       <Link href="/about-us" className="hover:text-purple-700 cursor-pointer block">
//                        OverView
//                       </Link>
//                     </li>
//                     <li className="hover:text-purple-700 cursor-pointer">Leadership</li>
//                     <li className="hover:text-purple-700 cursor-pointer">Mission & Vision</li>
//                   </ul>
//                 </div>
//               )}
//             </div>

//             {/* Other menu buttons */}
//             {/* <button className="text-gray-700 hover:text-purple-700">What We Think</button> */}
            
//            <Link href='/careers'>
//            <button className="text-gray-700 hover:text-purple-700 cursor-pointer">Careers</button>
//            </Link>
//            <Link href='/portfolio'>
//            <button className="text-gray-700 hover:text-purple-700 cursor-pointer">Portfolio</button>
//            </Link>
//            <Link href='/case-study'>
//            <button className="text-gray-700 hover:text-purple-700 cursor-pointer">Case Study</button>
//            </Link>
//             {/* <button className="text-gray-700 hover:text-purple-700 mr-[210px]">Contact Us</button> */}
//             <button className="bg-blue-600 text-white rounded-[30px] px-2 mr-[210px] py-1 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1 cursor-pointer">Contact Us</button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-10">
//             <div className="px-4 py-2 space-y-2">
//               {/* What We Do Section */}
//               <div>
//                 <button
//                   onClick={toggleMobileWhatWeDo}
//                   className="flex justify-between items-center w-full text-left py-2 hover:bg-gray-100"
//                 >
//                   What We Do
//                   <svg
//                     className={`w-4 h-4 fill-current ${isMobileWhatWeDoOpen ? 'rotate-180' : ''}`}
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </button>
//                 {isMobileWhatWeDoOpen && (
//                   <div className="pl-4">
//                     <button className="block w-full text-left py-2 hover:bg-gray-100 text-sm">Services</button>
//                     <button className="block w-full text-left py-2 hover:bg-gray-100 text-sm">Industries</button>
//                     {/* Nested Services/Industries if needed */}
//                   </div>
//                 )}
//               </div>

//               {/* About Wipro Section */}
//               <div>
//                 <button
//                   onClick={toggleMobileWhoWeAre}
//                   className="flex justify-between items-center w-full text-left py-2 hover:bg-gray-100 cursor-pointer"
//                 >
//                   About Wipro
//                   <svg
//                     className={`w-4 h-4 fill-current ${isMobileWhoWeAreOpen ? 'rotate-180' : ''}`}
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </button>
//                 {isMobileWhoWeAreOpen && (
//                   <div className="pl-4">
//                     <Link href="/about-us" className="block w-full text-left py-2 hover:bg-gray-100 text-sm">
//                       About Us
//                     </Link>
//                     <button className="block w-full text-left py-2 hover:bg-gray-100 text-sm">Leadership</button>
//                     <button className="block w-full text-left py-2 hover:bg-gray-100 text-sm">Mission & Vision</button>
//                   </div>
//                 )}
//               </div>

//               {/* Other Buttons */}
//               <button className="block w-full text-left py-2 hover:bg-gray-100 cursor-pointer">What We Think</button>
//               <button className="block w-full text-left py-2 hover:bg-gray-100 cursor-pointer">Careers</button>
//               <button className="block w-full text-left py-2 hover:bg-gray-100 cursor-pointer">Contact Us</button>
//             </div>
//           </div>
//         )}

//       </div>
//     </nav>
//   );
// }



'use client';
import { useState } from 'react';
import Link from 'next/link'; 
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isWhoWeAreOpen, setIsWhoWeAreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileWhatWeDoOpen, setIsMobileWhatWeDoOpen] = useState(false);
  const [isMobileWhoWeAreOpen, setIsMobileWhoWeAreOpen] = useState(false);
  const [isBankingOpen, setIsBankingOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileWhatWeDo = () => {
    setIsMobileWhatWeDoOpen(!isMobileWhatWeDoOpen);
  };

  const toggleMobileWhoWeAre = () => {
    setIsMobileWhoWeAreOpen(!isMobileWhoWeAreOpen);
  };

  return (
    <nav className="bg-transparent shadow-lg">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex justify-between items-center h-16 ">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold text-purple-700 transition-all hover:text-purple-500">
              {/* Applying motion to the logo image */}
              <motion.img 
                src='https://maccotech.in/images/logo.png' 
                alt="MaccoTech Logo" 
                className="h-13 w-auto" 
                animate={{ scale: [1, 1.2, 1] }}  // Logo will grow and shrink
                transition={{ 
                  duration: 1, // Duration of the animation cycle
                   // Repeat the animation indefinitely
                  ease: 'easeInOut',  // Smooth easing
                }} 
              />
            </h1>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829z" clipRule="evenodd" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z" clipRule="evenodd" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/home">
              <button className="text-whitehover:text-purple-700 cursor-pointer transition-all">Home</button>
            </Link>
            {/* What We Do */}
            <div
              className="relative group"
              onMouseEnter={() => {
                setIsWhatWeDoOpen(true);
                setIsWhoWeAreOpen(false);
              }}
              onMouseLeave={() => {
                setIsWhatWeDoOpen(false);
                setIsIndustriesOpen(false);
              }}
            >
              {/* Dropdown for What We Do */}
              {isWhatWeDoOpen && (
                <div className="absolute left-0 top-full mt-2 bg-white rounded-lg shadow-lg p-6 w-[600px] transition-all border-t">
                  {/* Services Column */}
                  <div className="pr-8 w-1/2">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Services</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="hover:text-purple-700 cursor-pointer">Applications</li>
                      <li className="hover:text-purple-700 cursor-pointer">AI</li>
                      <li className="hover:text-purple-700 cursor-pointer">Cloud</li>
                      <li className="hover:text-purple-700 cursor-pointer">Consulting</li>
                      <li className="hover:text-purple-700 cursor-pointer">Cybersecurity</li>
                      <li className="hover:text-purple-700 cursor-pointer">Data & Analytics</li>
                      <li className="hover:text-purple-700 cursor-pointer">Digital Experiences</li>
                      <li className="hover:text-purple-700 cursor-pointer">Engineering</li>
                      <li className="hover:text-purple-700 cursor-pointer">Sustainability</li>
                    </ul>
                  </div>

                  {/* Industries Column */}
                  <div className="relative w-1/2">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Industries</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="hover:text-purple-700 cursor-pointer flex justify-between items-center" onMouseEnter={() => setIsIndustriesOpen(true)} onMouseLeave={() => setIsIndustriesOpen(false)}>
                        Banking & Financial Services <span className="ml-1 text-black"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMt7mEnXnVBxquLAOX6g-GS7c5M2ffszHqZQ&s' className="w-3 h-3 align-text-bottom" alt="Dropdown Arrow" /></span>
                      </li>
                      <li className="hover:text-purple-700 cursor-pointer">Comms, Media & Information</li>
                      <li className="hover:text-purple-700 cursor-pointer">Healthcare</li>
                    </ul>

                    {/* Industries Submenu */}
                    {isIndustriesOpen && (
                      <div className="absolute left-full top-0 ml-2 bg-gray-100 border rounded shadow-lg p-4 w-64 border-t">
                        <ul className="space-y-2 text-sm">
                          <li className="hover:text-purple-700 cursor-pointer">Banking</li>
                          <li className="hover:text-purple-700 cursor-pointer">Capital Markets</li>
                          <li className="hover:text-purple-700 cursor-pointer">Insurance</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* About Us */}
            <div
              className="relative group"
              onMouseEnter={() => {
                setIsWhoWeAreOpen(true);
                setIsWhatWeDoOpen(false);
              }}
              onMouseLeave={() => setIsWhoWeAreOpen(false)}
            >
              <Link href="/about-us" >
                  <button className="text-gray-700 hover:text-purple-700 flex items-center cursor-pointer">
                About Us 
              </button>
              </Link>
              {/* <button className="text-gray-700 hover:text-purple-700 flex items-center cursor-pointer">
                About Us <span className="ml-1 text-gray-500"><img src='https://www.wipro.com/content/dam/wipro/icons/angle-down.svg' className="w-3 h-3 align-text-bottom" alt="Dropdown Arrow" /></span>
              </button> */}

              {/* Dropdown for Who We Are */}
              {/* {isWhoWeAreOpen && (
                <div className="absolute left-0 top-full mt-2 w-52 bg-white rounded-lg shadow-lg p-4 border-t">
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/about-us" className="hover:text-purple-700 cursor-pointer block">
                        OverView
                      </Link>
                    </li>
                    <li className="hover:text-purple-700 cursor-pointer">Leadership</li>
                    <li className="hover:text-purple-700 cursor-pointer">Mission & Vision</li>
                  </ul>
                </div>
              )} */}
            </div>

            {/* Other menu buttons */}
            <Link href='/careers'>
              <button className="text-gray-700 hover:text-purple-700 cursor-pointer">Careers</button>
            </Link>
            <Link href='/portfolio'>
              <button className="text-gray-700 hover:text-purple-700 cursor-pointer">Portfolio</button>
            </Link>
            <Link href='/case-study'>
              <button className="text-gray-700 hover:text-purple-700 cursor-pointer">Case Study</button>
            </Link>
            <Link href='/pricing'>
              <button className="text-gray-700 hover:text-purple-700 cursor-pointer">Pricing</button>
            </Link>
            <Link href='/contact'>
            <button className="bg-blue-600 text-white rounded-[30px] px-6 py-2 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1 cursor-pointer">Contact Us</button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-10">
            <div className="px-4 py-2 space-y-2">
              {/* Mobile What We Do */}
              <div>
                <button onClick={toggleMobileWhatWeDo} className="flex justify-between items-center w-full text-left py-2 hover:bg-gray-100 transition-all">
                  What We Do
                  <svg className={`w-4 h-4 fill-current ${isMobileWhatWeDoOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {isMobileWhatWeDoOpen && (
                  <div className="pl-4">
                    <button className="block w-full text-left py-2 hover:bg-gray-100 text-sm">Services</button>
                    <button className="block w-full text-left py-2 hover:bg-gray-100 text-sm">Industries</button>
                  </div>
                )}
              </div>

              {/* About Us Section */}
              <div>
                <button onClick={toggleMobileWhoWeAre} className="flex justify-between items-center w-full text-left py-2 hover:bg-gray-100 cursor-pointer transition-all">
                  About Us
                  <svg className={`w-4 h-4 fill-current ${isMobileWhoWeAreOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {isMobileWhoWeAreOpen && (
                  <div className="pl-4">
                    <Link href="/about-us" className="block w-full text-left py-2 hover:bg-gray-100 text-sm">About Us</Link>
                    <button className="block w-full text-left py-2 hover:bg-gray-100 text-sm">Leadership</button>
                    <button className="block w-full text-left py-2 hover:bg-gray-100 text-sm">Mission & Vision</button>
                  </div>
                )}
              </div>

              {/* Other Buttons */}
              <button className="block w-full text-left py-2 hover:bg-gray-100 cursor-pointer transition-all">Careers</button>
              <button className="block w-full text-left py-2 hover:bg-gray-100 cursor-pointer transition-all">Contact Us</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

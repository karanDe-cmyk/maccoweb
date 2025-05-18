


// 'use client';
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image'; // Assuming you are using Next.js for the Image component

// // Sample image import (replace with your actual image path)
// // import faqImage1 from './public/faq-image-1.jpg';
// // import faqImage2 from './public/faq-image-2.jpg';
// // import faqImage2 from '../public/faq-image-2.jpg';
// // import faqImage3 from '../public/faq-image-3.jpg';

// const faqData = [
//     {
//         question: 'How do native and hybrid apps differ from each other?',
//         answer:
        
//             'Native apps are developed specifically for one platform (iOS or Android) using platform-specific languages (Swift/Objective-C for iOS, Java/Kotlin for Android). They offer optimal performance and access to all device featuresHybrid apps are built using web technologies like HTML, CSS, and JavaScript, and run inside a native container.They can be deployed across multiple platforms but might not perform as well as native apps.'            
//     },
//     {
//         question: 'What is the typical timeframe for developing a mobile app?',
//         answer: 'It depends on the app’s complexity but generally ranges from a few weeks to several months.',
//     },
//     {
//         question: 'Which platforms should we prioritize: iOS or Android?',
//         answer: 'It depends on your target audience. Android has a larger global share; iOS users tend to spend more.',
//     },
//     {
//         question: 'What is the estimated cost of developing a mobile app?',
//         answer: 'The cost varies based on features, platform, and team. It can range from thousands to hundreds of thousands.',
//     },
//     {
//         question: 'How do you guarantee the security of the mobile application?',
//         answer: 'We use best practices like data encryption, secure APIs, and regular audits.',
//     },
//     {
//         question: 'Are you able to provide updates and maintenance for the app after it’s launched?',
//         answer: 'Yes, we offer full post-launch support including updates, monitoring, and bug fixes.',
//     },
// ];

// const FAQItem = ({ faq, index }) => {
//     const [isOpen, setIsOpen] = useState(index === 0); // First item open by default for visual similarity

//     return (
//         <div className="mb-4  rounded-md bg-gray-900/70 text-white shadow-md ">
//             <button
//                 className="flex w-full justify-between items-center px-6 py-4 font-semibold text-lg focus:outline-none"
//                 onClick={() => setIsOpen(!isOpen)}
//                 aria-expanded={isOpen}
//                 aria-controls={`faq-content-${index}`}
//             >
//                 {faq.question}
//                 <motion.span animate={{ rotate: isOpen ? 0 : 90 }} className="text-xl">
//                     +
//                 </motion.span>
//             </button>
//             <AnimatePresence>
//                 {isOpen && (
//                     <motion.div
//                         id={`faq-content-${index}`}
//                         className="px-6 py-4 text-gray-300 text-sm"
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.2 }}
//                     >
//                         {faq.answer}
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//             <div className="border-b border-gray-800" />
//         </div>
//     );
// };

// const FAQSection = () => {
//     return (
//         <section className="py-16 bg-gray-900 text-white">
//             <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
//                 {/* Left Side: Images */}
//                 {/* Left Side: Overlapping Smaller Images */}
//                 <div className="relative lg:w-1/4 w-full ml-63">
//                     {/* Top Image - Smaller */}
//                     <div className="overflow-hidden rounded-md shadow-md w-72 h-48">
//                         <Image
//                             src="https://maccotech.in/assets/imgs/about/sq1.jpg"
//                             alt="Image 1"
//                             width={380}
//                             height={280}
//                             className="object-cover w-full h-full"
//                         />
//                     </div>

//                     {/* Bottom Image - Slight Overlap */}
//                     <div className="absolute left-16 top-32 overflow-hidden rounded-md shadow-lg w-64 h-40">
//                         <Image
//                             src="https://maccotech.in/assets/imgs/about/sq2.jpg"
//                             alt="Image 2"
//                             width={280}
//                             height={220}
//                             className="object-cover w-full h-full"
//                         />
//                     </div>
//                 </div>


//                 {/* Right Side: FAQ Items */}
//                 <div className="lg:w-1/2">
//                     <h2 className="text-3xl font-bold mb-8">Frequently asked Questions</h2>
//                     <div>
//                         {faqData.map((faq, index) => (
//                             <FAQItem key={index} faq={faq} index={index} />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default FAQSection;



'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image'; // Assuming you are using Next.js for the Image component

const faqData = [
    {
        question: 'How do native and hybrid apps differ from each other?',
        answer: ' Native apps are developed specifically for one platform (iOS or Android) using platform-specific languages (Swift/Objective-C for iOS, Java/Kotlin for Android). They offer optimal performance and access to all device features.  Hybrid apps are built using web technologies like HTML, CSS, and JavaScript, and run inside a native container. They can be deployed across multiple platforms but might not perform as well as native apps.'
    },
    {
        question: 'What is the typical timeframe for developing a mobile app?',
        answer: 'It depends on the app’s complexity but generally ranges from a few weeks to several months.',
    },
    {
        question: 'Which platforms should we prioritize: iOS or Android?',
        answer: 'It depends on your target audience. Android has a larger global share; iOS users tend to spend more.',
    },
    {
        question: 'What is the estimated cost of developing a mobile app?',
        answer: 'The cost varies based on features, platform, and team. It can range from thousands to hundreds of thousands.',
    },
    {
        question: 'How do you guarantee the security of the mobile application?',
        answer: 'We use best practices like data encryption, secure APIs, and regular audits.',
    },
//     {
//         question: 'Are you able to provide updates and maintenance for the app after it’s launched?',
//         answer: 'Yes, we offer full post-launch support including updates, monitoring, and bug fixes.',
//     },
];

const FAQItem = ({ faq, index }) => {
    const [isOpen, setIsOpen] = useState(index === 0); // First item open by default for visual similarity

    return (
        <div className="mb-5 rounded-md bg-gray-900/70 text-white shadow-md">
            <button
                className="flex w-full justify-between items-center px-6 py-4 font-semibold text-base focus:outline-none text-gray-300"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls={`faq-content-${index}`}
            >
                {faq.question}
                <motion.span animate={{ rotate: isOpen ? 0 : 90 }} className="text-xl text-gray-100">
                    {isOpen ? '-' : '+'}
                </motion.span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id={`faq-content-${index}`}
                        className="px-6 py-4 text-gray-300 text-sm leading-relaxed"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {faq.answer}
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="border-b border-gray-800" />
        </div>
    );
};

const FAQSection = () => {
    return (
        <section className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
                {/* Left Side: Overlapping Smaller Images */}
                <div className="relative lg:w-1/4 w-full ml-57">
                    {/* Top Image - Smaller */}
                    <div className="overflow-hidden rounded-md shadow-md w-70 h-46">
                        <Image
                            src="/sq1.jpg"
                            alt="Image 1"
                            width={356}
                            height={260}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Bottom Image - Slight Overlap */}
                    <div className="absolute  right-61 top-32 overflow-hidden rounded-md shadow-lg w-62 h-42">
                        <Image
                            src="/sq2.jpg"
                            alt="Image 2"
                            width={324}
                            height={228}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

                {/* Right Side: FAQ Items */}
                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold mb-8">Frequently asked Questions</h2>
                    <div>
                        {faqData.map((faq, index) => (
                            <FAQItem key={index} faq={faq} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;


// 'use client';
// import Image from "next/image";
// import Navbar from "../Component/Navbar/page";
// import { motion } from "framer-motion";
// import ReactJSServices from "../Component/ReactJSServices/page";
// import ReactAdvantages from "../Component/ReactAdvantages/page";
// import WhyChooseReact from "../Component/WhyChooseReact/page";
// import Footerpage from "../Component/Footerpage/page";

// // Animation variants
// const container = {
//     hidden: { scale: 0.95, opacity: 0 },
//     visible: {
//         scale: 1,
//         opacity: 1,
//         transition: {
//             duration: 0.8,
//             ease: "easeOut",
//             when: "beforeChildren",
//             staggerChildren: 0.3,
//         },
//     },
// };

// const item = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
// };

// const ReactJsDevelopment = () => {
//     return (
//         <>
//             <Navbar />

//             <section className="relative w-full h-[450px] md:h-[500px] flex items-center justify-center text-center overflow-hidden">
//                 {/* Background Image */}
//                 <Image
//                     src="/reactjs.jpg"
//                     alt="React Development Background"
//                     fill
//                     className="object-cover z-0 "
//                     priority
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/60 z-10" />

//                 {/* Animated Content */}
//                 <motion.div
//                     variants={container}
//                     initial="hidden"
//                     animate="visible"
//                     className="relative z-20 text-white px-4 md:px-8 max-w-3xl"
//                 >
//                     <motion.h1
//                         variants={item}
//                         className="text-3xl md:text-5xl font-extrabold mb-4"
//                     >
//                         ReactJS Development Company
//                     </motion.h1>
//                     <motion.p
//                         variants={item}
//                         className="text-lg md:text-xl mb-6"
//                     >
//                         We craft high-performance and scalable React applications tailored to your business goals. Let our experts transform your ideas into responsive, modern web solutions.
//                     </motion.p>
//                     <motion.button
//                         variants={item}
//                         className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition"
//                     >
//                         Talk to Our Experts
//                     </motion.button>
//                 </motion.div>
//             </section>


//             <section>
//                 <div className="bg-gray-50 py-16">
//                     <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col md:flex-row items-center md:space-x-12">

//                         {/* Text Content with animation from left */}
//                         <motion.div
//                             className="md:w-1/2 mb-8 md:mb-0"
//                             initial={{ x: -100, opacity: 0 }}
//                             whileInView={{ x: 0, opacity: 1 }}
//                             transition={{ duration: 0.8, ease: 'easeOut' }}
//                             viewport={{ once: true }}
//                         >
//                             <h2 className="text-3xl font-bold text-blue-800 mb-4">What is React.JS?</h2>
//                             <p className="text-gray-700 leading-relaxed mb-4">
//                                 React.JS is the new JavaScript Library for mobile and web development introduced by Facebook.
//                             </p>
//                             <p className="text-gray-700 leading-relaxed mb-4">
//                                 Facebook's aim was to create a JavaScript library that is best enough to handle big applications with data
//                                 that changes every now and then. React.JS is one of the top JavaScript libraries available in the market
//                                 today. So the huge data handling capacity of React.JS is well evident.
//                             </p>
//                             <p className="text-gray-700 leading-relaxed">
//                                 What made React.JS development companies popular, is its combined feature of the speed of JavaScript
//                                 and its simplified way of rendering webpages.
//                             </p>
//                         </motion.div>

//                         {/* Image with animation from right */}
//                         <motion.div
//                             className="md:w-1/2"
//                             initial={{ x: 100, opacity: 0 }}
//                             whileInView={{ x: 0, opacity: 1 }}
//                             transition={{ duration: 0.8, ease: 'easeOut' }}
//                             viewport={{ once: true }}
//                         >
//                             <div className="w-full h-auto  overflow-hidden">
//                                 <Image
//                                     src="/ReactJs1.webp"
//                                     alt="ReactJS Illustration"
//                                     width={600}
//                                     height={400}
//                                     className="rounded-lg object-cover"
//                                 />
//                             </div>
//                         </motion.div>

//                     </div>
//                 </div>
//             </section>

//             <section>
//       <div className="bg-[#FEEFEF] py-16">
//         <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

//             {/* Image Section with animation from left */}
//             <motion.div
//               className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden "
//               initial={{ x: -100, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.8, ease: 'easeOut' }}
//               viewport={{ once: true }}
//             >
//               <Image
//                 src="/ReactJs1.webp"
//                 alt="React JS Capabilities Illustration"
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-lg"
//                 priority
//               />
//             </motion.div>

//             {/* Text Content with animation from right */}
//             <motion.div
//               className="space-y-6"
//               initial={{ x: 100, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.8, ease: 'easeOut' }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl font-bold text-blue-700">Our React JS Capabilities</h2>
//               <div className="space-y-4">
//                 <p className="text-base text-gray-700 leading-relaxed">
//                   At Macco Tech, we leverage the power of React JS to build dynamic and high-performance web applications tailored to your unique business needs. Our expert team excels in:
//                 </p>
//                 <ul className="text-base list-disc list-inside text-gray-600 leading-relaxed">
//                   <li>Developing interactive user interfaces (UIs) and engaging user experiences (UX).</li>
//                   <li>Building scalable and maintainable single-page applications (SPAs).</li>
//                   <li>Creating reusable UI components for efficient development.</li>
//                   <li>Integrating with various backend APIs and services seamlessly.</li>
//                   <li>Optimizing applications for speed and performance.</li>
//                   <li>Providing ongoing support and maintenance.</li>
//                 </ul>
//                 <p className="text-gray-700 leading-relaxed text-base">
//                   We stay up-to-date with the latest React JS features and best practices to deliver cutting-edge solutions that drive your business forward. Partner with Macco Tech to unlock the full potential of React JS.
//                 </p>
//               </div>
//               <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300">
//                 Discuss Your Project
//               </button>
//             </motion.div>

//           </div>
//         </div>
//       </div>
//     </section>           
//      <ReactJSServices />
//      <ReactAdvantages/>
//      <WhyChooseReact/>


//      <Footerpage/>
//         </>


//     );
// };

// export default ReactJsDevelopment;
'use client';
import Image from "next/image";
import Navbar from "../Component/Navbar/page";
import { motion } from "framer-motion";
import ReactJSServices from "../Component/ReactJSServices/page";
import ReactAdvantages from "../Component/ReactAdvantages/page";
import WhyChooseReact from "../Component/WhyChooseReact/page";
import Footerpage from "../Component/Footerpage/page";

// Animation variants
const container = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.3,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const ReactJsDevelopment = () => {
    return (
        <>
            <Navbar />

            <section className="relative w-full h-[450px] md:h-[500px] flex items-center justify-center text-center overflow-hidden">
                {/* Background Image */}
                <Image
                    src="/reactjs.jpg"
                    alt="React Development Background"
                    fill
                    className="object-cover z-0 "
                    priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 z-10" />

                {/* Animated Content */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="relative z-20 text-white px-4 md:px-8 max-w-3xl"
                >
                    <motion.h1
                        variants={item}
                        className="text-3xl md:text-5xl font-extrabold mb-4"
                    >
                        ReactJS Development Company
                    </motion.h1>
                    <motion.p
                        variants={item}
                        className="text-lg md:text-xl mb-6"
                    >
                        We craft high-performance and scalable React applications tailored to your business goals. Let our experts transform your ideas into responsive, modern web solutions.
                    </motion.p>
                    <motion.button
                        variants={item}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition"
                    >
                        Talk to Our Experts
                    </motion.button>
                </motion.div>
            </section>

            <section>
                <div className="bg-gray-50 py-16">
                    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col md:flex-row items-center md:space-x-12">

                        {/* Text Content with animation from left */}
                        <motion.div
                            className="md:w-1/2 mb-8 md:mb-0"
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-blue-800 mb-4">What is React.JS?</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                React.JS is the new JavaScript Library for mobile and web development introduced by Facebook.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Facebook&apos;s aim was to create a JavaScript library that is best enough to handle big applications with data
                                that changes every now and then. React.JS is one of the top JavaScript libraries available in the market
                                today. So the huge data handling capacity of React.JS is well evident.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                What made React.JS development companies popular, is its combined feature of the speed of JavaScript
                                and its simplified way of rendering webpages.
                            </p>
                        </motion.div>

                        {/* Image with animation from right */}
                        <motion.div
                            className="md:w-1/2"
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            <div className="w-full h-auto  overflow-hidden">
                                <Image
                                    src="/ReactJs1.webp"
                                    alt="ReactJS Illustration"
                                    width={600}
                                    height={400}
                                    className="rounded-lg object-cover"
                                />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            <section>
                <div className="bg-[#FEEFEF] py-16">
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                            {/* Image Section with animation from left */}
                            <motion.div
                                className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden "
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                viewport={{ once: true }}
                            >
                                <Image
                                    src="/ReactJs1.webp"
                                    alt="React JS Capabilities Illustration"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                    priority
                                />
                            </motion.div>

                            {/* Text Content with animation from right */}
                            <motion.div
                                className="space-y-6"
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-bold text-blue-700">Our React JS Capabilities</h2>
                                <div className="space-y-4">
                                    <p className="text-base text-gray-700 leading-relaxed">
                                        At Macco Tech, we leverage the power of React JS to build dynamic and high-performance web applications tailored to your unique business needs. Our expert team excels in:
                                    </p>
                                    <ul className="text-base list-disc list-inside text-gray-600 leading-relaxed">
                                        <li>Developing interactive user interfaces (UIs) and engaging user experiences (UX).</li>
                                        <li>Building scalable and maintainable single-page applications (SPAs).</li>
                                        <li>Creating reusable UI components for efficient development.</li>
                                        <li>Integrating with various backend APIs and services seamlessly.</li>
                                        <li>Optimizing applications for speed and performance.</li>
                                        <li>Providing ongoing support and maintenance.</li>
                                    </ul>
                                    <p className="text-gray-700 leading-relaxed text-base">
                                        We stay up-to-date with the latest React JS features and best practices to deliver cutting-edge solutions that drive your business forward. Partner with Macco Tech to unlock the full potential of React JS.
                                    </p>
                                </div>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300">
                                    Discuss Your Project
                                </button>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </section>           

            <ReactJSServices />
            <ReactAdvantages />
            <WhyChooseReact />

            <Footerpage />
        </>
    );
};

export default ReactJsDevelopment;

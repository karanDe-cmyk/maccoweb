// 'use client';
// import React from 'react';

// import { motion } from 'framer-motion';

// const ServicesAndroidOverlapRevised = () => {
//   const serviceVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
//   };

//   return (
//     <>
      
//       <div className="bg-gray-100 py-12 lg:py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//           {/* Background Image */}
//           <div className="rounded-md overflow-hidden shadow-lg w-full lg:w-2/3">
//             <img
//               src="https://t4.ftcdn.net/jpg/03/64/30/95/360_F_364309552_0uh99pIXBzb4U2CszkPJe2i34iBXtdbk.jpg"
//               alt="Abstract Android Development"
//               className="w-full h-[500px] object-cover"
//             />
//           </div>

//           {/* Services Boxes */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8 lg:mt-0 absolute top-0 right-0 w-full lg:w-1/2 lg:pr-8">
//             {/* Android Mobile App Development */}
//             <motion.div
//               className="bg-gray-800 text-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300"
//               variants={serviceVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//             >
//               <h3 className="text-xl font-semibold mb-2">Android Mobile App Development</h3>
//               <p className="text-gray-300 text-sm">
//                 Unleash innovation with our Android app development experts, transforming ideas into realities.
//               </p>
//             </motion.div>

//             {/* Android Tablet App Development */}
//             <motion.div
//               className="bg-gray-800 text-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300"
//               variants={serviceVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               transition={{ delay: 0.2 }}
//             >
//               <h3 className="text-xl font-semibold mb-2">Android Tablet App Development</h3>
//               <p className="text-gray-300 text-sm">
//                 Expand your horizons and enhance your business reach with captivating tablet applications.
//               </p>
//             </motion.div>

//             {/* Universal Application Development */}
//             <motion.div
//               className="bg-gray-800 text-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300"
//               variants={serviceVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               transition={{ delay: 0.4 }}
//             >
//               <h3 className="text-xl font-semibold mb-2">Universal Application Development</h3>
//               <p className="text-gray-300 text-sm">
//                 Crafted for smartphones, TVs, and wearables, we ensure your app stands out in the competitive landscape.
//               </p>
//             </motion.div>

//             {/* Android User Interface (UI) and User Experience (UX) */}
//             <motion.div
//               className="bg-gray-800 text-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300"
//               variants={serviceVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               transition={{ delay: 0.6 }}
//             >
//               <h3 className="text-xl font-semibold mb-2">Android User Interface (UI) and User Experience (UX)</h3>
//               <p className="text-gray-300 text-sm">
//                 Collaborate with our top-level Android app designers for visually stunning and user-centric mobile experiences.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ServicesAndroidOverlapRevised;



'use client';
import React from 'react';
import { motion } from 'framer-motion';

const ServicesAndroidContentEnhanced = () => {
  const serviceVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background Image */}
        <div className="rounded-xl overflow-hidden shadow-xl w-full lg:w-2/3">
          <img
            src="https://t4.ftcdn.net/jpg/03/64/30/95/360_F_364309552_0uh99pIXBzb4U2CszkPJe2i34iBXtdbk.jpg"
            alt="Modern Android Development Interface"
            className="w-full h-[450px] sm:h-[500px] object-cover"
          />
        </div>

        {/* Services Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8 lg:mt-0 absolute top-0 right-0 w-full lg:w-1/2 lg:pr-10">
          {/* Android Mobile App Development */}
          <motion.div
            className="bg-gray-800 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            variants={serviceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-3">Native Android Excellence</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Crafting high-performance, intuitive mobile applications leveraging the full power of the Android ecosystem.
            </p>
          </motion.div>

          {/* Android Tablet App Development */}
          <motion.div
            className="bg-gray-800 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            variants={serviceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-3">Tablet-Optimized Solutions</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Designing immersive and feature-rich applications tailored for the larger screen experience of Android tablets.
            </p>
          </motion.div>

          {/* Universal Application Development */}
          <motion.div
            className="bg-gray-800 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            variants={serviceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-3">Cross-Device Expertise</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Developing adaptable applications that deliver a consistent and engaging experience across a diverse range of Android devices.
            </p>
          </motion.div>

          {/* Android User Interface (UI) and User Experience (UX) */}
          <motion.div
            className="bg-gray-800 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            variants={serviceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-3">User-Centric Design</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Creating visually appealing and highly usable interfaces that prioritize seamless navigation and user satisfaction.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesAndroidContentEnhanced;
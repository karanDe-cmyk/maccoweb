
'use client';
import React from 'react';
import Navbar from '../Component/Navbar/page';
import { CodeBracketSquareIcon, LightBulbIcon, ChartBarSquareIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Servicesandroid from '../Component/Servicesandroid/page';
import Footerpage from '../Component/Footerpage/page';
import Contact from '../Component/Contact/page';

const AndroidAppDevelopmentPage = () => {
    const backgroundVariants = {
        hidden: { scale: 1.1, opacity: 9 },
        visible: { scale: 1, opacity: 9, transition: { duration: 0.8, ease: 'easeInOut' } },
      };
    
      const textVariants2 = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.6, delay: 0.3, ease: 'easeOut' } },
      };
    
      const buttonVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.6, delay: 0.5, ease: 'easeOut' } },
      };
    
      const imageVariants2 = {
        hidden: { scale: 0.9, opacity: 0, x: 50 },
        visible: { scale: 1, opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.4, ease: 'easeOut' } },
      };

    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
      };
    
      const imageVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
      };
    
      const listItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: { delay: i * 0.1, duration: 0.5, ease: 'easeInOut' },
        }),
      };

  return (
    <>
   <Navbar/>
   <section className="overflow-hidden">
      <motion.div
        className="bg-gray-900 relative overflow-hidden"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Background Image */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-60"
          style={{ backgroundImage: 'url(https://www.shutterstock.com/image-photo/new-york-usa-may-4-600nw-1391584058.jpg)' }} // Replace with your image path
        ></motion.div>

        <div className="relative z-10 py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 xl:px-16">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            variants={textVariants2}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl font-extrabold text-green-400 sm:text-4xl lg:text-5xl tracking-tight">
              Android App Development
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Build robust, scalable, and user-centric Android applications that drive results.
            </p>
            <div className="mt-8 flex justify-center">
              <motion.button
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
              >
                Talk Our Experts <span aria-hidden="true">→</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Optional: Image of the Android Robot */}
        <motion.div
          className="absolute bottom-0 right-0 max-w-md lg:max-w-lg xl:max-w-xl pointer-events-none"
          variants={imageVariants2}
          initial="hidden"
          animate="visible"
        >
          <img src="/images/android-robot.png" alt="Android Robot" className="w-full h-auto" /> {/* Replace with your image path */}
        </motion.div>
      </motion.div>
    </section>

    
    <section>
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
            {/* Text Content */}
            <motion.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-blue-800 leading-tight sm:text-3xl">
                Android Development, Engineered for Excellence
              </h2>
              <p className="mt-6 text-lg text-gray-700">
                We build secure, scalable, and user-centric Android applications that align with your business goals and offer seamless mobile experiences.
              </p>

              <ul className="mt-8 space-y-5 text-gray-700">
                {['Tailored Solutions', 'Modern Technologies', 'Optimized Performance'].map((title, index) => (
                  <motion.li
                    key={title}
                    className="flex items-start gap-4"
                    variants={listItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index}
                  >
                    {index === 0 && <CodeBracketSquareIcon className="h-6 w-6 text-indigo-600 mt-1" />}
                    {index === 1 && <LightBulbIcon className="h-6 w-6 text-indigo-600 mt-1" />}
                    {index === 2 && <ChartBarSquareIcon className="h-6 w-6 text-indigo-600 mt-1" />}
                    <div>
                      <span className="block font-semibold text-base">{title}</span>
                      <span className="text-sm">
                        {title === 'Tailored Solutions' && 'Custom Android apps designed around your brand and users.'}
                        {title === 'Modern Technologies' && 'Built with Kotlin, Jetpack, and the latest Android frameworks.'}
                        {title === 'Optimized Performance' && 'Fast, reliable apps that scale with your business.'}
                      </span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Image */}
            <motion.div
              className="mt-12 lg:mt-0"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
                <img
                  className="object-cover w-full h-full"
                  src="https://www.simplilearn.com/ice9/free_resources_article_thumb/5-Fundamentals-that-every-beginner-in-Android-app-Development-should-know.jpg"
                  alt="Android Development"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    <section>
    <section className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest">
          We Are Macco Tech
        </p>
        <h2 className="mt-3 text-1xl sm:text-2xl lg:text-3xl font-bold text-gray-700 tracking-tight">
          Leading Android App Development Company
        </h2>
        <p className="mt-4 text-base sm:text-base text-gray-700">
          Macco Tech is a globally recognized Web, Android App, Game, and Digital Marketing company with branches in India and Australia. Since our inception, we have been delivering top-notch solutions in Android app development, tailored to meet modern business needs.
          Our team specializes in creating high-performance Android applications with clean interfaces and seamless user experiences. Whether it's a utility app, an enterprise-grade solution, or an engaging mobile game, we bring your vision to life with creativity and precision. We are committed to quality, timely delivery, and customer satisfaction — values that help us build long-term client relationships and deliver repeat success.
        </p>
        <p className="mt-4 text-base sm:text-base text-gray-600">
          At Macco Tech, Android app development is not just a service; it's our passion. We combine innovation with technical expertise to ensure your app is scalable, secure, and aligned with your business goals. Let’s build something impactful together — your success is our mission.
        </p>
        <div className="mt-8">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 transition">
            Let's Talk About Your Android App →
          </button>
        </div>
      </div>
    </section>
    </section>

<Servicesandroid/>
<Contact/>
<Footerpage/>
    </>
  );
};

export default AndroidAppDevelopmentPage;


'use client';
import React from 'react';
import Navbar from '../Component/Navbar/page';
import Link from 'next/link';
import CountUp from 'react-countup';
import Image from 'next/image';
import { FaUsers, FaCode, FaChartLine, FaShoppingCart, FaCloud, FaMobileAlt } from 'react-icons/fa';
import OurValuesSection from '../Component/OurValuesSection/page';
import TransparencyEthics from '../Component/TransparencyEthics/page';
import Footerpage from '../Component/Footerpage/page';

function AboutUsPage() {
    return (
        <>
            <Navbar />

            <section
                className="w-full min-h-[60vh] bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage: "url('/aboutus.jpeg')",
                }}
            >
                <h1 className="text-white text-4xl md:text-5xl font-semibold drop-shadow-lg mt-[310px]">
                    About us
                </h1>
            </section>

            <section className="py-16 bg-white-50">
                <div className=" mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <span className="text-indigo-600 font-semibold uppercase tracking-wider mb-4 block">
                            WHO WE ARE
                        </span>
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-tight mb-6">
                            We are a <span className="text-indigo-600">creative digital agency</span> based in India.
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            We are a team of top talent delivering enterprise solutions globally. We evolve with the advancement in technology because we believe in making our technology as our innovation.
                        </p>
                        <p className="text-gray-600">
                            Our experts provide a wide range of services including app design, web development, digital marketing, ecommerce solutions and cloud development. We stay updated with the technology to build innovative digital products that meet client requirements across multiple business verticals and domains by housing some of the best professionals in the industry.
                        </p>
                    </div>

                    <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                        <Image
                            src="/aboutus2.webp"
                            alt="Our team collaborating"
                            width={800}
                            height={500}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="py-16 bg-[#FEEFEF]">
                <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
                    <div className="text-center mb-12 animate-fadeIn transition-opacity duration-1000 ease-in-out">
                        <h2 className="font-bold text-gray-700 sm:text-3xl lg:text-3xl mb-4 transform transition-transform duration-500 hover:scale-105">
                            The Reevan - Your Digital Growth Partner
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto transition duration-700 delay-100">
                            Based in India, Reevan is a full-service powerhouse for web, app, and digital marketing.
                            We empower businesses with innovative digital products, leveraging the latest technologies
                            and the expertise of our top-tier professionals to transform your concepts into impactful realities.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 ease-in-out mt-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transform hover:scale-105"
                        >
                            Let&apos;s Connect
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center">
                        {[
                            { value: 3500, label: 'Projects Completed', color: 'text-blue-600' },
                            { value: 540, label: 'Satisfied Clients', color: 'text-green-600' },
                            { value: 20, label: 'Talented Team Members', color: 'text-indigo-600' },
                            { value: 10, label: 'Years of Success', color: 'text-purple-600' },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-lg shadow-md p-6 transition transform duration-700 ease-in-out hover:scale-105 opacity-0 animate-fadeIn"
                                style={{ animationDelay: `${i * 200}ms`, animationFillMode: 'forwards' }}
                            >
                                <div className={`text-3xl font-bold ${item.color} mb-2`}>
                                    <CountUp end={item.value} duration={2.5} />
                                    <span>+</span>
                                </div>
                                <div className="text-sm text-gray-700 uppercase tracking-wide">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='py-16 bg-white'>
                <div className="mb-16 text-center px-[90px]">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6 animate-fadeIn transition duration-700">Our Expertise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <FaCode className="text-2xl" />, title: 'Web Development', desc: 'Crafting responsive and user-friendly web experiences.', bg: 'bg-blue-100', text: 'text-blue-600' },
                            { icon: <FaMobileAlt className="text-2xl" />, title: 'App Development', desc: 'Building innovative mobile applications for iOS and Android.', bg: 'bg-indigo-100', text: 'text-indigo-600' },
                            { icon: <FaChartLine className="text-2xl" />, title: 'Digital Marketing', desc: 'Driving growth through strategic online marketing campaigns.', bg: 'bg-teal-100', text: 'text-teal-600' },
                            { icon: <FaShoppingCart className="text-2xl" />, title: 'E-commerce Solutions', desc: 'Developing robust and scalable online stores.', bg: 'bg-orange-100', text: 'text-orange-600' }
                        ].map((service, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all transform duration-500 hover:scale-105 flex flex-col items-center opacity-0 animate-fadeIn"
                                style={{ animationDelay: `${i * 200}ms`, animationFillMode: 'forwards' }}
                            >
                                <div className={`w-12 h-12 rounded-full ${service.bg} ${service.text} flex items-center justify-center mb-4`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-sm text-gray-600 text-center">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <OurValuesSection />
            <TransparencyEthics />

            <section className="bg-[#FEEFEF] py-20 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <p className="text-blue-600 font-semibold uppercase tracking-wide mb-4">
                            Together We Achieve
                        </p>
                        <h2 className="md:text-2xl font-extrabold text-gray-800 mb-6">
                            <span className="inline-block border-b-4 border-blue-400 pb-2">Teamwork</span>{" "}
                            is the ability to work together toward a common vision.
                        </h2>
                        <p className="text-lg text-gray-700 mb-8">
                            Join our team and work alongside individuals dedicated to innovation,
                            collaboration, and growth. We offer an environment where your talents
                            are valued and your ideas are heard.
                        </p>
                        <button className="mt-4 px-8 py-4 bg-blue-500 hover:bg-purple-600 text-white font-semibold rounded-full shadow-md transition duration-300 transform hover:scale-105">
                            Join Our Team →
                        </button>
                    </div>

                    <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <Image
                            src="/aboutus2.webp"
                            alt="Join our team"
                            width={800}
                            height={500}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            <Footerpage />
        </>
    );
}

export default AboutUsPage;

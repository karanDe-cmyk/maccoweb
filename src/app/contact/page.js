
'use client';
import React from 'react';
import { TextField, Button, Typography } from '@mui/material';
import Navbar from '../Component/Navbar/page';
import Footerpage from '../Component/Footerpage/page';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { MdOutlineMail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { useState, useEffect } from 'react';

import { MenuItem } from '@mui/material';
const ContactForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    company: '',
    message: '',
    termsAccepted: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    

    try {
      const response = await fetch('https://webbackend-zges.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Submission failed');
      }

      alert('Message sent successfully! We will contact you soon.');
      setSuccess(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        company: '',
        message: '',
        termsAccepted: false
      });
    } catch (err) {
      alert(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

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

      <div className="relative h-full  bg-[#EAF2FF] flex flex-col  overflow-hidden">
        <div
          id="creativeWorkSection"
          className="bg-gradient-to-br from-gray-100 to-gray-50 py-16 md:py-24 bg-cover bg-center"
          style={{
            backgroundImage: `url('/contactus-banner.jpg')`,
          }}
        >
          <div className="container min-h-[30vh] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="text-center">
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
              >
                CONVERSATION LEADS TO SCALABLE SOLUTIONS
              </h2>
              <p
                className={`text-white text-base sm:text-lg max-w-2xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
              >
                Open up on your query by filling in the empty fields in the form. We will align you with one of our domain experts.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-[-80px] left-[-80px] w-[200px] h-[250px] bg-blue-300 opacity-30 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-[-80px] right-[-80px] w-[180px] h-[250px] bg-sky-400 opacity-30 rounded-full blur-3xl z-0" />

        <section className='mt-15'>
          <div className="relative min-h-screen bg-[#EAF2FF] flex flex-col  overflow-hidden">

            {/* Decorative blobs */}
            <div className="absolute top-[-80px] left-[-80px] w-[200px] h-[250px] bg-blue-300 opacity-30 rounded-full blur-3xl z-0 " />
            <div className="absolute bottom-[-80px] right-[-80px] w-[180px] h-[250px] bg-sky-400 opacity-30 rounded-full blur-3xl z-0" />

            <main className="relative z-10 flex-1 py-12 px-4 md:px-8"> {/* py-16 → py-12 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-screen-xl mx-auto"
              >
                <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-lg bg-white">
                  {/* Left - Contact Info */}
                  <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white p-10 lg:w-1/2 flex flex-col justify-between">
                    <div className="mb-8">
                      <Typography variant="h4" className="font-bold mb-4">
                        Connect With Us
                      </Typography>
                      <Typography variant="subtitle1" className="opacity-90 pt-3 text-base">
                        Our friendly team is ready to answer your questions and discuss your project.
                        Need help? Feel free to contact us and we&apos;ll respond as soon as possible.
                      </Typography>


                      <div className="space-y-3 text-base mt-10"> {/* Increased spacing and font size */}
                        {[
                          {
                            icon: <FaWhatsapp className="text-1xl hover:text-orange-400" />,
                            text: (
                              <a
                                href="https://wa.me/+919525104860"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 hover:text-orange-400 transition duration-500"
                              >
                                +91 95251 04860
                              </a>
                            ),
                          },
                          {
                            icon: <MdOutlineMail className="text-1xl hover:text-orange-400" />,
                            text: (
                              <span className="flex items-center gap-3 hover:text-orange-400 transition duration-500">
                                info@maccotech.in
                              </span>
                            ),
                          },
                          {
                            icon: <ImLocation className="text-1xl hover:text-orange-400" />,
                            text: (
                              <span className="flex items-center gap-3 hover:text-orange-400 transition duration-500">
                                New York, USA
                              </span>
                            ),
                          },
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-4 p-2 rounded-md cursor-pointer"
                          >
                            <span>{item.icon}</span>
                            <span>{item.text}</span>
                          </motion.div>
                        ))}
                      </div>

                      <div>
                        <Typography variant="caption" className="opacity-190 pl-1 block mb-3 pt-8 text-xl ">
                          <div className='text-xl'>Follow us</div>
                        </Typography>

                        <div className="flex gap-5 mt-3">
                          {[
                            {
                              icon: <FaFacebookF />,
                              link: '#',
                              hoverColor: 'hover:bg-[#1c3d78]', // Darker Facebook Blue
                            },
                            {
                              icon: <FaTwitter />,
                              link: '#',
                              hoverColor: 'hover:bg-[#1876c9]', // Darker Twitter Blue
                            },
                            {
                              icon: <FaLinkedinIn />,
                              link: '#',
                              hoverColor: 'hover:bg-[#004471]', // Darker LinkedIn Blue
                            },
                            {
                              icon: <FaInstagram />,
                              link: '#',
                              hoverColor: 'hover:bg-[#a12153]', // Darker Instagram Pink
                            },
                          ].map((item, i) => (
                            <motion.a
                              key={i}
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.2 }}
                              className={`transition duration-300 text-white text-2xl flex items-center justify-center w-10 h-10 rounded-full bg-[#3b82f6] ${item.hoverColor}`}
                            >
                              {item.icon}
                            </motion.a>
                          ))}
                        </div>

                      </div>
                    </div>
                  </div>


                  {
                    !success ? (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="p-10 flex-1 bg-white"
                       >
                        <form
                          onSubmit={handleSubmit}
                          className="space-y-6"
                        >
                          <Typography variant="h6" gutterBottom className="text-gray-700 font-semibold text-lg">
                            Let&apos;s Discuss Your Project
                          </Typography>

                          <div className="grid md:grid-cols-2 gap-6 mt-6">
                            <TextField label="Enter Name" name="name" variant="standard" value={formData.name || ''} onChange={handleChange} placeholder="Full Name *" fullWidth required />
                            <TextField label="Enter Email" name="email" variant="standard" value={formData.email}
                              onChange={handleChange} placeholder="Email Address *" fullWidth required />
                          </div>

                          <div className="grid md:grid-cols-2 gap-6 ">
                            <TextField label="Contact Number" name="phone" variant="standard" value={formData.phone}
                              onChange={handleChange} placeholder="Contact Number *" fullWidth required />

                            <TextField
                              label="Interested in"
                              variant="standard"
                              name="interest"
                              required
                              select
                              fullWidth
                              value={formData.interest}
                              onChange={handleChange}
                              defaultValue=""
                              sx={{
                                '& .MuiInputBase-input': {
                                  paddingLeft: '12px',
                                  paddingRight: '12px',
                                }
                              }}
                            >
                              {[
                                'Website Development',
                                'App Development',
                                'Digital Marketing',
                                'UI/UX Design',
                                'Other',
                              ].map((option) => (
                                <MenuItem key={option} value={option}>
                                  {option}
                                </MenuItem>
                              ))}
                            </TextField>
                          </div>

                          <TextField label="Company Name" name="company" value={formData.company}
                            onChange={handleChange} className='mb-3' variant="standard" placeholder="Company Name" fullWidth />
                          <TextField
                            label="Message"
                            name="message"
                            variant="standard"
                            multiline
                            rows={3}
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            fullWidth
                          />

                          {/* ✅ Terms and Conditions checkbox */}
                          <div className="flex items-start gap-2 text-sm text-gray-600 mt-4">
                            <input
                              type="checkbox"
                              required
                              name="termsAccepted"
                              className="mt-1 accent-blue-600 w-4 h-4"
                              checked={formData.termsAccepted}
                              onChange={handleChange}
                            />
                            <label>
                              I agree to the{' '}
                              <a href="/terms" className="text-blue-600 underline hover:text-blue-800">
                                Terms and Conditions
                              </a>
                              .
                            </label>
                          </div>

                          <Button
                            type="submit"
                            variant="contained"
                            disabled={isSubmitting}
                            sx={{
                              mt: 1,
                              bgcolor: '#2563EB',
                              '&:hover': { bgcolor: '#1D4ED8' },
                              textTransform: 'none',
                              borderRadius: '8px',
                              px: 4,
                              py: 1.5,
                              fontWeight: 600,
                            }}
                          >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                          </Button>
                        </form>

                      </motion.div>
                    ) : (
                      <div className="flex flex-col items-center justify-center w-full">
                        <svg
                          className="w-16 h-16 text-green-500 mb-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <h1 className="text-2xl font-semibold text-gray-700 mb-2">
                          Thank You!
                        </h1>
                        <p className="text-gray-600 text-center max-w-md">
                          Your form has been submitted successfully. We'll contact you shortly.
                        </p>
                        <button
                          onClick={() => setSuccess(false)}
                          className="mt-6 px-6 py-2 cursor-pointer bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                          Submit Another Response
                        </button>
                      </div>
                    )
                  }
                </div>
              </motion.div>
            </main>


          </div>
        </section>

        <Footerpage />
      </div>
    </>
  );
};

export default ContactForm;
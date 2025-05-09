import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaPhone, FaPinterest, FaSkype, FaWhatsapp } from 'react-icons/fa';
import {
  Phone,
  Whatsapp,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Star,
  ArrowRight,
  Globe
} from 'lucide-react';


const Footerpage = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 w-full overflow-hidden"> {/* Added overflow-hidden to the main footer */}
      <div className="py-8 w-full"> {/* Ensured full width for the inner div */}
        <div className="container mx-auto w-full"> {/* Ensured full width for the container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full"> {/* Ensured full width for the grid */}
            {/* Contact Info */}
            <div className="w-full"> {/* Ensured full width for each column */}
              <h5 className="text-lg font-semibold mb-4 text-white">Contact Info</h5>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+911234567890" className="flex items-center hover:text-blue-400 transition-colors">
                    <FaPhone className="w-4 h-4 mr-2" />
                    +91 123 4567 890
                  </a>
                </li>
               
                <li>
                  <a href="https://wa.me/+911234567890" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-green-400 transition-colors">
                    <FaWhatsapp size={24} />
                    +91 123 4567 890
                  </a>
                </li>
                <li>
                  <a href="mailto:career@reevan.com" className="flex items-center hover:text-red-400 transition-colors">
                    <Mail className="w-4 h-4 mr-2" />
                    career@reevan.com
                  </a>
                </li>
                <li>
                  <a href="mailto:info@reevan.com" className="flex items-center hover:text-red-400 transition-colors">
                    <Mail className="w-4 h-4 mr-2" />
                    info@reevan.com
                  </a>
                </li>
               
              </ul>
            </div>

            {/* Follow Us */}
            <div className="w-full">
              <h5 className="text-lg font-semibold mb-4 text-white">Follow Us</h5>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                    <Facebook className="w-4 h-4 mr-2" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center hover:text-blue-400 transition-colors">
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center hover:text-pink-500 transition-colors">
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center hover:text-blue-700 transition-colors">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center hover:text-red-600 transition-colors">
                    <Youtube className="w-4 h-4 mr-2" />
                    YouTube
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="w-full">
              <h5 className="text-lg font-semibold mb-4 text-white">Services</h5>
              <ul className="space-y-3 ">
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center text-sm"><Globe className="w-4 h-4 mr-2" /> Hire Dedicated Developers</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center text-sm"><Globe className="w-4 h-4 mr-2" /> Web App Development</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center text-sm"><Globe className="w-4 h-4 mr-2" /> Mobile App Development</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center text-sm"><Globe className="w-4 h-4 mr-2" /> Search Engine Optimization</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center text-sm"><Globe className="w-4 h-4 mr-2" /> Pay-Per-Click</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center text-sm"><Globe className="w-4 h-4 mr-2" /> Social Media Marketing</a></li>
              </ul>
            </div>

            {/* Industries */}
            <div className="w-full">
              <h5 className="text-lg font-semibold mb-4 text-white ">Industries</h5>
              <ul className="space-y-3 ">
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center text-sm"><Globe className="w-4 h-4 mr-2" /> Healthcare</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center text-sm"><Globe className="w-4 h-4 mr-2" /> Education</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center text-sm"><Globe className="w-4 h-4 mr-2" /> Retail</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center text-sm"><Globe className="w-4 h-4 mr-2" /> Logistics</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center text-sm"><Globe className="w-4 h-4 mr-2" /> Oil & Gas</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center text-sm"><Globe className="w-4 h-4 mr-2" /> Music & Video</a></li>
              </ul>
            </div>

            {/* Portfolio */}
            <div className="w-full">
              <h5 className="text-lg font-semibold mb-4 text-white">Portfolio</h5>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center text-sm"><Star className="w-4 h-4 mr-2" /> StockNow - Investment App</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center text-sm"><Star className="w-4 h-4 mr-2" /> Dochelp - Patient Monitoring</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center text-sm"><Star className="w-4 h-4 mr-2" /> Roster - Pizza Delivery</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center text-sm"><Star className="w-4 h-4 mr-2" /> Nikea - Logo Design</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center text-sm"><Star className="w-4 h-4 mr-2" /> Eptire - Blockchain Solution</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center text-sm"><Star className="w-4 h-4 mr-2" /> ShopTop - Grocery App</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-10 border-t border-gray-700 w-full"> {/* Ensured full width */}
        <div className="container mx-auto px-4 w-full"> {/* Ensured full width */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 w-full"> {/* Ensured full width */}
            {/* Logo and Rating */}
            <div className="space-y-4 w-full"> {/* Ensured full width */}
             <div className="flex items-left justify-left">
  <div className="w-full max-w-xs">
    <Image 
      src="/maccotechlogo.jpg" 
      alt="Reeven" 
      width={300} // You can adjust the width here
      height={150} // Adjust height based on the aspect ratio
      layout="responsive" // Ensures the image scales appropriately
      className="rounded-lg shadow-lg" // Add styling like rounded corners and shadow
    />
  </div>
</div>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400" />
              </div>
              <p className="text-sm">Overall client rating is 4.9 out of 8,500 Clients for Reevan</p>
            </div>

            {/* Partner Logos */}
          
            <div className="flex flex-wrap justify-center gap-4 w-full">
  <a href="#" className="flex-shrink-0">
    <Image src="/appfutura.png" alt="AppFutura Logo" width={100} height={56} />
  </a>
  <a href="#" className="flex-shrink-0">
    <Image src="/goodfirmslogo.png" alt="GoodFirms Logo" width={100} height={56} />
  </a>
  <a href="#" className="flex-shrink-0">
    <Image src="/clutch.png" alt="Clutch Logo" width={100} height={56} />
  </a>
  <a href="#" className="flex-shrink-0">
    <Image src="/itfirms.png" alt="ITFirms Logo" width={100} height={56} />
  </a>
</div>







            {/* Brochure Button */}
            <div className="flex justify-center w-full"> {/* Ensured full width */}
              <a
                href="#"
                className={`bg-gradient-to-r from-blue-500 to-purple-500 text-white 
                           hover:from-blue-600 hover:to-purple-600 
                           px-6 py-3 rounded-full shadow-md 
                           transition-all duration-300 
                           flex items-center justify-center`}
              >
                Our Brochure
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-6 border-t border-gray-700 w-full"> {/* Ensured full width */}
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm w-full"> {/* Ensured full width */}
          <div className="mb-4 md:mb-0 w-full md:w-auto"> {/* Adjusted width */}
            <p>We are tracking any intention of piracy.</p>
          </div>
          <div className="w-full md:w-auto text-center md:text-right"> {/* Adjusted width and alignment */}
            <p>© 2021-2022. All Rights Reserved By <a href="https://themeforest.net/user/rajesh-doot/portfolio" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Rajesh Doot</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footerpage;



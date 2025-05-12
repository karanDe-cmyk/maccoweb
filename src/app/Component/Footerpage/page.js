


import Image from "next/image"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa";
import {
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
  PinIcon as PinterestIcon,
  ArrowUp,
  Phone,
  Mail,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* <main className="flex-grow">  
        <div className="p-8 text-center">
          <h1 className="text-2xl font-bold">Main Content Area</h1>
          <p>Scroll down to see the footer</p>
        </div>
      </main> */}

      <footer className="bg-[#0e0a2e] text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <div className="mr-2">
                  <Image
                    src="/Maccotech1-removebg-preview.png"
                    alt="Macco Tech Logo"
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <h2 className="text-[#1eb4e4] text-2xl font-bold">MACCO TECH</h2>
                  {/* <p className="text-white text-sm">TECH</p> */}
                </div>
              </div>
              <p className="text-sm mb-6">
                Macco Tech provides the best software, web & mobile app development services for small to
                large-scale businesses. Our efficient development process helps you to only focus on results instead of
                process overhead.
              </p>

              {/* Social Media Icons */}
              <div className="flex space-x-2">
                <Link href="#" className="bg-[#3b5998] p-2 rounded-full">
                  <Facebook size={20} />
                </Link>
                <Link href="#" className="bg-[#0077b5] p-2 rounded-full">
                  <Linkedin size={20} />
                </Link>
                <Link href="#" className="bg-white text-[#e4405f] p-2 rounded-full">
                  <Instagram size={20} />
                </Link>
                <Link href="#" className="bg-[#ff0000] p-2 rounded-full">
                  <Youtube size={20} />
                </Link>
                <Link href="#" className="bg-[#1da1f2] p-2 rounded-full">
                  <Twitter size={20} />
                </Link>
                <Link href="#" className="bg-[#bd081c] p-2 rounded-full">
                  <PinterestIcon size={20} />
                </Link>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xl font-bold mb-4">Industries</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-[#1eb4e4]">
                  Healthcare
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#1eb4e4]">
                  Education
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#1eb4e4]">
                  Retail
                  </Link>
                </li>
              
              <li>
                  <Link href="#" className="hover:text-[#1eb4e4]">
                  Logistics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#1eb4e4]">
                  Music & Video
                  </Link>
                </li>
                
              </ul>
            </div>
          

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/ReactJsDevelopment" className="hover:text-[#1eb4e4]">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/Social" className="hover:text-[#1eb4e4]">
                   Social Media Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/Graphics-design" className="hover:text-[#1eb4e4]">
                  Graphic Design
                  </Link>
                </li>
                <li>
                  <Link href="/ShopifyDevelopment" className="hover:text-[#1eb4e4]">
                  Shopify Development
                  </Link>
                </li>
                <li>
                  <Link href="/AndroidAppDevelopment" className="hover:text-[#1eb4e4]">
                  Android App Development
                  </Link>
                </li>
                <li>
                  <Link href="/iOSAppDevelopment" className="hover:text-[#1eb4e4]">
                  iOS App Development
                  </Link>
                </li>
                <li>
                  <Link href="/ReactNativeAppDevelopment" className="hover:text-[#1eb4e4]">
                  React-Native App Development
                  </Link>
            
                </li>
                <li>
                  <Link href="/email" className="hover:text-[#1eb4e4]">
                   Email Marketing 
                  </Link>
                </li>
                <li>
                  <Link href="/ecommerce-application-development" className="hover:text-[#1eb4e4]">
                 E-commerce  
                  </Link>
                </li>
              </ul>
            </div>

            {/* Work with us & Office Location */}
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Work with us</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/careers" className="hover:text-[#1eb4e4]">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us" className="hover:text-[#1eb4e4]">
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Office Location</h3>
                <address className="not-italic">
                  548 Market St,
                  <br />
                surat
                  <br />
                 India
                </address>
              </div>

              <div>
  <h3 className="text-xl font-bold mb-4">Contact us</h3>
  <div className="space-y-2">
    {/* Phone Number */}
    <div className="flex items-center">
      <Phone className="text-[#1eb4e4] mr-2" size={20} />
      <span>+919525104860</span>
    </div>

    {/* Mail */}
    <div className="flex items-center">
      <Mail className="text-[#1eb4e4] mr-2" size={20} />
      <span>maccotech.info@gmail.com</span>
    </div>

    {/* WhatsApp */}
    <div className="flex items-center">
      <FaWhatsapp className="text-[#1eb4e4] mr-2" size={20} /> {/* WhatsApp color */}
      <span>+919525104860</span> {/* You can link this to WhatsApp's web URL */}
    </div>
  </div>
</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8">
  <div className="container mx-auto px-4 py-4 flex justify-between items-center">
    {/* Copyright text centered */}
    <div className="flex-1 text-center">
      ©2025 All Rights Reserved by Macco Tech
    </div>

    {/* ArrowUp button at the end */}
    <Link href="#" className="bg-[#1eb4e4] p-2 rounded">
      <ArrowUp size={30} />
    </Link>
  </div>
</div>

      </footer>
    </div>
  )
}

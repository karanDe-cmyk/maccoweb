// import React from "react";
// import Footerpage from "../Footerpage/page";

// const services = [
//   {
//     title: "Custom Software Development",
//     description:
//       "We craft tailored software solutions that match your business needs — from planning to deployment. Our focus is to help startups and enterprises automate processes and grow faster.",
//     link: "Explore Custom Software",
//     icon: "",
//   },
//   {
//     title: "IoT Development",
//     description:
//       "We build secure and scalable IoT systems, helping businesses connect devices, visualize data, and make smarter decisions. From small setups to enterprise-grade deployments — we handle it all.",
//     link: "Discover IoT Services",
//     icon: "🌐",
//   },
//   {
//     title: "Web Development",
//     description:
//       "Our team creates responsive, fast, and reliable web apps tailored to your audience and business goals — ensuring strong performance and smooth user experiences.",
//     link: "View Web Solutions",
//     icon: "💻",
//   },
//   {
//     title: "Mobile App Development",
//     description:
//       "We design and develop intuitive Android, iOS, and cross-platform apps that engage users and deliver results — from MVPs to full-scale enterprise apps.",
//     link: "See Mobile Apps",
//     icon: "📱",
//   },
// ];

// export default function OurServices() {
//   return (
//     <section className="px-6 py-12 bg-white text-gray-800">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-semibold">
//           Our <span className="text-blue-600">Services</span>
//         </h2>
//         <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
//           With years of experience, we deliver expert solutions that drive business growth and digital innovation.
//         </p>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
//         {services.map((service, index) => (
//           <div key={index} className="flex flex-col items-start space-y-4">
//             <div className="text-4xl text-blue-600">{service.icon}</div>
//             <h3 className="text-xl font-semibold">{service.title}</h3>
//             <p className="text-gray-600 text-sm">{service.description}</p>
//             <a href="#" className="text-red-500 text-sm font-medium hover:underline">
//               {service.link} ›
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import React from "react";
import Footerpage from "../Footerpage/page";

const services = [
  {
    title: "JAVA DEVELOPMENT",
    description: "Expertise in building robust and scalable Java applications.",
    link: "Explore Java Development",
    icon: <span style={{ fontSize: '1em' }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY69KoJEil3INfK1Q_yVnMa4Tt-n8na-jyfw&s" alt="Java Icon" style={{ height: '1em', width: 'auto', maxWidth: '1.2em', verticalAlign: 'middle', marginRight: '0.2em' }} /></span>,
  },
  {
    title: "Software development",
    description: "Crafting tailored software solutions to meet your unique business needs.",
    link: "Discover Software Development",
    icon: <span style={{ fontSize: '1em' }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeZltMC4RG_dguK10WdqlhZWD6xWFHjROVEg&s" alt="Software Icon" style={{ height: '1em', width: 'auto', maxWidth: '1em', verticalAlign: 'middle', marginRight: '0.2em' }} /></span>,
  },
  {
    title: "Mobile App Development",
    description: "Creating intuitive and engaging mobile apps for iOS and Android.",
    link: "View Mobile App Services",
    icon: <span style={{ fontSize: '1em' }}><img src="https://w7.pngwing.com/pngs/402/525/png-transparent-mobile-app-development-android-handheld-devices-app-development-gadget-electronics-web-design-thumbnail.png" alt="Mobile App Icon" style={{ height: '1em', width: 'auto', maxWidth: '1em', verticalAlign: 'middle', marginRight: '0.2em' }} /></span>,
  },
  {
    title: "JS FRAMEWORKS",
    description: "Building dynamic and interactive web applications using modern JavaScript frameworks.",
    link: "Learn about JS Frameworks",
    icon: <span style={{ fontSize: '1em' }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4uZ0GTCzSB8e4dEG3N9wZ9D1etCXbYbM_LA&s" alt="JS Frameworks Icon" style={{ height: '1em', width: 'auto', maxWidth: '1em', verticalAlign: 'middle', marginRight: '0.2em' }} /></span>,
  },
  {
    title: "WEB DEVELOPMENT",
    description: "Developing responsive and high-performing websites and web applications.",
    link: "Explore Web Development",
    icon: <span style={{ fontSize: '1em' }}><img src="https://cdn-icons-png.freepik.com/256/4052/4052934.png?semt=ais_hybrid" alt="Web Development Icon" style={{ height: '1em', width: 'auto', maxWidth: '1em', verticalAlign: 'middle', marginRight: '0.2em' }} /></span>,
  },
  {
    title: "Ecommerce solution",
    description: "Building and optimizing online stores for seamless shopping experiences.",
    link: "See Ecommerce Solutions",
    icon: <span style={{ fontSize: '1em' }}><img src="https://cdn.iconscout.com/icon/free/png-256/free-ecommerce-icon-download-in-svg-png-gif-file-formats--services-solution-cart-online-web-seo-development-vol-1-pack-design-icons-8830.png" alt="Ecommerce Icon" style={{ height: '1em', width: 'auto', maxWidth: '1em', verticalAlign: 'middle', marginRight: '0.2em' }} /></span>,
  },
  {
    title: "Blockchain development",
    description: "Developing secure and transparent applications using blockchain technology.",
    link: "Discover Blockchain Development",
    icon: <span style={{ fontSize: '1em' }}><img src="https://www.ionixxtech.com/assets/img/blockchain-guide-img/banner-image.png" alt="Blockchain Icon" style={{ height: '1em', width: 'auto', maxWidth: '1em', verticalAlign: 'middle', marginRight: '0.2em' }} /></span>,
  },
  {
    title: "Betting Solution",
    description: "Developing innovative and engaging betting and gaming platforms.",
    link: "Explore Betting Solutions",
    icon: <span style={{ fontSize: '1em' }}><img src="https://cdn-icons-png.flaticon.com/512/3081/3081948.png" alt="Betting Icon" style={{ height: '1em', width: 'auto', maxWidth: '1em', verticalAlign: 'middle', marginRight: '0.2em' }} /></span>,
  },
  {
    title: "Metaverse Solution",
    description: "Creating immersive and interactive experiences in the metaverse.",
    link: "Learn about Metaverse Solutions",
    icon: <span style={{ fontSize: '1em' }}><img src="https://cdn-icons-png.freepik.com/256/9627/9627772.png?semt=ais_hybrid" alt="Metaverse Icon" style={{ height: '1em', width: 'auto', maxWidth: '1em', verticalAlign: 'middle', marginRight: '0.2em' }} /></span>,
  },
];

export default function OurServices() {
  return (
    <section className="px-6 py-12 bg-white text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold">
          Our <span className="text-blue-600">Services</span>
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Explore our core service areas designed to drive innovation and growth for your business.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-start space-y-4 p-6 rounded-md shadow-md hover:shadow-lg transition duration-300">
            <div className="text-4xl text-blue-600">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
            <a href="#" className="text-red-500 text-sm font-medium hover:underline">
              {service.link} ›
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
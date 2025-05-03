
// "use client";
// import React, { useState, useEffect } from "react";

// const testimonials = [
//   {
//     quote: "Kinetika Labs technological solutions helped us to revamp our business. The solution they built for us greatly improved our effectiveness and satisfaction with our customers.",
//     name: "Janvi Mehta",
//     designation: "Managing Director(Plan Your Cargo, Mumbai)",
//   },
//   {
//     quote: "Kinetika Labs transformed our business with their software development services. The solution they built for us has significantly improved our efficiency and customer satisfaction.",
//     name: "Ervin Howell",
//     designation: "VP Product, Deckow-Crist",
//   },
//   {
//     quote: "Kinetika Labs helped us streamline our operations and improve overall productivity. Their services were tailored to our needs, and the results have been excellent.",
//     name: "Alex Johnson",
//     designation: "CEO, Tech Innovations",
//   },
//   {
//     quote: "The team at Kinetika Labs is outstanding. They provided solutions that truly aligned with our business goals, and we saw remarkable improvements in our processes.",
//     name: "Olivia Smith",
//     designation: "COO, Global Enterprises",
//   },
//   // Add more testimonials as needed, only the first four will be used
// ];

// export default function Testimonials() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const cardsPerSlide = 2;
//   const visibleTestimonials = testimonials.slice(0, 4); // Only use the first four
//   const totalSlides = Math.ceil(visibleTestimonials.length / cardsPerSlide);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % totalSlides);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000); // Change slides every 5 seconds
//     return () => clearInterval(interval); // Clear interval on unmount
//   }, []);


//   return (
//     <section className="py-12 bg-gray-100 w-full min-h-[70vh] "  style={{ backgroundImage: 'linear-gradient(-225deg, #A8BFFF 0%, #884D80 100%' }}>
//       <div className="container mx-auto px-4 md:px-8 lg:px-12">
//         <h2 className="text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-8">What Our Clients Say About Us</h2>
//         <div className="relative overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
//               width: `${totalSlides * 100}%`,
//             }}
//           >
//             {Array.from({ length: totalSlides }).map((_, slideIndex) => (
//               <div
//                 key={slideIndex}
//                 className="flex space-x-4 w-full"
//                 style={{ width: `${100 / totalSlides}%` }}
//               >
//                 {visibleTestimonials
//                   .slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide)
//                   .map((testimonial, idx) => (
//                     <div key={idx} className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10 w-1/2">
//                       <div className="text-gray-700 italic text-lg mb-4">
//                         <svg
//                           className="w-6 h-6 fill-current text-gray-400 inline-block mr-2"
//                           viewBox="0 0 24 24"
//                         >
//                           <path d="M10 11V5h2v6h-2zm8 0V5h2v6h-2zm-4 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-8 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
//                         </svg>
//                         {testimonial.quote}
//                         <svg
//                           className="w-6 h-6 fill-current text-gray-400 inline-block ml-2 transform rotate-180"
//                           viewBox="0 0 24 24"
//                         >
//                           <path d="M10 11V5h2v6h-2zm8 0V5h2v6h-2zm-4 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-8 0c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
//                         </svg>
//                       </div>
//                       <div className="text-center">
//                         <p className="font-semibold text-gray-800">{testimonial.name}</p>
//                         <p className="text-gray-600 text-sm">{testimonial.designation}</p>
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             ))}
//           </div>

//           {totalSlides > 1 && (
//             <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-6 flex space-x-2">
//               {Array.from({ length: totalSlides }).map((_, index) => (
//                 <button
//                   key={index}
//                   className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-teal-500" : "bg-gray-300 hover:bg-gray-400"}`}
//                   onClick={() => goToSlide(index)}
//                 ></button>
//               ))}
//             </div>
//           )}

//           {totalSlides > 1 && (
//             <div className="absolute mt-5 top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4">
//               <button onClick={prevSlide} className="text-gray-600 hover:text-gray-800 focus:outline-none">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                 </svg>
//               </button>
//               <button onClick={nextSlide} className="text-gray-600 hover:text-gray-800 focus:outline-none">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    position: "UI/UX Designer",
    message: "Macco Tech helped us to revamp our business. The solution they built for us greatly improved our effectiveness and satisfaction with our customers.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rohit Verma",
    position: "Software Engineer",
    message: "Macoo Tech transformed our business with their software development services. The solution they built for us has significantly improved our efficiency and customer satisfaction.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Sneha Joshi",
    position: "Project Manager",
    message: "Macco Tech helped us streamline our operations and improve overall productivity. Their services were tailored to our needs, and the results have been excellent.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Amit Kulkarni",
    position: "DevOps Engineer",
    message: "The team at Macoo Tech is outstanding. They provided solutions that truly aligned with our business goals, and we saw remarkable improvements in our processes.",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
  },
];

const EmployeeTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerSlide = 2;

  const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
  
    return () => clearInterval(interval);
  }, [currentSlide]);
  

  return (
    // <section className="py-12 bg-gray-50  w-full min-h-[70vh]" style={{
    //   backgroundImage: "linear-gradient(to top, #bdc2e8 0%, #bdc2e8 1%, #e6dee9 100%)",
    // }}>
    <section className="py-12 bg-white-50  w-full min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 mt-10">
          Employees Speak
        </h2>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
              width: `${totalSlides * 100}%`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="flex space-x-4 w-full"
                style={{ width: `${100 / totalSlides}%` }}
              >
                {testimonials
                  .slice(
                    slideIndex * cardsPerSlide,
                    (slideIndex + 1) * cardsPerSlide
                  )
                  .map((testimonial, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 md:p-8 lg:p-10 w-1/2 border border-gray-200"
                    >
                      <div className="flex items-center mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full mr-4 object-cover"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600">{testimonial.message}</p>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          {/* Arrows */}
          {totalSlides > 1 && (
            <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4">
              <button
                onClick={prevSlide}
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                &#8592;
              </button>
              <button
                onClick={nextSlide}
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                &#8594;
              </button>
            </div>
          )}
        </div>

        {/* Dots - Outside the box */}
        {totalSlides > 1 && (
          <div className="mt-8 flex justify-center space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-transform duration-300 ${
                  currentSlide === index
                    ? "bg-teal-500 scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default EmployeeTestimonials;

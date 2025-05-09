

// "use client"
// import React, { useState, useEffect } from "react";

// const testimonials = [
//   {
//     name: "Priya Sharma",
//     position: "UI/UX Designer",
//     message: "Macco Tech helped us to revamp our business. The solution they built for us greatly improved our effectiveness and satisfaction with our customers.",
//     image: "/emp1.jpg",
//   },
//   {
//     name: "Rohit Verma",
//     position: "Software Engineer",
//     message: "Macoo Tech transformed our business with their software development services. The solution they built for us has significantly improved our efficiency and customer satisfaction.",
//     image: "/emp2.jpg",
//   },
//   {
//     name: "Sneha Joshi",
//     position: "Project Manager",
//     message: "Macco Tech helped us streamline our operations and improve overall productivity. Their services were tailored to our needs, and the results have been excellent.",
//     image: "/emp3.jpg",
//   },
//   {
//     name: "Amit Kulkarni",
//     position: "DevOps Engineer",
//     message: "The team at Macoo Tech is outstanding. They provided solutions that truly aligned with our business goals, and we saw remarkable improvements in our processes.",
//     image: "/emp4.jpg",
//   },
// ];

// const EmployeeTestimonials = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const cardsPerSlide = 2;

//   const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);

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
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 2000);
  
//     return () => clearInterval(interval);
//   }, [currentSlide]);
  

//   return (
//     // <section className="py-12 bg-gray-50  w-full min-h-[70vh]" style={{
//     //   backgroundImage: "linear-gradient(to top, #bdc2e8 0%, #bdc2e8 1%, #e6dee9 100%)",
//     // }}>
//     <section className="py-12 bg-white-50  w-full min-h-[70vh]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 mt-10">
//           Employees Speak
//         </h2>

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
//                 {testimonials
//                   .slice(
//                     slideIndex * cardsPerSlide,
//                     (slideIndex + 1) * cardsPerSlide
//                   )
//                   .map((testimonial, idx) => (
//                     <div
//                       key={idx}
//                       className="bg-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 md:p-8 lg:p-10 w-1/2 border border-gray-200"
//                     >
//                       <div className="flex items-center mb-4">
//                         <img
//                           src={testimonial.image}
//                           alt={testimonial.name}
//                           className="w-14 h-14 rounded-full mr-4 object-cover"
//                         />
//                         <div>
//                           <h3 className="text-lg font-semibold text-gray-800">
//                             {testimonial.name}
//                           </h3>
//                           <p className="text-sm text-gray-500">
//                             {testimonial.position}
//                           </p>
//                         </div>
//                       </div>
//                       <p className="text-gray-600">{testimonial.message}</p>
//                     </div>
//                   ))}
//               </div>
//             ))}
//           </div>

//           {/* Arrows */}
//           {totalSlides > 1 && (
//             <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4">
//               <button
//                 onClick={prevSlide}
//                 className="text-gray-600 hover:text-gray-800 focus:outline-none"
//               >
//                 &#8592;
//               </button>
//               <button
//                 onClick={nextSlide}
//                 className="text-gray-600 hover:text-gray-800 focus:outline-none"
//               >
//                 &#8594;
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Dots - Outside the box */}
//         {totalSlides > 1 && (
//           <div className="mt-8 flex justify-center space-x-2">
//             {Array.from({ length: totalSlides }).map((_, index) => (
//               <button
//                 key={index}
//                 className={`w-3 h-3 rounded-full transition-transform duration-300 ${
//                   currentSlide === index
//                     ? "bg-teal-500 scale-110"
//                     : "bg-gray-300 hover:bg-gray-400"
//                 }`}
//                 onClick={() => goToSlide(index)}
//               ></button>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default EmployeeTestimonials;
// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image"; // Import Image from next/image

// const testimonials = [
//   {
//     name: "Priya Sharma",
//     position: "UI/UX Designer",
//     message: "Macco Tech helped us to revamp our business. The solution they built for us greatly improved our effectiveness and satisfaction with our customers.",
//     image: "/emp1.jpg",
//   },
//   {
//     name: "Rohit Verma",
//     position: "Software Engineer",
//     message: "Macoo Tech transformed our business with their software development services. The solution they built for us has significantly improved our efficiency and customer satisfaction.",
//     image: "/emp2.jpg",
//   },
//   {
//     name: "Sneha Joshi",
//     position: "Project Manager",
//     message: "Macco Tech helped us streamline our operations and improve overall productivity. Their services were tailored to our needs, and the results have been excellent.",
//     image: "/emp3.jpg",
//   },
//   {
//     name: "Amit Kulkarni",
//     position: "DevOps Engineer",
//     message: "The team at Macoo Tech is outstanding. They provided solutions that truly aligned with our business goals, and we saw remarkable improvements in our processes.",
//     image: "/emp4.jpg",
//   },
// ];

// const EmployeeTestimonials = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const cardsPerSlide = 2;
//   const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % totalSlides);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   // Fixing the useEffect hook to avoid warning about missing dependencies
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []); // Empty dependency array ensures the effect runs only once on mount

//   return (
//     <section className="py-12 bg-white-50 w-full min-h-[70vh]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 mt-10">
//           Employees Speak
//         </h2>

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
//                 {testimonials
//                   .slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide)
//                   .map((testimonial, idx) => (
//                     <div
//                       key={idx}
//                       className="bg-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 md:p-8 lg:p-10 w-1/2 border border-gray-200"
//                     >
//                       <div className="flex items-center mb-4">
//                         <Image
//                           src={testimonial.image}
//                           alt={testimonial.name}
//                           width={56}  // Set appropriate width
//                           height={56} // Set appropriate height
//                           className="rounded-full mr-4 object-cover"
//                         />
//                         <div>
//                           <h3 className="text-lg font-semibold text-gray-800">
//                             {testimonial.name}
//                           </h3>
//                           <p className="text-sm text-gray-500">
//                             {testimonial.position}
//                           </p>
//                         </div>
//                       </div>
//                       <p className="text-gray-600">{testimonial.message}</p>
//                     </div>
//                   ))}
//               </div>
//             ))}
//           </div>

//           {/* Arrows */}
//           {totalSlides > 1 && (
//             <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4">
//               <button
//                 onClick={prevSlide}
//                 className="text-gray-600 hover:text-gray-800 focus:outline-none"
//               >
//                 &#8592;
//               </button>
//               <button
//                 onClick={nextSlide}
//                 className="text-gray-600 hover:text-gray-800 focus:outline-none"
//               >
//                 &#8594;
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Dots - Outside the box */}
//         {totalSlides > 1 && (
//           <div className="mt-8 flex justify-center space-x-2">
//             {Array.from({ length: totalSlides }).map((_, index) => (
//               <button
//                 key={index}
//                 className={`w-3 h-3 rounded-full transition-transform duration-300 ${
//                   currentSlide === index
//                     ? "bg-teal-500 scale-110"
//                     : "bg-gray-300 hover:bg-gray-400"
//                 }`}
//                 onClick={() => goToSlide(index)}
//               ></button>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default EmployeeTestimonials;
"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image"; // Import Image from next/image

const testimonials = [
  {
    name: "Priya Sharma",
    position: "UI/UX Designer",
    message: "Macco Tech helped us to revamp our business. The solution they built for us greatly improved our effectiveness and satisfaction with our customers.",
    image: "/emp1.jpg",
  },
  {
    name: "Rohit Verma",
    position: "Software Engineer",
    message: "Macoo Tech transformed our business with their software development services. The solution they built for us has significantly improved our efficiency and customer satisfaction.",
    image: "/emp2.jpg",
  },
  {
    name: "Sneha Joshi",
    position: "Project Manager",
    message: "Macco Tech helped us streamline our operations and improve overall productivity. Their services were tailored to our needs, and the results have been excellent.",
    image: "/emp3.jpg",
  },
  {
    name: "Amit Kulkarni",
    position: "DevOps Engineer",
    message: "The team at Macoo Tech is outstanding. They provided solutions that truly aligned with our business goals, and we saw remarkable improvements in our processes.",
    image: "/emp4.jpg",
  },
];

const EmployeeTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerSlide = 2;
  const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Fixing the useEffect hook to avoid warning about missing dependencies
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [nextSlide]); // Empty dependency array ensures the effect runs only once on mount

  return (
    <section className="py-12 bg-white-50 w-full min-h-[70vh]">
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
                  .slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide)
                  .map((testimonial, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 md:p-8 lg:p-10 w-1/2 border border-gray-200"
                    >
                      <div className="flex items-center mb-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={56}  // Set appropriate width
                          height={56} // Set appropriate height
                          className="rounded-full mr-4 object-cover"
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

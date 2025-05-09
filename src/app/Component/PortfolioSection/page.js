// 'use client';
// import React, { useState } from 'react'; // Import useState

// const projectData = [
//     {
//         title: "Creative and minimal clothing label design",
//         description: "UX, UI, Graphic Design",
//         imageUrl: "portfolio5.jpg", // Placeholder
//         category: "UI/UX",
//     },
//     {
//         title: "Creative business card design service",
//         description: "UX, UI, Graphic Design",
//         imageUrl: "portfolio6.jpg", // Placeholder
//         category: "Graphic Design",
//     },
//     {
//         title: "Furniture ios app kit development",
//         description: "UX, UI, Graphic Design",
//         imageUrl: "portfolio29.jpg", // Placeholder
//         category: "Mobile App",
//     },
//     {
//         title: "Elegant Packaging Design for Products",
//         description: "UX, UI, Graphic Design",
//         imageUrl: "portfolio9.jpg",  // Placeholder
//         category: "Graphic Design"
//     },
//     {
//         title: "Professional Flyer & Brochure Design",
//         description: "UX, UI, Graphic Design",
//         imageUrl: "/grapgic.png", // Placeholder
//         category: "Graphic Design"
//     },
//     {
//         title: "App Icon & UI Kit Design",
//         description: "UX, UI, Graphic Design",
//         imageUrl: "portfolio19.jpg", // Placeholder
//         category: "Mobile App"
//     }
// ];

// const PortfolioSection = () => {
//     const [selectedCategory, setSelectedCategory] = useState('All'); // Use useState

//     const categories = ['All', 'UI/UX', 'Graphic Design', 'Mobile App'];

//     const filteredProjects = selectedCategory === 'All'
//         ? projectData
//         : projectData.filter(project => project.category === selectedCategory);

//     return (
//         <div className="bg-gray-100 py-16">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="text-center mb-12">
//                     <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
//                         Our Latest Work
//                     </h2>
//                     <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
//                         We specialize in creating visually stunning and user-friendly designs.  Here's a showcase of our recent projects.
//                     </p>
//                     <div className="mt-8 flex justify-center flex-wrap gap-4">
//                         {categories.map(category => (
//                             <button
//                                 key={category}
//                                 className={`
//                   px-6 py-3 rounded-full text-sm font-semibold
//                   ${selectedCategory === category
//                                     ? 'bg-gray-800 text-white shadow-lg'
//                                     : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900'}
//                   transition-all duration-300
//                 `}
//                                 onClick={() => setSelectedCategory(category)}
//                             >
//                                 {category}
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {filteredProjects.map((project, index) => (
//                         <div
//                             key={index}
//                             className="bg-gray rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
//                         >
//                             <img
//                                 src={project.imageUrl}
//                                 alt={project.title}
//                                 className="w-full h-64 object-cover rounded-t-xl"
//                             />
//                             <div className="p-4">
//                                 <h3 className="text-lg font-semibold text-gray-900 mb-1">{project.title}</h3>
//                                 <p className="text-gray-500 text-sm">{project.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PortfolioSection;
"use client"
import React, { useState } from 'react'; // Import useState
import Image from 'next/image'; // Import next/image for optimized images

const projectData = [
    {
        title: "Creative and minimal clothing label design",
        description: "UX, UI, Graphic Design",
        imageUrl: "/portfolio5.jpg", // Placeholder
        category: "UI/UX",
    },
    {
        title: "Creative business card design service",
        description: "UX, UI, Graphic Design",
        imageUrl: "/portfolio6.jpg", // Placeholder
        category: "Graphic Design",
    },
    {
        title: "Furniture ios app kit development",
        description: "UX, UI, Graphic Design",
        imageUrl: "/portfolio29.jpg", // Placeholder
        category: "Mobile App",
    },
    {
        title: "Elegant Packaging Design for Products",
        description: "UX, UI, Graphic Design",
        imageUrl: "/portfolio9.jpg",  // Placeholder
        category: "Graphic Design"
    },
    {
        title: "Professional Flyer & Brochure Design",
        description: "UX, UI, Graphic Design",
        imageUrl: "/grapgic.png", // Placeholder
        category: "Graphic Design"
    },
    {
        title: "App Icon & UI Kit Design",
        description: "UX, UI, Graphic Design",
        imageUrl: "/portfolio19.jpg", // Placeholder
        category: "Mobile App"
    }
];

const PortfolioSection = () => {
    const [selectedCategory, setSelectedCategory] = useState('All'); // Use useState

    const categories = ['All', 'UI/UX', 'Graphic Design', 'Mobile App'];

    const filteredProjects = selectedCategory === 'All'
        ? projectData
        : projectData.filter(project => project.category === selectedCategory);

    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                        Our Latest Work
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
    We specialize in creating visually stunning and user-friendly designs. Here&apos;s a showcase of our recent projects.
</p>

                    <div className="mt-8 flex justify-center flex-wrap gap-4">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`px-6 py-3 rounded-full text-sm font-semibold
                                  ${selectedCategory === category
                                    ? 'bg-gray-800 text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900'}
                                  transition-all duration-300`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                        >
                            <Image
                                src={project.imageUrl}
                                alt={project.title}
                                width={500} // Provide a width (adjust as needed)
                                height={300} // Provide a height (adjust as needed)
                                className="w-full h-64 object-cover rounded-t-xl"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">{project.title}</h3>
                                <p className="text-gray-500 text-sm">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioSection;

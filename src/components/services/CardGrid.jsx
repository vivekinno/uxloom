import React from "react";

const services = [
  { name: "UI Design", link: "#" },
  { name: "UX Design", link: "#" },
  { name: "Branding", link: "#" },
  { name: "Website & App UI Design", link: "#" },
  { name: "User Research", link: "#" },
  { name: "Iconography", link: "#" },
  { name: "UI Guidelines", link: "#" },
  { name: "UX Consultancy", link: "#" },
  { name: "Logo and Graphic Design", link: "#" },
  { name: "Design System", link: "#" },
  { name: "UX Writing", link: "#" },
  { name: "Banner and Poster Design", link: "#" },
];

const CardGrid = () => {
  return (
    <div className="bg-white w-full font-poppins">
      <div className="px-6 py-4 sm:px-10 sm:py-6 md:px-32 md:py-12 lg:px-32 lg:py-12 xl:px-32 xl:py-12 2xl:px-32 2xl:py-12 flex flex-col justify-center items-center gap-4 lg:gap-10"></div>
      <div className="max-w-screen-lg mx-auto px-4 text-center">
        <h2 className="text-teal-500 font-bold text-lg mb-6">
          What do we serve?
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="flex items-center justify-between px-6 py-4 bg-white rounded-lg shadow-md border hover:bg-teal-100 transition-colors"
            >
              <span className="text-gray-800 font-medium">{service.name}</span>
              <span className="text-teal-500 text-lg font-bold">&rarr;</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGrid;

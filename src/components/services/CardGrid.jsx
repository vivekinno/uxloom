import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const services = [
  { name: "UI Design", link: "/coming-soon" },
  { name: "UX Design", link: "/coming-soon" },
  { name: "Branding", link: "/coming-soon" },
  { name: "Website & App UI Design", link: "/coming-soon" },
  { name: "User Research", link: "/coming-soon" },
  { name: "Iconography", link: "/coming-soon" },
  { name: "UI Guidelines", link: "/coming-soon" },
  { name: "UX Consultancy", link: "/coming-soon" },
  { name: "Logo and Graphic Design", link: "/coming-soon" },
  { name: "Design System", link: "/coming-soon" },
  { name: "UX Writing", link: "/coming-soon" },
  { name: "Banner and Poster Design", link: "/coming-soon" },
];

const CardGrid = () => {
  return (
    <div className="bg-white w-full font-poppins">
      <div className="px-6 py-4 sm:px-10 sm:py-6 md:px-32 md:py-12 lg:px-32 lg:py-12 xl:px-32 xl:py-12 2xl:px-32 2xl:py-12 flex flex-col justify-center items-center gap-4 lg:gap-10">
        <div className="flex flex-col text-center justify-center items-center gap-2">
          <h2 className="text-[#00CCCC] font-bold text-lg">
            What do we serve?
          </h2>
          <h1 className="text-2xl md:3xl lg:text-[32px] lg:leading-[36px] font-bold text-[#000000] lg:w-[60%]">
            We turn simple ideas into an extraordinary digital design
            transformations.
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6  ">
          {services.map((service, index) => (
            <div
              key={index}
              href={service.link}
              onClick={() => (window.location.href = service.link)}
              className="flex items-center justify-between px-6 py-4 gap-10  bg-white rounded-xl shadow-md border-b-4 border-transparent hover:border-[#00CCCC]  hover:bg-teal-100 transition-colors"
            >
              <span className="text-[#333333] group-hover:text-[#00CCCC]  font-medium">
                {service.name}
              </span>
              <span className=" text-[#333333]   group-hover:text-[#00CCCC] text-lg font-bold">
                <FaArrowRight />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGrid;

import React from "react";

const services = [
  {
    title: "Design Services",
    icon: "/images/Design Services.gif", 
    details: [
      "Mobile App Design",
      "Web App Design",
      "SaaS Platform Design",
    ],
  },
  {
    title: "UX Research",
    icon: "/images/UX Research.gif", 
    details: [
      "User Research",
      "UX Audit & SWOT Analysis",
      "A/B Testing & Data Insights",
    ],
  },
  {
    title: "Product Design",
    icon: "/images/Product Design.gif", 
    details: [
      "Entire Product Design Solutions",
      "Wireframing & Prototyping",
      "End-to-End UX/UI Integration",
    ],
  },
  {
    title: "Branding & Media",
    icon: "/images/Branding  & Media.gif", 
    details: [
      "Branding & Logo Design",
      "Photography & Podcast Setup",
      "Video Editing & Cinematography",
    ],
  },
];

const OurServices = () => {
  return (
    <section className="bg-white w-full">
    <div className=" px-6 py-4 sm:px-10 sm:py-6 md:px-32 md:py-12  xl:px-32 xl:py-12 2xl:px-32 2xl:py-12 lg:px-32 lg:py-12 flex flex-col justify-center items-center  gap-4 lg:gap-10">
        <div className="flex flex-col text-center justify-center items-center gap-2">
            <h2 className="text-2xl md:3xl lg:text-[32px] lg:leading-[28px] font-bold text-[#000000]">Our Services</h2>
            <p className="text-sm md:text-base lg:text-base text-[#333333]">We offer comprehensive digital solutions tailored to your needs</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col  text-left"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-28 h-28 mb-4"
              />
              <h3 className="text-lg font-bold mb-2 text-left">{service.title}</h3>
              <ul className="text-sm text-[#333333] space-y-2">
                {service.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;

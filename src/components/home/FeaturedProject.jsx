import React from "react";

const features = [
  {
    icon: "/images/Uxloom_feature1.png",
  },

  {
    icon: "/images/Uxloom_feature3.png",
  },
  {
    icon: "/images/Uxloom_feature2.png",
  },
  ,
  {
    icon: "/images/Uxloom_feature4.png",
  },

  {
    icon: "/images/Uxloom_feature6.png",
  },
  {
    icon: "/images/Uxloom_feature5.png",
  },
];

const FeaturedProject = () => {
  return (
    <section className="bg-white w-full">
      <div className="lg:px-32 lg:py-12 flex flex-col justify-center items-center gap-4 lg:gap-10">
        <div className="flex flex-col text-center justify-center items-center gap-2">
          <h2 className="text-2xl md:3xl lg:text-[32px] lg:leading-[28px] font-bold text-[#000000]">
            Featured Projects
          </h2>
          <p className="text-sm md:text-base lg:text-base text-[#333333]">
            Explore our latest work and success stories
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg flex flex-col  text-left"
            >
              <img src={feature.icon} alt="icons"  />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;

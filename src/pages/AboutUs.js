import React from "react";
import { HeaderComponent } from "../components/common/HeaderComponent";
import FounderAbout from "../components/about/FounderAbout";
import Blog from "../components/home/Blog";

export const AboutUs = () => {
  return (
    <>
    <div className="bg-white w-full font-poppins">
      <div className="px-6 py-4 sm:px-10 sm:py-6 md:px-32 md:py-12 lg:px-32 lg:py-12 xl:px-32 xl:py-12 2xl:px-32 2xl:py-12 flex flex-col justify-center items-center gap-4 lg:gap-10">
        <HeaderComponent
          title="About Us"
          description="Crafting Experiences That Inspire Growth"
          image="/images/uxloom_about.gif"
        />
        <div className="flex flex-col justify-center items-center text-center lg:justify-start lg:items-start lg:text-left  w-full ">
          <h2 className="text-[#00CCCC] lg:text-lg font-bold">About UXLoom</h2>
          <p className="text-lg leading-10 md:text-2xl md:leading-[52px] lg:text-2xl lg:leading-[52px] xl:text-2xl xl:leading-[52px] text-[#000000] font-normal">At UXloom, we specialize in designing user experiences that elevate businesses and resonate with users. As a dynamic UI/UX design studio, we combine creativity, strategy, and innovation to craft digital solutions tailored to your unique goals. From startups to established businesses, we partner with you to transform ideas into impactful designs.</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center lg:justify-start lg:items-start lg:text-left  w-full ">
          <h2 className="text-[#00CCCC] lg:text-lg font-bold">Our Mission</h2>
          <p className="text-lg leading-10 md:text-2xl md:leading-[52px] lg:text-2xl lg:leading-[52px] xl:text-2xl xl:leading-[52px] text-[#000000] font-normal">To empower businesses by creating intuitive, user-centered designs that drive engagement, solve problems, and deliver measurable results.</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center lg:justify-start lg:items-start lg:text-left  w-full ">
          <h2 className="text-[#00CCCC] lg:text-lg font-bold ">Our Values</h2>
          <div className="text-lg leading-10 md:text-2xl md:leading-[52px] lg:text-2xl lg:leading-[52px] xl:text-2xl xl:leading-[52px] text-[#000000] font-normal">
            <p>
              <span className="font-medium "> User-Centric Approach:</span> {" "}
               Every design starts with understanding the user.</p>
               <p>
              <span className="font-medium">Collaboration:</span> {" "}
              We believe in partnerships built on trust and shared goals.</p>
               <p>
              <span className="font-medium">Innovation:</span> {" "}
              Creativity fuels our solutions, keeping them ahead of the curve.</p>
               <p>
              <span className="font-medium">Excellence:</span> {" "}
              We are committed to delivering quality at every step.</p> 
          </div>
        </div>
      </div>
    </div>
    <FounderAbout/>
    <Blog/>
    </>
  );
};

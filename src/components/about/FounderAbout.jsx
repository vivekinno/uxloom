

import React from "react";
const FounderAbout = () => {
  return (
    <div className="bg-[#000000] w-full font-poppins">
      <div className="px-6 py-4 sm:px-10 sm:py-6 md:px-32 md:py-12 lg:px-32 lg:py-12 xl:px-32 xl:py-12 2xl:px-32 2xl:py-12 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-10 ">
        <div className="flex flex-col lg:justify-start lg:items-start lg:text-left lg:w-[60%] justify-center items-center text-center">
          <h2 className="text-[#00CCCC] text-xl font-bold lg:text-left py-4 text-center">
            Founding Story
          </h2>
          <div className="text-white text-base  md:text-lg lg:text-lg xl:text-lg font-normal">
            <p className="italic">
            <span className="font-bold">  UXLoom Studio</span> was founded by Manish Thakur, a seasoned design
              professional with <span className="font-bold">10+ years</span> of experience. Having worked with
              leading brands like  <span className="font-bold">BYJU's, Gradeup, Techugo, SparxIT,</span>  and {" "}
              <span className="font-bold">Innovartan Learning</span>, he believes that design is more than
              aesthetics – it’s a business driver.
            </p>
            <br />
            <p className="italic">
              From starting his career in 2015 with no idea about the
              transformative power of UX, to becoming a strong advocate of
              user-first, business-focused design, Manish believes, “Good user
              experience drives growth.”
            </p>
            <br />
            <p className="italic">
              UXLoom Studio partners with <span className="font-bold">startups, entrepreneurs,</span> and {" "}
              <span  className="font-bold">enterprises</span> to solve <span className="font-bold">business challenges </span> through <span  className="font-bold">strategic design</span>.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-2 lg:w-[40%]">
          <img
            src="/images/Manish_Thakur.png"
            alt="Manish Thakur"
            className="mx-auto "
          />
          <h3 className="text-white text-lg md:text-2xl lg:text-2xl  xl:text-2xl font-bold">Manish Thakur</h3>
          <p className="text-white text-sm  md:text-lg lg:text-lg xl:text-lg font-medium">Founder & Lead UX Designer</p>
        </div>
      </div>
    </div>
  );
};

export default FounderAbout;

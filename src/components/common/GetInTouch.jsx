import React from "react";
import FormComponent from "./FormComponent";

const GetInTouch = () => {
  return (
    <div className="bg-white w-full font-poppins">
      <div className="px-6 py-4 sm:px-10 sm:py-6 md:px-32 md:py-12 lg:px-32 lg:py-12 xl:px-32 xl:py-12 2xl:px-32 2xl:py-12 flex  justify-between items-center gap-4 lg:gap-10">
        {/* left section */}
        <div className="w-full lg:w-[50%]">
          <div className="flex flex-col justify-start items-start text-left gap-2">
            <h1 className="text-2xl md:3xl lg:text-[32px] lg:leading-[28px]  xl:text-[32px] xl:leading-[28px] font-bold text-[#000000]">
              Get In Touch
            </h1>
            <p className="text-sm md:text-base lg:text-base xl:text-base text-[#333333]">
              Let’s discuss your project
            </p>
          </div>
        <FormComponent/>
        </div>
        <div className=" hidden  lg:flex justify-center items-start text-center w-[50%]">
          <img
            src="/images/get-in-touch.gif"
            alt="brain-gif"
            className="w-72 h-72"
          />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
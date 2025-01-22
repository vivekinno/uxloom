
import ReviewComponent from "../common/ReviewComponent";

const Hero = () => {
  return (
   <div className="w-full bg-white font-poppins">
     <div className="px-6 py-4 sm:px-10 sm:py-6 md:px-32 md:py-12 lg:px-32 lg:py-12 xl:px-32 xl:py-12 2xl:px-32 2xl:py-12 flex flex-col-reverse lg:flex-row justify-center items-center gap-4 lg:gap-10">
      <div className="flex flex-col justify-center items-left  md:w-[50%] lg:w-[50%] xl:w-[50%] lg:gap-16  gap-6 ">
        <div className="flex flex-col text-left items-start justify-start pt-10 gap-4">
          <h1 className="text-2xl md:text-3xl lg:text-[40px] lg:leading-[48px] font-bold "><span>UXloom Studio</span>
          <br /> 
        <span> Design and UX Services</span></h1>
          <p className=" text-sm md:text-base lg:text-base font-normal text-[#333333]">Elevate user experiences, boost engagement, and drive growth with designs that truly make a difference.</p>
        </div>
        <div className="flex gap-6">
            <button className="text-white text-base font-medium bg-[#00CCCC] border border-transparent rounded-full px-6 py-2">Get Started</button>
            <button className="hidden lg:block text-[#00CCCC] text-base font-medium bg-transparent border border-[#00CCCC] rounded-full px-6 py-2">Let’s Discuss</button>
        </div>
      <ReviewComponent/>
      </div>

      <div className="flex justify-center items-center sm:w-full md:w-[50%] lg:w-[50%] xl:w-[50%] ">
         <img src="/images/Uxloom_hero.png" alt="hero-img" />
      </div>
    </div>
   </div>
  );
};

export default Hero;

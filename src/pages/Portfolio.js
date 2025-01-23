import React from "react";
import {HeaderComponent} from "../components/common/HeaderComponent";
import StartProject from "../components/common/StartProject";

const Portfolio = () => {

  const PortfolioData = [
    {
      image: "/images/uxloom_portfolio2.png", 
      title: "Innovartan",
      description1:
        "Website / App & Product Revamp for Education Website",
        description2:
        "UI/UX | Web | App | Branding",

    },
    {
      image: "/images/uxloom_portfolio1.png", 
      title: "Okti Foundation",
      description1:
        "Website Revamp for Healthcare Non-Profit Org",
        description2:
        "UI/UX | Web",

    },
    {
      image: "/images/uxloom_portfolio3.png", 
      title: "HolidayBooking",
      description1:
        "Website Redesign for Travel Website",
        description2:
        "UI/UX | Web | Branding",

    },
   
    {
      image: "/images/uxloom_portfolio4.png", 
      title: "Elite Crew Store",
      description1:
        "Branding & Logo Design of eCommerce Store",
        description2:
        "UI/UX | Branding",

    },
   
    ]
 
  return (
    <>
      <div className="bg-white w-full font-poppins">
        <div className="px-6 py-4 sm:px-10 sm:py-6 md:px-32 md:py-12 lg:px-32 lg:py-12 xl:px-32 xl:py-12 2xl:px-32 2xl:py-12 flex flex-col justify-center items-center gap-4 lg:gap-10">
          <HeaderComponent
            title="Portfolio"
            description="We have designed experiences"
            image="/images/uxloom_portfolio.gif"
          />
        <div>
          <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
      {PortfolioData.map((card,index) => (
        <div
              key={index}
              className="bg-white  rounded-lg p-6 flex flex-col  text-left"
            >
               <h3 className="text-2xl font-bold mb-2 text-left ml-2">{card.title}</h3>
              <img
                src={card.image}
                alt={card.title}
                className=""
              />
             <div className="flex justify-between items-center text-left p-4">
             <p className="text-lg leading-7 font-bold text-[#000000] w-[60%] ">{card.description1}</p>
             <p className="text-base leading-7 font-normal text-[#333333] ">{card.description2}</p>
             </div>
        </div>
      ))}
    </div>
          </div>
        </div>
        </div>
      </div>
      <StartProject/>
    </>
  );
};

export default Portfolio;

import React from "react";

const  CardComponent = () => {

  const cardData = [
    {
      
      image: "/images/UX Research.gif", 
      title: "Empathise",
      description:
        "We dive deep into understanding user needs, behaviors, and pain points to build meaningful solutions.",
    },
    {
      
      image: "/images/brain.gif", 
      title: "Define (Problem Statement)",
      description:
        "We pinpoint the core challenges and craft a clear problem statement to drive the project forward.",
    },
    {
      
        image: "/images/creative-thinking.gif", 
        title: "Define (Problem Statement)",
        description:
          "We pinpoint the core challenges and craft a clear problem statement to drive the project forward.",
      },
      {
       
        image: "/images/edit.gif", 
        title: "Define (Problem Statement)",
        description:
          "We pinpoint the core challenges and craft a clear problem statement to drive the project forward.",
      },
      {
       
        image: "/images/search (1).gif", 
        title: "Define (Problem Statement)",
        description:
          "We pinpoint the core challenges and craft a clear problem statement to drive the project forward.",
      },
      {
       
        image: "/images/rocket.gif", 
        title: "Define (Problem Statement)",
        description:
          "We pinpoint the core challenges and craft a clear problem statement to drive the project forward.",
      },
  ];

  return (
   <>
    <div className="flex flex-col text-center justify-center items-center gap-2">
        <h2 className="text-[#00CCCC] font-bold text-lg">
        How we do it ?
        </h2>
        <h1 className="text-2xl md:3xl lg:text-[32px] lg:leading-[36px] font-bold text-[#000000] ">Ensuring excellence in every step we take.</h1>
        </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
      {cardData.map((card,index) => (
        <div
              key={index}
              className="bg-white  rounded-lg p-6 flex flex-col  text-left"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-28 h-28 mb-4"
              />
              <h3 className="text-lg font-bold mb-2 text-left">{card.title}</h3>
              <p className="text-base leading-7 font-medium text-[#5C5C5C] lg:w-[80%]">{card.description}</p>
           </div>
      ))}
    </div>
   </>
  );
};

export default CardComponent;

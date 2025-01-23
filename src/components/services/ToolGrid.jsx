import React from 'react';

const tools = [
  { name: 'Figma', src: '/images/uxloom_design_tool1.png' },
  { name: 'Adobe XD', src: '/images/uxloom_design_tool2.png' },
  { name: 'Photoshop', src: '/images/uxloom_design_tool3.png' },
  { name: 'Framer', src: '/images/uxloom_design_tool6.png' },
  { name: 'Illustrator', src: '/images/uxloom_design_tool4.png' },
  { name: 'Sketch', src: '/images/uxloom_design_tool5.png' },
  
  { name: 'Miro', src: '/images/uxloom_design_tool7.png' },
  { name: 'Overflow', src: '/images/uxloom_design_tool8.png' },
  { name: 'Webflow', src: '/images/uxloom_design_tool9.png' },
];

const ToolsGrid = () => {
  return ( 
  <div className="bg-white w-full font-poppins">
    <div className="px-6 py-4 sm:px-10 sm:py-6 md:px-32 md:py-12 lg:px-32 lg:py-12 xl:px-32 xl:py-12 2xl:px-32 2xl:py-12 flex flex-col justify-center items-center gap-4 lg:gap-10">
      <h1 className="text-2xl md:3xl lg:text-[32px] lg:leading-[36px] font-bold text-[#000000] ">Tools We Use</h1>
      <div className=" grid grid-cols-2  md:grid-cols-3  lg:grid-cols-3  xl:grid-cols-3 gap-4 lg:gap-x-56 w-full ">
        {tools.map((tool, index) => (
         <div
         key={index}
         className={`flex items-center p-3 lg:p-8 justify-center rounded-xl ${
           index === tools.length - 1 ? 'hidden md:flex' : ''
         }`}
       >
         <img src={tool.src} alt={tool.name} className="w-16 h-16" />
       </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ToolsGrid;

import React from 'react'

export const HeaderComponent = ({title,description,image}) => {
  return (
    <div className="flex justify-between items-center w-full mb-5 md:mb-0 lg:mb-0">
    <div className="flex flex-col justify-start items-start text-left lg:w-1/2 gap-2">
      <h3 className="text-lg text-[#00CCCC] font-bold">{title}</h3>
      <h1 className="text-[#000000] font-bold text-xl md:text-3xl lg:text-[40px] lg:leading-[48px] xl:text-[40px] xl:leading-[48px]  lg:w-[70%]">
        {description}
      </h1>
    </div>
    <img
    src={image}
      alt="email"
      className="h-32 w-32 lg:h-56 lg:w-56 flex justify-center items-center"
    />
  </div>
  )
}

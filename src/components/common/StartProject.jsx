import React from 'react'

const StartProject = () => {
  return (
    <div className='bg-[#000000] w-full font-poppins'>
        <div className='px-6 py-4 sm:px-10 sm:py-6 md:px-32 md:py-12 lg:px-32 lg:py-12 xl:px-32 xl:py-12 2xl:px-32 2xl:py-12 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-10 '>
           <div className='flex flex-col gap-4 justify-center  items-center text-center lg:text-left'>
            <h1 className='text-2xl md:3xl lg:text-[32px] lg:leading-[28px]  xl:text-[32px] xl:leading-[28px] font-bold text-white w-1/2 lg:w-full' >Ready to Start Your Project?</h1>
          <p className="text-sm md:text-base lg:text-base xl:text-base text-white w-[80%] lg:w-full">
            Let’s create something amazing together. Get in touch with our team today.</p>
           </div>
           <div className='flex justify-center items-center text-center'>
           <button className="text-white text-base font-medium bg-[#00CCCC] border border-transparent rounded-full px-6 py-2">Let’s Connect</button>
           </div>
        </div>
    </div>
  )
}

export default StartProject
import React from 'react'
import StartProject from '../components/common/StartProject'

const CommingSoon = () => {
  return (
    <div className="bg-white w-full font-poppins">
      <div className="px-6 py-4 sm:px-10 sm:py-6 md:px-32 md:py-18 lg:px-32 lg:py-20 xl:px-32 xl:py-20 2xl:px-32 2xl:py-20 flex  justify-center items-center gap-4 lg:gap-10">
        <div className='flex flex-col justify-center items-center text-center'>
            <img src='/images/coming-soon.gif' alt='comming soon' className='h-56 w-56' />
            <h2 className='text-2xl md:3xl lg:text-[32px] lg:leading-[28px]  xl:text-[32px] xl:leading-[28px] font-bold text-[#000000] w-[70%]'>We will launch soon our page and case study!</h2>
        </div>
        </div>
        <StartProject/>
        </div>
  )
}
export default CommingSoon
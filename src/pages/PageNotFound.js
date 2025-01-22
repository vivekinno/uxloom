import React, { useEffect } from 'react'
import StartProject from '../components/common/StartProject'
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 4000);

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <div className="bg-white w-full font-poppins">
      <div className="px-6 py-4 sm:px-10 sm:py-6 md:px-32 md:py-18 lg:px-32 lg:py-20 xl:px-32 xl:py-20 2xl:px-32 2xl:py-20 flex  justify-center items-center gap-4 lg:gap-10">
        <div className='flex flex-col justify-center items-center text-center'>
            <img src='/images/error-404.gif' alt='404 error' className='h-56 w-56' />
            <h2 className='text-2xl md:3xl lg:text-[32px] lg:leading-[32px]  xl:text-[32px] xl:leading-[32px] font-bold text-[#000000] w-[70%]'>Oops! This page can’t be found.Return to the homepage.</h2>
        </div>
        </div>
        <StartProject/>
        </div>
  )
}

export default PageNotFound
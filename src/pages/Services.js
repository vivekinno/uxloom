import React from 'react'
import { HeaderComponent } from '../components/common/HeaderComponent'
import CardGrid from '../components/services/CardGrid'

export const Services = () => {
  return (
     <>
        <div className="bg-white w-full font-poppins">
          <div className="px-6 py-4 sm:px-10 sm:py-6 md:px-32 md:py-12 lg:px-32 lg:py-12 xl:px-32 xl:py-12 2xl:px-32 2xl:py-12 flex flex-col justify-center items-center gap-4 lg:gap-10">
            <HeaderComponent
              title="Services"
              description="We craft designs that elevate User Experiences"
              image="/images/solution.gif"
            />
            </div>
            </div>
            <CardGrid/>
            </>
  )
}

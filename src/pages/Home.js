import React from 'react'
import Hero from '../components/home/Hero'
import OurServices from '../components/home/OurServices'
import FeaturedProject from '../components/home/FeaturedProject'
import OurClient from '../components/home/OurClient'
import Testimonials from '../components/home/Testimonials'
import Blog from '../components/home/Blog'
import GetInTouch from '../components/common/GetInTouch'
import StartProject from '../components/common/StartProject'

const Home = () => {
  return (
    <div className='font-poppins'>
        <Hero/>
        <OurServices/>
        <FeaturedProject/>
        <OurClient/>
        <Testimonials/>
        <StartProject/>
        <Blog/>
        <GetInTouch/>
    </div>
  )
}

export default Home
import React from 'react';
import { FaStar } from 'react-icons/fa6';

const testimonialSection = [
  {
    id: 1,
    src: '/images/prashant_sharma.png',
    name: 'Prashant Sharma',
    designation: 'Founder, Innovartan Learning',
    feedback:
      '"Working with UXLoom was a game-changer for Innovartan. Their team reimagined our user experiences and digital presence, creating a seamless and engaging website that reflects our mission. Their expertise in understanding our needs and delivering beyond expectations has truly elevated our brand. Highly recommended!"',
    stars: 4,
  },
  {
    id: 2,
    src: '/images/Dr. Sonal Bathla.png',
    name: 'Dr. Sonal Bathla',
    designation: 'Founder, Okti Foundation',
    feedback:
      '"UXLoom’s redesign of our website has been remarkable. They captured the essence of our mission and translated it into a clean, user-friendly, and visually appealing platform. Their dedication to delivering excellence has made a significant impact on how we connect with our audience. Thank you for your exceptional work!"',
    stars: 4,
  },
  {
    id: 3,
    src: '/images/Jitendra Singh.png',
    name: 'Jitendra Singh',
    designation: 'Founder, Holiday Booking',
    feedback:
      '"UXLoom did an incredible job with our branding and website design. They brought fresh ideas and crafted a modern, professional look that resonates with our target audience. The website is now a true representation of our vision. Their creativity and attention to detail are unmatched!"',
    stars: 4,
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white w-full">
      <div className="px-6 py-4 sm:px-10 sm:py-6 md:px-32 md:py-12 lg:px-32 lg:py-12 xl:px-32 xl:py-12 2xl:px-32 2xl:py-12 flex flex-col justify-center items-center gap-4 lg:gap-10 ">
        <div className="flex flex-col text-center justify-center items-center gap-2">
          <h1 className="text-2xl md:3xl lg:text-[32px] lg:leading-[28px] xl:text-[32px] xl:leading-[28px] font-bold text-[#000000]">
            What Our Client Say
          </h1>
          <p className="text-sm md:text-base lg:text-base xl:text-base text-[#333333]">
            Real Feedback from our valued clients
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  ">
          {testimonialSection.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-md px-8 py-5 flex flex-col items-center text-center"
            >
              <div className="flex items-center gap-4">   
              <img
                  src={testimonial.src}
                  alt={`${testimonial.name}'s profile`}
                  className="w-16 h-16 rounded-full mb-4"
                />
               <div className='flex flex-col'>
               <h3 className="text-base font-bold text-left text-[#333333]">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-[#5C5C5C] text-left mb-4">
                  {testimonial.designation}
                </p>
               </div>
              </div>
              <p className="text-[#5C5C5C] text-left text-base font-medium mb-6">
                {testimonial.feedback}
              </p>
              <div className="flex justify-center">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`w-5 h-5 ${
                      index < testimonial.stars ? 'text-[#00CCCC]' : 'text-[#D9D9D9]'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

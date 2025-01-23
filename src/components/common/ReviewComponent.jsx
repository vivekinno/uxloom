import React from 'react'

const ReviewComponent = () => {
  return (
    <div className="flex gap-6  ">
    <img src="/images/review1.png" alt="review"  onClick={() => window.open("https://clutch.co/profile/uxloom-studio", "_blank")}
    className="cursor-pointer" />
    <img src="/images/review2.png" alt="review"  onClick={() => window.open("https://www.goodfirms.co/company/uxloom-studio-ux-design-agency", "_blank")}
     className="hidden lg:block cursor-pointer" />
     <img src="/images/review3.png" alt="review"  onClick={() => window.open("https://www.designrush.com/agency/profile/uxloom-studio", "_blank")}
    className="cursor-pointer" />
</div>
  )
}

export default ReviewComponent
import React from 'react'

const Button = () => {
  return (
    <div>

           <button
          onClick={() => setIsModalOpen(true)}
          className="hidden lg:block text-white text-base font-medium bg-[#00CCCC] rounded-full px-6 py-2"
        >
          Get Started
        </button>

    </div>
  )
}

export default Button

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/coming-soon", label: "Portfolio" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 w-full font-poppins">
      <div className=" px-6 py-4 sm:px-10 sm:py-6 md:px-32 md:py-6 lg:px-32 lg:py-6 xl:px-32 xl:py-6 2xl:px-32 2xl:py-6 flex justify-between items-center shadow-md">
        <div className="text-lg font-bold">
          <img src="/images/uxloom_logo.svg" alt="logo" />
        </div>

        <div className="hidden lg:flex text-base font-medium gap-8">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="text-[#333333] hover:text-[#00CCCC]">
              {link.label}
            </Link>
          ))}
        </div>

        <button className="lg:hidden z-50" onClick={toggleMenu} >
          {isOpen ? <IoClose size={24} className="text-black" /> : <IoMenu size={24}  className="text-[#00CCCC]"/>}
        </button>

        <button className="hidden lg:block text-white text-base font-medium bg-[#00CCCC] rounded-full px-6 py-2">
          Get Started
        </button>
      </div>

      {isOpen && (
       
       <>
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsOpen(false)}></div>

        <div className="lg:hidden bg-white w-[70%]  text-black text-lg font-medium px-4  py-20 space-y-4 fixed top-0 right-0 h-full shadow-lg z-40 gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block hover:text-[#00CCCC] "
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
            
          ))}
         <Link
            to="/comming-soon"
            className="block hover:text-[#00CCCC] text-black"
            onClick={() => setIsOpen(false)}
          >
          Sitemap
          </Link>

          <div className=" flex flex-col justify-center items-center text-center bg-black text-white rounded-xl p-4 gap-4 absolute bottom-4 left-4 right-4">
            <div className="flex flex-col justify-center items-center text-center gap-2 ">
              <h3 className="text-base font-bold">Ready to Start your
              Project?</h3>
              <p className="text-xs font-normal">Let’s create something amazing together. </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
              <FaPhone className="text-[#00CCCC] w-6 h-6" />
              <span className="text-sm">+91 81786 52544</span>
              </div>
              <div className="flex gap-2">
              <MdEmail  className="text-[#00CCCC] w-6 h-6"/>
              <span className="text-sm">hello@uxloom.in</span>
              </div>
            </div>
          </div>
          {/* <button className="w-full text-white bg-[#00CCCC] rounded-full px-6 py-2" onClick={() => setIsOpen(false)}>
            Get Started
          </button> */}
        </div>
       </>
      )}
    </nav>
  );
};

export default Navbar;


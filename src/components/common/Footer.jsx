import React from "react";
import { MdEmail } from "react-icons/md";
import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About Us", path: "/about" },
    { name: "Sitemap", path: "/coming-soon" },
  ];

  const contactDetails = [
    {
      type: "address",
      icon: <FaLocationDot />,
      text: "H - 151, Sector 63, Noida, U.P, India 201301",
    },
    {
      type: "phone",
      icon: <FaPhone />,
      text: "+91 81786 52544",
      link: "tel:+918178652544",
    },
    {
      type: "email",
      icon: <MdEmail />,
      text: "hello@uxloom.in",
      link: "mailto:hello@uxloom.in",
    },
  ];

  return (
    <footer className="bg-[#111827] text-white py-2 font-poppins">
      <div className="px-6 py-4 sm:px-10 sm:py-4 md:px-32 md:py-4 lg:px-32 lg:py-4 xl:px-32 xl:py-4 2xl:px-32 2xl:py-4 flex flex-col lg:flex-row lg:justify-between lg:items-center justify-start items-start text-left">
        <div className="flex flex-col gap-6 basis-full md:basis-1/3 lg:basis-1/3">
          <div className="flex flex-col justify-start items-start text-left gap-4">
            <img src="/images/uxloom_footer.svg" alt="logo" className="w-32 mt-4 " />
            <p className="text-base sm:text-base md:text-base lg:text-base xl:taxt-base 2xl:text-base font-normal  sm:w-full lg:w-[80%]">
              UXLoom Studio is a dynamic UI/UX design agency dedicated to
              crafting user-centric digital experiences that drive business
              growth.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row md:justify-start  lg:md:justify-start xl:justify-start  justify-center gap-3">
            <h2 className="text-lg font-medium">Follow Us</h2>
            <ul className="flex gap-3">
              {[
                {
                  icon: FaFacebookF,
                  link: "https://www.facebook.com/people/UXloom-Design-Studio/61570916670477/",
                },
                { icon: FaYoutube, link: "https://www.youtube.com/@UXloomStudio" },
                {
                  icon: FaDribbble,
                  link: "https://dribbble.com/uxloom",
                },
                {
                  icon: FaLinkedinIn,
                  link: "https://www.linkedin.com/company/uxloom/",
                },

                {
                  icon: FaInstagram,
                  link: "https://www.instagram.com/uxloom/",
                },
              ].map(({ icon: Icon, link }, idx) => (
                <li
                  key={idx}
                  className="bg-[#00CCCC] rounded-lg p-3 text-center flex justify-center items-center"
                >
                  <button
                    onClick={() =>
                      window.open(link, "_blank", "noopener,noreferrer")
                    }
                    className="cursor-pointer bg-transparent border-none"
                  >
                    <Icon className="text-base md:text-lg text-white" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex  flex-col justify-start items-start lg:items-center text-left basis-full md:basis-1/3 lg:basis-1/3">
          <h3 className="text-lg  font-medium py-4 ">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="text-base hover:underline">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-start items-start text-left lg:mb-10 md:mb-10 xl:mb-10 basis-full md:basis-1/3 lg:basis-1/3">
          <h3 className="text-lg font-medium py-4">Contact</h3>
          <ul className="space-y-2">
            {contactDetails.map((contact, index) => (
              <li key={index} className="text-base flex items-center">
                <span className="mr-2">{contact.icon}</span>
                {contact.link ? (
                  <Link to={contact.link} className="hover:underline">
                    {contact.text}
                  </Link>
                ) : (
                  contact.text
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className=" lg:mt-5 border-t border-[#303E5B] px-12 py-5 text-center">
        <p className="text-base text-[#7A7F89]">
          Copyright © {new Date().getFullYear()} UXLoom Studio Ltd | All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

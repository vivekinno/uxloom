import React, { useEffect, useState } from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import FormComponent from "../components/common/FormComponent";
import ReviewComponent from "../components/common/ReviewComponent";
import Blog from "../components/home/Blog";
import { HeaderComponent } from "../components/common/HeaderComponent";

export const Contact = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { hour: "2-digit", minute: "2-digit", hour12: true };
      setCurrentTime(now.toLocaleTimeString("en-US", options));
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const contactDetails = [
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
    <>
      <div className="bg-white w-full font-poppins">
        <div className="px-6 py-4 sm:px-10 sm:py-6 md:px-32 md:py-12 lg:px-32 lg:py-12 xl:px-32 xl:py-12 2xl:px-32 2xl:py-12 flex flex-col justify-center items-center gap-4 lg:gap-10">
          <HeaderComponent title="Contact" description="Let’s discuss your project!" image="/images/mail.gif"/>
          <div className=" flex-col flex lg:flex-row justify-between items-center w-full ">
            <div className="lg:w-1/2">
              <FormComponent />
            </div>
            <div className="flex flex-col justify-center items-center lg:w-1/2 ">
              <img src="/images/qrcode.png" alt="code" />
              <div className="flex">
                <ul className="space-y-2">
                  {contactDetails.map((contact, index) => (
                    <li
                      key={index}
                      className="text-base flex justify-center items-center text-center gap-1 "
                    >
                      <span className="flex justify-center items-center text-center text-[#00CCCC]">
                        {contact.icon}
                      </span>
                      {contact.link ? (
                        <Link
                          to={contact.link}
                          className="text-[#000000] font-bold text-xl hover:underline"
                        >
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
          </div>
          {/* <div className="flex justify-start items-center w-full space-x-8">
            <div className="flex justify-start items-center gap-4">
              <img src="/images/india.gif" alt="india" className="h-48 w-48" />
              <div className="flex flex-col lg:hidden">
                <h2 className="text-[#000000] font-bold text-lg lg:text-[40px] lg:leading-[48px]">
                  India
                </h2>
                <p className="text-[#00CCCC] font-bold text-sm lg:text-lg">
                  {currentTime}
                </p>
              </div>
            </div>
            <div className="p-5">
              <div className="hidden lg:flex flex-col ">
                <h2 className="text-[#000000] font-bold text-lg lg:text-[40px] lg:leading-[48px]">
                  India
                </h2>
                <p className="text-[#00CCCC] font-bold text-sm lg:text-lg">
                  {currentTime}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FaLocationDot className="text-[#00CCCC] w-5 h-5" />
                <p className="font-medium text-sm lg:text-xl">
                  H - 151, Sector 63, Noida, U.P, India 201301
                </p>
              </div>
            </div>
          </div> */}
          <div className="bg-white w-full font-poppins">
          <div className="flex flex-col gap-6 text-center items-center lg:text-left lg:items-start">
            <h2 className="text-2xl md:3xl lg:text-[32px] lg:leading-[28px]  xl:text-[32px] xl:leading-[28px] font-bold text-[#000000]">
              Review us on
            </h2>
            <ReviewComponent />
          </div>
          </div>
        </div>
      </div>
      <Blog />
    </>
  );
};

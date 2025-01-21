import React from "react";

const OurClient = () => {
  const clients = [
    {
      id: 1,
      src: "/images/client1.png",
      alt: "Client 1",
      path: "https://www.innovartan.com/",
    },
    {
      id: 2,
      src: "/images/client2.png",
      alt: "Client 2",
      path: "https://oktifoundation.org/",
    },
    {
      id: 3,
      src: "/images/client3.png",
      alt: "Client 3",
      path: "https://zyadashop.io/elitecrewstore",
    },
    {
      id: 4,
      src: "/images/client4.png",
      alt: "Client 4",
      path: "https://holidaybooking.net/",
    },
  ];

  const handleNavigation = (path) => {
    window.open(path, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white w-full font-poppins">
      <div className="px-6 py-4 sm:px-10 sm:py-6 md:px-32 md:py-12 lg:px-32 lg:py-12 xl:px-32 xl:py-12 2xl:px-32 2xl:py-12 flex flex-col justify-center items-center gap-4 lg:gap-10">
        <div className="flex flex-col text-center justify-center items-center gap-2">
          <h1 className="text-2xl md:3xl lg:text-[32px] lg:leading-[28px] xl:text-[32px] xl:leading-[28px] font-bold text-[#000000]">
            Our Clients
          </h1>
          <p className="text-sm md:text-base lg:text-base xl:text-base text-[#333333]">
            Trusted by Startup brands Globally
          </p>
        </div>
        <div className="flex gap-6 flex-wrap justify-center items-center">
          {clients.map((client) => (
            <div
              key={client.id}
              onClick={() => handleNavigation(client.path)}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img src={client.src} alt={client.alt} className="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClient;

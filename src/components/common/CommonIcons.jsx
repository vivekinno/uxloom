
import { FaWhatsapp } from "react-icons/fa";
import { BsSkype } from "react-icons/bs";

export const CommonIcons = () => {
    const handleWhatsappClick = () => {
        window.open("https://wa.me/qr/U2RDQRSVMBGBO1", "_blank");
      };
    
      const handleSkypeClick = () => {
        window.open("https://join.skype.com/invite/qve74QlTOTm2", "_blank");
      };
    
  return (
    <>
      <div className="fixed right-10 bottom-10  sm:flex sm:flex-col space-y-4 z-50">
        <button
          onClick={handleWhatsappClick}
          className="bg-[#25d366] p-3 rounded-full shadow-lg flex justify-center items-center"
        >
          <FaWhatsapp className="w-8 h-8 text-white" />
        </button>

        <button
          onClick={handleSkypeClick}
          className="bg-[#00AFF0] p-3 rounded-full shadow-lg flex justify-center items-center"
        >
          <BsSkype className="w-8 h-8 text-white" />
        </button>
      </div>
    </>
  );
};

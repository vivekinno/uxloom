import React from "react";
import FormComponent from "./FormComponent";
import { HeaderComponent } from "./HeaderComponent";
import { RxCross2 } from "react-icons/rx";

const Modal = ({isStart,onClose}) => {

    if (!isStart) return null;
  return (

       <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div  onClick={(e) => e.stopPropagation()} className="bg-white lg:w-[40%]  rounded-xl px-8 py-2 relative">
            <button
              onClick={onClose}
              className="absolute top-2 right-5 text-gray-500 "
            >
              <RxCross2 size={20} />
            </button>
         
         <h2 className="text-[#000000] font-bold text-lg md:text-2xl lg:text-2xl xl:text-2xl py-4">Let’s discuss your project!</h2>
        <FormComponent/>

          </div>
        </div>

  );
};

export default Modal;

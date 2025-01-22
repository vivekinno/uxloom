
import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import emailjs from "@emailjs/browser";

const FormComponent = () => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    owner_name: "",
    lead_source: "UXLOOM",
    owner_number: "UXLOOM",
    email: "",
    enquiry_message: "",
    select_service: "",
    budget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    const nameRegex = /^[A-Za-z\s]{3,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.owner_name) {
      formErrors.owner_name = "Name is required.";
      isValid = false;
    } else if (!nameRegex.test(formData.owner_name)) {
      formErrors.owner_name = "Enter your name.";
      isValid = false;
    }

    if (!formData.email) {
      formErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email = "Enter a valid email address.";
      isValid = false;
    }

    if (!formData.enquiry_message) {
      formErrors.enquiry_message = "Message is required.";
      isValid = false;
    } else if (formData.enquiry_message.length < 10) {
      formErrors.enquiry_message = "Message should be at least 10 characters.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "https://app.innovartan.com/api/mobile/affiliation/create-web-lead",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setFormData({
          owner_name: "",
          lead_source: "UXLOOM",
          owner_number: "UXLOOM",
          email: "",
          select_service: "",
          enquiry_message: "",
          budget: "",
        });
        setErrors({});
        toast.success("Form submitted successfully!");
        emailjs
          .sendForm(
            "service_pf2js1j",
            "template_0tha0vn",
            formRef.current,
            "mEs-NzS-itHIQKuIh"
          )
          .then(
            () => {
              console.log("Email sent successfully");
            },
            (error) => {
              console.log("An error occurred.", error);
            }
          );
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full space-y-6 bg-white py-6 rounded-xl"
    >
      <ToastContainer />
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="mb-2 text-base font-medium text-[#000000]">
            Name
          </label>
          <input
            name="owner_name"
            value={formData.owner_name}
            onChange={handleChange}
            placeholder="Your Name"
            className="border border-[#E7EDF6] rounded-xl px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#E7EDF6]"
          />
          {errors.owner_name && (
            <div className="text-red-500 text-sm">{errors.owner_name}</div>
          )}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="mb-2 text-base font-medium text-[#000000]"
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="border border-[#E7EDF6] rounded-xl px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#E7EDF6]"
          />
          {errors.email && (
            <div className="text-red-500 text-sm">{errors.email}</div>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="message"
          className="mb-2 text-base font-medium text-[#000000]"
        >
          Message
        </label>
        <textarea
          name="enquiry_message"
          value={formData.enquiry_message}
          onChange={handleChange}
          placeholder="Your Message"
          className="border border-[#E7EDF6] rounded-xl px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#E7EDF6]"
        ></textarea>
        {errors.enquiry_message && (
          <div className="text-red-500 text-sm">{errors.enquiry_message}</div>
        )}
      </div>
      <div className="flex flex-col lg:flex-row gap-2">
        <div className="flex gap-2 lg:gap-5 flex-col lg:flex-row">
          <h3 className="text-center font-medium text-[#000000] flex text-base justify-start item-start lg:justify-center lg:items-center">
            Select services
          </h3>
          <select
            name="select_service"
            value={formData.select_service}
            onChange={handleChange}
            className="border border-[#E7EDF6] rounded-xl px-4 py-2 lg:w-[50%] focus:outline-none focus:ring-2 focus:ring-[#E7EDF6]"
          >
            <option value="select">Select</option>
            <option value="Design Services">Design Services</option>
            <option value="UX Design">UX Design</option>
            <option value="Website Design">Website Design</option>
            <option value="App Design">App Design</option>
            <option value="SaaS Product Design">SaaS Product Design</option>
            <option value="Logo Design">Logo Design</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
          <h3 className="text-center font-medium text-[#000000] text-base flex justify-start item-start lg:justify-center lg:items-center">
            Budget
          </h3>
          <input
            type="text"
            placeholder="$100"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="border border-[#E7EDF6] rounded-xl px-4 py-2 lg:w-[50%] focus:outline-none focus:ring-2 focus:ring-[#E7EDF6]"
          />
        </div>
      </div>
      <div className="flex justify-center items-center lg:justify-start lg:item-start">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#00CCCC] text-base font-medium text-white border border-transparent rounded-full w-48 h-10 cursor-pointer"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default FormComponent;

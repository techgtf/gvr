import React from "react";
import * as CONFIG from "../../../../config";
import CommonHeading from "../commonHeading";
import CommonPera from "../commonPera";
import { useState, useRef } from "react";

const JobForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [designation, setDesignation] = useState("");
  const [experience, setExperience] = useState("");
  const [message, setMessage] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    experience: "",
    message: "",
    cv: "",
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "name":
        setName(value);
        setErrors((prev) => ({ ...prev, name: "" }));
        break;
      case "email":
        setEmail(value);
        setErrors((prev) => ({ ...prev, email: "" }));
        break;
      case "phone":
        setPhone(value);
        setErrors((prev) => ({ ...prev, phone: "" }));
        break;
      case "designation":
        setDesignation(value);
        setErrors((prev) => ({ ...prev, designation: "" }));
        break;
      case "experience":
        setExperience(value);
        setErrors((prev) => ({ ...prev, experience: "" }));
        break;
      case "message":
        setMessage(value);
        setErrors((prev) => ({ ...prev, message: "" }));
        break;
      default:
        break;
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCvFile(file);
    setErrors((prev) => ({ ...prev, cv: "" }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      designation: "",
      experience: "",
      message: "",
      cv: "",
    };

    // Name validation
    if (!name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    // Phone validation
    if (!phone.trim()) {
      newErrors.phone = "Phone is required";
      isValid = false;
    } else if (!/^\d+$/.test(phone.trim())) {
      // Check if only numbers
      newErrors.phone = "Phone number must contain only numbers";
      isValid = false;
    }

    // Designation validation
    if (!designation.trim()) {
      newErrors.designation = "Designation is required";
      isValid = false;
    }

    // Experience validation
    if (!experience.trim()) {
      newErrors.experience = "Experience is required";
      isValid = false;
    }

    // Message validation
    if (!message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    // CV validation
    if (!cvFile) {
      newErrors.cv = "CV is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();
    setIsLoading(true);
    if (!isValid) return;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("designation", designation);
    formData.append("experience", experience);
    formData.append("message", message);
    formData.append("file", cvFile);

    try {
      // Replace with your actual API endpoint
      const response = await fetch(`${CONFIG.API_URL}apply-for-job`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Submission failed");

      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setDesignation("");
      setExperience("");
      setMessage("");
      setCvFile(null);
      setErrors({
        name: "",
        email: "",
        phone: "",
        designation: "",
        experience: "",
        message: "",
        cv: "",
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setIsLoading(false);
      alert("Form submitted successfully");
    } catch (error) {
      setIsLoading(false);
      console.error("Submission error:", error);
      // Handle network errors or display error message to user
    }
  };

  return (
    <section className="bg-[#EFF5FA] py-[50px] ">
      <div className="max-w-[85%]  mx-auto my-0">
        <div className="headingWrap lg:max-w-[79%] max-w-[100%] m-auto text-center">
          <CommonHeading
            HeadingText={"Apply Here for Jobs"}
            HeadingClass="xl:text-center text-left xl:pb-[0px] pb-[35px]"
          />
        </div>
        <div
          style={{
            borderBottom: "1px solid #b1b1b1",
          }}
          className="content !px-0 xl:!py-[35px] pt-[0px] lg:max-w-[85%] w-[100%] m-auto  lg:mb-[50px] mb-[20px] text-center"
        >
          <CommonPera
            PeraClass="fontItalic text-justify xl:text-center xl:!p-[0px] pb-[30px]"
            //   PeraText="The genesis of Great Value Industries dates to 1970 when the group set up its glassware division. In 1990 GVIL diversified into together supplying quality packaging products to prestigious."
            PeraText={" Start Your Journey to Excellence Here"}
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex xl:w-[85%] w-[100%] mx-auto my-0 justify-between flex-col flex-wrap"
        >
          {/* Name Input */}
          <div className="basis-[100%] w-[100%] flex justify-between xl:flex-row flex-col items-center mb-[20px]">
            <div className="xl:basis-[48%] basis-[100%] w-[100%]">
              <label
                htmlFor="name"
                className="block mb-[13px] poppins-regular font-[500]"
              >
                YOUR NAME
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleChange}
                className="px-[10px] w-[100%] py-[8px] rounded-[5px]"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email Input */}
            <div className="xl:basis-[48%] xl:mt-[0px] mt-[20px] basis-[100%] w-[100%]">
              <label
                htmlFor="email"
                className="mb-[13px] poppins-regular font-[500] block"
              >
                YOUR EMAIL
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleChange}
                className="px-[10px] block py-[8px] rounded-[5px] w-[100%]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Phone Input */}
          <div className="basis-[100%] w-[100%] mb-[20px] xl:flex-row flex-col flex justify-between items-center">
            <div className="xl:basis-[48%] basis-[100%] w-[100%]">
              <label
                htmlFor="phone"
                className="mb-[13px] poppins-regular font-[500] block"
              >
                YOUR PHONE
              </label>
              <input
                maxLength={10}
                type="tel"
                id="phone"
                value={phone}
                onChange={handleChange}
                className="px-[10px] block py-[8px] rounded-[5px] w-[100%]"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Designation Input */}
            <div className="xl:basis-[48%] xl:mt-[0px] mt-[20px] basis-[100%] w-[100%]">
              <label
                htmlFor="designation"
                className="mb-[13px] poppins-regular font-[500] block"
              >
                YOUR DESIGNATION
              </label>
              <input
                type="text"
                id="designation"
                value={designation}
                onChange={handleChange}
                className="px-[10px] block py-[8px] rounded-[5px] w-[100%]"
              />
              {errors.designation && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.designation}
                </p>
              )}
            </div>
          </div>

          {/* Experience Input */}
          <div className="basis-[100%] w-[100%] xl:flex-row flex-col mb-[20px] flex justify-between items-center">
            <div className="xl:basis-[48%] basis-[100%] w-[100%]">
              <label
                htmlFor="experience"
                className="mb-[13px] poppins-regular font-[500] block"
              >
                YOUR EXPERIENCE
              </label>
              <input
                type="text"
                id="experience"
                value={experience}
                onChange={handleChange}
                className="px-[10px] block py-[8px] rounded-[5px] w-[100%]"
              />
              {errors.experience && (
                <p className="text-red-500 text-sm mt-1">{errors.experience}</p>
              )}
            </div>

            {/* Message Input */}
            <div className="xl:basis-[48%] xl:mt-[0px] mt-[20px] basis-[100%] w-[100%]">
              <label
                htmlFor="message"
                className="mb-[13px] poppins-regular font-[500] block"
              >
                YOUR MESSAGE
              </label>
              <input
                type="text"
                id="message"
                value={message}
                onChange={handleChange}
                className="px-[10px] block py-[8px] rounded-[5px] w-[100%]"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
          </div>

          {/* File Input */}
          <div className="xl:basis-[48%] basis-[100%] xl:flex-row xl:mt-[10px]">
            <label
              htmlFor="cv"
              className="mb-[13px] poppins-regular block xl:inline-block xl:mb-[0px] font-[500]"
            >
              YOUR CV
            </label>
            <div className="xl:inline-block inline relative mt-[20px] xl:mt-[0px] xl:mx-[1rem]">
              <input
                type="file"
                id="cv"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <label
                htmlFor="cv"
                className="bg-primary h-[38px] w-[126.1px] rounded-[5px] flex items-center justify-center text-white cursor-pointer select-none"
              >
                Choose File
              </label>
            </div>
            <span className="font-italic font-[250] inline">
              {cvFile ? cvFile.name : "no file chosen"}
            </span>
            {errors.cv && (
              <p className="text-red-500 text-sm mt-1">{errors.cv}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="basis-[100%] text-center">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-primary rounded-[5px] mt-[20px] py-[10px] px-[26px] text-white hover:bg-blue-600 transition-colors"
            >
              {isLoading ? "SUBMITTING..." : "SUBMIT"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default JobForm;

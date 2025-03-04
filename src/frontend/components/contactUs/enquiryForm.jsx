import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { useCountries } from "use-react-countries";
import React, { useRef, useEffect } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import * as CONFIG from "../../../../config";

const EnquiryForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { countries } = useCountries();
  const [selectedCountry, setSelectedCountry] = useState(countries[221]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    phone: "",

    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Validation
  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      phone: "",
      email: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d+$/.test(formData.phone.trim())) {
      newErrors.phone = "Invalid phone number format";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  function makeIVRRequest() {
    const url = "https://greatvalue.realeasy.in/IVR_Inbound.aspx";
    const fullPhoneNumber = `${selectedCountry.countryCallingCode}${formData.phone}`;

    const params = {
      UID: "fourqt",
      PWD: "wn9mxO76f34=",
      f: "m",
      con: fullPhoneNumber,
      email: "",
      name: "",
      url: "",
      Remark: "",
      Proj: "",
      src: "website",
      amob: "",
      city: "",
      location: "",
      ch: "M",
    };

    const fullUrl = `${url}?UID=fourqt&
    PWD=wn9mxO76f34&f=M&ch=M&con=${fullPhoneNumber}
    &email=${formData.email}&name=${formData.name}&url=""
    &Remark=${formData.message}&Proj=""&src=website&amob=""&
    city=""&location=""&`;

    return fetch(fullUrl)
      .then((response) => {
        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
      })
      .then((data) => data)
      .catch((error) => {
        console.error("Error:", error);
        throw error; // Re-throw the error for handling outside the function
      });
  }

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    setIsLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("country_code", selectedCountry.countryCallingCode);

    try {
      const response = await fetch(`${CONFIG.API_URL}contact`, {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) throw new Error("Submission failed");

      setErrors({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      setIsLoading(false);
      alert("Failed to submit form. Please try again.");
    }

    await makeIVRRequest();
    alert("Form submitted successfully");
    setIsLoading(false);
  };

  // Dropdown handlers
  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="plans px-5 md:pr-12 md:pl-[0px] py-10 md:py-20 flex flex-wrap justify-between">
      <h3 className="text-primary basis-[100%] xl:pl-12 mb-[50px] midlandfontmedium xl:text-[12px] text-[10px] tracking-[5px]">
        GET IN TOUCH WITH US
      </h3>

      <div className="xl:basis-[50%] basis-[100%]">
        {/* Contact Info Section */}
        <div className="flex flex-wrap items-center xl:mt-[2.5rem]">
          <div className="xl:basis-[34%] basis-[26%] h-[0.5px] bg-[#d7d7d7] opacity-[0.5]"></div>
          <IoIosMail className="w-[2rem] xl:mx-[0px] mx-[7px] h-[2rem] basis-[9%] text-primary" />
          <div className="basis-[20%]">
            <a
              href="mailto:marketing@greatvaluerealty.in"
              className="hover:underline inline"
            >
              marketing@greatvaluerealty.in
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center xl:mt-[2.5rem] my-[50px] xl:mt-[40px]">
          <div className="basis-[34%] h-[0.5px] bg-[#d7d7d7] opacity-[0.5]"></div>
          <FaPhoneVolume className="w-[1.5rem] h-[1.5rem] basis-[9%] xl:mx-[0px] mx-[7px] text-primary" />
          <div className="xl:basis-[20%] basis-[40%]">
            <a href="tel:+917777079770" className="hover:underline inline">
              +91 7777079770
            </a>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="xl:basis-[50%] basis-[100%] xl:mt-[-5rem]">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between items-center mb-[25px] flex-wrap">
            {/* Name Input */}
            <div className="relative xl:basis-[45%] mb-[25px] xl:mb-0 basis-[100%]">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="ENTER NAME"
                className="w-full pl-[0.9rem] py-[0.7rem] placeholder-black rounded-[6px] border-b border-gray-200 bg-[#EFF5FA]"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Phone Input */}
            <div className="xl:basis-[45%] relative basis-[100%]">
              <div
                ref={dropdownRef}
                className="absolute inline-block xl:top-[5%] top-[8%] w-[100px] max-w-xs"
              >
                <div className="relative w-full max-w-xs">
                  <button
                    onClick={toggleDropdown}
                    className="flex items-center gap-2 border border-gray-300 rounded-md p-2"
                  >
                    <img
                      src={selectedCountry.flags.svg}
                      alt={selectedCountry.name}
                      className="h-5 w-5 rounded-full"
                    />
                    {selectedCountry.countryCallingCode}
                    <MdOutlineKeyboardArrowDown />
                  </button>

                  {isOpen && (
                    <div className="absolute w-full max-h-60 w-[200px] overflow-y-auto border border-gray-300 mt-2 bg-white shadow-lg rounded-md z-10">
                      {countries.map((country) => (
                        <div
                          key={country.name}
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedCountry(country);
                            setIsOpen(false);
                          }}
                        >
                          <img
                            src={country.flags.svg}
                            alt={country.name}
                            className="h-5 w-5 rounded-full"
                          />
                          {country.name}
                          <span className="ml-auto">
                            {country.countryCallingCode}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <input
                type="tel"
                maxLength={10}
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="ENTER NUMBER"
                className="w-full pl-[6rem] py-[0.7rem] rounded-[6px] placeholder-black border-b border-gray-200 bg-[#EFF5FA]"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Email Input */}
          <div className="relative mb-[25px]">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="ENTER EMAIL"
              className="w-full pl-[0.9rem] py-[0.7rem] rounded-[6px] border-b border-gray-200 placeholder-black bg-[#EFF5FA]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message Input */}
          <div className="relative mb-[25px]">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full border-b border-gray-200 pl-[0.9rem] py-[0.7rem] rounded-[6px] placeholder-black text-black bg-[#EFF5FA]"
              rows="4"
              placeholder="ENTER MESSAGE"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-primary mt-[20px] py-[10px] px-[26px] text-white hover:bg-blue-600 transition-colors"
          >
            {isLoading ? "SUBMITTING..." : "SUBMIT NOW"}
          </button>
        </form>
      </div>
    </section>
  );
};

// const EnquiryForm = () => {
//   const { countries } = useCountries();
//   const [selectedCountry, setSelectedCountry] = useState(countries[221]);
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   // Form states
//   const [name, setName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [errors, setErrors] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     message: "",
//   });

//   // Form validation
//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = {
//       name: "",
//       phone: "",
//       email: "",
//       message: "",
//     };

//     if (!name.trim()) {
//       newErrors.name = "Name is required";
//       isValid = false;
//     }

//     if (!phoneNumber.trim()) {
//       newErrors.phone = "Phone number is required";
//       isValid = false;
//     } else if (!/^\d+$/.test(phoneNumber.trim())) {
//       newErrors.phone = "Phone number must contain only numbers";
//       isValid = false;
//     }

//     if (!email.trim()) {
//       newErrors.email = "Email is required";
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = "Invalid email format";
//       isValid = false;
//     }

//     if (!message.trim()) {
//       newErrors.message = "Message is required";
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append(
//       "phone",
//       `${selectedCountry.countryCallingCode}${phoneNumber}`
//     );
//     formData.append("email", email);
//     formData.append("message", message);

//     try {
//       // Replace with your actual API endpoint
//       const response = await fetch("https://dummy.example.com/enquiry", {
//         method: "POST",
//         body: formData,
//       });

//       if (!response.ok) throw new Error("Submission failed");

//       // Reset form
//       setName("");
//       setPhoneNumber("");
//       setEmail("");
//       setMessage("");
//       setErrors({
//         name: "",
//         phone: "",
//         email: "",
//         message: "",
//       });

//       alert("Form submitted successfully");
//     } catch (error) {
//       console.error("Submission error:", error);
//       alert("Submission failed. Please try again.");
//     }
//   };

//   // Existing dropdown handling code
//   const toggleDropdown = (e) => {
//     e.preventDefault();
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <section className="plans px-5 md:pr-12 md:pl-[0px] py-10 md:py-20 flex flex-wrap justify-between">
//       <h3 className="text-primary basis-[100%] xl:pl-12 mb-[50px] midlandfontmedium xl:text-[12px] text-[10px] tracking-[5px]">
//         GET IN TOUCH WITH US
//       </h3>
//       <div className="xl:basis-[50%] basis-[100%] ">
//         <div className="flex flex-wrap items-center xl:mt-[2.5rem] ">
//           <div className="xl:basis-[34%] basis-[26%]  h-[0.5px] bg-[#d7d7d7] opacity-[0.5]"></div>

//           <IoIosMail className="w-[2rem] xl:mx-[0px] mx-[7px] h-[2rem]  basis-[9%]   text-primary " />
//           <div className="basis-[20%]">
//             <a
//               href="mailto:marketing@greatvaluerealty.in"
//               className="hover:underline inline"
//             >
//               marketing@greatvaluerealty.in
//             </a>
//           </div>
//         </div>
//         <div className="flex flex-wrap items-center xl:mt-[2.5rem] my-[50px] xl:mt-[40px]">
//           <div className="basis-[34%]  h-[0.5px] bg-[#d7d7d7] opacity-[0.5]"></div>
//           <FaPhoneVolume className="w-[1.5rem] h-[1.5rem] basis-[9%] xl:mx-[0px] mx-[7px] text-primary" />
//           <div className="xl:basis-[20%] basis-[40%]">
//             <a href="tel:+917777079770" className="hover:underline inline">
//               +91 7777079770
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="xl:basis-[50%] basis-[100%] xl:mt-[-5rem]">
//         <form action="#">
//           <div className="flex justify-between items-center  mb-[25px] flex-wrap">
//             <div className="relative xl:basis-[45%] mb-[25px] xl:mb-0 basis-[100%]">
//               <input
//                 type="text"
//                 style={{
//                   fontFamily: "poppins",
//                 }}
//                 placeholder="ENTER NAME"
//                 className="w-full pl-[0.9rem]  py-[0.7rem] placeholder-black rounded-[6px] border-b border-gray-200 bg-[#EFF5FA]"
//               />
//             </div>
//             <div className="xl:basis-[45%] relative basis-[100%]">
//               <div
//                 ref={dropdownRef}
//                 className="absolute  inline-block xl:top-[5%] top-[8%] w-[100px] max-w-xs"
//               >
//                 <div className="relative w-full max-w-xs">
//                   <button
//                     onClick={(e) => toggleDropdown(e)}
//                     className="flex items-center gap-2 border border-gray-300 rounded-md p-2"
//                   >
//                     <img
//                       src={selectedCountry.flags.svg}
//                       alt={selectedCountry.name}
//                       className="h-5 w-5 rounded-full"
//                     />
//                     {selectedCountry.countryCallingCode}
//                     <MdOutlineKeyboardArrowDown />
//                   </button>

//                   {isOpen && (
//                     <div className="absolute w-full max-h-60 w-[200px] overflow-y-auto border border-gray-300 mt-2 bg-white shadow-lg rounded-md z-10">
//                       {countries.map((country, index) => (
//                         <div
//                           key={country.name}
//                           className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
//                           onClick={(e) => {
//                             console.log(index);
//                             e.preventDefault();
//                             setSelectedCountry(country);
//                             setIsOpen(false); // Close dropdown after selection
//                           }}
//                         >
//                           <img
//                             src={country.flags.svg}
//                             alt={country.name}
//                             className="h-5 w-5 rounded-full"
//                           />
//                           {country.name}
//                           <span className="ml-auto">
//                             {country.countryCallingCode}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </div>
//               {/* </div> */}
//               <input
//                 type="text"
//                 placeholder="ENTER NUMBER"
//                 className="w-full pl-[6rem] z py-[0.7rem] rounded-[6px]  placeholder-black  border-b border-gray-200 bg-[#EFF5FA]"
//               />
//             </div>
//           </div>
//           <div className="relative mb-[25px]">
//             {/* <label className="block  text-[14px] mb-1 uppercase poppins-regular font-[200] tracking-[3px]">
//               NAME
//             </label> */}
//             <input
//               type="text"
//               placeholder="ENTER EMAIL"
//               className="w-full pl-[0.9rem] py-[0.7rem] rounded-[6px] border-b border-gray-200 placeholder-black  bg-[#EFF5FA] "
//             />
//           </div>
//           <div className="relative  mb-[25px]">
//             {/* <label className="block  text-[14px] mb-1 uppercase poppins-regular font-[200] tracking-[3px]">
//               MESSAGE
//             </label> */}
//             <textarea
//               className="w-full  border-b border-gray-200  pl-[0.9rem] py-[0.7rem] rounded-[6px] placeholder-black text-black bg-[#EFF5FA]"
//               rows="4"
//               placeholder="ENTER MESSAGE"
//               cols="50"
//             ></textarea>
//           </div>
//         </form>
//         <button className="bg-primary mt-[20px] py-[10px] px-[26px] text-white">
//           SUBMIT NOW
//         </button>
//       </div>
//     </section>
//   );
// };

export default EnquiryForm;

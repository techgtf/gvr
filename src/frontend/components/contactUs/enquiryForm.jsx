import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { useCountries } from "use-react-countries";
import React, { useRef, useEffect } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const EnquiryForm = () => {
  const { countries } = useCountries();
  const [selectedCountry, setSelectedCountry] = React.useState(countries[221]);
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    // Adding the event listener for detecting clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="plans px-5 md:pr-12 md:pl-[0px] py-10 md:py-20 flex flex-wrap justify-between">
      <h3 className="text-primary basis-[100%] xl:pl-12 mb-[50px] midlandfontmedium xl:text-[12px] text-[10px] tracking-[5px]">
        GET IN TOUCH WITH US
      </h3>
      <div className="xl:basis-[50%] basis-[100%] ">
        <div className="flex flex-wrap items-center xl:mt-[2.5rem] ">
          <div className="xl:basis-[34%] basis-[26%]  h-[0.5px] bg-[#d7d7d7] opacity-[0.5]"></div>

          <IoIosMail className="w-[2rem] xl:mx-[0px] mx-[7px] h-[2rem]  basis-[9%]   text-primary " />
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
          <div className="basis-[34%]  h-[0.5px] bg-[#d7d7d7] opacity-[0.5]"></div>
          <FaPhoneVolume className="w-[1.5rem] h-[1.5rem] basis-[9%] xl:mx-[0px] mx-[7px] text-primary" />
          <div className="xl:basis-[20%] basis-[40%]">
            <a href="tel:+917777079770" className="hover:underline inline">
              +91 7777079770
            </a>
          </div>
        </div>
      </div>
      <div className="xl:basis-[50%] basis-[100%] xl:mt-[-5rem]">
        <form action="#">
          <div className="flex justify-between items-center  mb-[25px] flex-wrap">
            <div className="relative xl:basis-[45%] mb-[25px] xl:mb-0 basis-[100%]">
              <input
                type="text"
                style={{
                  fontFamily: "poppins",
                }}
                placeholder="ENTER NAME"
                className="w-full pl-[0.9rem]  py-[0.7rem] placeholder-black rounded-[6px] border-b border-gray-200 bg-[#EFF5FA]"
              />
            </div>
            <div className="xl:basis-[45%] relative basis-[100%]">
              <div
                ref={dropdownRef}
                className="absolute  inline-block xl:top-[5%] top-[8%] w-[100px] max-w-xs"
              >
                <div className="relative w-full max-w-xs">
                  <button
                    onClick={(e) => toggleDropdown(e)}
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
                      {countries.map((country, index) => (
                        <div
                          key={country.name}
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                          onClick={(e) => {
                            console.log(index);
                            e.preventDefault();
                            setSelectedCountry(country);
                            setIsOpen(false); // Close dropdown after selection
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
              {/* </div> */}
              <input
                type="text"
                placeholder="ENTER NUMBER"
                className="w-full pl-[6rem] z py-[0.7rem] rounded-[6px]  placeholder-black  border-b border-gray-200 bg-[#EFF5FA]"
              />
            </div>
          </div>
          <div className="relative mb-[25px]">
            {/* <label className="block  text-[14px] mb-1 uppercase poppins-regular font-[200] tracking-[3px]">
              NAME
            </label> */}
            <input
              type="text"
              placeholder="ENTER EMAIL"
              className="w-full pl-[0.9rem] py-[0.7rem] rounded-[6px] border-b border-gray-200 placeholder-black  bg-[#EFF5FA] "
            />
          </div>
          <div className="relative  mb-[25px]">
            {/* <label className="block  text-[14px] mb-1 uppercase poppins-regular font-[200] tracking-[3px]">
              MESSAGE
            </label> */}
            <textarea
              className="w-full  border-b border-gray-200  pl-[0.9rem] py-[0.7rem] rounded-[6px] placeholder-black text-black bg-[#EFF5FA]"
              rows="4"
              placeholder="ENTER MESSAGE"
              cols="50"
            ></textarea>
          </div>
        </form>
        <button className="bg-primary mt-[20px] py-[10px] px-[26px] text-white">
          SUBMIT NOW
        </button>
      </div>
    </section>
  );
};

export default EnquiryForm;

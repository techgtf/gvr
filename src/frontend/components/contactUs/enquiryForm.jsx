import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { useCountries } from "use-react-countries";
import React, { useRef, useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import useFetchData from "../../apiHooks/useFetchData";
import { DATA_ASSET_URL } from '../../../../config';

const EnquiryForm = () => {
  const { countries } = useCountries();
  const [selectedCountry, setSelectedCountry] = React.useState(countries[221]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [formValues, setFormValues] = useState({
    name:'',
    email:'',
    phone:'',
    message:'',
  })
  const [errors, setErrors] = useState({
    name:null,
    email:null,
    phone:null,
    message:null,
  })
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

  const fetchAnotherAPI = async(name, number, email, message)=>{
    const response = await fetch('https://greatvalue.realeasy.in/IVR_Inbound.aspx?UID=fourqt&PWD=wn9mxO76f34=&f=m&con='+number+'&email='+email+'&name='+name+'&Remark='+message+'&src=website&ch=MS');

    return response
  }

  const inputChangeHandler = (e)=>{
    const {name, value} = e.target;
    setFormValues((state)=>({
      ...state,
      [name]:value
    }))
  }

  const formSubmitHandler = async(e)=>{
    debugger
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', formValues.name);
    formData.append('email', formValues.email);
    formData.append('phone', formValues.phone);
    formData.append('message', formValues.message);
    formData.append('country_code', selectedCountry);

    try{
      const response = await fetch(DATA_ASSET_URL+'contact', {
        method: 'POST',
        body: formData,
      });

      // Check if response is OK before parsing
      if(!response.ok){
        throw new Error(`Request Error`);
      }

      const responseData = await response.json();

      if(responseData.errors){
        setErrors(responseData.errors);
      }

      if(responseData.status && responseData.statusCode === 200){
        debugger
        const apiData = await fetchAnotherAPI(formValues.name, formValues.phone, formValues.email, formValues.message);
        // const apiRespose = await apiData.json();
        if(apiData.status !== 200 && !apiData.ok){
          throw new Error('API Error');
        }


        alert('Message sent successfully');
        setFormValues({
          name:'',
          email:'',
          phone:'',
          message:'',
        })
        setErrors({})
      }

    }catch(err){
      alert(err);
    }


  }



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
        <form onSubmit={formSubmitHandler}>
          <div className="flex justify-between items-center  mb-[25px] flex-wrap">
            <div className="relative xl:basis-[45%] mb-[25px] xl:mb-0 basis-[100%]">
              <input
                type="text"
                style={{
                  fontFamily: "poppins",
                }}
                placeholder="ENTER NAME"
                className="w-full pl-[0.9rem]  py-[0.7rem] placeholder-black rounded-[6px] border-b border-gray-200 bg-[#EFF5FA]"
                onChange={(e)=>inputChangeHandler(e)}
                value={formValues.name}
                name="name"
              />
              {errors.name && <span className="text-red-500">{errors['name']}</span>}
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
                            setSelectedCountry(country?.countryCallingCode);
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
                type="number"
                placeholder="ENTER NUMBER"
                className="w-full pl-[6rem] z py-[0.7rem] rounded-[6px]  placeholder-black  border-b border-gray-200 bg-[#EFF5FA]"
                name="phone"
                onChange={(e)=>inputChangeHandler(e)}
                value={formValues.phone}
              />
              {errors.phone && <span className="text-red-500">{errors['phone']}</span>}
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
              name="email"
              onChange={(e)=>inputChangeHandler(e)}
              value={formValues.email}
            />
            {errors.email && <span className="text-red-500">{errors['email']}</span>}
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
              name="message"
              onChange={(e)=>inputChangeHandler(e)}
              value={formValues.message}
            ></textarea>
            {errors.message && <span className="text-red-500">{errors['message']}</span>}
          </div>
        <button type="submit" className="bg-primary mt-[20px] py-[10px] px-[26px] text-white">
          SUBMIT NOW
        </button>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm;

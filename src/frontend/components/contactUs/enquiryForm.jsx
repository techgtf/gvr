import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";

const EnquiryForm = () => {
  return (
    <section className="plans  px-5 md:pr-12 md:pl-[0px] py-10 md:py-14 flex flex-wrap justify-between">
      {" "}
      <h3 className="text-primary basis-[100%] xl:pl-12 mb-[50px] midlandfontmedium xl:text-[12px] text-[10px] tracking-[5px]">
        GET IN TOUCH WITH US
      </h3>{" "}
      <div className="xl:basis-[50%] basis-[100%] ">
        {" "}
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
          <div className="flex justify-between items-center  mb-[15px] flex-wrap">
            {" "}
            <div className="relative basis-[45%]">
              {/* <label className="block  text-[14px] mb-1 uppercase poppins-regular font-[200] tracking-[3px]">
                N
              </label> */}
              <input
                type="text"
                style={{
                  fontFamily: "poppins",
                }}
                placeholder="ENTER NAME"
                className="w-full pl-[0.9rem]  py-[0.7rem] placeholder-black rounded-[6px] border-b border-gray-200 bg-[#EFF5FA]"
              />
            </div>
            <div className="relative basis-[45%]">
              {/* <label className="block  text-[14px] mb-1 uppercase poppins-regular font-[200] tracking-[3px]">
                CONTACT US
              </label> */}
              <input
                type="text"
                placeholder="ENTER NUMBER"
                className="w-full pl-[0.9rem] py-[0.7rem] rounded-[6px]  placeholder-black  border-b border-gray-200 bg-[#EFF5FA]"
              />
            </div>
          </div>
          <div className="relative mb-[15px]">
            {/* <label className="block  text-[14px] mb-1 uppercase poppins-regular font-[200] tracking-[3px]">
              NAME
            </label> */}
            <input
              type="text"
              placeholder="ENTER EMAIL"
              className="w-full pl-[0.9rem] py-[0.7rem] rounded-[6px] border-b border-gray-200 placeholder-black  bg-[#EFF5FA] "
            />
          </div>
          <div className="relative  mb-[15px]">
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

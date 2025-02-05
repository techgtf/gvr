import CommonHeading from "../commonHeading";
import CommonPera from "../commonPera";

const JobForm = () => {
  return (
    <section className="bg-[#EFF5FA] py-[50px] ">
      <div className="max-w-[85%] mx-auto my-0">
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
          className="content !px-0 !py-[35px] lg:max-w-[85%] w-[100%] m-auto  lg:mb-[50px] mb-[20px] text-center"
        >
          <CommonPera
            PeraClass="fontItalic text-justify xl:text-center !p-[0px]"
            //   PeraText="The genesis of Great Value Industries dates to 1970 when the group set up its glassware division. In 1990 GVIL diversified into together supplying quality packaging products to prestigious."
            PeraText={
              "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
          />
        </div>
        <form
          action="#"
          className="flex w-[85%] mx-auto my-0 justify-between  flex-col flex-wrap"
        >
          <div className="basis-[100%] flex justify-between items-center mb-[20px]">
            <div className="basis-[48%]">
              <label
                htmlFor="name"
                className=" block mb-[13px] poppins-regular font-[500] "
              >
                YOUR NAME
              </label>
              <input
                type="text"
                id="name"
                className="px-[10px] w-[100%]  py-[8px] rounded-[5px]"
              />
            </div>
            <div className="basis-[48%]">
              <label
                htmlFor="email"
                className=" mb-[13px] poppins-regular font-[500] block"
              >
                YOUR EMAIL
              </label>
              <input
                type="text"
                id="email"
                className="px-[10px] block py-[8px] rounded-[5px] w-[100%]"
              />
            </div>
          </div>
          <div className="basis-[100%] mb-[20px] flex justify-between items-center">
            <div className="basis-[48%]">
              <label
                htmlFor="phone"
                className=" mb-[13px] poppins-regular font-[500] block"
              >
                YOUR PHONE
              </label>
              <input
                type="text"
                id="phone"
                className="px-[10px] block py-[8px] rounded-[5px] w-[100%]"
              />
            </div>
            <div className="basis-[48%]">
              <label
                htmlFor="designation"
                className=" mb-[13px] poppins-regular font-[500] block"
              >
                YOUR DESINATION
              </label>
              <input
                type="text"
                id="designation"
                className="px-[10px] block py-[8px] rounded-[5px] w-[100%]"
              />
            </div>
          </div>
          <div className="basis-[100%] mb-[20px] flex justify-between items-center">
            <div className="basis-[48%]">
              <label
                htmlFor="experience"
                className=" mb-[13px] poppins-regular font-[500] block"
              >
                YOUR EXPERIENCE
              </label>
              <input
                type="text"
                id="experience"
                className="px-[10px] block py-[8px] rounded-[5px] w-[100%]"
              />
            </div>
            <div className="basis-[48%]">
              <label
                htmlFor="message"
                className=" mb-[13px] poppins-regular font-[500] block"
              >
                YOUR MESSAGE
              </label>
              <input
                type="text"
                id="message"
                className="px-[10px] block py-[8px] rounded-[5px] w-[100%]"
              />
            </div>
          </div>
          <div className="basis-[48%] mt-[10px]">
            <label
              htmlFor="cv"
              className="mb-[13px] poppins-regular font-[500]"
            >
              YOUR CV
            </label>
            <div className="inline-block relative mx-[1rem]">
              <input
                type="file"
                id="cv"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <label
                htmlFor="cv"
                className="bg-primary h-[38px] w-[126.1px] rounded-[5px] flex items-center justify-center text-white cursor-pointer select-none"
              >
                Choose File
              </label>
            </div>
            <span className="font-italic font-[250]">no file chosen</span>
          </div>
          <div className="basis-[100%] text-center">
            <button className="bg-primary rounded-[5px] mt-[20px] py-[10px] px-[26px] text-white">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default JobForm;

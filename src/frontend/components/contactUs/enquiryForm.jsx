const EnquiryForm = () => {
  return (
    <section className="plans  px-5 md:px-12 py-10 md:py-14 flex flex-wrap justify-between">
      {" "}
      <h3 className="text-primary basis-[100%] mb-[50px] midlandfontmedium xl:text-[12px] text-[10px] tracking-[5px]">
        GET IN TOUCH WITH US
      </h3>
      <div className="xl:basis-[50%] basis-[100%]">
        <form action="#">
          <div className="relative mb-[15px]">
            <label className="block  text-[14px] mb-1 uppercase poppins-regular font-[200] tracking-[3px]">
              NAME
            </label>
            <input
              type="text"
              style={{ borderBottom: "1px solid rgb(0, 0, 0)" }}
              className="w-full  border-b border-gray-200 bg-transparent rounded-none"
            />
          </div>
          <div className="flex justify-between items-center  mb-[15px] flex-wrap">
            {" "}
            <div className="relative basis-[45%]">
              <label className="block  text-[14px] mb-1 uppercase poppins-regular font-[200] tracking-[3px]">
                EMAIL
              </label>
              <input
                type="text"
                style={{ borderBottom: "1px solid rgb(0, 0, 0)" }}
                className="w-full rounded-none border-b border-gray-200 bg-transparent"
              />
            </div>
            <div className="relative basis-[45%]">
              <label className="block  text-[14px] mb-1 uppercase poppins-regular font-[200] tracking-[3px]">
                CONTACT US
              </label>
              <input
                type="text"
                style={{ borderBottom: "1px solid rgb(0, 0, 0)" }}
                className="w-full rounded-none  border-b border-gray-200 bg-transparent"
              />
            </div>
          </div>

          <div className="relative  mb-[15px]">
            <label className="block  text-[14px] mb-1 uppercase poppins-regular font-[200] tracking-[3px]">
              MESSAGE
            </label>
            <input
              type="text"
              style={{ borderBottom: "1px solid rgb(0, 0, 0)" }}
              className="w-full rounded-none border-b border-gray-200 bg-transparent"
            />
          </div>
        </form>
        <button className="bg-primary mt-[20px] py-[10px] px-[26px] text-white">
          SUBMIT NOW
        </button>
      </div>
      <div className="xl:basis-[20%] basis-[100%] ">
        <div className="flex flex-wrap xl:justify-end justify-start mt-[40px] xl:mt-[0px]">
          <div className="flex items-start ">
            {" "}
            <img
              src="assets/frontend/images/icons/support.svg"
              className="w-[2rem] h-[2rem] mr-[0.7rem] inline-block"
              alt="support"
            />
            <p className="text-primary text-[12px] ml-[10px] midlandfontmedium tracking-[4px]">
              {" "}
              CALL US
            </p>
          </div>

          <div className="mt-[2px] basis-[100%] xl:text-right text-left">
            <p className="poppins-regular  font-[350]">+91 7291 972 000</p>
          </div>
        </div>

        <div className="flex flex-wrap  xl:mt-[2.5rem] mt-[40px]">
          <div className="flex items-center basis-[100%] xl:justify-end">
            <img
              src="assets/frontend/images/icons/email.svg"
              className="w-[2rem] h-[2rem] mr-[0.7rem] inline-block"
              alt="support"
            />
            <p className="text-primary text-[12px] ml-[10px] midlandfontmedium tracking-[4px]">
              MAIL US
            </p>
          </div>

          <div className="mt-[2px] basis-[100%] xl:text-right text-left">
            <p className="poppins-regular xl:text-right text-left font-[350]">
              marketing@greatvalueindia.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;

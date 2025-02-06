import React from "react";
import WaterMarkHeading from "../verticalWaterMarkHeading";

function Address() {
  const reverseText = (text) => {
    return text.split("").reverse().join("");
  };
  return (
    <section className="plans bg-[#EFF5FA] px-5 md:px-12 mt-[30px] xl:mt-[0px] py-10 md:py-14 relative">
      <div className="flex justify-between flex-wrap">
        <div className="xl:basis-[35%] basis-[100%] item-center self-center">
          <div className="bg-white p-[20px] mb-[30px] text-center">
            <p className="midlandfontmedium uppercase mb-[1rem]  tracking-[4px] text-[8px] xl:text-[10px]">
              Corporate Office
            </p>
            <p className="poppins-regular uppercase xl:text-[14px] tracking-[2px] font-[300] text-[12px]">
              DSC - 319, DLF South Court, Saket New Delhi - 110017
            </p>
          </div>
          <div className="bg-white p-[20px] text-center">
            <p className="midlandfontmedium mb-[1rem] uppercase tracking-[4px] xl:text-[10px] text-[8px]">
              Noida Site Office
            </p>
            <p className="poppins-regular xl:text-[14px] uppercase tracking-[2px] text-[12px] font-[300]">
              GreatValue Projects India Ltd. GH-02, Sec- 107 Noida, U.P.
            </p>
          </div>
        </div>
        <div className="absolute basis-[10%] h-full flex items-center justify-center md:left-[43%] bottom-0">
          <WaterMarkHeading
            rotate={true}
            textWaterMark={reverseText("ADDRESS")}
            className="flex flex-col  items-start justify-center text-[2vw]"
          />
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d86602.14335569784!2d77.361044!3d28.540407!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1738585052573!5m2!1sen!2sin"
          width="400"
          height="450"
          className="xl:basis-[50%] basis-[100%] mt-[30px]"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" // Use camelCase for attributes
        ></iframe>
      </div>

      {/* <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="master_plan">
          <div className="master_plan_img bg-white p-2 md:p-8 flex justify-center w-full md:w-[65%] mt-8 reveal">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d86602.14335569784!2d77.361044!3d28.540407!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1738585052573!5m2!1sen!2sin"
              width="400"
              height="300"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="absolute h-full flex items-center justify-center md:left-[45%] bottom-0">
          <WaterMarkHeading
            textWaterMark="ADDRESS"
            className="flex flex-col items-start justify-center text-[2vw]"
          />
        </div>
        <div className="floor_plans mt-12 lg:m-0 lg:ps-20"></div>
      </div> */}
    </section>
  );
}

export default Address;

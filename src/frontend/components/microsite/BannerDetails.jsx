import React from "react";
import CommonHeading from "../commonHeading";
import SlideIn from "../Animations/SlideIn";

function BannerDetails() {
  return (
    <>
        <div className="md:flex block justify-between items-center px-5 md:px-12 py-5 md:py-14">
          <div className="name_place">
          <SlideIn duration={1} delay={0.2}> 
            <CommonHeading HeadingText="SHARANAM" />
            <p className="place uppercase pt-2">sector 107, noida</p>
            </SlideIn>
          </div>
          <div className="details mt-2 md:mt-0">
          <SlideIn duration={1} delay={0.3}> 
            <p className="md:p-5 p-2 border-y-2 border-gray-300 tracking-[1px] font-semibold">
              2, 3 & 4 BHK LUXURY RESIDENTIAL APARTMENTS
            </p>
            </SlideIn>
          </div>
        </div>
    </>
  );
}

export default BannerDetails;

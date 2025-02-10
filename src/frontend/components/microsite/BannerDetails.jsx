import React from "react";
import CommonHeading from "../commonHeading";
import SlideIn from "../Animations/SlideIn";

function BannerDetails({ heading = "SHARANAM", location = "sector 107, noida", description = "2, 3 & 4 BHK LUXURY RESIDENTIAL APARTMENTS" }) {
  return (
    <div className="md:flex block justify-between items-center px-5 md:px-12 py-10 md:py-8">
      <div className="name_place">
        <SlideIn duration={1} delay={0.3}> 
          <CommonHeading HeadingText={heading} />
          <p className="place uppercase pt-2">{location}</p>
        </SlideIn>
      </div>
      <div className="details mt-5 md:mt-2 md:mt-0">
        <SlideIn duration={1} delay={0.3}> 
          <p className="md:p-5 p-2 border-y-2 border-gray-300 tracking-[1px] font-semibold">
            {description}
          </p>
        </SlideIn>
      </div>
    </div>
  );
}

export default BannerDetails;

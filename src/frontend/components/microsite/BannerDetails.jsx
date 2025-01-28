import React from "react";
import CommonHeading from "../commonHeading";

function BannerDetails() {
  return (
    <>
        <div className="md:flex block justify-between items-center px-5 md:px-12 py-5 md:py-14">
          <div className="name_place">
            <CommonHeading HeadingText="SHARANAM" />
            <p className="place uppercase pt-2">sector 107, noida</p>
          </div>
          <div className="details mt-2 md:mt-0">
            <p className="md:p-5 p-2 border-y-2 border-gray-300 tracking-[1px] font-semibold">
              2, 3 & 4 BHK LUXURY RESIDENTIAL APARTMENTS
            </p>
          </div>
        </div>
    </>
  );
}

export default BannerDetails;

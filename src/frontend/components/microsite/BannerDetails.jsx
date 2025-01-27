import React from "react";
import CommonHeading from "../commonHeading";

function BannerDetails() {
  return (
    <>
      <section className="banner_details bg-white relative w-full h-[20vh]">
        <div className="flex justify-between items-center p-10">
          <div className="name_place">
            <CommonHeading HeadingText="SHARANAM" />
            <p className="place uppercase pt-2">sector 107, noida</p>
          </div>
          <div className="details">
            <p className="p-5 border-y-2 border-gray-300 font-semibold">
              2, 3 & 4 BHK LUXURY RESIDENTIAL APARTMENTS
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default BannerDetails;

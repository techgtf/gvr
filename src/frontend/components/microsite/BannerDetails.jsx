import React from "react";

function BannerDetails({ heading = "SHARANAM", location = "sector 107, noida", description = "2, 3 & 4 BHK LUXURY RESIDENTIAL APARTMENTS" }) {
  return (
    <div className="md:flex block justify-between items-center px-5 md:px-12 py-10 md:py-8">
      <div className="name_place">
          <h1 className="common_heading midlandfontmedium uppercase">{heading} </h1>
          <p className="place uppercase pt-2">{location}</p>
      </div>
      <div className="details mt-5 md:mt-2 md:mt-0">
          <p className="md:p-5 p-2 border-y-2 border-gray-300 tracking-[1px] font-semibold">
            {description}
          </p>
      </div>
    </div>
  );
}

export default BannerDetails;

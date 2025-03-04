import React, { useEffect, useState } from "react";
import "./styles.css";
import * as CONFIG from "../../../../config";
import SlideIn from "../Animations/SlideIn";
import ZoomOut from "../Animations/ZoomOut";
import useFetchData from "../../apiHooks/useFetchData";
import Loader from "../../../common/Loader/loader";
import { BASE_ROOT, DATA_ASSET_URL } from "../../../../config";
import axios from "axios";

export default function Index({ data }) {
  const { heading, description, sub_heading } = data;
  const detailsArray = [heading, description, sub_heading].filter(Boolean);
  const {
    data: logos,
    loading: logoLoading,
    error: logoError,
  } = useFetchData("loan");
  // Handle Loading and Errors
  if (logoLoading) return <Loader />;
  if (logoError)
    return (
      <p className="text-red-500">Error loading Home Loan Logos: {logoError}</p>
    );

  return (
    <div className="area_converter_in lg:py-[80px] py-[30px] uppercase">
      <div className="wrap_div lg:max-w-[95%] lg:px-0 px-[15px] w-full m-auto">
        <div className="grid_div grid lg:grid-cols-2 items-center">
          <div className="left_side flex flex-wrap lg:gap-[40px] gap-[15px] lg:py-5 lg:mb-0 mb-[30px] overflow-hidden">
            {detailsArray &&
              detailsArray.map((text, index) => (
                <SlideIn duration={2} delay={0.7}>
                  <p
                    className="w-full lg:text-justify text-center common_pera"
                    key={index}
                  >
                    {text}
                  </p>
                </SlideIn>
              ))}
          </div>
          <div className="right_side lg:pl-[178px] overflow-hidden">
            <ZoomOut initialScale={1.5} duration={2}>
              <div className="div_in flex justify-between flex-wrap lg:gap-y-[40px] gap-y-[20px] lg:py-[50px] lg:px-[50px] px-[30px] py-[30px] rounded bg-white">
                {logos &&
                  logos.map((data, index) => (
                    <div
                      className="logo_box max-w-[48%] w-full even:flex justify-end"
                      key={index}
                    >
                      <img
                        className="w-[70%]"
                        src={data?.image || ""}
                        alt={data.alt || "logos"}
                      />
                    </div>
                  ))}
              </div>
            </ZoomOut>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import * as CONFIG from "../../../../config";
import Loader from "../../../common/Loader/loader";
import useFetchData from "../../apiHooks/useFetchData";

const MediaCentreLogo = () => {

  // calling api

  const { data: logoData, loading: logoLoading, error: logoError } = useFetchData("news/logo");

  console.log('logoData',logoData);
  // Handle Loading and Errors
  if (logoLoading) return <Loader />;
  if (logoError) return <p className="text-red-500">Error while loading Gallery: {logoError}</p>;


  return (
    <div className="greatValue flex items-center col-span-12 md:col-span-4">
      <div className="box  bg-[#EFF5FA]  p-[1.5rem] flex flex-col  ">
        <h3 className="uppercase text-[17px] tracking-[1px] ">
          Download Great Value Logo
        </h3>

        <div className="logo items-center pt-5 mt-10 flex justify-between">
          <img
            src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/logo-colored.png`}
            alt="Great Value Realty Logo"
            className="w-[40%]"
          />

          <ul>
            <li className="flex gap-2 uppercase items-center py-2">
              {logoData && logoData.map((item, index)=>(
                <>
                  <span>
                    <a
                      href={`${CONFIG.VITE_APP_STORAGE}${item.file}`}
                      download={`logo.${item?.heading?.toLowerCase()}`}
                      className="text-[16px]"
                    >
                      {item.heading}
                    </a>
                  </span>{" "}
                  |
                </>
              ))}
              
              
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MediaCentreLogo;

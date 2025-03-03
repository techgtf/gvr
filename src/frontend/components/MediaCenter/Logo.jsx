import React from "react";
import * as CONFIG from "../../../../config";
import Loader from "../../../common/Loader/loader";
import useFetchData from "../../apiHooks/useFetchData";
import { Link } from "react-router-dom";

const MediaCentreLogo = () => {

  // calling api

  const { data: logoData, loading: logoLoading, error: logoError } = useFetchData("news/logo");

  console.log('logoData',logoData);
  // Handle Loading and Errors
  if (logoLoading) return <Loader />;
  if (logoError) return <p className="text-red-500">Error while loading Gallery: {logoError}</p>;

  const handleDownload = async(item)=>{
    try{
      const fileUrl =  `${CONFIG.VITE_APP_STORAGE}${item.file}`;
      const response = await fetch(fileUrl, {mode:"no-cors"})
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `logo.${item?.heading?.toLowerCase()}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }  catch(err){
      alert("Download Failed:" ,err);
    }
  }


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
                    <Link
                      onClick={()=>handleDownload(item)}
                      // to={`${CONFIG.VITE_APP_STORAGE}${item.file}`}
                      // download={item.heading && `logo.${item?.heading?.toLowerCase()}`}
                      className="text-[16px]"
                    >
                      {item.heading}
                    </Link>
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

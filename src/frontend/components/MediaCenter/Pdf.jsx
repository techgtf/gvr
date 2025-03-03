import React from "react";
import * as CONFIG from "../../../../config";
import Loader from "../../../common/Loader/loader";
import useFetchData from "../../apiHooks/useFetchData";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { Link } from "react-router-dom";

const MediaCentrePdf = () => {
  // calling api

  const {
    data: PDFData,
    loading: PDFLoading,
    error: PDFError,
  } = useFetchData("news/docs");

  // Handle Loading and Errors
  if (PDFLoading) return <Loader />;
  if (PDFError)
    return <p className="text-red-500">Error while loading Data: {PDFError}</p>;

  return (
    <div className="download_sec px-8  col-span-12 md:col-span-5">
      <div className="logo_types  w-full flex justify-center">
        <ul className=" w-full">
          {PDFData &&
            PDFData.map((item, index) => (
              <Link key={index} to={`${CONFIG.VITE_APP_STORAGE}${item.file}`} target="_blank">
                <li className="flex justify-between border-b border-gray-300 items-center py-4">
                  <h3 className="tracking-[3.5px] text-[8px] leading-[3] midlandfontmedium ">
                    {item.heading}
                  </h3>
                  <BsFileEarmarkPdf className="text-xl" />
                </li>
              </Link>
            ))}
          {/* <Link to={`${CONFIG.BASE_ROOT}coming-soon`}>
            <li className="flex justify-between border-b border-gray-300 items-center py-4">
              <h3 className="tracking-[3.5px] text-[8px] leading-[3] midlandfontmedium ">
                Spokesperson Photo
              </h3>
              <BsFileEarmarkPdf className="text-xl" />
            </li>
          </Link>

          <Link to={`${CONFIG.BASE_ROOT}coming-soon`}>
            <li className="flex justify-between border-b border-gray-300 items-center py-4">
              <h3 className="tracking-[3.5px] text-[8px] leading-[3] midlandfontmedium">
                Spokesperson Profile
              </h3>
              <BsFileEarmarkPdf className="text-xl" />
            </li>
          </Link>

          <Link to={`${CONFIG.BASE_ROOT}coming-soon`}>
            <li className="flex justify-between border-b border-gray-300 items-center py-4">
              <h3 className="tracking-[3.5px] text-[8px] leading-[3] midlandfontmedium">
                Company Profile
              </h3>
              <BsFileEarmarkPdf className="text-xl" />
            </li>
          </Link> */}
        </ul>
      </div>
    </div>
  );
};

export default MediaCentrePdf;

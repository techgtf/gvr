import React from "react";
import Header from "../HeaderFooter/Header";
import * as CONFIG from "../../../config";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="page_not_found micro_page bg-[#eff5fa] h-[105vh]">
        <div className="flex justify-center items-center flex-wrap h-[100vh]">
          <div className="flex justify-between flex-wrap  basis-[100%] items-center">
            <h1 className="xl:flex xl:justify-between hidden  justify-center basis-[40%]  midlandfontmedium mt-[20px] w-[100%] text-primary opacity-[0.3]">
              <span className="text-[8vw] midlandfontmedium">4</span>
              <span className="text-[8vw] midlandfontmedium">0</span>
              <span className="text-[8vw] midlandfontmedium">4</span>
            </h1>
            <ul className="flex flex-col basis-[100%] xl:basis-[50%]  text-end  pr-[2rem]">
              <li className=" pb-[4px] underline inline-block">
                <Link to="#">Sharanam - Sector 107, Noida</Link>{" "}
              </li>
              <li className=" pb-[4px] underline inline-block">
                <Link to="#"> Anandam - Sector 107, Noida</Link>{" "}
              </li>
              <li className=" pb-[4px] underline inline-block">
                <Link to="#"> CASA UDAY - 31, Uday Park, New Delhi</Link>
              </li>
              <li className=" pb-[4px] underline inline-block">
                <Link to={CONFIG.BASE_ROOT + "about-us"}>about us</Link>
              </li>
              <li className=" pb-[4px] underline inline-block">
                <Link to={CONFIG.BASE_ROOT + "contact-us"}>contact us</Link>
              </li>
            </ul>
          </div>{" "}
          <div className="w-[100%] flex justify-center flex-col mt-[-100px] xl:mt-[0px]">
            <h2 className="flex xl:justify-between xl:hidden justify-center basis-[40%]  midlandfontmedium mt-[20px] w-[100%] text-primary opacity-[0.3]">
              <span className="text-[8vw] midlandfontmedium">4</span>
              <span className="text-[8vw] midlandfontmedium">0</span>
              <span className="text-[8vw] midlandfontmedium">4</span>
            </h2>
            <div className="text-center">
              <button className="uppercase  border-solid my-[50px] xl:mt-0 w-[40%] xl:w-[auto] border-black border-[1px] xl:mb-[20px]  py-[10px] px-[20px]">
                <Link to={CONFIG.BASE_ROOT}>back to home</Link>
              </button>
            </div>

            <p className="flex xl:hidden justify-between midlandfontmedium mt-[20px] w-[100%] text-primary opacity-[0.3]">
              <span className="text-[8vw] midlandfontmedium">N</span>
              <span className="text-[8vw] midlandfontmedium">O</span>
              <span className="text-[8vw] midlandfontmedium">T</span>
              <span className="text-[8vw] midlandfontmedium"></span>
              <span className="text-[8vw] midlandfontmedium">F</span>
              <span className="text-[8vw] midlandfontmedium">O</span>
              <span className="text-[8vw] midlandfontmedium">U</span>
              <span className="text-[8vw] midlandfontmedium">N</span>
              <span className="text-[8vw] midlandfontmedium">D</span>
            </p>
          </div>
          <div className="basis-[100%] hidden xl:block">
            <p className="flex justify-between midlandfontmedium mt-[20px] w-[100%] text-primary opacity-[0.3]">
              <span className="text-[8vw] midlandfontmedium">N</span>
              <span className="text-[8vw] midlandfontmedium">O</span>
              <span className="text-[8vw] midlandfontmedium">T</span>
              <span className="text-[8vw] midlandfontmedium"></span>
              <span className="text-[8vw] midlandfontmedium">F</span>
              <span className="text-[8vw] midlandfontmedium">O</span>
              <span className="text-[8vw] midlandfontmedium">U</span>
              <span className="text-[8vw] midlandfontmedium">N</span>
              <span className="text-[8vw] midlandfontmedium">D</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;

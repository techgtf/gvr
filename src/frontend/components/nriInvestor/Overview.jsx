import WaterMarkHeading from "../waterMarkHeading";
import CommonBtn from "../commonBtn";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import { useImageReveal } from "../useImageReveal";
import * as CONFIG from "../../../../config";

const nriOverview = () => {
  const animationConfig = {
    // passing animation as prop for WaterMarkHeading
    // from: { y: 100, opacity: 0 }, to: { y: 0, opacity: 1, duration: 1 },
    from: { x: -100, opacity: 0 },
    to: { x: 0, opacity: 1, duration: 1 },
  };
  useImageReveal(".reveal");
  return (
    <>
      <div className="max-w-[90%] m-auto relative mb-[2rem] md:mb-[5rem]">
        <div className="flex items-center justify-between md:flex-row flex-col-reverse xl:mt-[4rem] lg:mt-[2rem] flex-wrap gap-[50px]">
          <div className="basis-[100%] xl:basis-[calc(60%-50px)] flex-none">
            <h2 className="sectionHeading text-center tracking-[0px] md:tracking-[4px] leading-[24px] md:leading-[40px] xl:text-right text-[14px] xl:!text-[16px] midlandfontmedium text-primary">
            Great Value Realty Welcomes NRI Investors
            </h2>
            <p
              className="my-[1rem] text-justify text-[13px] xl:!mt-[30px] poppins-regular text-black font-[300]"
            >
             For Great Value Realty, growth has always been at the heart of its identity, intertwined with a commitment to social responsibility. In recent times, India has emerged as an enticing opportunity for Non-Resident Indians (NRIs) seeking investment avenues, driven by the rise of innovative private integrated townships and robust infrastructure across cities and their satellite areas. As a result, investing in Indian real estate has yielded significant profitability.
            </p>
          </div>
          <div className="xl:basis-[calc(40%-50px)]">
            <img
            // "assets/frontend/images/aboutus/verticals/vertical-1.webp"
              src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/nri-investor/sideImg.webp`}
              alt="vertical-1"
              className=" reveal flex-none"
            />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default nriOverview;

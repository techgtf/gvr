import WaterMarkHeading from "../waterMarkHeading";
import CommonBtn from "../commonBtn";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import { useImageReveal } from "../useImageReveal";
import * as CONFIG from "../../../../config";
import CommonHeading from "../commonHeading";

const nriOverview = ({data}) => {
  const {heading,description,image}=data;
  const animationConfig = {
    from: { x: -100, opacity: 0 },
    to: { x: 0, opacity: 1, duration: 1 },
  };
  useImageReveal(".reveal");

  return (
    <>
      <div className="max-w-[90%] m-auto relative xl:py-[80px] md:pt-[20px] md:pb-[80px] pb-[40px]">
        <div className="flex items-center justify-between md:flex-row flex-col-reverse flex-wrap gap-[30px] md:gap-[50px]">
          <div className="basis-[100%] xl:basis-[calc(60%-50px)] flex-none">
<<<<<<< HEAD
            <CommonHeading TagName="h1" HeadingText=" Great Value Realty Welcomes NRI Investors" />
=======
            {heading &&(
              <h2 className="sectionHeading text-left tracking-[0px] md:tracking-[4px] leading-[24px] md:leading-[40px] text-[14px] xl:!text-[16px] midlandfontmedium text-primary">
              {heading}
              </h2>
            )}
            {description && (
>>>>>>> d1980c8 (api with navbar scroll)
            <p
              className="my-[1rem] text-justify common_pera xl:!mt-[30px] poppins-regular text-black font-[300]"
            >
<<<<<<< HEAD
              For Great Value Realty, growth has always been at the heart of its identity, intertwined with a commitment to social responsibility. In recent times, India has emerged as an enticing opportunity for Non-Resident Indians (NRIs) seeking investment avenues, driven by the rise of innovative private integrated townships and robust infrastructure across cities and their satellite areas. As a result, investing in Indian real estate has yielded significant profitability.
=======
             {description}
>>>>>>> d1980c8 (api with navbar scroll)
            </p>
          )}
          </div>
          <div className="xl:basis-[calc(40%-50px)]">
            <img
<<<<<<< HEAD
              // "assets/frontend/images/aboutus/verticals/vertical-1.webp"
              src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/nri-investor/sideImg.webp`}
              alt="vertical-1"
              className=" reveal flex-none min-h-[50vh] w-full object-cover"
=======
              src={`${CONFIG.VITE_APP_STORAGE}${image || ""}`}
              alt={heading || "overview image"}
              className=" reveal flex-none"
>>>>>>> d1980c8 (api with navbar scroll)
            />
          </div>

        </div>
      </div>
    </>
  );
};

export default nriOverview;

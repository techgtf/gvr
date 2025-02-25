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
            {heading &&(
              <h2 className="sectionHeading text-left tracking-[0px] md:tracking-[4px] leading-[24px] md:leading-[40px] text-[14px] xl:!text-[16px] midlandfontmedium text-primary">
              {heading}
              </h2>
            )}
            {description && (
            <p
              className="my-[1rem] text-justify common_pera xl:!mt-[30px] poppins-regular text-black font-[300]"
            >
             {description}
            </p>
          )}
          </div>
          <div className="xl:basis-[calc(40%-50px)]">
            <img
              src={`${CONFIG.VITE_APP_STORAGE}${image || ""}`}
              alt={heading || "overview image"}
              className=" reveal flex-none"
            />
          </div>

        </div>
      </div>
    </>
  );
};

export default nriOverview;

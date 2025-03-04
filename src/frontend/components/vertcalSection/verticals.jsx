import React from "react";
import "./verticals.css";
import WaterMarkHeading from "../waterMarkHeading";
import { Link } from "react-router-dom";
import * as CONFIG from "../../../../config";
import { GoArrowUpRight } from "react-icons/go";
import { useImageReveal } from "../useImageReveal";
import ZoomOut from "../Animations/ZoomOut";
import SlideIn from "../Animations/SlideIn";
import useFetchData from "../../apiHooks/useFetchData";

export default function Verticals({ heading }) {
  // useImageReveal(".reveal")

  const animationConfig = {
    // passing animation as prop for WaterMarkHeading
    from: { x: -100, opacity: 0 },
    to: { x: 0, opacity: 1, duration: 1 },
  };
  const { data, loading, error } = useFetchData("verticals");
  const verticalData = data;

  return (
    <div className="verticalSection bg-[#EFF5FA] 2xl:py-[85px] xl:py-[75px] py-[50px] text-center lg:mt-0 mt-[50px]">
      <div className="section_in xl:max-w-[80%] m-auto max-w-[100%]">
        <WaterMarkHeading
          // sectionHeading='Building Futures, Financing Dreams, Beyond Real Estate'
          sectionHeading={heading}
          animationConfig={animationConfig}
        />
        <div className="flex_div flex justify-between flex-wrap 2xl:mt-16 xl:mt-14 mt-[40px] xl:gap-0 gap-[44px] lg:px-0 px-4">
          {verticalData &&
            verticalData.map((item) => (
              <div className="boxes relative lg:w-[47%] w-full" key={item.id}>
                <Link
                  to={`${CONFIG.BASE_ROOT}coming-soon`}
                  className="relative block overflow-hidden cursor-pointer focus-visible:outline-none focus-visible:ring-0"
                >
                  <ZoomOut initialScale={1.5} duration={2}>
                    <Link
                      to={`${CONFIG.BASE_ROOT}coming-soon`}
                      className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-transparent
             focus-visible:ring-4 focus-visible:ring-transparent rounded-md transition-all"
                    >
                      <img
                        className="lg:h-[300px] h-[300px] cursor-pointer w-full object-cover"
                        src={item.image}
                        alt={item.alt}
                      />
                    </Link>
                  </ZoomOut>
                  <span className="link_arrow absolute bottom-[15px] right-[15px] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-transparent">
                    <GoArrowUpRight className="cursor-pointer lg:text-[45px] text-[35px]" />
                  </span>
                </Link>
                <SlideIn duration={2} delay={0.5}>
                  <span className="title block pt-6 pb-3 text-[18px] uppercase tracking-[3px]">
                    {item.name}
                  </span>
                  <p className="desc">{item.short_description}</p>
                </SlideIn>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

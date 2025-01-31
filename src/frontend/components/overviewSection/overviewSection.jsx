import React from "react";
import "./styles.css";
import CommonHeading from "../commonHeading";
import CommonPera from "../commonPera";
import CommonBtn from "../commonBtn";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import { useTextAnimation } from "../useTextAnimation";
import SlideIn from "../Animations/SlideIn";

export default function OverviewSection({ heading, paragraph }) {
  // const sectionRef = useTextAnimation(
  //   { from: { y: 100, opacity: 0 }, to: { y: 0, opacity: 1, duration: 1 } },
  //   []
  // );

  return (
    <div
      className="overview_section 2xl:pt-[80px] xl:pt-[70px] pt-[30px] lg:pb-0 pb-[20px] lg:mb-0 mb-[30px]"
    // data-speed="clamp(.9)"
    // ref={sectionRef}
    >
      <div className="headingWrap lg:max-w-[79%] max-w-[95%] m-auto text-center">
        <CommonHeading HeadingText={heading} />
      </div>
      <SlideIn duration={2} delay={0.5}>
        <div className="content lg:max-w-[85%] w-[100%] m-auto lg:mt-[50px] lg:mb-[50px] mb-[20px] text-center">
          <CommonPera
            PeraclassName="fontItalic"
            //   PeraText="The genesis of Great Value Industries dates to 1970 when the group set up its glassware division. In 1990 GVIL diversified into together supplying quality packaging products to prestigious."
            PeraText={paragraph}
          />
        </div>
        <CommonBtn to={""} TagName={Link} target="_blank">
          Know More <BsArrowUpRight />{" "}
        </CommonBtn>
      </SlideIn>
    </div>
  );
}

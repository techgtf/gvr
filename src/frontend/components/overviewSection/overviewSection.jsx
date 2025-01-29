import React from "react";
import "./styles.css";
import CommonHeading from "../commonHeading";
import CommonPera from "../commonPera";
import CommonBtn from "../commonBtn";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import { useTextAnimation } from "../useTextAnimation";

export default function OverviewSection({ heading, paragraph }) {
  const sectionRef = useTextAnimation(
    { from: { y: 100, opacity: 0 }, to: { y: 0, opacity: 1, duration: 1 } },
    []
  );

  return (
    <div
      className="overview_section"
      // data-speed="clamp(.9)"
      ref={sectionRef}
    >
      <div className="headingWrap max-w-[79%] m-auto text-center">
        <CommonHeading HeadingText={heading} />
      </div>
      <div className="content max-w-[85%] m-auto lg:mt-[50px] lg:mb-[50px] text-center">
        <CommonPera
          PeraclassName="fontItalic"
          //   PeraText="The genesis of Great Value Industries dates to 1970 when the group set up its glassware division. In 1990 GVIL diversified into together supplying quality packaging products to prestigious."
          PeraText={paragraph}
        />
      </div>
      <CommonBtn to={""} TagName={Link} target="_blank">
        Know More <BsArrowUpRight />{" "}
      </CommonBtn>
    </div>
  );
}

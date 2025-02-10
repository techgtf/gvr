import React, { useRef, useEffect, useLayoutEffect } from "react";
import "./styles.css";
import CommonHeading from "../commonHeading";
import CommonPera from "../commonPera";
import CommonBtn from "../commonBtn";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// import { useTextAnimation } from "../useTextAnimation";
// import SlideIn from "../Animations/SlideIn";


export default function OverviewSection({ heading, paragraph, showKnowMore, pageLink }) {

  const overlayLeftRef = useRef(null);
  const overlayRightRef = useRef(null);
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // Start when section enters the viewport
        toggleActions: "play none none none",
      },
    });

    // Step 1: Animate overlay width to 0%
    tl.to([overlayLeftRef.current, overlayRightRef.current], {
      width: "0%",
      duration: 1.5,
      ease: "power2.out",
    });

    // Step 2: Start content animation slightly before overlay animation ends
    tl.fromTo(
      contentRef.current,
      { y: 50, opacity: 0 }, // Reduced initial Y movement for a quicker effect
      {
        y: 0,
        opacity: 1,
        duration: 0.4, // Faster animation
        ease: "power1.out",
      },
      "-=0.3" // Start 0.5s before overlay animation finishes
    );
  }, [location.pathname]);
console.log(location.pathname);


  return (
    <div
      ref={containerRef}
      className="overview_section 2xl:pt-[45px] xl:pt-[60px] pt-[30px] lg:pb-0 pb-[0] lg:mb-0 mb-[50px]"
    // data-speed="clamp(.9)"
    // ref={sectionRef}
    >
      <div className="headingWrap lg:max-w-[79%] max-w-[95%] m-auto text-center">
        <CommonHeading
          HeadingText={heading}
          // HeadingClass="xl:text-center text-left"
        />
      </div>
      {/* <SlideIn duration={2} delay={0.5}> */}
      <div className="wrap_content relative overflow-hidden m-auto lg:max-w-[85%] w-[100%]">

        <div ref={overlayLeftRef} className="overlay_overview overlay_left absolute z-[2] left-0 top-0 bottom-0 h-full bg-[#fff] w-[50%]"></div>

        <div className="content lg:mt-[50px] overflow-hidden lg:mb-[50px] mb-[20px] text-center">
          <div className="opacity-0" ref={contentRef}>
            <CommonPera
              PeraclassName="fontItalic"
              //   PeraText="The genesis of Great Value Industries dates to 1970 when the group set up its glassware division. In 1990 GVIL diversified into together supplying quality packaging products to prestigious."
              PeraText={paragraph}
            />
          </div>
        </div>
        <div ref={overlayRightRef} className="overlay_overview overlay_right absolute z-[2] right-0 top-0 bottom-0 h-full bg-[#fff] w-[50%]"></div>
      </div>
      {
        showKnowMore && (
          <CommonBtn to={pageLink} TagName={Link} target="_blank">
            Know More <BsArrowUpRight />{" "}
          </CommonBtn>
        )
      }
      {/* </SlideIn> */}
    </div>
  );
}

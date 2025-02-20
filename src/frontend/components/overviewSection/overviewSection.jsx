import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./styles.css";
import CommonHeading from "../commonHeading";
import CommonPera from "../commonPera";
import CommonBtn from "../commonBtn";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OverviewSection({ heading, paragraph, showKnowMore, pageLink, tag, bgColor = "" }) {
  const overlayLeftRef = useRef(null);
  const overlayRightRef = useRef(null);
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  const location = useLocation(); // Track route changes

  useEffect(() => {
    if (!containerRef.current) return;

    // 🌟 Reset animation state before running new animation
    gsap.set(contentRef.current, { opacity: 0, y: 50 });
    gsap.set([overlayLeftRef.current, overlayRightRef.current], { width: "50%" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        once: false, // 🔥 Ensure animation plays every time it's in view
      },
    });

    tl.to([overlayLeftRef.current, overlayRightRef.current], {
      width: "0%",
      duration: 1.5,
      ease: "power2.out",
    });

    tl.fromTo(
      contentRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power1.out",
      },
      "-=0.3"
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Proper cleanup
    };
  }, [location.pathname]); // 🔥 Ensures animation resets when route changes

  return (
    <div
      ref={containerRef}
      className={`overview_section 2xl:pt-[45px] xl:pt-[60px] pt-[30px] lg:pb-0 pb-[0] lg:mb-0 mb-[50px] ${bgColor}`}
    // data-speed="clamp(.9)"
    // ref={sectionRef}
    >

      <div className="headingWrap lg:max-w-[85%] max-w-[95%] m-auto text-center">
        <CommonHeading TagName={tag} HeadingText={heading} />
      </div>

      <div className="wrap_content relative overflow-hidden m-auto lg:max-w-[85%] w-[100%]">
        <div ref={overlayLeftRef} className="overlay_overview overlay_left absolute z-[2] left-0 top-0 bottom-0 h-full bg-[#fff] w-[50%]"></div>

        <div className="content lg:mt-[50px] mt-[10px] overflow-hidden lg:mb-[50px] mb-[20px] text-center">
          <div className="opacity-0" ref={contentRef}>
            <CommonPera PeraclassName="fontItalic" PeraText={paragraph} />
          </div>
        </div>

        <div ref={overlayRightRef} className="overlay_overview overlay_right absolute z-[2] right-0 top-0 bottom-0 h-full bg-[#fff] w-[50%]"></div>
      </div>

      {showKnowMore && (
        <CommonBtn to={pageLink} TagName={Link} target="_blank">
          Know More <BsArrowUpRight />
        </CommonBtn>
      )}
    </div>
  );
}

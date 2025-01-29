import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import FadeIn from "../../Animations/FadeIn";
import CommonHeading from "../../commonHeading";

function Highlights() {
  const listRef = useRef(null);

  const highlights = [
    "3 sides open corner plot",
    "Fully developed lush green landscape with sculptural mound",
    "Exclusive Musical Fountain",
    "All green facing apartments",
    "Well crafted layouts to ensure sufficient natural light",
    "Cross ventilation throughout the day",
    "RFID security for vehicle entry",
    "Grand entrance lobby in each tower",
  ];

  useEffect(() => {
    const listItems = listRef.current.children;
    gsap.fromTo(
      listItems,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 90%",
          end: "bottom 20%",
        },
      }
    );
  }, []);

  return (
    <div className="col-span-4">
      <div className="about_heading">
        <FadeIn duration={2} delay={0.5}>
          <CommonHeading HeadingText="Highlights" />
        </FadeIn>
        <ol className="pt-14" ref={listRef}>
          {highlights.map((highlight, index) => (
            <li key={index} className="flex gap-3 items-start py-2">
              <div className="num bg-[#749CBE] rounded-full text-white w-6 h-6 leading-6 text-center flex-shrink-0">
                {index + 1}
              </div>
              {highlight}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Highlights;

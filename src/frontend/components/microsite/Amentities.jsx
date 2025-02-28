import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom"; // ✅ Route track karne ke liye
import Slider from "./Slider/Slider";
import CommonHeading from "../commonHeading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FadeIn from "../Animations/FadeIn";

gsap.registerPlugin(ScrollTrigger);

function Amentities({
  AmentitiesData = null,
  images = [],
  headingText = "Amentities"
}) {
  const sectionRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (!sectionRef.current) return;

    const elements = sectionRef.current.querySelectorAll(".amentity");

    // ✅ Reset animation state before running new animation
    gsap.set(elements, { opacity: 0, x: 50 });

    const animation = gsap.to(elements, {
      opacity: 1,
      x: 0,
      duration: 1,
      stagger: 0.2, // ✅ Thoda delay har element ke beech
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        once: false, // ✅ Ensure animation plays every time it's in view
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // ✅ Proper cleanup
    };
  }, [location.pathname]); // ✅ Ensures animation resets when route changes

  return (
    <section className="amentities relative py-10 md:py-14" id="amentities" ref={sectionRef}>
      <div className="grid grid-cols-12 gap-5 md:gap-20 px-5 md:px-12">
        <div className="sm:col-span-3 col-span-12">
          <div className="about_heading text-center md:text-start">
            <FadeIn duration={2} delay={0.5}>
              <CommonHeading HeadingText={headingText} />
            </FadeIn>
          </div>
        </div>
        <div className="sm:col-span-9 col-span-12">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-4">
            {AmentitiesData && AmentitiesData.amenities_icons.map((item, i) => (
              <>
                <div
                  key={i}
                  className="amentity py-3 flex flex-col md:flex-row justify-center md:justify-start gap-5 items-center"
                >
                  <div className="icon">
                    <img src={item['amenities'].icons} alt={`${item['amenities'].title} Icon`} className="w-[2.5rem]" />
                  </div>
                  <div className="text uppercase text-center md:text-start">
                    <p>{item['amenities'].title} ffff</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      {/* Pass images to Slider */}
      <div className="pt-5 relative">
        <Slider images={AmentitiesData} />
      </div>
    </section>
  );
}

export default Amentities;

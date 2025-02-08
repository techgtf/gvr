import React, { useEffect, useLayoutEffect, useRef } from "react";
import Slider from "./Slider/Slider";
import CommonHeading from "../commonHeading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FadeIn from "../Animations/FadeIn";

// Import images
import swimmingPool from "/assets/frontend/images/microsite/amentities/icons/swimming-pool.png";
import yoga from "/assets/frontend/images/microsite/amentities/icons/yoga.png";
import gymnasium from "/assets/frontend/images/microsite/amentities/icons/gymnasium.png";
import theater from "/assets/frontend/images/microsite/amentities/icons/theater.png";
import library from "/assets/frontend/images/microsite/amentities/icons/library.png";
import basketballBall from "/assets/frontend/images/microsite/amentities/icons/basketballBall.png";
import runningTrack from "/assets/frontend/images/microsite/amentities/icons/running-track.png";
import park from "/assets/frontend/images/microsite/amentities/icons/park.png";

gsap.registerPlugin(ScrollTrigger);

function Amentities({ 
  AmentitiesData = [
    { name: "Swimming Pool", image: swimmingPool },
    { name: "Yoga & Aerobics Hall", image: yoga },
    { name: "Gymnasium", image: gymnasium },
    { name: "Mini Home Theater", image: theater },
    { name: "Library", image: library },
    { name: "Basketball", image: basketballBall },
    { name: "Jogging Track", image: runningTrack },
    { name: "Park", image: park },
  ], 
  images = [], // Accept images as a prop
  headingText = "Amentities" 
}) {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".amentity");

    gsap.fromTo(
      elements,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
        },
      }
    );
  }, []);

  return (
    <section
      className="amentities relative py-10 md:py-14"
      id="amentities"
      ref={sectionRef}
    >
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
            {AmentitiesData.map((item, i) => (
              <div
                key={i}
                className="amentity py-3 flex flex-col md:flex-row justify-center md:justify-start gap-5 items-center"
              >
                <div className="icon">
                  <img src={item.image} alt={item.name} className="w-[2.5rem]" />
                </div>
                <div className="text uppercase text-center md:text-start">
                  <p>{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pass images to Slider */}
      <div className="pt-5 relative">
        <Slider images={images} />  
      </div>
    </section>
  );
}

export default Amentities;

import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import WaterMarkHeading from "../verticalWaterMarkHeading";
import CommonHeading from "../commonHeading";
import { useImageReveal } from "../useImageReveal";
import { Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import FadeIn from "../Animations/FadeIn";
import gsap from "gsap";

function Plans({ masterPlanData, unitData }) {
  const [open, setOpen] = useState(false);
  const [activeUnit, setActiveUnit] = useState(Object.keys(unitData)[0]); // Default to the first unit
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMasterPlanOpen, setIsMasterPlanOpen] = useState(false);

  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".unit");

    let animation = gsap.fromTo(
      elements,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
        },
      }
    );
  }, [location.pathname]);

  const handleUnitChange = (unit) => {
    setActiveUnit(unit);
  };

  useImageReveal(".reveal");

  const openLightbox = (index, isMasterPlan = false) => {
    setCurrentIndex(index);
    setOpen(true);
    document.body.classList.add("lightbox-open");
    
    if (isMasterPlan) {
      setIsMasterPlanOpen(true);
    } else {
      setIsMasterPlanOpen(false);
    }
  };

  const closeLightbox = () => {
    setOpen(false);
    document.body.classList.remove("lightbox-open");
  };

  return (
    <section ref={sectionRef} className="plans bg-[#EFF5FA] px-5 md:px-12 py-10 md:py-14 relative" id="plan">
      <div className="grid lg:grid-cols-2 grid-cols-1">
        {/* Master Plan Section */}
        {masterPlanData && (
          <div className="master_plan">
            <FadeIn duration={2} delay={0.5}>
              <CommonHeading HeadingText="Master Plan" />
            </FadeIn>
            <div
              className="master_plan_img bg-white p-2 md:p-8 flex justify-center w-full md:w-[65%] mt-8 reveal"
              onClick={() => openLightbox(0, true)}
            >
              <img
                src={masterPlanData[0].image}
                alt={masterPlanData[0].alt}
                className="cursor-pointer w-full"
              />
            </div>
          </div>
        )}

        {/* Watermark Heading */}
        <div className="absolute h-full flex items-center justify-center md:left-[45%] bottom-0">
          <WaterMarkHeading textWaterMark="FLOOR PLANS" className="flex flex-col items-start justify-center text-[2vw]" />
        </div>

        {/* Floor Plans Section */}
        {unitData && (
          <div className="floor_plans mt-12 lg:m-0 lg:ps-20">
            <div className="md:flex justify-between items-center">
             {unitData[activeUnit] && unitData[activeUnit].length > 0 ? <FadeIn duration={2} delay={0.6}>
                <CommonHeading HeadingText="Floor Plans" />
              </FadeIn> : ""}
              <div className="flex gap-2 md:gap- py-4 mt-4 md:mt-0">
                {Object.keys(unitData).map((unit) => (
                  <button
                    key={unit}
                    className={`px-6 py-1 text-[14px] ${activeUnit === unit ? "bg-[#33638B] text-white" : "bg-transparent border border-black"}`}
                    onClick={() => handleUnitChange(unit)}
                  >
                    {unit.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="slider">
              {unitData[activeUnit] && unitData[activeUnit].length > 0 ? unitData[activeUnit].map((plan, index) => (
                <div key={index} className="unit bg-white p-5 flex flex-col md:flex-row justify-between mt-10 object-cover">
                  <img
                    src={plan.image}
                    alt={`plan ${index + 1}`}
                    className="w-[80%] mx-auto md:w-[30%] cursor-pointer"
                    onClick={() => openLightbox(index)}
                  />
                  <div className="flex flex-col justify-between mt-5 pr-10 tracking-wider uppercase md:mt-0">
                    <h5 className="font-semibold text-[16px] mb-4">{plan.type}</h5>
                    <p>Carpet Area: {plan.carpetArea}</p>
                    <p>Balcony Area: {plan.balconyArea}</p>
                    <p>Total Super Area: {plan.totalArea}</p>
                    <p>Built Up Area: {plan.buildArea}</p>
                  </div>
                </div>
              )) : <div><img className="mt-5 lg:mt-10" src="assets/frontend/images/microsite/vilasa/plans/alt.jpg" alt="ALt Image"/></div>}
            </div>
          </div>
        )}
      </div>

      {/* Master Plan Lightbox */}
      {open && isMasterPlanOpen && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={currentIndex}
          slides={masterPlanData.map((item) => ({
            src: item.image,
            title: item.alt,
            description: "Click to open in full view",
          }))}
          thumbs={masterPlanData.map((item) => ({
            src: item.image,
            title: item.alt,
          }))}
          zoom={{ maxZoomPixelRatio: 2 }}
          plugins={[Fullscreen, Zoom]}
        />
      )}

      {/* Floor Plan Lightbox */}
      {open && !isMasterPlanOpen && (
        <Lightbox
          open={open}
          close={closeLightbox}
          index={currentIndex}
          slides={unitData[activeUnit].map((item) => ({
            src: item.image,
            title: item.type,
            description: "Click to open in full view",
          }))}
          thumbs={unitData[activeUnit].map((item) => ({
            src: item.image,
            title: item.type,
          }))}
          zoom={{ maxZoomPixelRatio: 2 }}
          plugins={[Fullscreen, Zoom]}
        />
      )}
    </section>
  );
}

export default Plans;

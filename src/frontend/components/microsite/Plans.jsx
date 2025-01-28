import React, { useState } from "react";
import plan1 from "/assets/frontend/images/microsite/plans/floor_plans/plan1.png";
import plan2 from "/assets/frontend/images/microsite/plans/floor_plans/plan2.png";
import master_plan_img from "/assets/frontend/images/microsite/plans/masterplan.png";
import WaterMarkHeading from "../verticalWaterMarkHeading";
import CommonHeading from "../commonHeading";
import { useImageReveal } from "../useImageReveal";
import {Fullscreen, Zoom} from 'yet-another-react-lightbox/plugins'

import Lightbox from "yet-another-react-lightbox"; // Import the new lightbox package
import "yet-another-react-lightbox/styles.css"; // Import lightbox styles
import FadeIn from "../Animations/FadeIn";

function Plans() {
  const [open, setOpen] = useState(false);
  const [activeUnit, setActiveUnit] = useState("unit1");
  const [currentIndex, setCurrentIndex] = useState(0); // To track the current index

  const unitData = {
    unit1: [
      {
        image: plan1,
        type: "TypeA: 2B/R",
        carpetArea: "752 Sq.Ft.",
        balconyArea: "69 Sq.Ft.",
        totalArea: "1139 Sq.Ft.",
      },
      {
        image: master_plan_img,
        type: "TypeB: 2B/R+S",
        carpetArea: "873 Sq.Ft.",
        balconyArea: "81 Sq.Ft.",
        totalArea: "1295 Sq.Ft.",
      },
    ],
    unit2: [
      {
        image: plan2,
        type: "TypeB: 2B/R+S",
        carpetArea: "873 Sq.Ft.",
        balconyArea: "81 Sq.Ft.",
        totalArea: "1295 Sq.Ft.",
      },
      {
        image: plan1,
        type: "TypeA: 2B/R",
        carpetArea: "752 Sq.Ft.",
        balconyArea: "69 Sq.Ft.",
        totalArea: "1139 Sq.Ft.",
      },
    ],
  };

  const handleUnitChange = (unit) => {
    setActiveUnit(unit);
  };

  useImageReveal(".reveal");

  return (
    <section className="plans bg-[#EFF5FA] px-5 md:px-12 py-5 md:py-14 relative" id="plan">
      <div className="grid sm:grid-cols-2 grid-cols-1">
        <div className="master_plan">
        <FadeIn duration={2} delay={0.5}> 
          <CommonHeading HeadingText="master plan" />
          </FadeIn>
          <div className="master_plan_img bg-white p-2 md:p-8 flex justify-center w-full md:w-[65%] mt-14 reveal" onClick={()=>setOpen(true)}>
              <img
                src={master_plan_img}
                alt="Master Plan"
                className="cursor-pointer w-full"
              />
          </div>
        </div>
        <div className="absolute h-full flex items-center justify-center md:left-[45%] bottom-0">
          <WaterMarkHeading
            textWaterMark="FLOOR PLANS"
            className="flex flex-col items-start justify-center text-[2vw]"
          />
        </div>
        <div className="floor_plans mt-10 sm:m-0 md:ps-20">
          <div className="md:flex justify-between items-center">
          <FadeIn duration={2} delay={0.6}> 
            <CommonHeading HeadingText="floor plans" />
            </FadeIn>
            <div className="flex gap-2 md:gap-5 mt-4 md:mt-0">
              <button
                className={`px-6 py-1 ${
                  activeUnit === "unit1"
                    ? "bg-[#33638B] text-white"
                    : "bg-transparent border border-black"
                }`}
                onClick={() => handleUnitChange("unit1")}
              >
                UNIT 1
              </button>
              <button
                className={`px-6 py-1 ${
                  activeUnit === "unit2"
                    ? "bg-[#33638B] text-white"
                    : "bg-transparent border border-black"
                }`}
                onClick={() => handleUnitChange("unit2")}
              >
                UNIT 2
              </button>
            </div>
          </div>
          <div className="slider">
            {unitData[activeUnit].map((plan, index) => (
              <div
                key={index}
                className="unit bg-white p-5 flex flex-col md:flex-row justify-between mt-10 object-cover"
              >
              
                <img
                    src={plan.image}
                    alt={`plan ${index + 1}`}
                    className="w-full md:w-[30%] cursor-pointer"
                    onClick={()=>setOpen(true)}
                  />
                <div className="flex flex-col justify-between mt-2 pr-24 tracking-wider uppercase md:mt-0">
                  <h5 className="font-semibold text-[16px]">{plan.type}</h5>
                  <p>Carpet Area : {plan.carpetArea}</p>
                  <p>Balcony Area : {plan.balconyArea}</p>
                  <p>Total Super Area : {plan.totalArea}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {open && (
        <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={unitData[activeUnit].map((item) => ({
          src: item.image,
          title: item.alt,
          description: "Click to open in full view",
        }))}
        thumbs={unitData[activeUnit].map((item) => ({
          src: item.image,
          title: item.alt,
        }))}
        zoom={{maxZoomPixelRatio: 2}}
        plugins={[Fullscreen, Zoom]}
      />
      ) }
      
    </section>

    
  );
}

export default Plans;

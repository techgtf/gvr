import React, { useState } from "react";
import master_plan_img from "/assets/frontend/images/microsite/plans/masterplan.png";
import plan1 from "/assets/frontend/images/microsite/plans/floor_plans/plan1.png";
import plan2 from "/assets/frontend/images/microsite/plans/floor_plans/plan2.png";
import WaterMarkHeading from "../verticalWaterMarkHeading";
import gsap from "gsap";
import ImageOverlay from "../ImageOverlay";
import CommonHeading from "../commonHeading";
import { useImageReveal } from "../useImageReveal";

function Plans() {
  const [activeUnit, setActiveUnit] = useState("unit1");

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
        image: plan2,
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
    gsap.fromTo(
      ".unit",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 0.7, stagger: 0.2 }
    );
    setActiveUnit(unit);
  };

  const animationConfig2 = {
    stagger: 0.1, // Normal animation order for another instance
  };

  useImageReveal(".reveal")

  return (
    <section className="plans bg-[#EFF5FA] px-5 md:px-12 py-5 md:py-14  relative" id="plan">
      <div className="grid sm:grid-cols-2 grid-cols-1">
        <div className="master_plan">
          <CommonHeading HeadingText="master plan" />

          <div className="master_plan_img bg-white p-2 md:p-8 flex justify-center w-full md:w-[65%] mt-14 reveal">
            <ImageOverlay
              imageUrl={master_plan_img}
              altText="master plan image"
            />
          </div>
        </div>
        <div className="absolute h-full flex items-center justify-center md:left-[45%] bottom-0">
          <WaterMarkHeading
            textWaterMark="FLOOR PLANS"
            animationConfig={animationConfig2}
            className="flex flex-col items-start justify-center text-[2vw]  "
          />
        </div>
        <div className="floor_plans mt-10 sm:m-0 md:ps-20">
          <div className="md:flex justify-between items-center">
            <CommonHeading HeadingText="floor plans" />

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
                  className="w-full md:w-[30%]"
                />
                <div className="flex flex-col justify-between mt-2 pr-24 tracking-wider uppercase md:mt-0">
                  <h5 className="font-semibold  text-[16px]">{plan.type}</h5>
                  <p>Carpet Area : {plan.carpetArea}</p>
                  <p>Balcony Area : {plan.balconyArea} </p>
                  <p>Total Super Area : {plan.totalArea}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Plans;
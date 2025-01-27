import React, { useState } from "react";
import master_plan_img from "/assets/frontend/images/microsite/plans/masterplan.png";
import plan1 from "/assets/frontend/images/microsite/plans/floor_plans/plan1.png";
import plan2 from "/assets/frontend/images/microsite/plans/floor_plans/plan2.png";
import WaterMarkHeading from "../verticalWaterMarkHeading";
import gsap from "gsap";
import ImageOverlay from "../ImageOverlay";
import CommonHeading from "../commonHeading";

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

  return (
    <section className="plans bg-[#EFF5FA] px-10 py-20  relative" id="plan">
      <div className="grid sm:grid-cols-2 grid-cols-1">
        <div className="master_plan">
          <CommonHeading HeadingText="master plan" />

          <div className="master_plan_img bg-white p-10 flex justify-center w-[70%] mt-14">
            <ImageOverlay
              imageUrl={master_plan_img}
              altText="master plan image"
            />
          </div>
        </div>
        <div className="absolute h-full flex items-center justify-center left-[45%] bottom-0">
          <WaterMarkHeading
            textWaterMark="FLOOR PLANS"
            animationConfig={{
              from: { x: -100, opacity: 0 },
              to: { x: 0, opacity: 1, duration: 1 },
            }}
            className="flex flex-col items-start justify-center text-[2vw]  "
          />
        </div>
        <div className="floor_plans mt-10 sm:m-0 ps-20">
          <div className="flex justify-between items-center">
            <CommonHeading HeadingText="floor plans" />

            <div className="flex gap-5">
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
                className="unit bg-white p-5 flex justify-between mt-8"
              >
                <img
                  src={plan.image}
                  alt={`plan ${index + 1}`}
                  className="w-[30%]"
                />
                <div className="flex flex-col justify-between">
                  <h5 className="font-semibold">{plan.type}</h5>
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
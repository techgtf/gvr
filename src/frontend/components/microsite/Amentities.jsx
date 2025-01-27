import React from "react";
import swimmingPool from "/assets/frontend/images/microsite/amentities/icons/swimming-pool.png";
import yoga from "/assets/frontend/images/microsite/amentities/icons/yoga.png";
import gymnasium from "/assets/frontend/images/microsite/amentities/icons/gymnasium.png";
import theater from "/assets/frontend/images/microsite/amentities/icons/theater.png";
import library from "/assets/frontend/images/microsite/amentities/icons/library.png";
import basketballBall from "/assets/frontend/images/microsite/amentities/icons/basketballBall.png";
import runningTrack from "/assets/frontend/images/microsite/amentities/icons/running-track.png";
import park from "/assets/frontend/images/microsite/amentities/icons/park.png";
import Slider from "./Slider/Slider";
import CommonHeading from "../commonHeading";

function Amentities() {
  const AmentitiesData = [
    {
      name: "swimming pool",
      image: swimmingPool,
    },
    {
      name: "Yoga and Aerobics hall",
      image: yoga,
    },
    {
      name: "Gymnasium",
      image: gymnasium,
    },
    {
      name: "Mini home theater",
      image: theater,
    },
    {
      name: "Library",
      image: library,
    },
    {
      name: "Basketball",
      image: basketballBall,
    },
    {
      name: "Jogging Track",
      image: runningTrack,
    },
    {
      name: "park",
      image: park,
    },
  ];
  return (
    <>
      <section className="amentities relative py-20 " id="amentities">
        <div className="grid grid-cols-12 gap-20 px-10">
          <div className="sm:col-span-3 col-span-12">
            <div className="about_heading">
              <CommonHeading HeadingText="amentities" />
            </div>
          </div>
          <div className="sm:col-span-9 col-span-12">
            <div className="flex flex-wrap gap-8 ">
              {AmentitiesData &&
                AmentitiesData.map((item, i) => (
                  <div
                    key={i}
                    className="amentity py-3 flex gap-5 items-center"
                  >
                    <div className="icon">
                      <img
                        src={item.image}
                        alt="icons"
                        className="w-[2.5rem]"
                      />
                    </div>
                    <div className="text uppercase">
                      <p>{item.name}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="pt-8  relative">
          <Slider />
        </div>
      </section>
    </>
  );
}

export default Amentities;

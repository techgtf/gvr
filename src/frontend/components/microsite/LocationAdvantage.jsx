import React, { useEffect, useRef, useState } from "react";
import loaction from "/assets/frontend/images/microsite/location/location.png";
import drive from "/assets/frontend/images/microsite/location/drive.png";
import driveActive from "/assets/frontend/images/microsite/location/driveActive.png";
import walk from "/assets/frontend/images/microsite/location/walk.png";
import walkActive from "/assets/frontend/images/microsite/location/walkActive.png";
import education from "/assets/frontend/images/microsite/location/driveIcons/education.png";
import junction from "/assets/frontend/images/microsite/location/driveIcons/junction.png";
import golfing from "/assets/frontend/images/microsite/location/driveIcons/golfing.png";
import hospital from "/assets/frontend/images/microsite/location/driveIcons/hospital.png";
import "./microsite.css";
import { Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import gsap from "gsap";
import CommonHeading from "../commonHeading";
import { useImageReveal } from "../useImageReveal";
import SlideIn from "../Animations/SlideIn";
import FadeIn from "../Animations/FadeIn";

function LocationAdvantage() {
  const [activeTab, setActiveTab] = useState("drive");
  const [open, setOpen] = useState(false);

  const driveData = [
    {
      image: education,
      text: "Amity university , botanic garden of india republic",
      time: "10 min",
    },
    {
      image: junction,
      text: "Greater noida expressway, worlds of wonder",
      time: "15 min",
    },
    {
      image: golfing,
      text: "Noida golf course, sandal suites by lemon tree hotels",
      time: "20 min",
    },
    {
      image: hospital,
      text: "Yatharth super specialty hospital, max super speciality hospital",
      time: "30 min",
    },
    {
      image: hospital,
      text: "Yatharth super specialty hospital, max super speciality hospital",
      time: "30 min",
    },
  ];

  const walkData = [
    {
      image: education,
      text: "Amity university , botanic garden of india republic",
      time: "15 min",
    },
    {
      image: junction,
      text: "Greater noida expressway, worlds of wonder",
      time: "20 min",
    },
    {
      image: golfing,
      text: "Noida golf course, sandal suites by lemon tree hotels",
      time: "25 min",
    },
    {
      image: hospital,
      text: "Yatharth super specialty hospital, max super speciality hospital",
      time: "35 min",
    },
    {
      image: hospital,
      text: "Yatharth super specialty hospital, max super speciality hospital",
      time: "35 min",
    },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    gsap.fromTo(
      ".locationTab",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 }
    );
  };

  const locationmap = [
    {
      image: loaction,
      alt: "Image Location",
    },
  ];

  const locationRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      locationRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: locationRef.current,
          start: "top 90%",
          end: "bottom 20%",
        },
      }
    );
  }, []);

  useImageReveal(".reveal");

  return (
    <section
      className="advantage px-5 md:px-12 py-10 md:py-14  flex items-center"
      id="advantage"
    >
      <div className="grid sm:grid-cols-2 grid-cols-1">
        <div className="brief md:border-r-2 border-gray-200">
          <FadeIn duration={2} delay={0.5}>
            <CommonHeading HeadingText="location advantage" />
          </FadeIn>
          <div
            className="location_map py-10 reveal w-[80%]"
            onClick={() => setOpen(true)}
          >
            <img
              src={loaction}
              alt="Location"
              className="cursor-pointer w-full"
            />
          </div>
          <SlideIn duration={0.8} delay={0.2}>
            <p className="md:w-96 ">
              Discover homes strategically placed in thriving neighborhoods,
              offering seamless access to key hubs, schools, and lifestyle
              conveniences.
            </p>
          </SlideIn>
        </div>

        <div className="route md:ps-10 mt-10 sm:m-0">
          <div className="tabs flex gap-12">
            <button
              className={`drive flex gap-3 text-[16px] items-center  ${
                activeTab === "drive" ? "text-black" : "text-gray-300"
              }`}
              onClick={() => handleTabClick("drive")}
            >
              <img
                src={activeTab === "drive" ? driveActive : drive}
                alt="drive icon"
                className="w-8"
              />{" "}
              DRIVE
            </button>
            <button
              className={`walk flex gap-3 text-[16px] items-center ${
                activeTab === "walk" ? "text-black" : "text-gray-300"
              }`}
              onClick={() => handleTabClick("walk")}
            >
              <img
                src={activeTab === "walk" ? walkActive : walk}
                alt="walk icon"
                className="w-8"
              />{" "}
              WALK
            </button>
          </div>

          <div className="flex items-center py-10">
            <span className="mr-4">
              {activeTab === "drive" ? "BY DRIVE" : "BY WALK"}
            </span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <ul className="w-full overflow-y-scroll h-[350px] pr-5 md:pr-20" >
            {(activeTab === "drive" ? driveData : walkData).map(
              (item, index) => (
                <li
                  key={index}
                  className="locationTab flex justify-between gap-4 border-b border-gray-200 py-5"
                  ref={(el) => (locationRef.current[index] = el)}>
                  <div className="icon">
                    <img src={item.image} alt="Icon" />
                  </div>
                  <div className="text w-72">
                    <p>{item.text}</p>
                  </div>
                  <div className="time">
                    <p>{item.time}</p>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={locationmap.map((item) => ({
            src: item.image,
            title: item.alt,
            description: "Click to open in full view",
          }))}
          index={0}
          plugins={[Fullscreen, Zoom]}
        />
      )}
    </section>
  );
}

export default LocationAdvantage;

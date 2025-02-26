import React, { useState, useEffect, useRef } from "react";
import "./microsite.css";
import { Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CommonHeading from "../commonHeading";
import { useImageReveal } from "../useImageReveal";
import SlideIn from "../Animations/SlideIn";
import FadeIn from "../Animations/FadeIn";

gsap.registerPlugin(ScrollTrigger);

function LocationAdvantage({
  locationImage,
  driveData,
  walkData,
  driveTabIcon,
  driveTabActiveIcon,
  walkTabIcon,
  walkTabActiveIcon,
  lightboxImages,
  description
}) {
  const [activeTab, setActiveTab] = useState("drive");
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const listRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (listRef.current) {
        gsap.fromTo(
          ".locationTab",
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          }
        );
      }
    }, listRef);

    return () => ctx.revert();
  }, [activeTab]);

  useImageReveal(".reveal");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setOpen(true);
    document.body.classList.add("lightbox-open");
  };

  const closeLightbox = () => {
    setOpen(false);
    document.body.classList.remove("lightbox-open");
  };

  return (
    <section className="advantage px-5 md:px-12 py-10 md:py-14 flex items-center" id="advantage">
      <div className="grid sm:grid-cols-2 grid-cols-1 w-full">
        <div className="brief md:border-r-2 border-gray-200">
          <FadeIn duration={2} delay={0.5}>
            <CommonHeading HeadingText="Location Advantage" />
          </FadeIn>
          <div className="location_map py-10  w-full md:w-[80%]" onClick={() => openLightbox(0)}>
            <img src={locationImage} alt="Location" className="cursor-pointer aspect-[5/3] w-full" />
          </div>
          <SlideIn duration={0.8} delay={0.2}>
            <p className="md:w-96">{description}</p>
          </SlideIn>
        </div>

        <div className="route md:ps-10 mt-10 sm:m-0">
          <div className="tabs flex gap-12">
            <button
              className={`cursor-pointer flex gap-3 text-[16px] items-center ${
                activeTab === "drive" ? "text-black" : "text-gray-300"
              }`}
              onClick={() => handleTabClick("drive")}
            >
              <img src={activeTab === "drive" ? driveTabActiveIcon : driveTabIcon} alt="drive icon" className="w-8 h-8 object-contain" />
              DRIVE
            </button>
            <button
              className={`cursor-pointer flex gap-3 text-[16px] items-center ${
                activeTab === "walk" ? "text-black" : "text-gray-300"
              }`}
              onClick={() => handleTabClick("walk")}
            >
              <img src={activeTab === "walk" ? walkTabActiveIcon : walkTabIcon} alt="walk icon" className="w-8 h-8 object-contain" />
              WALK
            </button>
          </div>

          <div className="flex items-center py-10">
            <span className="mr-4">{activeTab === "drive" ? "BY DRIVE" : "BY WALK"}</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          <SlideIn duration={2} delay={0.2}>
          <ul className="w-full overflow-y-scroll h-[350px] pr-5 md:pr-20" ref={listRef}>
            {(activeTab === "drive" ? driveData : walkData).map((item, index) => (
              <li key={index} className="locationTab flex justify-between gap-4 border-b border-gray-200 py-5">
                <div className="icon">
                  <img src={item.image} alt="Icon" className="w-[50px] h-[50px] object-contain" />
                </div>
                <div className="text w-72">
                  <p>{item.text}</p>
                </div>
                <div className="time">
                  <p>{item.time}</p>
                </div>
              </li>
            ))}
          </ul>
          </SlideIn>
        </div>
      </div>

      {open && (
        <Lightbox
          open={open}
          close={closeLightbox}
          slides={lightboxImages.map((item) => ({
            src: item.image,
            title: item.alt,
            description: "Click to open in full view",
          }))}
          index={currentIndex}
          plugins={[Fullscreen, Zoom]}
          zoom={true}
        />
      )}
    </section>
  );
}

export default LocationAdvantage;

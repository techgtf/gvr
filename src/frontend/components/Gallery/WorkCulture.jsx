import React, { useState, useEffect } from "react";
import FadeIn from "../Animations/FadeIn";
import CommonHeading from "../commonHeading";
import SlideIn from "../Animations/SlideIn";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";

function WorkCulture() {
  const [activeTab, setActiveTab] = useState("images");
  const [visibleCount, setVisibleCount] = useState(8);
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageData = [
    "/assets/frontend/images/microsite/vilasa/gallery/actual/actual1.webp",
    "/assets/frontend/images/microsite/vilasa/gallery/actual/actual2.webp",
    "/assets/frontend/images/microsite/vilasa/gallery/actual/actual3.webp",
    "/assets/frontend/images/microsite/vilasa/gallery/actual/actual4.webp",
    "/assets/frontend/images/microsite/vilasa/gallery/actual/actual1.webp",
    "/assets/frontend/images/microsite/vilasa/gallery/actual/actual2.webp",
    "/assets/frontend/images/microsite/vilasa/gallery/actual/actual3.webp",
    "/assets/frontend/images/microsite/vilasa/gallery/actual/actual4.webp",
    "/assets/frontend/images/microsite/vilasa/gallery/actual/actual1.webp",
    "/assets/frontend/images/microsite/vilasa/gallery/actual/actual2.webp",
    "/assets/frontend/images/microsite/vilasa/gallery/actual/actual3.webp",
    "/assets/frontend/images/microsite/vilasa/gallery/actual/actual4.webp",
    "/assets/frontend/images/microsite/vilasa/gallery/actual/actual1.webp",
    "/assets/frontend/images/microsite/vilasa/gallery/actual/actual2.webp",
    "/assets/frontend/images/microsite/vilasa/gallery/actual/actual3.webp",
    "/assets/frontend/images/microsite/vilasa/gallery/actual/actual4.webp",
  ];

  const videoData = [
    {
      thumbnail: "/assets/frontend/images/microsite/vilasa/gallery/videos/video1.webp",
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      thumbnail: "/assets/frontend/images/microsite/vilasa/gallery/videos/video2.webp",
      src: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    },
  ];

  const loadMoreImages = () => {
    setVisibleCount((prev) => prev + 8);
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
    <section className="work_culture bg-[#EFF5FA] py-10 px-5 md:px-12">
      <div className="heading text-center flex justify-center py-5 flex-col items-center">
        <FadeIn duration={2} delay={0.7}>
          <CommonHeading HeadingText="WORK CULTURE" />
        </FadeIn>
      </div>

      {/* Tab Buttons */}
      <div className="tabs flex gap-6 w-full justify-center py-4 mt-4 md:mt-0">
        <button
          className={`px-6 py-1 rounded text-[14px] ${activeTab === "images" ? "bg-[#33638B] text-white" : "bg-white"
            }`}
          onClick={() => {
            setActiveTab("images");
            setVisibleCount(8);
          }}
        >
          IMAGES
        </button>
        <button
          className={`px-6 py-1 rounded text-[14px] ${activeTab === "videos" ? "bg-[#33638B] text-white" : "bg-white"
            }`}
          onClick={() => setActiveTab("videos")}
        >
          VIDEOS
        </button>
      </div>

      {/* Images Section */}
      {activeTab === "images" ? (
        <>
          <SlideIn duration={2} delay={0.3}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {imageData.slice(0, visibleCount).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Work Culture Image ${index + 1}`}
                  className="w-full h-[250px] object-cover cursor-pointer"
                  onClick={() => openLightbox(index)}
                />
              ))}
            </div>
          </SlideIn>

          {/* Load More Button */}
          {visibleCount < imageData.length && (
            <div className="flex justify-center mt-6">
              <button
                className="fullBtn text-white w-fit flex items-center gap-3 lg:py-[10px] lg:px-[25px] px-[18px] py-[7px] focus-visible:outline-none focus-visible:ring-0"
                onClick={loadMoreImages}
              >
                <span className="tracking-[2px] uppercase text-[12px]">Load more</span>
                <span className="line inline-block w-[16px] h-[2px] bg-white"></span>
              </button>
            </div>
          )}

          {/* Lightbox Component */}
          {open && (
            <Lightbox
              open={open}
              close={closeLightbox}
              index={currentIndex}
              slides={imageData.map((src) => ({ src }))}
              plugins={[Fullscreen, Zoom]}
            />
          )}
        </>
      ) : (
        /* Video Section */
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {videoData.map((video, index) => (
            <div key={index} className="relative">
              <img
                src={video.thumbnail}
                alt={`Video Thumbnail ${index + 1}`}
                className="w-full h-[250px] object-cover cursor-pointer"
              />
              <a
                href={video.src}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-xl"
              >
                ▶
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default WorkCulture;

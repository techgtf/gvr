import React, { useState } from "react";
import FadeIn from "../Animations/FadeIn";
import CommonHeading from "../commonHeading";
import SlideIn from "../Animations/SlideIn";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";

function ProjectImages({ images }) {
  const [visibleCount, setVisibleCount] = useState(8);
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <section className="project_gallery py-10 px-5 md:px-12">
      <div className="heading text-center flex justify-center py-5 flex-col items-center">
        <FadeIn duration={2} delay={0.7}>
          <CommonHeading HeadingText="PROJECT IMAGES" />
        </FadeIn>
      </div>

      {/* Gallery Grid */}
      <SlideIn duration={2} delay={0.3}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {images.slice(0, visibleCount).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Project ${index + 1}`}
              className="w-[400px] h-[250px]  object-cover cursor-pointer"
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>
      </SlideIn>

      {/* Load More Button */}
      {visibleCount < images.length && (
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
          slides={images.map((src) => ({ src }))}
          plugins={[Fullscreen, Zoom]}
        />
      )}
    </section>
  );
}

export default ProjectImages;

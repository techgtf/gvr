import React, { useState } from "react";
import SlideIn from "../Animations/SlideIn";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";

function GalleryImages({ data, type }) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <>
      <div className="slider mt-10">
        <SlideIn duration={2} delay={0.3}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {data.map((item, index) => (
              <div key={index} className="relative">
                {type === "images" ? (
                  <img
                    src={item}
                    alt={`media ${index + 1}`}
                    className="w-[400px] h-[250px] my-3 object-cover cursor-pointer"
                    onClick={() => openLightbox(index)}
                  />
                ) : (
                  <a href={item.src} target="_blank" rel="noopener noreferrer">
                    <img
                      src={item.thumbnail}
                      alt={`video ${index + 1}`}
                      className="w-[400px] h-[250px] my-3 object-cover cursor-pointer"
                    />
                  </a>
                )}
              </div>
            ))}
          </div>
        </SlideIn>
      </div>

      {type === "images" && open && (
        <Lightbox
          open={open}
          close={closeLightbox}
          index={currentIndex}
          slides={data.map((src) => ({ src }))}
          plugins={[Fullscreen, Zoom]}
        />
      )}
    </>
  );
}

export default GalleryImages;

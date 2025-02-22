import React, { useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CommonHeading from "../../commonHeading";
import FadeIn from "../../Animations/FadeIn";
import SlideIn from "../../Animations/SlideIn";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

function ProjectGallery({ actualImages, renderImages }) {
  const [activeTab, setActiveTab] = useState("actual");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const projectRef = useRef();

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setOpen(true);
    document.body.classList.add("lightbox-open");
  };

  const closeLightbox = () => {
    setOpen(false);
    document.body.classList.remove("lightbox-open");
  };

  const imageData = activeTab === "actual" ? actualImages : renderImages;

  return (
    <section
      ref={projectRef}
      className="project_gallery pb-20 flex items-center px-5 md:px-12 py-10 md:py-14 bg-[#EFF5FA]"
      id="gallery"
    >
      <div className="w-full">
        <div className="project_gallery_content">
          <FadeIn duration={2} delay={0.5}>
            <CommonHeading HeadingText="Project Gallery" />
          </FadeIn>
        </div>

        <div className="slider mt-10">
        <SlideIn duration={2} delay={0.3}>
            {Array.from({ length: Math.ceil(imageData.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {imageData
                    .slice(slideIndex * 3, slideIndex * 3 + 3)
                    .map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`slide ${slideIndex * 3 + index + 1}`}
                        className="w-[400px] h-[250px] my-3 object-cover"
                        onClick={() => openLightbox(slideIndex * 4 + index)}
                      />
                    ))}
                </div>
            ))}
            </SlideIn>
        </div>

        {open && (
          <Lightbox
            open={open}
            close={closeLightbox}
            index={currentIndex}
            slides={imageData.map((src) => ({ src }))}
            plugins={[Fullscreen, Zoom]}
          />
        )}
      </div>
    </section>
  );
}

export default ProjectGallery;

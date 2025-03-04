import React, { useState } from "react";
import FadeIn from "../Animations/FadeIn";
import CommonHeading from "../commonHeading";
import SlideIn from "../Animations/SlideIn";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";
import useFetchData from "../../apiHooks/useFetchData";

function ProjectImages({ images }) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const limit = 8;
  // gallery images start
  const { data: ProjectsImages,loading, error,loadMore ,totalLength } = useFetchData("get-all-projectImages?", "", limit, true);
 

  console.log(ProjectsImages,"project images");
  if (loading) return <p className="text-red-500">Projects Images loading....</p>;
  if (error) return <p className="text-red-500">Projects Images Error : {error}</p>;


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
        <div className="flex flex-wrap gap-4 justify-start mt-6">
          {ProjectsImages?.length > 0 ? (
            ProjectsImages.map((item, index) => (
            <div key={index} className="w-[calc(100%/2-16px)] sm:w-[calc(100%/4-16px)]">
              <img
                src={item?.image}
                alt={item?.alt_text || + "Project" + index + 1}
                className="w-[400px] h-[250px] object-cover cursor-pointer"
                onClick={() => openLightbox(index)}
              />
            </div>
          ))) : (
            <p>No Projects Images Available.</p>
          ) }
        </div>

      </SlideIn>

      {/* Load More Button */}
      { ProjectsImages?.length < totalLength && (
        <div className="flex justify-center mt-6">
          <button
            className="fullBtn text-white w-fit flex items-center gap-3 lg:py-[10px] lg:px-[25px] px-[18px] py-[7px] focus-visible:outline-none focus-visible:ring-0"
            onClick={loadMore}
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
          slides={ProjectsImages.map((item) => ({ src : item.image}))}
          plugins={[Fullscreen, Zoom]}
        />
      )}
    </section>
  );
}

export default ProjectImages;

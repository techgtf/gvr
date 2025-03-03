import React, { useState, useCallback, useEffect } from "react";
import * as CONFIG from "../../../../config";
import FadeIn from "../Animations/FadeIn";
import CommonHeading from "../commonHeading";
import SlideIn from "../Animations/SlideIn";
import { VideoModal, getEmbedUrl } from "../testimonialSection/testimonialsVideoModal";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";
import useFetchData from "../../apiHooks/useFetchData";

function WorkCulture() {
  const [activeTab, setActiveTab] = useState("images");
  const [visibleImageCount, setVisibleImageCount] = useState(8);
  const [visibleVideoCount, setVisibleVideoCount] = useState(8);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

 const limit = 8;

  const openVideoModal = (videoId) => {
    setSelectedVideo(getEmbedUrl(videoId));
    document.body.classList.add("modal-open");
  };

  const closeVideoModal = useCallback(() => {
    setSelectedVideo(null);
    document.body.classList.remove("modal-open");
  }, []);


  // --------------------------------------------------------- //
  // fetching data start //

// gallery images start
    const { data: images,loading, error, loadMore ,totalLength } = useFetchData("work-culture?type=image", "", limit, true);
// gallery video start
    const { data: videos,loading:videoLoading, error:videoError} = useFetchData("work-culture?type=video","", limit, true);

    // errors

    console.log(images,"images images");
    if (loading) return <p className="text-red-500">Data loading....</p>;
    if (error) return <p className="text-red-500">Error loading data: {error}</p>;
    if (videoLoading) return <p className="text-red-500">Gallery Data loading....</p>;
    if (videoError) return <p className="text-red-500">Gallery Error : {error}</p>;


  // fetching data end //
  // --------------------------------------------------------- //


  return (
    <section className="work_culture bg-[#EFF5FA] py-10 px-5 md:px-12">
      <div className="heading text-center flex justify-center py-5 flex-col items-center">
        <FadeIn duration={2} delay={0.7}>
          <CommonHeading HeadingText="WORK CULTURE" />
        </FadeIn>
      </div>

      <div className="tabs flex gap-6 w-full justify-center py-4 mt-4 md:mt-0">
        <button
          className={`px-6 py-1 rounded text-[14px] ${activeTab === "images" ? "bg-[#33638B] text-white" : "bg-white"
            }`}
          onClick={() => setActiveTab("images")}
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

      {activeTab === "images" ? (
        <>
          <SlideIn duration={2} delay={0.3}>
            <div className="flex flex-wrap gap-4 mt-6 justify-start">
              {images?.length > 0 ? (
                
                images.map((item, index) => (
                <div key={index} className="w-[calc(100%/2-16px)] sm:w-[calc(100%/4-16px)]">
                  <img
                    src={item?.image}
                    alt={item?.alt_tag || "Work Culture Image"}
                    className="w-full h-[350px] object-cover cursor-pointer"
                    onClick={() => {
                      setLightboxIndex(index);
                      setLightboxOpen(true);
                    }}
                  />
                </div>
              ))
               ) : (
                <p>No data Available.</p>
               )}
            </div>

          </SlideIn>

          {images?.length < totalLength && (
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
        </>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
            {videos?.length > 0 ? (
              videos.map((video, index) => (
                <div
                  key={index}
                  className="relative cursor-pointer"
                  onClick={() => openVideoModal(video?.cdn)}
                >
                  <img
                    src={video?.image}
                    alt={`Video Thumbnail ${index + 1}`}
                    className="w-full h-[350px] object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-xl">
                    ▶
                  </div>
                </div>
              ))
            ) : (
              <p>No Video Available.</p>
            )}
          </div>
        </>
      )}

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={videos.filter((item) => item.type === "image").map((image) => ({ src: image.cdn }))}
        index={lightboxIndex}
        plugins={[Fullscreen, Zoom]}
      />

      <VideoModal videoUrl={selectedVideo} onClose={closeVideoModal} />
    </section>
  );
}

export default WorkCulture;
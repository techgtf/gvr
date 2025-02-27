import React, { useState, useCallback } from 'react';
import { Link } from "react-router-dom";
import ZoomOut from "../Animations/ZoomOut";
import SlideIn from "../Animations/SlideIn";
import * as CONFIG from '../../../../config';
import { GoArrowUpRight } from "react-icons/go";
import { TestimonialsData } from "../testimonialSection/testimonialsData";
import { VideoModal, getEmbedUrl } from "../testimonialSection/testimonialsVideoModal";


const Testimonials = () => {
  const testimonialData = TestimonialsData;
  const [selectedVideo, setSelectedVideo] = useState(null);
  const closeVideo = useCallback(() => {
    setSelectedVideo(null);
    gsap.globalTimeline.resume(); // Resume animations
    setTimeout(() => ScrollTrigger.refresh(), 300); // Refresh ScrollTrigger
  }, []);


  return (
    <>
      <section className="testimonial_page_section 2xl:py-[85px] xl:py-[75px] pb-[80px] text-center">
        <div className="section_in xl:max-w-[95%] m-auto max-w-[100%]">
          <div className="grid lg:grid-cols-3 grid-cols-1 xl:gap-12 gap-5 lg:px-0 px-4">
            {testimonialData.map((item, index) => (
              <div className="boxes relative lg:p-0 p-3 lg:border-0 border rounded" key={index}>
                {item.isIframe ? (
                  <>
                    <ZoomOut initialScale={1.5} duration={2} setHeight="auto">
                      <iframe
                        className="lg:h-[300px] h-[300px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-transparent"
                        width="100%"
                        src={`https://www.youtube.com/embed/${item.videoId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        tabIndex="0"
                      ></iframe>
                    </ZoomOut>
                    <span className="link_arrow absolute bottom-[15px] right-[15px] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-transparent">
                      <GoArrowUpRight className="cursor-pointer" />
                    </span>
                  </>
                ) : (
                  <div class="overflow-hidden">
                    <ZoomOut initialScale={1.5} duration={2} setHeight="auto">
                      <img
                        className="lg:h-[300px] h-[300px] cursor-pointer w-full object-cover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-transparent"
                        src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/home/testimonials/${item.thumbs}`}
                        alt={item.name}
                        tabIndex="0"
                      />
                      <button
                        className="playbtn absolute top-[44%] left-[44%] z-[1] cursor-pointer"
                        onClick={() => setSelectedVideo(getEmbedUrl(item.video))}
                        aria-label="Play Video"
                      >

                        <img
                          src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/play-button.webp`}
                          className="cursor-pointer lg:h-[44px] h-[30px]"
                          alt="Play button icon"
                        />
                      </button>

                    </ZoomOut>
                    {/* <span className="link_arrow absolute bottom-[15px] right-[15px] text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-transparent">
                    <GoArrowUpRight className="cursor-pointer" />
                  </span> */}
                  </div>
                )}
                <SlideIn duration={1} delay={0.5}>
                  <p className="desc text-[15px] mt-2 font-[500] leading-[22px] text-[#33638b]">{item.desc}</p>
                  <span className="title block pt-2 lg:pb-0 pb-2 text-[12px] uppercase tracking-[2px]">{item.name}</span>
                </SlideIn>
              </div>
            ))}
          </div>
        </div>
      </section>
      <VideoModal videoUrl={selectedVideo} onClose={closeVideo} />
    </>
  );
};

export default Testimonials;

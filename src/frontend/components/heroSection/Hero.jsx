import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import * as CONFIG from "../../../../config";
import "./styles.css";
import LoadAnimation from "../../../Loader/loadAnimation";
import { IoVolumeMute } from "react-icons/io5";
import { VscUnmute } from "react-icons/vsc";

export default function Hero({
  videoUrl,
  textInMiddle,
  imageUrl,
  heading,
  containerClasses = "",
  headingClasses = "",
}) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const handleToggelMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <div className="heroSection relative z-0">
        {/* Background Image */}

        <div
          className="hero_vdo_div lg:h-[auto] h-[auto] relative w-full] bg-cover"
          style={{
            background:
              "url(assets/frontend/images/home/hero.jpg) no-repeat center",
          }}
        >
          {/* <LoadAnimation /> */}
          <video
            ref={videoRef}
            // src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/home/herovdo.mp4`}
            src={
              window.innerWidth > 767
                ? `https://res.cloudinary.com/dx3l6id8r/video/upload/v1739885030/1920x900_n3tzkh.mp4`
                : `https://res.cloudinary.com/dx3l6id8r/video/upload/v1739959517/700x600_dpqfw9.mp4`
            } 
            autoPlay
            playsInline
            loop
            muted={isMuted}
            preload="auto"
            className="lg:h-[auto] h-[auto] w-full object-cover"
          ></video>
          <div className="vdo_btns absolute lg:bottom-[40px] bottom-[15px] lg:right-[30px] right-[15px]">
            <button
              onClick={handleToggelMute}
              className="text-white  lg:h-[50px] h-[35px] lg:w-[50px] w-[35px] flex justify-center items-center rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-0"
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            >

              {isMuted ? (
                <IoVolumeMute className="lg:text-[25px] text-[18px] cursor-pointer" />
              ) : (
                <VscUnmute className="lg:text-[25px] text-[18px] cursor-pointer" />
              )}
            </button>

          </div>
        </div>

        {/* Content Overlay */}
        {/* <div className={`container text-center absolute z-1 text-white ${containerClasses}`}>
                <h1
                    ref={textRef}
                    data-speed="clamp(0.7)"
                    className={`common_heading midlandfontmedium uppercase lg:max-w-[470px] m-auto lg:tracking-[4px] tracking-[2px] ${headingClasses}`}>
                    {heading || 'Curating the Finest in Luxury Real Estate'}
                </h1>
            </div> */}
      </div>
    </>
  );
}

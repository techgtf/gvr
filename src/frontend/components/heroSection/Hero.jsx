import React, { useEffect, useRef, useState } from "react";
import { IoVolumeMute } from "react-icons/io5";
import { VscUnmute } from "react-icons/vsc";

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  // Set video source only once (reduces re-renders)
  const videoSrc =
    window.innerWidth > 767
      ? "https://res.cloudinary.com/dx3l6id8r/video/upload/v1739885030/1920x900_n3tzkh.mp4"
      : "https://res.cloudinary.com/dx3l6id8r/video/upload/v1739959517/700x600_dpqfw9.mp4";

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("loadeddata", () => setIsVideoLoaded(true));
    }
    return () => {
      if (video) {
        video.removeEventListener("loadeddata", () => setIsVideoLoaded(true));
      }
    };
  }, []);

  const handleToggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/assets/frontend/images/home/hero.jpg)' }}>
      {/* Video Background */}
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        playsInline
        loop
        muted={isMuted}
        preload="auto"
        poster="/assets/frontend/images/home/hero.jpg"
        width="1920"
        height="900"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
      ></video>

      {/* Mute / Unmute Button */}
      <div className="absolute bottom-4 right-4 lg:bottom-10 lg:right-10">
        <button
          onClick={handleToggleMute}
          className="flex items-center justify-center w-9 h-9 lg:w-12 lg:h-12 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition"
          title={isMuted ? "Unmute Video" : "Mute Video"}
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
        >
          {isMuted ? (
            <IoVolumeMute className="text-lg lg:text-2xl" />
          ) : (
            <VscUnmute className="text-lg lg:text-2xl" />
          )}
        </button>
      </div>
    </div>
  );
}

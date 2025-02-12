import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import * as CONFIG from '../../../../config';
import './styles.css';
import LoadAnimation from "../../../Loader/loadAnimation";
import ScrollToTop from "../ScrollToTop";
import { IoVolumeMute } from "react-icons/io5";
import { VscUnmute } from "react-icons/vsc";

export default function Hero({
    videoUrl,
    textInMiddle,
    imageUrl,
    heading,
    containerClasses = '',
    headingClasses = ''
}) {
    const [isMuted, setIsMuted] = useState(true)
    const videoRef = useRef(null);

    const handleToggelMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted)
        }
    }

    return (
        <>
            <ScrollToTop />
            <div className="heroSection relative z-0">
                {/* Background Image */}

                <div className='hero_vdo_div lg:h-[auto] h-[75vh] relative w-full] bg-cover'
                    style={{ background: "url(assets/frontend/images/home/hero.jpg) no-repeat center" }}
                >
                    <LoadAnimation />
                    <video
                        ref={videoRef}
                        // src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/home/herovdo.mp4`}
                        src={window.innerWidth > 767 ? `https://res.cloudinary.com/dx3l6id8r/video/upload/v1739181951/1920x900_1_jhutji.mp4` : `https://res.cloudinary.com/dx3l6id8r/video/upload/v1739180202/700x1000_xrmmbh.mp4`}
                        autoPlay
                        playsInline
                        loop
                        muted={isMuted}
                        preload="auto"
                        className="lg:h-[auto] h-[75vh] w-full object-cover"
                    ></video>
                    <div className="vdo_btns absolute lg:bottom-[40px] bottom-[15px] lg:right-[30px] right-[15px]">
                        <button
                            onClick={handleToggelMute}
                            className="text-white border border-solid lg:h-[60px] h-[40px] lg:w-[60px] w-[40px] flex justify-center items-center rounded-full cursor-pointer backdrop-blur-[20px] bg-[#00000038]"
                        >{isMuted ? <IoVolumeMute className="lg:text-[35px] text-[20px] cursor-pointer" /> : <VscUnmute className="lg:text-[35px] text-[20px] cursor-pointer" />}</button>
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

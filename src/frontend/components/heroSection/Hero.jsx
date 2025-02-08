import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import * as CONFIG from '../../../../config';
import './styles.css';
import { useTextAnimation } from '../useTextAnimation';
import ZoomOut from "../Animations/ZoomOut";
import LoadAnimation from "../../../Loader/loadAnimation";
import ScrollToTop from "../ScrollToTop";

export default function Hero({
    videoUrl,
    textInMiddle,
    imageUrl,
    heading,
    containerClasses = '',
    headingClasses = ''
}) {

    // const textRef = useTextAnimation(
    //     { from: { x: -100, opacity: 0 }, to: { x: 0, opacity: 1, duration: 1 } },
    //     []
    // );

    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    return (
        <>
        <ScrollToTop/>
        <div className="heroSection relative z-0">
            {/* Background Image */}

            <div className='hero_vdo_div lg:h-[80vh] h-[75vh] relative w-full] bg-cover'
                style={{ background: "url(assets/frontend/images/home/hero.jpg) no-repeat center" }}
            >
                <LoadAnimation />
                {/* <ZoomOut initialScale={1.5} duration={4}> */}
                <video
                    // className="min-h-svh"
                    // src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/home/herovdo.mp4`}
                    src={`https://res.cloudinary.com/dx3l6id8r/video/upload/v1738587559/herovdo_wpbnv6.mp4`}
                    autoPlay
                    playsInline
                    loop
                    muted
                    onLoadedData={() => setIsVideoLoaded(true)}
                    preload="auto"
                    className="lg:h-[80vh] h-[75vh] w-full object-cover"
                ></video>
                {/* </ZoomOut> */}


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

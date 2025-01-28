import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import * as CONFIG from '../../../../config';
import './styles.css';
import { useTextAnimation } from '../useTextAnimation';
import Loader from "../../../Loader/loader";

export default function Hero({
    videoUrl,
    textInMiddle,
    imageUrl,
    heading,
    containerClasses = '',
    headingClasses = ''
}) {

    const textRef = useTextAnimation(
        { from: { x: -100, opacity: 0 }, to: { x: 0, opacity: 1, duration: 1 } },
        []
    );

    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const clipRef = useRef(null);
    const videoRef = useRef(null);


    // Handle body overflow based on video load state
    useEffect(() => {
        if (!isVideoLoaded) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        // Cleanup
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isVideoLoaded]);

    // Trigger GSAP animation once video is loaded
    useEffect(() => {
        if (isVideoLoaded) {
            gsap.set(clipRef.current, { clipPath: "circle(45% at 50% 50%)" });
            gsap.to(clipRef.current, {
                clipPath: "circle(100% at 50% 50%)",
                duration: 3,
                ease: "power2.out",
            });
        }
    }, [isVideoLoaded]);

    return (
        <div className="heroSection relative">
            {/* Background Image */}
            {/* <div className="img_div lg:h-[82vh]">
                <img
                    className="lg:h-[82vh] h-auto w-full object-cover"
                    src={imageUrl || `${CONFIG.ASSET_IMAGE_URL}frontend/images/home/hero.webp`}
                    alt="Hero Section"
                />
            </div> */}

            {!isVideoLoaded && <Loader />}

            <div className='hero_vdo_div relative w-full'
                ref={clipRef}
            // style={{ height: "100vh", overflow: "hidden" }}
            >


                <video
                    ref={videoRef}
                    // className="min-h-svh"
                    src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/home/herovdo.mp4`}
                    autoPlay
                    playsInline
                    loop
                    muted
                    onLoadedData={() => setIsVideoLoaded(true)}
                    preload="auto"
                    className="h-[100vh] w-full object-cover"
                ></video>


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
    );
}

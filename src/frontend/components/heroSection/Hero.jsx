import React, { useEffect, useState } from 'react';
import * as CONFIG from '../../../../config';
import './styles.css';
import { useTextAnimation } from '../useTextAnimation';
import Loader from "../../../Loader/loader";

export default function Hero({
    imageUrl,
    heading,
    containerClasses = '',
    headingClasses = ''
}) {

    const textRef = useTextAnimation(
        { from: { x: -100, opacity: 0 }, to: { x: 0, opacity: 1, duration: 1 } },
        []
    );

    // const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    // Prevent scrolling while video is not loaded
    // useEffect(() => {
    //     if (!isVideoLoaded) {
    //         document.body.style.overflow = 'hidden'; // Disable scrolling
    //     } else {
    //         document.body.style.overflow = ''; // Enable scrolling
    //     }

    //     // Cleanup function to reset the style
    //     return () => {
    //         document.body.style.overflow = '';
    //     };
    // }, [isVideoLoaded]);


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
            <div className='hero_vdo_div'
            style={{ background: `url(assets/frontend/images/home/hero.webp)` }}
            >
                {/* {!isVideoLoaded && <Loader />}
                <video
                    className="min-h-svh"
                    src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/home/herovdo.mp4`}
                    autoPlay
                    playsInline
                    loop
                    muted
                    onLoadedData={() => setIsVideoLoaded(true)}
                    preload="auto"
                ></video> */}
                <video
                    className="min-h-svh"
                    src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/home/herovdo.mp4`}
                    autoPlay
                    playsInline
                    loop
                    muted
                    // onLoadedData={() => setIsVideoLoaded(true)}
                    preload="auto"
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

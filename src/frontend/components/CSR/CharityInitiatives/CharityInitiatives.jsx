import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CommonHeading from '../../commonHeading';
import education from "/assets/frontend/images/csr/charity/images/education.jpg";
import education2 from "/assets/frontend/images/csr/charity/images/education2.jpg";
import Initiatives from './Initiatives';
import InitiativesDesc from './InitiativesDesc';

gsap.registerPlugin(ScrollTrigger);

function CharityInitiatives() {
    const images = [
        education, education2, education, education2
    ];

    useEffect(() => {
        gsap.fromTo(
            ".charity-images img",
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.1, // Adjust stagger time for the effect
                scrollTrigger: {
                    trigger: ".charity-images", // Trigger animation when the image grid comes into view
                    start: "top 90%", // Start when the images are near the top of the viewport
                    end: "bottom 20%", // End when the images are near the bottom of the viewport
                }
            }
        );
    }, []);

    return (
        <>
            <section className="charity relative px-5 md:px-12 py-10 md:py-14">
                <div className="headingWrap lg:max-w-[50%] mx-auto text-center">
                    <CommonHeading HeadingText="Great Value Charitable Initiatives: Educating & Empowering" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-20">
                    <Initiatives />
                    <InitiativesDesc />
                </div>

                <div className="charity-images grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 md:mt-32">
                    {images && images.map((item, i) => (
                        <img key={i} src={item} alt={`Charity Image ${i + 1}`} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default CharityInitiatives;

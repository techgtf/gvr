import React, { useEffect, useRef } from 'react'
import eye from "/assets/frontend/images/csr/camps/eye.jpg";
import donation from "/assets/frontend/images/csr/camps/blood-donation.jpg";
import dental from "/assets/frontend/images/csr/camps/dental.jpg";
import ZoomOut from '../../Animations/ZoomOut';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);
function Camps() {


    const campsData = [
        {
            image: eye,
            heading: "eye camps",
            pera: "Encouraging life-saving contributions."
        },
        {
            image: donation,
            heading: "Blood Donation Camps",
            pera: "Encouraging life-saving contributions."
        },
        {
            image: dental,
            heading: "Dental Camps",
            pera: "Promoting oral health with free check-ups and awareness."
        },
    ]
    const sectionRef = useRef(null);

    useEffect(() => {
        const elements = sectionRef.current.querySelectorAll(".content");

        gsap.fromTo(
            elements,
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 3,
                delay: 0.8,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                },
            }
        );
    }, []);

    return (
        <div ref={sectionRef} className="grid grid-cols-3 gap-5 max-w-[95%] mx-auto pt-20">
            {campsData && campsData.map((item, i) => <div key={i} className="camp">
                <div className="overflow-hidden">
                    <ZoomOut initialScale={1.5} duration={2}>
                        <img src={item.image} alt="About Image" className="object-cover w-96  overflow-hidden" />
                    </ZoomOut>
                </div>
                <div className="content py-5">
                    <div className="heading font-semibold uppercase text-[16px]">{item.heading}</div>
                    <p className="opacity-70 pt-3 capitalize">{item.pera}</p>
                </div>
            </div>)}
        </div>
    )
}

export default Camps

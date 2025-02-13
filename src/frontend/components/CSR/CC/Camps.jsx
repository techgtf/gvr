import React, { useEffect, useLayoutEffect, useRef } from 'react'
import eye from "/assets/frontend/images/csr/camps/eye.jpg";
import donation from "/assets/frontend/images/csr/camps/blood-donation.jpg";
import dental from "/assets/frontend/images/csr/camps/dental.jpg";
import ZoomOut from '../../Animations/ZoomOut';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import SlideIn from '../../Animations/SlideIn';

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


    return (
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[95%] mx-auto pt-20">
            {campsData && campsData.map((item, i) => <div key={i} className="camp">
                <div className="overflow-hidden">
                    <ZoomOut initialScale={1.5} duration={2}>
                        <img src={item.image} alt="About Image" className="object-cover w-96  overflow-hidden" />
                    </ZoomOut>
                </div>
                <SlideIn>
                <div className="content py-5">
                    <div className="heading font-semibold uppercase text-[16px]">{item.heading}</div>
                    <p className="opacity-70 pt-3 capitalize">{item.pera}</p>
                </div>
                </SlideIn>
            </div>)}
        </div>
    )
}

export default Camps

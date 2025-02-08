import React, { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";

import "./loader.css"


export default function LoadAnimation() {
    useLayoutEffect(() => {
        const loaderPanes = document.querySelectorAll(".preloader_pane");

        gsap.to(loaderPanes, {
            height: "0%",
            duration: 1.5,
            ease: "power2.out",
            delay: 0.5,
            stagger: 0.2,
            // opacity: 0,
            onComplete: () => {
                gsap.to(".LoadAnimation", {
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    onComplete: () => {
                        document.querySelector(".LoadAnimation").style.display = "none";
                    }
                });
            }
        });
    }, []);

    return (
        <div className="fixed top-0 z-10 LoadAnimation flex h-screen w-full flex-col items-center justify-center">
            <div className="loader_in w-full relative h-full flex flex-wrap text-center">
                <div className="preloader_pane justify-center items-end" style={{ display: "grid" }}>
                    <h3 className="midlandfontmedium tracking-[4px] text-black relative top-[-25px]">
                        Loading Luxury Properties...
                    </h3>
                </div>
                <div className="preloader_pane preloader_pane_2">
                    <h3 className="midlandfontmedium tracking-[4px] text-black pt-[25px]">
                        100%
                    </h3>
                </div>
            </div>
        </div>
    );
}






// import React, { useEffect } from 'react';
// import gsap from 'gsap';

// export default function LoadAnimation() {
//     useEffect(() => {
//         const loaderPanes = document.querySelectorAll('.preloader_pane'); // Select all panes

//         gsap.to(loaderPanes, {
//             height: '0%',
//             duration: 2,
//             ease: 'power2.out',
//             delay: 0.5,
//             stagger: 0.2,
//             onComplete: () => {
//                 document.querySelector('.LoadAnimation').style.display = 'none'; // Hide loader after animation
//             }
//         });
//     }, []);

//     return (
//         <div className="LoadAnimation flex h-screen w-full fixed top-0 left-0 flex-col items-center justify-center z-[9999]">
//             <div className="loader_in w-full relative h-full flex flex-wrap text-center">
//                 <div className="preloader_pane !flex justify-center items-end">
//                     <h3 className="midlandfontmedium tracking-[4px] text-black pb-10">
//                         Loading Luxury Properties...
//                     </h3>
//                 </div>
//                 <div className="preloader_pane preloader_pane_2">
//                     <h3 className="midlandfontmedium tracking-[4px] text-black pt-10">
//                         100%
//                     </h3>
//                 </div>
//             </div>
//         </div>
//     );
// }

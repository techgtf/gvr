import React, { useState, useEffect, useRef } from "react";
import "./loader.css";
import * as CONFIG from "../../config";

const Loader = () => {
    const [percent, setPercent] = useState(0);
    const percentRef = useRef(null);



    useEffect(() => {
        const interval = setInterval(() => {
            setPercent((prevPercent) => Math.min(prevPercent + 1, 100));
            if (percent >= 100) clearInterval(interval);
        }, 100);

        return () => clearInterval(interval); // Cleanup on unmount
    }, [percent]);

    return (
        <div
            role="status"
            aria-live="polite"
            className="loader flex h-screen w-full fixed top-0 left-0 flex-col items-center justify-center bg-white text-white !z-[999]"
        >
            <div className="loader_in w-full relative h-full text-center place-content-center" style={{ display: 'grid', background: "rgb(239 245 250)" }}>
                <h3 className="midlandfontmedium tracking-[4px] text-black">
                    Loading Luxury Properties...
                </h3>
                <h3 ref={percentRef} className="midlandfontmedium tracking-[4px] text-black mt-5">
                    {percent}%
                </h3>
            </div>
        </div>
    );
};

export default Loader;








// import React, { useState, useEffect } from "react";
// import { gsap } from "gsap";
// import "./loader.css";
// import * as CONFIG from "../../config";

// const Loader = ({ onLoaded }) => {
//     const [percent, setPercent] = useState(0);

//     useEffect(() => {
//         let count = 0;
//         const interval = setInterval(() => {
//             count += 1;
//             setPercent(count);
//             if (count === 100) {
//                 clearInterval(interval);
//                 animateLoader();
//             }
//         }, 30); // Adjust speed if needed

//         return () => clearInterval(interval);
//     }, []);

//     const animateLoader = () => {
//         gsap.to(".preloader_pane", {
//             height: 0,
//             duration: 1.2,
//             ease: "power3.inOut",
//         });

//         gsap.to(".loader", {
//             autoAlpha: 0,
//             duration: 0.8,
//             delay: 1.2,
//             ease: "power2.out",
//             onComplete: () => {
//                 if (onLoaded) onLoaded();
//             },
//         });
//     };

//     return (
//         <div className="loader flex h-screen w-full fixed top-0 left-0 flex-col items-center justify-center bg-white text-white z-[9999]">
//             <div className="loader_in w-full relative h-full flex flex-wrap text-center">
//                 <div className="preloader_pane !flex justify-center items-end">
//                     <h3 className="midlandfontmedium tracking-[4px] text-white">
//                         Loading Luxury Properties...
//                     </h3>
//                 </div>
//                 {/* <div className="text_div absolute left-0 right-0 flex flex-col justify-center items-center top-0 bottom-0 z-10 text-[14px]"></div> */}
//                 <div className="preloader_pane preloader_pane_2">
//                     <h3 className="midlandfontmedium tracking-[4px] text-white mt-5">
//                         {percent}%
//                     </h3>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Loader;

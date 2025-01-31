import React, { useEffect, useState } from "react";
import Header from "../frontend/HeaderFooter/Header";
import Footer from "../frontend/HeaderFooter/Footer";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import MicrositeMenu from "./components/microsite/MicrositeMenu";
import { useLocation } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import Loader from "../Loader/loader";
import useMediaLoaded from "./components/useMediaLoaded";
import "../Loader/loader.css";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function Layout({ children }) {
  const location = useLocation();
  const mediaLoaded = useMediaLoaded();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (mediaLoaded) {
      setTimeout(() => setLoading(false), 500); // Smooth fade-out transition
    }
  }, [mediaLoaded]);

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
      smoothTouch: 1.4,
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Loader Overlay */}
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-[100] transition-opacity duration-500">
          <Loader />
        </div>
      )}

      {/* Main Content */}
      {/* <Header /> */}
      {location.pathname === "/microsite" && <MicrositeMenu />}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}


export default Layout;




// import React, { useEffect } from "react";
// import Header from "../frontend/HeaderFooter/Header";
// import Footer from "../frontend/HeaderFooter/Footer";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import ScrollSmoother from "gsap/ScrollSmoother";
// import MicrositeMenu from "./components/microsite/MicrositeMenu";
// import { useLocation } from "react-router-dom";
// import CustomCursor from "./components/CustomCursor";
// import Loader from "../Loader/loader";
// import useMediaLoaded from "./components/useMediaLoaded";
// import "../Loader/loader.css";
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// function Layout({ children }) {
//   const location = useLocation();
//   const mediaLoaded = useMediaLoaded();

//   useEffect(() => {
//     const smoother = ScrollSmoother.create({
//       wrapper: "#smooth-wrapper",
//       content: "#smooth-content",
//       smooth: 1.5,
//       effects: true,
//       smoothTouch: 1.4,
//     });

//     return () => {
//       smoother.kill();
//     };
//   }, []);

//   return (
//     <>
//       <CustomCursor />
//       <Header />
//       {location.pathname === "/microsite" && <MicrositeMenu />}
//       <div id="smooth-wrapper">
//         <div id="smooth-content">
//           {children}
//           <Footer />
//         </div>
//       </div>
//     </>
//   );
// }

// export default Layout;

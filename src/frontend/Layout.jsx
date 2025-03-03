import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { useEffect, useState } from "react";
import Header from "../frontend/HeaderFooter/Header";
import Footer from "../frontend/HeaderFooter/Footer";
import MicrositeMenu from "./components/microsite/MicrositeMenu";
import CustomCursor from "./components/CustomCursor";
// import Loader from "../Loader/loader";
// import useMediaLoaded from "./components/useMediaLoaded";
import "../Loader/loader.css";
import { BASE_ROOT } from "../../config";
import MbTabLinks from "./components/mbTabLinks";
import useMediaLoader from "./components/useMediaLoaded";
import Loader from "../Loader/loader";
import ScrollToTop from "./components/ScrollToTop";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function Layout({ children }) {
  // const { isMediaLoaded, containerRef } = useMediaLoader();
  const location = useLocation();
  useEffect(() => {
    // Define dynamic CSS based on route
    let cssFile;
    
    if (location.pathname.startsWith("/")) {
      cssFile = import("../frontend/main.css"); // Admin-specific styles
    }

    return () => {
      // Cleanup if needed (optional)
    };
  }, [location.pathname]);
  useEffect(() => {
    // if (!isMediaLoaded) return;

    let smoother = ScrollSmoother.get();

    if (!smoother) {
      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
        smoothTouch: 1.4,
      });
    }

    // ✅ Refresh GSAP when route changes
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      if (smoother) {
        smoother.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      const wrapper = document.getElementById("smooth-wrapper");
      const content = document.getElementById("smooth-content");

      if (wrapper) wrapper.style.removeProperty("all");
      if (content) content.style.removeProperty("all");
    };
  }, [location.pathname]);


  const showMicrositeMenu =
    location.pathname === `${BASE_ROOT}sharanam-apartments-noida` ||
    location.pathname === `${BASE_ROOT}anandam-apartments-noida` ||
    location.pathname === `${BASE_ROOT}casa-uday-properties-in-ncr` ||
    location.pathname === `${BASE_ROOT}vilasa-sector-6-sohna` ||
    location.pathname === `${BASE_ROOT}sanctuary-sector-105-gurugram`


  return (
    <main>
      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute top-0 left-0 bg-white text-black p-2 z-50"
      >
        Skip to main content
      </a>


      <>

        {/* Custom Cursor */}
        <CustomCursor />

        {/* Main Content */}
        <Header />
        <ScrollToTop />
        {/* Mobile Menu Tabs */}
        <MbTabLinks />
        {showMicrositeMenu ? <MicrositeMenu /> : null}

        <div id="smooth-wrapper">
          <div id="smooth-content">
            {/* 👇 Add ID for the skip link target */}
            <div id="main-content">{children}</div>
            <Footer />
          </div>
        </div>
      </>

    </main>

  );
}

export default Layout;












// import { useLocation } from "react-router-dom";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import ScrollSmoother from "gsap/ScrollSmoother";
// import { useEffect, useState } from "react";
// import Header from "../frontend/HeaderFooter/Header";
// import Footer from "../frontend/HeaderFooter/Footer";
// import MicrositeMenu from "./components/microsite/MicrositeMenu";
// import CustomCursor from "./components/CustomCursor";
// // import Loader from "../Loader/loader";
// // import useMediaLoaded from "./components/useMediaLoaded";
// import "../Loader/loader.css";
// import { BASE_ROOT } from "../../config";
// import MbTabLinks from "./components/mbTabLinks";
// import useMediaLoader from "./components/useMediaLoaded";
// import Loader from "../Loader/loader";
// import ScrollToTop from "./components/ScrollToTop";

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// function Layout({ children }) {
//   const { isMediaLoaded, containerRef } = useMediaLoader();
//   const location = useLocation();

//   useEffect(() => {
//     if (!isMediaLoaded) return;

//     let smoother = ScrollSmoother.get();

//     if (!smoother) {
//       smoother = ScrollSmoother.create({
//         wrapper: "#smooth-wrapper",
//         content: "#smooth-content",
//         smooth: 1.5,
//         effects: true,
//         smoothTouch: 1.4,
//       });
//     }

//     // ✅ Refresh GSAP when route changes
//     setTimeout(() => {
//       ScrollTrigger.refresh();
//     }, 500);

//     return () => {
//       if (smoother) {
//         smoother.kill();
//       }
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());

//       const wrapper = document.getElementById("smooth-wrapper");
//       const content = document.getElementById("smooth-content");

//       if (wrapper) wrapper.style.removeProperty("all");
//       if (content) content.style.removeProperty("all");
//     };
//   }, [location.pathname, isMediaLoaded]);  // ✅ Runs when route changes



//   return (
//     <main ref={containerRef}>
//       {/* Skip Link */}
//       <a
//         href="#main-content"
//         className="sr-only focus:not-sr-only absolute top-0 left-0 bg-white text-black p-2 z-50"
//       >
//         Skip to Main Content
//       </a>

//       {!isMediaLoaded ? (
//         <Loader />
//       ) : (
//         <>
//           {location.pathname === `${BASE_ROOT}sharanam-apartments-noida` ||
//             location.pathname === `${BASE_ROOT}anandam-apartments-noida` ||
//             location.pathname === `${BASE_ROOT}gv-homes` ||
//             location.pathname === `${BASE_ROOT}vilasa-sector-6-sohna` ? <MicrositeMenu /> : null}

//           {/* Custom Cursor */}
//           <CustomCursor />

//           {/* Main Content */}
//           <Header />
//           <ScrollToTop/>
//           {/* Mobile Menu Tabs */}
//           <MbTabLinks />

//           <div id="smooth-wrapper">
//             <div id="smooth-content">
//               {/* 👇 Add ID for the skip link target */}
//               <div id="main-content">{children}</div>
//               <Footer />
//             </div>
//           </div>
//         </>
//       )}
//     </main>

//   );
// }

// export default Layout;
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

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function Layout({ children }) {
  const { isMediaLoaded, containerRef } = useMediaLoader();
  const location = useLocation();

  useEffect(() => {
    if (!isMediaLoaded) return;

    let smoother = ScrollSmoother.get();

    if (!smoother) {
      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
        smoothTouch: 1.4,
      });
      console.log("ScrollSmoother initialized");
    }

    // ✅ Refresh GSAP when route changes
    setTimeout(() => {
      ScrollTrigger.refresh();
      console.log("GSAP Animations Refreshed!");
    }, 500);

    return () => {
      console.log("Cleaning up ScrollSmoother...");
      if (smoother) {
        smoother.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      const wrapper = document.getElementById("smooth-wrapper");
      const content = document.getElementById("smooth-content");

      if (wrapper) wrapper.style.removeProperty("all");
      if (content) content.style.removeProperty("all");
    };
  }, [location.pathname, isMediaLoaded]);  // ✅ Runs when route changes



  return (
    <main ref={containerRef}>
      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute top-0 left-0 bg-white text-black p-2 z-50"
      >
        Skip to Main Content
      </a>

      {!isMediaLoaded ? (
        <Loader />
      ) : (
        <>
          {location.pathname === `${BASE_ROOT}sharanam` ||
            location.pathname === `${BASE_ROOT}anandam` ||
            location.pathname === `${BASE_ROOT}gv-homes` ||
            location.pathname === `${BASE_ROOT}vilasa` ? <MicrositeMenu /> : null}

          {/* Custom Cursor */}
          <CustomCursor />

          {/* Main Content */}
          <Header />

          {/* Mobile Menu Tabs */}
          <MbTabLinks />

          <div id="smooth-wrapper">
            <div id="smooth-content">
              {/* 👇 Add ID for the skip link target */}
              <div id="main-content">{children}</div>
              <Footer />
            </div>
          </div>
        </>
      )}
    </main>

  );
}

export default Layout;
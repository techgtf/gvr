import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { useEffect, useState } from "react";
import Header from "../frontend/HeaderFooter/Header";
import Footer from "../frontend/HeaderFooter/Footer";
import MicrositeMenu from "./components/microsite/MicrositeMenu";
import CustomCursor from "./components/CustomCursor";
import Loader from "../Loader/loader";
import useMediaLoaded from "./components/useMediaLoaded";
import "../Loader/loader.css";
import { BASE_ROOT } from "../../config";
import MbTabLinks from "./components/mbTabLinks";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function Layout({ children }) {
  const location = useLocation();
  const mediaLoaded = useMediaLoaded();
  const [loading, setLoading] = useState(true);

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
    if (mediaLoaded) {
      setTimeout(() => setLoading(false), 500); // Smooth fade-out transition
    }
  }, [mediaLoaded]);
  useEffect(() => {
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
  }, [location.pathname]);  // ✅ Runs when route changes



  return (
    <>
      <div className="user_body">
        {/* Custom Cursor */}
        <CustomCursor />

        {/* Loader Overlay */}
        {loading && (
          <div className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-[100] transition-opacity duration-500">
            <Loader />
          </div>
        )}

        {/* Main Content */}
        <Header />
        {/* mobile menus tabs */}
        <MbTabLinks />
        {location.pathname === `${BASE_ROOT}microsite` && <MicrositeMenu />}
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
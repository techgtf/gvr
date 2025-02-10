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
  
    return () => {
      console.log("Cleaning up ScrollSmoother...");
      
      if (smoother) {
        smoother.kill();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
  
      // Ensure DOM elements exist before modifying them
      const wrapper = document.getElementById("smooth-wrapper");
      const content = document.getElementById("smooth-content");
  
      if (wrapper) wrapper.removeAttribute("style");
      if (content) content.removeAttribute("style");
    };
  }, [location.pathname]);
  
  

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
      <Header />
      {location.pathname === `${BASE_ROOT}microsite` && <MicrositeMenu />}
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
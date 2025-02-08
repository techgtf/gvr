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

function Layout({ children }) {
  const location = useLocation();
  const mediaLoaded = useMediaLoaded();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (mediaLoaded) {
      setLoading(false)
    }
  }, [mediaLoaded]);

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
      smoothTouch: 1.4,
    });
  
    console.log("ScrollSmoother created");
  
    return () => {
      console.log("ScrollSmoother destroyed");
      smoother.kill();
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

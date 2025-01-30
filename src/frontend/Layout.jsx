import React, { useEffect } from "react";
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
<<<<<<< HEAD
      <div className={mediaLoaded ? "loader-hidden" : "loader"}>
        <Loader />
      </div>
      <div className={mediaLoaded ? "content-visible" : "content-hidden"}>
        <CustomCursor />
        <Header />
        {location.pathname === "/microsite" && <MicrositeMenu />}
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
            <Footer />
          </div>
=======
    <CustomCursor/>
      {/* <ContextProvider> */}
      <Header />
      {location.pathname === "/microsite" && <MicrositeMenu />}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          {children}
          <Footer />
>>>>>>> 6d5d146323632dbcdd9ce459a833972c127f3f86
        </div>
      </div>
    </>
  );
}

export default Layout;

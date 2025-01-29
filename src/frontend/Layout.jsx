import React, { useEffect } from "react";
import Header from "../frontend/HeaderFooter/Header";
import Footer from "../frontend/HeaderFooter/Footer";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import MicrositeMenu from "./components/microsite/MicrositeMenu";
import { useLocation } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function Layout({ children }) {
  const location = useLocation();

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
    <CustomCursor/>
      <Header />
      {/* <ContextProvider> */}
      {location.pathname === "/microsite" && <MicrositeMenu />}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          {children}
          <Footer />
        </div>
      </div>
      {/* </ContextProvider> */}
    </>
  );
}

export default Layout;
import React, { useEffect, useRef, useState } from "react";
import Header from "../frontend/HeaderFooter/Header";
import Footer from "../frontend/HeaderFooter/Footer";
import FooterBottom from "./HeaderFooter/FooterBottom";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function Layout({ children }) {
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
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          {children}
          <Footer />
          <FooterBottom />
        </div>
      </div>
    </>
  );
}

export default Layout;

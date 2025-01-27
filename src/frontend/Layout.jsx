<<<<<<< HEAD
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
=======
import React, { useEffect } from "react";
import Header from "../frontend/HeaderFooter/Header";
import Footer from "../frontend/HeaderFooter/Footer";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import MicrositeMenu from "./components/microsite/MicrositeMenu";
import { useLocation } from "react-router-dom";
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
      <Header />
      {/* <ContextProvider> */}
      {location.pathname === "/microsite" && <MicrositeMenu />}
>>>>>>> origin/khushi
      <div id="smooth-wrapper">
        <div id="smooth-content">
          {children}
          <Footer />
<<<<<<< HEAD
          <FooterBottom />
        </div>
      </div>
=======
        </div>
      </div>
      {/* </ContextProvider> */}
>>>>>>> origin/khushi
    </>
  );
}

export default Layout;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    const smoother = ScrollSmoother.get();
    
    // Wait for GSAP and ensure smoother is ready
    const scrollToTop = () => {
      if (smoother) {
        smoother.scrollTo(0, true); // Smoothly scroll to top
        smoother.refresh(); // Refresh smoother in case it's not updated
        console.log("ScrollToTop: Scrolled using ScrollSmoother");
      } else {
        window.scrollTo(0, 0); // Fallback for non-GSAP pages
        console.log("ScrollToTop: Used window.scrollTo (fallback)");
      }
    };

    // Delay execution slightly to avoid conflicts
    setTimeout(scrollToTop, 300); 

  }, [location.pathname]); // Runs on every route change

  return null;
};

export default ScrollToTop;

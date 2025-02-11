import React, { useState, useEffect, useRef } from "react";
import BannerDetails from "./BannerDetails";
import ZoomOut from "../Animations/ZoomOut";

function HeroSection({ 
  desktopBg = "assets/frontend/images/microsite/hero.webp", 
  mobileBg = "assets/frontend/images/microsite/hero.webp", 
  scrollText = "SCROLL DOWN", 
  sectionId = "overview", 
  initialScale = 1.5, 
  duration = 2,
  bannerDetailsProps = {} 
}) {
  const [backgroundImage, setBackgroundImage] = useState(desktopBg);
  const bannerDetailsRef = useRef(null);

  // Function to check screen size and set background accordingly
  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth < 768) {
        setBackgroundImage(mobileBg); // Mobile background
      } else {
        setBackgroundImage(desktopBg); // Desktop background
      }
    };

    updateBackground(); // Initial check
    window.addEventListener("resize", updateBackground); // Listen for window resize

    return () => window.removeEventListener("resize", updateBackground); // Cleanup
  }, [desktopBg, mobileBg]); // Runs when these props change

  const scrollToBannerDetails = () => {
    if (bannerDetailsRef.current) {
      bannerDetailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="relative heroSection h-[60vh] md:h-[80vh]" id={sectionId}>
        <ZoomOut initialScale={initialScale} duration={duration}>
          <div
            className="hero_vdo_div h-[60vh] md:h-[80vh] relative !bg-cover !bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          >
            <div className="absolute h-[300px] w-full bg-gradient-to-b from-[#00000040] top-0 left-0"></div>
            <div className="absolute h-[300px] w-full bg-gradient-to-t from-[#00000040] bottom-0 left-0"></div>
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div
              className="scroll_down cursor-pointer text-[6px] md:text-[7px] !z-20 midlandfontmedium !tracking-[9px] text-white absolute bottom-8 md:bottom-10 flex justify-center w-full"
              onClick={scrollToBannerDetails}
            >
              {scrollText}
            </div>
          </div>
        </ZoomOut>
      </section>

      <section className="banner_details bg-white relative w-full" ref={bannerDetailsRef}>
        <BannerDetails {...bannerDetailsProps} />
      </section>
    </>
  );
}

export default HeroSection;

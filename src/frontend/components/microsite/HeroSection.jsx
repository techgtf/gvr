import React, { useRef } from "react";
import BannerDetails from "./BannerDetails";
import ZoomOut from "../Animations/ZoomOut";

function HeroSection() {
  const bannerDetailsRef = useRef(null);

  const scrollToBannerDetails = () => {
    if (bannerDetailsRef.current) {
      bannerDetailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="relative heroSection h-[60vh] md:h-[80vh]" id="overview">
        
        <ZoomOut initialScale={1.5} duration={2}>
          <div
            className="hero_vdo_div h-[60vh] md:h-[80vh] relative !bg-cover !bg-center bg-no-repeat"
            style={{
              background: `url(assets/frontend/images/microsite/hero.jpg)`,
            }}
          >
            <div className="absolute h-[300px] w-full bg-gradient-to-b  from-[#474747] top-0 left-0"></div>
            <div className="absolute h-[300px] w-full bg-gradient-to-t  from-[#474747] bottom-0 left-0"></div>
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div
              className="scroll_down cursor-pointer text-[6px] md:-[7px] !z-20 midlandfontmedium !tracking-[9px] text-white absolute bottom-8  md:bottom-10 flex justify-center w-full"
              onClick={scrollToBannerDetails}
            >
              SCROLL DOWN
            </div>
          </div>
        </ZoomOut>
      </section>

      <section
        className="banner_details bg-white relative w-full"
        ref={bannerDetailsRef}
      >
        <BannerDetails />
      </section>
    </>
  );
}

export default HeroSection;
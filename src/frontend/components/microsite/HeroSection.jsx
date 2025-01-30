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
      <section className="relative heroSection h-[80vh]" id="overview">
        <ZoomOut initialScale={1.5} duration={2}>
          <div
            className="hero_vdo_div h-[80vh] !bg-cover !bg-center bg-no-repeat"
            style={{
              background: `url(assets/frontend/images/microsite/hero.jpg)`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div
              className="scroll_down cursor-pointer text-[7px] z-10 midlandfontmedium !tracking-[9px] text-white absolute bottom-10 flex justify-center w-full"
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
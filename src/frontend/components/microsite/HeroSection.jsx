import React, { useRef } from "react";
import BannerDetails from "./BannerDetails";

function HeroSection() {
  const bannerDetailsRef = useRef(null);

  const scrollToBannerDetails = () => {
    if (bannerDetailsRef.current) {
      bannerDetailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="relative  heroSection h-[80vh]" id="overview">
        <div
          className="hero_vdo_div h-screen !bg-cover !bg-center bg-no-repeat"
          style={{
            background: `url(assets/frontend/images/microsite/hero.jpg)`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div
            className="scroll_down cursor-pointer text-[8px] midlandfontmedium !tracking-[10px] text-white absolute bottom-10 flex justify-center w-full"
            onClick={scrollToBannerDetails}
          >
            SCROLL DOWN
          </div>
        </div>
      </section>

      <section className="banner_details bg-white relative w-full " ref={bannerDetailsRef}>
        <BannerDetails />
      </section>
    </>
  );
}

export default HeroSection;
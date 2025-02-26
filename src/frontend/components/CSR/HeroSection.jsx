import React from "react";
import * as CONFIG from "../../../../config";
import Breadcrumb from '../breadcrumb';
import ZoomOut from "../Animations/ZoomOut";

function HeroSection() {
    return (
        <>
        <div className="relative overflow-hidden">
        <ZoomOut initialScale={1.5} duration={2}>
            {/* Desktop Image */}
            <img
                src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/csr/csr.webp`}
                alt="esg"
                className="hidden lg:block h-[60vh] object-cover w-[100%]"
            />
            {/* Mobile Image */}
            <img
                src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/csr/csr_mobile.webp`}
                alt="esg"
                className="lg:hidden h-[40vh] object-cover w-[100%]"
            />
           </ZoomOut>
        </div>

      {/* <Breadcrumb currentPage="ESG" linkPath={`${CONFIG.BASE_ROOT}csr`} /> */}
    </>
  );
}

export default HeroSection;

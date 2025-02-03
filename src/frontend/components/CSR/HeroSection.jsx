import React from 'react'
import * as CONFIG from "../../../../config";

function HeroSection() {
    return (
        <div className="relative">
            <img
                src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/csr/csr.jpg`}
                alt="esg"
                className="h-[80vh] object-cover w-[100%]"
            />
            <h2 className="xl:text-[18px] text-[16px] midlandfontmedium text-[#143C5E] absolute top-[30%] xl:top-[50%] left-[10%] mb-[0.5rem] font-medium tracking-[5px]">
                ESG
            </h2>
            <p className="absolute top-[30%] xl:top-[50%] left-[10%] mt-[2.5rem] text-[#6C6C6C] tracking-[2px] text-[14px]">
                HOME - ESG
            </p>
        </div>
    )
}

export default HeroSection

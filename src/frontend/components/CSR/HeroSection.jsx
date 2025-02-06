import React from 'react';
import * as CONFIG from "../../../../config";
import { Link } from 'react-router-dom';
import Breadcrumb from '../breadcrumb';

function HeroSection() {
    return (
        <>
        <div className="relative">
            {/* Desktop Image */}
            <img
                src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/csr/csr.jpg`}
                alt="esg"
                className="hidden lg:block h-[60vh] object-cover w-[100%]"
            />
            {/* Mobile Image */}
            <img
                src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/csr/csr_mobile.jpg`}
                alt="esg"
                className="lg:hidden h-[40vh] object-cover w-[100%]"
            />
            <h2 className="xl:text-[18px] hidden md:block text-[14px] midlandfontmedium text-[#143C5E] absolute top-[30%] xl:top-[50%] left-[10%] mb-[0.5rem] font-medium tracking-[5px]">
                ESG
            </h2>
            <p className="absolute top-[30%] hidden md:block xl:top-[50%] left-[10%] mt-[2.5rem] text-[#6C6C6C] tracking-[2px] text-[14px]">
                HOME - ESG
            </p>
        </div>

       <Breadcrumb currentPage="ESG" linkPath={`${CONFIG.BASE_ROOT}csr`}/>
        </>
    );
}

export default HeroSection;

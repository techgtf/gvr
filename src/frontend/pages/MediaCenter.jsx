import React from 'react'
import * as CONFIG from "../../../config";
import HeroSectionAboutUs from '../components/aboutUs/HeroSectionAboutUs'

function MediaCenter() {
    return (
        <>
        <HeroSectionAboutUs
                img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/media/hero.jpg`}
                heading={"MEDIA CENTER"}
                extraClassesImg={"objectRight"}
              />
         
           

            <section className="download relative px-5 md:px-12 py-10 md:py-14">
                <div className="grid grid-cols-2">
                    {/* Left Section */}
                    <div className="greatValue bg-[#EFF5FA] px-10 py-5">
                        <div className="box border border-[#0061ab] p-5  flex flex-col items-center justify-center">
                            <div className="logo py-5">
                                <img
                                    src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/logo-colored.png`}
                                    alt="Great Value Logo"
                                />
                            </div>
                            <div className="mt-10">
                                <h3 className="uppercase text-lg tracking-[1px]">Download Great Value Logo</h3>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="download_sec px-10 py-5">
                        <ul>
                            <li className='flex justify-between text-primary py-5 border-b border-gray-500'>
                                <h3 className="uppercase text-lg tracking-[1px]">Company Brochure</h3>
                                <h4
                                    className="download-heading uppercase text-lg tracking-[1px]"
                                    data-toggle="modal"
                                    data-target="#downloadBrochure-Modal"
                                >
                                    Download File

                                </h4>
                            </li>
                        </ul>

                        {/* Download Logo Types */}

                        <div className="logo_types p-5 bg-[#EFF5FA] mt-5 flex justify-center">
                            <ul>
                                <li className='flex gap-10 items-center py-2'>
                                    white -
                                    <span>
                                        <a href={`${CONFIG.ASSET_IMAGE_URL}frontend/images/media/logos/white/logo.png`} download="logo.png">
                                            png
                                        </a>
                                    </span> |
                                    <span>
                                        <a href={`${CONFIG.ASSET_IMAGE_URL}frontend/images/media/logos/white/logo.jpg`} download="logo.jpg">
                                            jpg
                                        </a>
                                    </span> |
                                    <span>
                                        <a href={`${CONFIG.ASSET_IMAGE_URL}frontend/images/media/logos/white/logo.webp`} download="logo.webp">
                                            webp
                                        </a>
                                    </span>
                                </li>

                                <li className='flex gap-10 items-center py-2'>
                                    blue -
                                    <span>
                                        <a href={`${CONFIG.ASSET_IMAGE_URL}frontend/images/media/logos/blue/logo.png`} download="logo.png">
                                            png
                                        </a>
                                    </span> |
                                    <span>
                                        <a href={`${CONFIG.ASSET_IMAGE_URL}frontend/images/media/logos/blue/logo.jpg`} download="logo.jpg">
                                            jpg
                                        </a>
                                    </span> |
                                    <span>
                                        <a href={`${CONFIG.ASSET_IMAGE_URL}frontend/images/media/logos/blue/logo.webp`} download="logo.webp">
                                            webp
                                        </a>
                                    </span>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default MediaCenter

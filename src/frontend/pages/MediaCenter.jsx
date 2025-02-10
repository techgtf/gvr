import React from 'react'
import ZoomOut from '../components/Animations/ZoomOut'
import { Link } from 'react-router-dom'
import SlideIn from '../components/Animations/SlideIn'
import CommonHeading from '../components/commonHeading'
import * as CONFIG from "../../../config";

function MediaCenter() {
    return (
        <>
            <section className="relative heroSection h-[60vh] md:h-[80vh]" >
                <ZoomOut initialScale={1.5}
                    duration={2}>
                    <div
                        className="hero_vdo_div h-[60vh] md:h-[80vh] relative !bg-cover !bg-center bg-no-repeat"
                        style={{
                            backgroundImage: "url(assets/frontend/images/microsite/anandam/hero/hero.jpg)",
                        }}
                    >
                        <div className="absolute h-[300px] w-full bg-gradient-to-b from-[#00000040] top-0 left-0"></div>
                        <div className="absolute h-[300px] w-full bg-gradient-to-t from-[#00000040] bottom-0 left-0"></div>
                        <div className="absolute inset-0 bg-black opacity-20"></div>

                    </div>
                </ZoomOut>
            </section>
            <div className="breadcrumb py-5 flex gap-5 items-center  text-[15px] w-full bg-transparent border-b border-black-rgba px-5">
                <SlideIn duration={1} delay={0.3}>
                    <CommonHeading HeadingText="MEDIA CENTER" />
                </SlideIn>
                HOME - <Link to="/" className="text-primary text-[14px]">MEDIA CENTER</Link>
            </div>

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
                                    white - <span> <Link to="">png</Link>  </span> |<span> <Link to="">jpg</Link>  </span> |<span> <Link to="">webp</Link>  </span> 
                                </li>
                                <li className='flex gap-10 items-center py-2'>
                                    blue - <span> <Link to="">png</Link>  </span> |<span> <Link to="">jpg</Link>  </span> |<span> <Link to="">webp</Link>  </span> 
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

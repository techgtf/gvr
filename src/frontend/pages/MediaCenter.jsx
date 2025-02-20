import React from 'react'
import * as CONFIG from "../../../config";
import HeroSectionAboutUs from '../components/aboutUs/HeroSectionAboutUs'
import OverviewSection from '../components/overviewSection/overviewSection';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import News from '../components/MediaCenter/News';
import FadeIn from '../components/Animations/FadeIn';
import CommonHeading from '../components/commonHeading';
import { Link} from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { Helmet } from 'react-helmet';
gsap.registerPlugin(ScrollTrigger);
function MediaCenter() {

    return (
        <>
            <Helmet>
                <title>Great Value Realty | media-center</title>
            </Helmet>
            <HeroSectionAboutUs
                img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/media/hero.jpg`}
                heading={"MEDIA CENTER"}
                extraClassesImg={"objectRight"}
            />

            <OverviewSection
                heading={
                    "Making Headlines, Sharing Stories, Showcasing Impact"
                }
                paragraph={
                    "The Media Section is where Great Value Realty’s vision meets the spotlight. From press releases to industry features, online highlights to on-ground events, every update captures our journey of innovation and impact. Stay tuned as we build, transform, and make headlines."
                }
                showKnowMore={false}
            />

            <section className="download relative px-5 md:px-12 py-10 md:py-14">
                <div className="grid grid-cols-12 gap-3 ">
                    {/* Left Section */}
                    <div className="headline col-span-12 md:col-span-3">
                        <div className="topLine uppercase tracking-[3px] py-3 mt-8 font-[300]">document</div>
                        <FadeIn duration={2} delay={0.5}>
                            <CommonHeading HeadingText="PRESS CENTRE" />
                        </FadeIn>
                    </div>
                    <div className="greatValue flex items-center col-span-12 md:col-span-4">
                        <div className="box border bg-[#EFF5FA] border-[#0061ab63] p-[1.5rem] flex flex-col  ">
                            <h3 className="uppercase text-[17px] tracking-[1px] ">Download Great Value Logo</h3>
                            <div className="logo items-center pt-5 mt-10 flex justify-between">
                                <img
                                    src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/logo-colored.png`}
                                    alt="Great Value Realty Logo" className='w-[40%]'
                                />

                                <ul>
                                    <li className='flex gap-2 uppercase items-center py-2'>
                                        <span>
                                            <a href={`${CONFIG.ASSET_IMAGE_URL}frontend/images/media/logos/white/logo.png`} download="logo.png" className='text-[16px]'>
                                                png
                                            </a>
                                        </span> |
                                        <span>
                                            <a href={`${CONFIG.ASSET_IMAGE_URL}frontend/images/media/logos/white/logo.jpg`} download="logo.jpg" className='text-[16px]'>
                                                jpg
                                            </a>
                                        </span> |
                                        <span>
                                            <a href={`${CONFIG.ASSET_IMAGE_URL}frontend/images/media/logos/white/logo.webp`} download="logo.webp" className='text-[16px]'>
                                                webp
                                            </a>
                                        </span>
                                    </li>
                                </ul>

                            </div>

                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="download_sec px-8  col-span-12 md:col-span-5">
                        {/* Download Logo Types */}

                        <div className="logo_types  w-full flex justify-center">
                            <ul className=' w-full'>
                                <Link to={`${CONFIG.BASE_ROOT}coming-soon`}> <li className='flex justify-between border-b border-gray-300 items-center py-4'>
                                    <h3 className="tracking-[3.5px] text-[8px] leading-[3] midlandfontmedium ">Spokesperson Photo</h3>
                                    <BsFileEarmarkPdf className='text-xl' />
                                </li>
                                </Link>
                                <Link to={`${CONFIG.BASE_ROOT}coming-soon`} >
                                    <li className='flex justify-between border-b border-gray-300 items-center py-4'>
                                        <h3 className="tracking-[3.5px] text-[8px] leading-[3] midlandfontmedium">Spokesperson Profile</h3>
                                        <BsFileEarmarkPdf className='text-xl' />
                                    </li>
                                </Link>
                                <Link to={`${CONFIG.BASE_ROOT}coming-soon`}>
                                    <li className='flex justify-between border-b border-gray-300 items-center py-4'>
                                        <h3 className="tracking-[3.5px] text-[8px] leading-[3] midlandfontmedium">Company Profile</h3>
                                        <BsFileEarmarkPdf className='text-xl' />
                                    </li>
                                </Link>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            <News />

        
        </>
    )
}

export default MediaCenter

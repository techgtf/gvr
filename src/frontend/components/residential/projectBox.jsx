import React, { useEffect, useState } from 'react'
import * as CONFIG from "../../../../config"
import { Link } from 'react-scroll';
import { useImageReveal } from '../useImageReveal';
// import ZoomOut from '../Animations/ZoomOut';
import SlideIn from '../Animations/SlideIn';

export default function ProjectBox({ projectsData }) {
    
    useImageReveal(".reveal")
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 767)
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])


    return (
        <div className='project_box_wrap lg:p-0 p-[15px] pt-[30px]'>
            {
                projectsData && (
                    projectsData.map((data, index) =>
                        <div
                            className='project_box reveal_cut_effect flex flex-wrap justify-between lg:even:flex-row-reverse lg:even:pl-[40px] lg:even:pr-[0] lg:pr-[40px] lg:pt-[80px] lg:mb-0 mb-[30px] lg:px-[0] lg:py-[0] px-[18px] py-[18px] lg:bg-transparent bg-white'
                            key={index}>
                            <div className='img_side overflow-hidden lg:w-[62%] w-full reveal'>
                                {/* <ZoomOut initialScale={1.5} duration={2}> */}
                                <img src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/projects/residential/${data.imgSrc}`} alt={data.alt} />
                                {/* </ZoomOut> */}
                            </div>
                            <div className='content_side lg:pl-[50px] odd:pl-0 lg:w-[37%] w-full lg:pt-5 pt-[30px] grid lg:justify-between items-center lg:text-left lg:gap-0 gap-[35px]'>
                                <div className='top_div'>
                                    <div className='pro_name midlandfontmedium lg:tracking-[7px] tracking-[5px] uppercase lg:text-[18px] text-[12px] lg:mb-[45px] mb-[20px]'>{data?.name}</div>
                                    <div className='pro_name midlandfontmedium tracking-[4px] uppercase lg:text-[11px] text-[9px]'>{data?.location}</div>
                                </div>

                                <SlideIn duration={1} delay={0.5}>
                                    <div className='bottom_div'>
                                        <span className='typology lg:text-[16px] text-[14px] tracking-[1px] uppercase block lg:mb-[25px] mb-[10px]'>{data?.typology}</span>
                                        <p className='overview text-[#000000B2] tracking-[1px] text-justify'>{isMobile ? data?.overview.slice(0, 160) + "..." : data?.overview}</p>
                                    </div>
                                </SlideIn>

                                <Link
                                    to={`${data?.pageLink}`}
                                    className='lg:block px-6 py-[8px] lg:text-[16px] tracking-[2px] rounded-sm uppercase border text-[#33638b] border-[#33638b] hover:border-[#000] hover:text-[#000] w-fit'
                                >view project</Link>


                            </div>
                        </div>
                    )
                )
            }
        </div>
    )
}

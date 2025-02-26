import React, { useEffect, useState } from 'react'
import * as CONFIG from "../../../../config"
import { Link } from 'react-router-dom';
import { useImageReveal } from '../useImageReveal';
// import ZoomOut from '../Animations/ZoomOut';
import SlideIn from '../Animations/SlideIn';
import CommonPera from '../commonPera';


const Loader =
    <div
        className=' h-[60vh] flex flex-wrap gap-4 justify-between w-full'>
        <div className='lg:w-[60%] w-full min-h-[60vh] bg-gray-200 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer rounded-md'></div>
        <div className='content_side lg:w-[37%] w-full flex flex-col justify-between '>
            <div className='top_div w-full'>
                <div className=' w-full mb-5 p-5 bg-gray-200 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer rounded-md'></div>
                <div className=' w-full p-5 bg-gray-200 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer rounded-md'></div>
            </div>
            <div className='bottom_div w-full grid gap-4 mt-5'>
                <span className='p-5 block mb-4 bg-gray-200 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer rounded-md'></span>
                <p className='p-5 bg-gray-200 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer rounded-md'></p>
            </div>
            <span className='p-5 block w-[50%] mt-5 bg-gray-200 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-md'></span>
        </div>
    </div>

export default function ProjectBox({ projectsData, loading, error }) {
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

    if (loading) return Loader;


    return (
        <div className='project_box_wrap lg:p-0 p-[15px] pt-[0]'>
            {
                projectsData && (
                    projectsData.map((data, index) =>
                        <div
                            className='project_box reveal_cut_effect flex flex-wrap justify-between lg:even:flex-row-reverse lg:even:pl-[40px] lg:even:pr-[0] lg:pr-[40px] lg:pt-[80px] lg:mb-0 mb-[30px] lg:px-[0] lg:py-[0] px-[15px] py-[15px] lg:bg-transparent bg-white'
                            key={index}>
                            <div className='img_side overflow-hidden lg:w-[62%] w-full reveal'>
                                {/* <ZoomOut initialScale={1.5} duration={2}> */}
                                {
                                    window.innerWidth > 768 ?
                                        <img className='lg:min-h-[500px] w-full object-cover' src={`${CONFIG.VITE_APP_STORAGE}${data?.thumbnail}`} alt={`${data?.name} image`} />
                                        :
                                        <img src={`${CONFIG.VITE_APP_STORAGE}${data?.thumbnail}`} alt={`${data?.name} image`} />
                                }
                                {/* </ZoomOut> */}
                            </div>
                            <div className='content_side lg:pl-[50px] odd:pl-0 lg:w-[37%] w-full lg:pt-5 pt-[30px] grid lg:justify-between items-center lg:text-left lg:gap-0 gap-[20px]'>
                                <div className='top_div'>
                                    <div className='pro_name midlandfontmedium lg:tracking-[7px] tracking-[5px] uppercase lg:text-[15px] text-[11px] lg:mb-[45px] mb-[20px]'>{data?.name}</div>
                                    <div className='pro_name midlandfontmedium tracking-[4px] uppercase lg:text-[10px] text-[8px]'>{data['location']?.address}</div>
                                </div>

                                <SlideIn duration={1} delay={0.5}>
                                    <div className='bottom_div'>
                                        <span className='typology lg:text-[16px] text-[13px] tracking-[1px] uppercase block lg:mb-[25px] mb-[10px]'>{data['subtypologie']?.typology}</span>
                                        <p className='overview text-[#000000B2] common_pera text-justify'>{isMobile ? data?.short_description.slice(0, 160) + "..." : data?.short_description}</p>
                                    </div>
                                </SlideIn>

                                <Link
                                    to={`${CONFIG.BASE_ROOT}${data?.slug}`}
                                    className='lg:block lg:mt-0 mt-[12px] px-5 py-[7px] lg:text-[14px] tracking-[1.5px] rounded-sm uppercase border text-[#33638b] border-[#33638b] hover:border-[#000] hover:text-[#000] w-fit'
                                >view project</Link>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    )
}

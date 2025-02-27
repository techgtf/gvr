import React from 'react'
import "./styles.css"
import * as CONFIG from "../../../../config"
import SlideIn from "../Animations/SlideIn";
import ZoomOut from "../Animations/ZoomOut";



export default function Index() {
    const pageData = [
        {
            content: [
                "Unlock the door to your dream home – with the perfect home loan!",
                "Buying a home is one of life’s biggest milestones, and we’re here to make it effortless. With our tailored home loan options, competitive interest rates, and expert guidance, we ensure a seamless journey from application to approval. Whether you're a first-time buyer or upgrading to your dream home, we help you secure the best financing solution that fits your needs. No hidden fees, no complicated terms, just a smooth, stress-free experience.",
                "Navigating home loans can feel overwhelming, but not with us by your side. Our team simplifies the process, providing personalized support, transparent terms, and hassle-free loan approvals. Let’s turn your homeownership dream into reality, because the right home deserves the right loan! Start your journey today and move one step closer to your perfect home.",
            ]
        },
        {
            logos: [
                "axis-bank-logo.webp",
                "bank-of-baroda-logo.webp",
                "canara-bank.webp",
                "hdfc-bank-logo.webp",
                "icici-bank-logo.webp",
                "idfc-logo.webp",
                "punjab-national-bank-logo.webp",
                "sbi-logo.webp",
            ]
        }
    ]


    return (
        <div className='area_converter_in lg:py-[80px] py-[30px] uppercase'>
            <div className='wrap_div lg:max-w-[95%] lg:px-0 px-[15px] w-full m-auto'>
                <div className='grid_div grid lg:grid-cols-2 items-center'>
                    <div className='left_side flex flex-wrap lg:gap-[40px] gap-[15px] lg:py-5 lg:mb-0 mb-[30px] overflow-hidden'>
                        {
                            pageData && pageData.map((data, index) => (
                                data.content ? data.content.map((text, contentIndex) => (
                                    <SlideIn duration={2} delay={0.7}>
                                        <p
                                            className='w-full lg:text-justify text-center common_pera'
                                            key={`${index}-${contentIndex}`}
                                        >{text}</p>
                                    </SlideIn>
                                )) : null
                            ))
                        }
                    </div>
                    <div className='right_side lg:pl-[178px] overflow-hidden'>
                        <ZoomOut initialScale={1.5} duration={2}>
                            <div className='div_in flex justify-between flex-wrap lg:gap-y-[40px] gap-y-[20px] lg:py-[50px] lg:px-[50px] px-[30px] py-[30px] rounded bg-white'>
                                {
                                    pageData && pageData.map((data, index) => (
                                        data.logos ? data.logos.map((logo, logoIndex) => (
                                            <div className='logo_box max-w-[48%] w-full even:flex justify-end' key={`${index}-${logoIndex}`}>
                                                <img
                                                    className='w-[70%]'
                                                    src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/home-loan/logo/${logo}`}
                                                    alt={logo} />
                                            </div>
                                        )) : null
                                    ))
                                }
                            </div>
                        </ZoomOut>
                    </div>
                </div>
            </div>
        </div>
    )
}

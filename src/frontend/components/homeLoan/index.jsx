import React from 'react'
import "./styles.css"
import * as CONFIG from "../../../../config"
import SlideIn from "../Animations/SlideIn";
import ZoomOut from "../Animations/ZoomOut";



export default function Index() {
    const pageData = [
        {
            content: [
                "All The reputed banks have authorized our projects for loan availability.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos inventore iusto aspernatur ea consequatur perferendis ut rerum unde velit odit accusamus mollitia cumque eius tempore qui eveniet, blanditiis quia eos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum ipsa voluptates necessitatibus rem ipsum dolor sit amet consectetur, adipisicing elit. Eum ipsa voluptates necessitatibus alias suscipit placeat vel assumenda? Et error aliquam adipisci consequatur at perspiciatis quia inventore ad. Aperiam, culpa deleniti.",
                "All qui eveniet, blanditiis quia eos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum ipsa voluptates necessitatibus rem ipsum dolor sit amet consectetur, adipisicing elit.",
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

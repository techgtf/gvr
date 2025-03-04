import React from 'react'
import * as CONFIG from "../../../../config"
// import FadeIn from "../Animations/FadeIn";
import SlideIn from "../Animations/SlideIn";
import ZoomOut from "../Animations/ZoomOut";
// import "./style.css";

export default function PageOverview({data}) {
    const {heading,description,sub_heading,image}= data;

    return (
        <div className='page_overview'>
            <div className='wrapper lg:max-w-[95%] lg:px-0 px-[15px] w-full m-auto lg:mb-[70px] mb-[20px]'>
                {heading && (
                <SlideIn duration={2} delay={0.7}>
                    <p className='text-justify common_pera'>{heading}</p>
                </SlideIn>
                )}
                <div className='grid_div lg:mt-[50px] grid lg:grid-cols-2 lg:gap-[50px] overflow-hidden'>
                    <div className='img_div lg:my-0 my-5 overflow-hidden'>
                        <ZoomOut duration={2} delay={0.7}>
                            <img src={image} alt="tax benifit overview image" />
                        </ZoomOut>
                    </div>
                    <div className='contetn_div flex flex-col justify-center lg:gap-[55px] gap-[15px]'>
                        {description && <div className="common_pera text-justify" dangerouslySetInnerHTML={{ __html: description }} />}
                        {sub_heading && <p className='text-justify common_pera'>{sub_heading}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

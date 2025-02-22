import React from 'react'
import * as CONFIG from "../../../../config"
// import FadeIn from "../Animations/FadeIn";
import SlideIn from "../Animations/SlideIn";
import ZoomOut from "../Animations/ZoomOut";

export default function PageOverview() {

    return (
        <div className='page_overview'>
            <div className='wrapper lg:max-w-[95%] lg:px-0 px-[15px] w-full m-auto lg:mb-[70px] mb-[20px]'>
                <SlideIn duration={2} delay={0.7}>
                    <p className='text-justify common_pera'>Did you know that tax benefits can be availed after the construction of the house as the interest repaid during construction cannot be claimed as Pre-EMI interest on the apartment loan? Read more about the various ways you can save tax on your apartment loan below.</p>
                </SlideIn>
                <div className='grid_div lg:mt-[50px] grid lg:grid-cols-2 lg:gap-[50px] overflow-hidden'>
                    <div className='img_div lg:my-0 my-5 overflow-hidden'>
                        <ZoomOut duration={2} delay={0.7}>
                            <img src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/taxBenifit/overview.webp`} alt="tax benifit overview image" />
                        </ZoomOut>
                    </div>
                    <div className='contetn_div flex flex-col justify-center lg:gap-[55px] gap-[15px]'>
                        <p className='text-justify common_pera'>These days more and more people are opting to purchase apartments and have their dream home built in it rather than go for an apartment or villa with the same design. It is a myth that apartment loans do not offer as much tax benefits as home loans. Now that it is that time of the year when people go frantic – doing the eleventh-hour struggle to collect every one of those bills, receipts, deductions, income papers, bank statements, and more, let us check out the perks of owning an apartment. Yes, tax time is looming ahead. But during the rush hour, you might overlook a huge opportunity to save tax that owning an apartment or property can fetch you.</p>
                        <p className='text-justify common_pera'>Below are a few tips to help you catalogue your deductions this year and may be utilized the same tips next year.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import * as CONFIG from "../../../../config"
// import FadeIn from "../Animations/FadeIn";
import SlideIn from "../Animations/SlideIn";
import ZoomOut from "../Animations/ZoomOut";

export default function PageOverview({data}) {
    const {heading,description,sub_heading,image}= data;

    return (
        <div className='page_overview'>
            <div className='wrapper lg:max-w-[95%] lg:px-0 px-[15px] w-full m-auto lg:mb-[70px] mb-[20px]'>
                {heading && (
                <SlideIn duration={2} delay={0.7}>
<<<<<<< HEAD
                    <p className='text-justify common_pera'>Did you know that tax benefits can be availed after the construction of the house as the interest repaid during construction cannot be claimed as Pre-EMI interest on the apartment loan? Read below for more about the how you can save tax on your apartment loan.</p>
=======
                    <p className='text-justify common_pera'>{heading}</p>
>>>>>>> be5d48c49e395fd2ab83dd8896572878b61d7f55
                </SlideIn>
                )}
                <div className='grid_div lg:mt-[50px] grid lg:grid-cols-2 lg:gap-[50px] overflow-hidden'>
                    <div className='img_div lg:my-0 my-5 overflow-hidden'>
                        <ZoomOut duration={2} delay={0.7}>
                            <img src={`${CONFIG.VITE_APP_STORAGE}${image}`} alt="tax benifit overview image" />
                        </ZoomOut>
                    </div>
                    <div className='contetn_div flex flex-col justify-center lg:gap-[55px] gap-[15px]'>
<<<<<<< HEAD
                        <p className='text-justify common_pera'>These days, more and more people are opting to purchase apartments and have their dream homes built in them rather than go for an apartment or villa with the same design. It is a myth that apartment loans do not offer as much tax benefits as home loans. Now that it is that time of the year when people go frantic – doing the eleventh-hour struggle to collect every one of those bills, receipts, deductions, income papers, bank statements, and more, let us check out the perks of owning an apartment. Yes, tax time is looming ahead. But during the rush hour, you might overlook a huge opportunity to save tax that owning an apartment or property can fetch you.</p>
                        <p className='text-justify common_pera'>Below are a few tips to help you catalog your deductions this year and may be utilize the same tips next year.</p>
=======
                        {description && <p className='text-justify common_pera'>{description}</p>}
                        {sub_heading && <p className='text-justify common_pera'>{sub_heading}</p>}
>>>>>>> be5d48c49e395fd2ab83dd8896572878b61d7f55
                    </div>
                </div>
            </div>
        </div>
    )
}

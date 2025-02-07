import React, { lazy } from 'react'
const CommonHeading = lazy(() => import("../commonHeading"));
const CommonAccordion = lazy(() => import('../commonAccordion'))

export default function Index() {
    const accData = [
        {
            title: 'What is freehold property?',
            content: 'Free hold property means the property which is free from all encumbrances...',
        },
        {
            title: 'What are the costs involved in buying a property?',
            content: 'Apart from the purchase price, additional costs may include stamp duty...',
        },
        {
            title: 'How do I check the credibility of a real estate developer?',
            content: 'Before investing in a property developed by a real estate developer...',
        },
        {
            title: 'What are the key factors to consider when choosing a location for buying a property?',
            content: 'Factors to consider include proximity to essential amenities...',
        },
        {
            title: 'What are the tax implications of owning a property?',
            content: 'Property owners may be subject to taxes such as property tax...',
        },
        {
            title: 'What are the steps involved in property registration?',
            content: 'Property registration involves executing a sale deed or conveyance deed...',
        },
        {
            title: 'How can I resolve disputes related to property ownership or transactions?',
            content: 'Disputes related to property can be resolved through legal means...',
        },
        {
            title: 'What are the rights and responsibilities of property owners in a housing society?',
            content: 'Property owners in a housing society have rights such as voting...',
        },
        // {
        //     title: "Deduction",
        //     content: "national "
        // },
    ];
    return (
        <div className='faqs_in lg:py-[70px] py-[30px] text-center'>
            <div className='wrap_div lg:max-w-[95%] lg:px-0 px-[15px] w-full m-auto'>
                <div className='head_div lg:mb-[50px] mb-[20px]'>
                    <CommonHeading TagName='h1' HeadingClass='Frequently Ask Questions' className="text-black" />
                </div>
                <CommonAccordion data={accData} />
            </div>
        </div>
    )
}
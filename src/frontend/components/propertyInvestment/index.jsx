import React, { lazy } from 'react'
const CommonHeading = lazy(() => import("../commonHeading"));

export default function Index() {
    
    return (
        <div className='faqs_in lg:py-[70px] py-[30px] text-center'>
            <div className='wrap_div lg:max-w-[95%] lg:px-0 px-[15px] w-full m-auto'>
                <div className='head_div lg:mb-[50px] mb-[20px]'>
                    <CommonHeading TagName='h1' HeadingClass='Frequently Ask Questions' className="text-black" />
                </div>
            </div>
        </div>
    )
}
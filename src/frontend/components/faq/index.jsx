import React, { lazy } from 'react'
import useFetchData from '../../apiHooks/useFetchData';
import Loader from '../../../common/Loader/loader';
const CommonHeading = lazy(() => import("../commonHeading"));
const CommonAccordion = lazy(() => import('../commonAccordion'))

export default function Index() {
    const { data: faqs, loading: faqLoading, error: faqError } = useFetchData("faqs", "faq");

    if (faqLoading) return <Loader />;
    if (faqError) return <p className="text-red-500">Error loading FAQs: {faqError}</p>;
    return (
        <div className='faqs_in lg:py-[70px] py-[30px] text-center'>
            <div className='wrap_div lg:max-w-[95%] lg:px-0 px-[15px] w-full m-auto'>
                {/* <div className='head_div lg:mb-[50px] mb-[20px]'>
                    <CommonHeading TagName='h1' HeadingClass='Frequently Ask Questions' className="text-black" />
                </div> */}
                <CommonAccordion data={faqs} />
            </div>
        </div>
    )
}
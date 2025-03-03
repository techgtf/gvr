import React, { lazy } from 'react'
import useFetchData from '../../apiHooks/useFetchData';
import Loader from '../../../common/Loader/loader';
const CommonHeading = lazy(() => import("../commonHeading"));
const CommonAccordion = lazy(() => import('../commonAccordion'))

export default function Index() {
<<<<<<< HEAD
    const accData = [
        {
            title: 'What is freehold property?',
            content: 'Free hold property means the property which is free from all encumbrances and the owner of the property is entilted to deal with the same wiithout any restrictions. There are not limitations, permissions required from any authority to deal with / develop the propety. The ownership is full and unconditional with no tenancy / leasehold / easementay rights on any part of the property.',
        },
        {
            title: 'What are the costs involved in buying a property?',
            content: "Apart from the purchase price, additional costs may include stamp duty, registration charges, legal fees, brokerage fees (if applicable), and maintenance charges. It is essential to factor in these costs when budgeting for your property purchase.",
        },        
        {
            title: 'How do I check the credibility of a real estate developer?',
            content: "Before investing in a property developed by a real estate developer, research their track record, reputation, completed projects, and customer reviews. It's also advisable to verify their credentials, certifications, and compliance with regulatory authorities.",
        },
        {
            title: 'What are the key factors to consider when choosing a location for buying a property?',
            content: "Factors to consider include proximity to essential amenities such as schools, hospitals, markets, and transportation hubs, as well as factors like safety, infrastructure development, future growth prospects, and resale value.",
        },
        {
            title: 'What are the tax implications of owning a property?',
            content: "Property owners may be subject to taxes such as property tax, capital gains tax (if selling the property), and income tax (if earning rental income). Tax benefits such as deductions on home loan interest and principal repayment may also apply.",
        },
        {
            title: 'What are the steps involved in property registration?',
            content: "Property registration involves executing a sale deed or conveyance deed and registering it with the local Sub Registrar of Assurances. The buyer and seller must be present along with witnesses, and the necessary stamp duty and registration fees must be paid.",
        },
        {
            title: 'How can I resolve disputes related to property ownership or transactions?',
            content: "Disputes related to property can be resolved through legal means such as negotiation, mediation, arbitration, or litigation, depending on the nature and severity of the dispute. Consulting a qualified legal expert is advisable in such cases.",
        },
        {
            title: 'What are the rights and responsibilities of property owners in a housing society?',
            content: "Property owners in a housing society have rights such as voting in general body meetings, access to common amenities, and participation in decision-making processes. They also have responsibilities such as paying maintenance charges, complying with society bylaws, and maintaining communal harmony.",
        },
        // {
        //     title: "Deduction",
        //     content: "national "
        // },
    ];
=======
    const { data: faqs, loading: faqLoading, error: faqError } = useFetchData("faqs", "faq");

    if (faqLoading) return <Loader />;
    if (faqError) return <p className="text-red-500">Error loading FAQs: {faqError}</p>;
>>>>>>> be5d48c49e395fd2ab83dd8896572878b61d7f55
    return (
        <div className='faqs_in lg:py-[70px] py-[30px] text-center'>
            <div className='wrap_div lg:max-w-[95%] lg:px-0 px-[15px] w-full m-auto'>
                <div className='head_div lg:mb-[50px] mb-[20px]'>
                    <CommonHeading TagName='h1' HeadingText='Frequently Ask Questions' className="text-black" />
                </div>
                <CommonAccordion data={faqs} />
            </div>
        </div>
    )
}
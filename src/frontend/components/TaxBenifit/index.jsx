import React from 'react'
import './styles.css'
import CommonAccordion from '../commonAccordion'
import PageOverview from './pageOverview';
import useFetchData from '../../apiHooks/useFetchData';
import Loader from '../../../common/Loader/loader';

export default function Index({overviewData}) {
    const { data: faqs, loading: faqLoading, error: faqError } = useFetchData("faqs","tax-benefits");
    if (faqLoading ) return <Loader />;
    if (faqError) return <p className="text-red-500">Error loading FAQs: {faqError}</p>;

    return (
        <div className='tax_benifit_in lg:py-[80px] py-[20px]'>
            <PageOverview data={overviewData}/>
            <CommonAccordion data={faqs} />
        </div>
    )
}

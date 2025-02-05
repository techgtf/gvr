import React from 'react'
import './styles.css'
import CommonAccordion from '../commonAccordion'
import PageOverview from './pageOverview';

export default function Index() {
    const accData = [
        {
            title: "Deduction in interest:",
            content: "The national taxation code permits homeowners (or apartment owners who bought the same with the intention to construct a house in it) a sizable reduction in the loan interest rate from their tax bonuses. For most property owners, this is a great deal since interest disbursements can be the biggest part of your loan settlement in the initial years of buying an apartment. Reduce interest for pre-construction: While a discount in interest rates can be claimed at the beginning of the financial year in which the construction will be done, you may also claim pre-construction interest from the same year, which will be given to you in easy installments. Nevertheless, you cannot have a deduction of more than Rs.2 lakh if the property is occupied by you and your family. Deduction Under Section 80C: The part of your EMI which pays towards the principal sum is entitled to be claimed under Section 80-C of the Indian Income Tax Act. You may recapitulate the outgo for the past year towards principal and file a claim for it. A sum of up to INR 1.5 lakhs can be claimed this way. In addition to the reduction permitted on principal settlement, that made as stamp duty and registration fees, are also allowed to be claimed as per the IT Act, Section 80C. But these can be claimed only in the same year. Deductions under Section 24: Under Section 24 of the IT Act, you can claim tax benefits of up to Rs.2 lakh. However, you must convert the apartment loan to a regular home loan to avail the benefits. The process to convert an apartment loan to a regular home loan is simple and can be done once the construction has been completed."
        },
        {
            title: "How to claim tax benefits for an apartment loan:",
            content: "One should keep in mind that tax benefits can be claimed on apartment loans only after the construction of a building has been completed on the said plot. Once the construction is completed, you can claim the deductions on the loan as per the sections mentioned above."
        },
        {
            title: "Loan-to-Value (LTV) Ratio:",
            content: "One of the parameters that loan lenders consider before offering loans to applicants is the loan-to-value (LTV) ratio. LTV helps banks and non-banking financial companies (NBFCs) evaluate the risk of lending a loan. While applicants can avail up to 90% in the case of home loans, apartment loans offer only 60%-70% of the property value. This will result in the applicant shelling out the remaining 30%-40% from his/her own pocket irrespective of the fact whether the applicant is buying the apartment solely for investment purpose or building a house on it."
        },
        {
            title: "Type and Location of the Apartment:",
            content: "In most cases, banks and NBFCs offer apartment loans only for residential apartments. Additionally, loan lenders don’t offer apartment loans for the purpose of purchasing an agricultural land or an apartment in village regions. The apartment one plans on buying must also lie within the corporation or municipal limits. However, one can always avail a home loan if he/she wishes to construct a house in that apartment. Housing loans are free of the above-mentioned constraints and are available on all kinds of apartments irrespective of the type or location of the apartment on which the house is to be constructed."
        },
        {
            title: "Loan Term:",
            content: "Apartment loans have a relatively lower loan term when compared to housing loans. While banks offer loan terms up to 30 years in the case of home loans, the maximum term offered on apartment loans is only 15 years. Only in some rare cases do banks and NBFCs offer loan tenure up to 20 years on the apartment loans."
        },
        {
            title: "Apartment loans for Non-Resident Indians (NRIs):",
            content: "Given the plethora of restrictions and regulations enacted by the government, most banks and financial institutions in the country do not readily grant apartment loans to non-resident Indians. Even if banks grant apartment loans to NRIs, the interest rates on these loans will be greater than those on apartment loans offered to Indian residents. As a result, NRIs should conduct considerable study before applying for an apartment loan to purchase an apartment."
        },
    ];
    return (
        <div className='tax_benifit_in lg:py-[80px] py-[20px]'>
            <PageOverview />
            <CommonAccordion data={accData} />
        </div>
    )
}

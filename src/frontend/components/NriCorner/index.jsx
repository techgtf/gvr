import React from 'react'
import CommonAccordion from '../commonAccordion'
import './styles.css'


export default function Index() {
    const accData = [
        {
            title: "Q1: Do Non-Resident Indian nationals need Reserve Bank of India's permission to acquire property in India?",
            content: "Ans: No, NRIs don't require RBI permission to buy property in India."
        },
        {
            title: "Q2: Can foreign nationals of Indian origin purchase property in India?",
            content: "Ans: Yes, they are allowed to purchase property in India."
        },
        {
            title: "Q3: How should foreign nationals of Indian origin pay for residential property in India?",
            content: "Ans: They can pay using inward remittances in foreign exchange through normal banking channels or funds from NRE/FCNR accounts in Indian banks."
        },
        {
            title: "Q4: Are there formalities for foreign nationals of Indian origin to complete when buying property in India?",
            content: "Ans: Yes, they need to file Form IPI 7 with RBI within 90 days of the purchase, along with necessary documents and a bank certificate."
        },
        {
            title: "Q5: Can such property be sold without RBI permission?",
            content: "Ans: Yes, but if sold to another foreign citizen of Indian origin, the purchase consideration should be remitted to India or paid from NRE/FCNR accounts."
        },
        {
            title: "Q6: Can rental income from such property be remitted abroad?",
            content: "Ans: No, it must be credited to the owner's ordinary non-resident rupee account. Some restricted remittances are allowed."
        },
        {
            title: "Q7: Can such property be sold without RBI permission?",
            content: "Ans: Yes, it can be sold to foreign nationals of Indian origin, with purchase consideration remitted to India or paid from NRE/FCNR accounts."
        },
        {
            title: "Q8: Can sale proceeds of such property be remitted out of India?",
            content: "Ans: For residential properties purchased after May 26, 1993, sale proceeds up to the consideration amount remitted in foreign exchange can be repatriated. Other proceeds must be credited to the owner's non-resident rupee account."
        },
        {
            title: "Q9: What conditions must be met for repatriation of sale proceeds?",
            content: "Ans: The sale must occur at least three years after the purchase deed or the payment of final consideration, whichever is later."
        },
        {
            title: "Q10: What is the procedure for seeking repatriation?",
            content: "Ans: Application in Form IPI 8 should be made to RBI's Central Office in Mumbai within 90 days of property sale."
        },
    ];
    return (
        <div className='nri_corner_in lg:py-[80px] py-[20px]'>
            <CommonAccordion data={accData} />
        </div>
    )
}
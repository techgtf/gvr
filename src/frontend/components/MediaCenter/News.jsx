import React from "react";
import CommonBtn from "../commonBtn";
import { BsArrowUpRight } from "react-icons/bs";
import FadeIn from "../Animations/FadeIn";
import CommonHeading from "../commonHeading";

import logo1 from "/assets/frontend/images/media/news/logos/1.webp"
import logo2 from "/assets/frontend/images/media/news/logos/2.webp"
import logo3 from "/assets/frontend/images/media/news/logos/3.webp"
import logo5 from "/assets/frontend/images/media/news/logos/5.webp"
import logo6 from "/assets/frontend/images/media/news/logos/6.webp"
import logo7 from "/assets/frontend/images/media/news/logos/7.webp"
import logo8 from "/assets/frontend/images/media/news/logos/8.webp"
import logo9 from "/assets/frontend/images/media/news/logos/9.webp"
import logo11 from "/assets/frontend/images/media/news/logos/11.webp"
import logo12 from "/assets/frontend/images/media/news/logos/12.webp"
import logo13 from "/assets/frontend/images/media/news/logos/13.webp"
import { Link } from "react-router-dom";
import "./gallery.css"

function News() {
    const altForall = 'Great Value news'


    const onlineNews = [
        {
            alt:altForall,
            heading : "The Economic Times Hindi Budget",
            logo : logo1,
            date : "01/02/2025",
            link : "https://hindi.economictimes.com/budget/live-union-budget-2025-26-nirmala-sitharaman-budget-2005-speech-income-tax-slab-budget-2025-26-highlights-industry-and-market-demand/liveblog/117812842.cms#:~:tex"
        },
        {
            alt:altForall,
            heading : "Budget 2025 में टैक्सपेयर को मिली बड़ी राहत, बजट में एलान के बाद दिग्गजों ने दिया रिएक्शन",
            lang : "hindi",
            logo : logo2,
            date : "03/02/2025",
            link : "https://bazaar.businesstoday.in/budget/story/budget-2025-income-tax-rule-what-did-the-expert-say-after-the-changes-in-tax-related-rules-in-budget-2025-1164739-2025-02-02"
        },
        {
            alt:altForall,
            heading : "Budget 2025 Highlights: GYAN के साथ मिडिल क्लास का भी ध्यान, बजट में किसे क्या मिला",
            logo : logo3,
            lang : "hindi",
            date : "01/02/2025",
            link : "https://hindi.moneycontrol.com/budget/budget-2025-live-updates-fm-nirmala-sitharaman-speech-key-announcement-on-union-budget-india-liveblog-1954492.html"
        },
        {
            alt:altForall,
            heading : "8 benefits of living in Noida’s luxury housing developments",
            logo : logo7,
            date : "14/01/2025",
            link : "https://www.constructionweekonline.in/people/8-benefits-of-living-in-noidas-luxury-housing-developments"
        },
        {
            alt:altForall,
            heading : "Budget 2025 Expectations highlights: Sitharaman likely to cut income tax for individuals",
            logo : logo5,
            date : "25/01/2025",
            link : "https://www.etnownews.com/budget/budget-expectations-2025-real-estate-sector-property-players-seek-higher-pmay-funds-tax-rebates-gstreformandmore-article-117545376"
        },
        {
            alt:altForall,
            heading : "Union Budget: सभी सेक्टर को है बजट से बड़ी उम्मीद, यहां जानें क्या है दिग्गजों की राय",
            logo : logo2,
            lang : "hindi",
            date : "23/01/2025",
            link : "https://bazaar.businesstoday.in/budget/story/union-budget-2025-budget-2025-expectation-industry-has-these-expectations-from-the-budget-1155597-2025-01-16"
        },
        {
            alt:altForall,
            heading : "Budget 2025: स्टार्टअप इकोसिस्टम के दिग्गजों को बजट से क्या उम्मीदें?",
            logo : logo6,
            lang : "hindi",
            date : "27/01/2025",
            link : "https://yourstory.com/hindi/budget-2025-startup-ecosystem-entrepreneurs-founders-expectations-fm-nirmala-sitharaman"
        },
        {
            alt:altForall,
            heading : "8 benefits of living in Noida’s luxury housing developments",
            logo : logo1,
            date : "14/01/2025",
            link : "https://www.constructionweekonline.in/people/8-benefits-of-living-in-noidas-luxury-housing-developments"
        },
        {
            alt:altForall,
            heading : "Outlook 2025: Evolving consumer preferences will shape future housing projects",
            logo : logo8,
            date : "16/01/2025",
            link : "https://www.epcworld.in/p/post/outlook-2025-evolving-consumer-preferences-will-shape-future-housing-projects"
        },
        {
            alt:altForall,
            heading : "Why Your Next Home Should Be In Noida",
            logo : logo9,
            date : "22/01/2025",
            link : "https://www.rprealtyplus.com/interviews/why-your-next-home-should-be-in-noida-118484.html"
        },
        {
            alt:altForall,
            heading : "2025 में क्या पूरा होगा घर खरीदने का सपना, Property Prices में कमी आएगी या उछाल?",
            logo : logo11,
            lang : "hindi",
            date : "27/12/2024",
            link : "https://www.jagran.com/business/biz-home-buying-2025-dream-of-buying-a-home-come-true-in-2025-will-property-prices-drop-or-rise-details-here-23856776.html"
        },
        {
            alt:altForall,
            heading : "Top Real Estate Companies Redefining Profitable Investments in 2025",
            logo : logo12,
            date : "19/12/2024",
            link : "https://propertyhome.in/top-real-estate-companies-redefining-profitable-investments-2025/"
        },
        {
            alt:altForall,
            heading : "Top Real Estate Companies Redefining Profitable Investments in 2025",
            logo : logo13,
            date : "20/12/2024",
            link : "https://www.realtybuzz.in/top-real-estate-companies-to-redefine-profitable-investments-in-2025/"
        },
    ]
    return (
        <section className="news_sec bg-[#EFF5FA] px-5 md:px-12 py-10 md:py-14">
            {/* Grid container with 12 columns */}
            <div className="grid grid-cols-12 gap-6">

                {/* Left section (4 columns) */}
                {/* <div className="col-span-12 md:col-span-4">
                    <div className="mb-5">
                        <FadeIn duration={2} delay={0.5}>
                            <CommonHeading HeadingText="Offline News" />
                        </FadeIn>
                    </div>
                    <div className="offline py-2">
                        <div className="news border-b border-gray-300 py-[34px]">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1707080369554-359143c6aa0b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ybGQlMjBuZXdzfGVufDB8fDB8fHww"
                                alt="News" className="w-[350px] object-cover"
                            />
                            <div className="title tracking-[3.5px] text-[10px] pt-5 leading-[3] midlandfontmedium">
                                Daily News
                            </div>
                            <div className="date py-2 text-primary">DD/MM/YY</div>
                            <div className="content pb-6">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus nisi aliquid eligendi debitis et
                            </div>
                            <CommonBtn to="" target="_blank">
                                Know More <BsArrowUpRight />
                            </CommonBtn>
                        </div>
                        <div className="news border-b border-gray-300 py-[34px]">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1707080369554-359143c6aa0b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ybGQlMjBuZXdzfGVufDB8fDB8fHww"
                                alt="News" className="w-[350px] object-cover"
                            />
                            <div className="title tracking-[3.5px] text-[10px] pt-5 leading-[3] midlandfontmedium">
                                Daily News
                            </div>
                            <div className="date py-2 text-primary">DD/MM/YY</div>
                            <div className="content pb-6">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus nisi aliquid eligendi debitis et
                            </div>
                            <CommonBtn to="" target="_blank">
                                Know More <BsArrowUpRight />
                            </CommonBtn>
                        </div>
                    </div>
                </div> */}

                {/* Right section (8 columns) */}
                <div className="col-span-12 md:col-span-8">
                    <div className="mb-5">
                        <FadeIn duration={2} delay={0.5}>
                            <CommonHeading HeadingText="Online News" />
                        </FadeIn>
                    </div>
                    <div className="online bg-white px-[34px] ">
                       {onlineNews && onlineNews.length > 0 ? onlineNews.map((item, i)=> <div key={i} className="news grid grid-cols-12 lg:gap-8  py-[34px] border-b border-gray-300">
                            {/* Image */}
                            <div className="newsImg col-span-12 lg:col-span-4 px-4 flex items-center justify-center bg-[#EFF5FA]">
                                <img src={item?.logo} alt={item?.alt} className="w-[150px] " />
                            </div>
                            {/* Text Content */}
                            {/*  */}
                            {/*  */}
                            <div className="details col-span-12 lg:col-span-8 mt-4 lg:mt-0">
                                <div className={`heading   py-2 text-[10px] leading-[3]  uppercase ${item?.lang === 'hindi' ? 'hind-regular tracking-[2.5px]' : 'midlandfontmedium tracking-[3.5px]'}`}>{item?.heading}</div>

                                <div className="date  pb-3 text-primary">{item?.date}</div>
                               <Link to={item?.link} target="_blank"> <button className="common_btn uppercase cursor-pointer focus-visible:outline-none focus-visible:ring-0" >
                                    Know More <BsArrowUpRight />
                                </button></Link>
                            </div>
                        </div>) : ""}
                      
                    </div>
                </div>

            </div>
        </section>
    );
}

export default News;

import React from "react";
import CommonBtn from "../commonBtn";
import { BsArrowUpRight } from "react-icons/bs";
import FadeIn from "../Animations/FadeIn";
import CommonHeading from "../commonHeading";
import * as CONFIG from "../../../../config";

import logo1 from "/assets/frontend/images/media/news/logos/1.webp"
import logo2 from "/assets/frontend/images/media/news/logos/2.webp"
import logo3 from "/assets/frontend/images/media/news/logos/3.webp"
import logo4 from "/assets/frontend/images/media/news/logos/4.webp"
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
import useFetchData from "../../apiHooks/useFetchData";
import Loader from "../../../common/Loader/loader";

function News() {

    // calling api

    const { data: newsData, loading: newsLoading, error: newsError } = useFetchData("news/news");

    // Handle Loading and Errors
    if (newsLoading) return <Loader />;
    if (newsError) return <p className="text-red-500">Error while loading Gallery: {newsError}</p>;

    function formatDate(dateString) {
        if (!dateString) return ''; // handle empty date case
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }


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
                       {newsData && newsData.length > 0 ? newsData.map((item, i)=> <div key={i} className="news grid grid-cols-12 lg:gap-8  py-[34px] border-b border-gray-300">
                            {/* Image */}
                            <div className="newsImg col-span-12 lg:col-span-4 px-4 flex items-center justify-center bg-[#EFF5FA]">
                                <img src={CONFIG.VITE_APP_STORAGE + item?.file} alt={item?.alt_tag} className="w-[150px] " />
                            </div>
                            {/* Text Content */}
                            {/*  */}
                            {/*  */}
                            <div className="details col-span-12 lg:col-span-8 mt-4 lg:mt-0">
                                <div className={`heading   py-2 text-[10px] leading-[3]  uppercase ${item?.lang === 'hindi' ? 'hind-regular tracking-[2.5px]' : 'midlandfontmedium tracking-[3.5px]'}`}>{item?.heading}</div>

                                <div className="date  pb-3 text-primary">{formatDate(item?.created_at)}</div>
                               <Link to={item?.cdn} target="_blank"> <button className="common_btn uppercase cursor-pointer focus-visible:outline-none focus-visible:ring-0" >
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

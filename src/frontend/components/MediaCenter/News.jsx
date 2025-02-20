import React from "react";
import CommonBtn from "../commonBtn";
import { BsArrowUpRight } from "react-icons/bs";
import FadeIn from "../Animations/FadeIn";
import CommonHeading from "../commonHeading";
import * as CONFIG from '../../../../config';

function News() {
    return (
        <section className="news_sec bg-[#EFF5FA] px-5 md:px-12 py-10 md:py-14">
            {/* Grid container with 12 columns */}
            <div className="grid grid-cols-12 gap-6">

                {/* Left section (4 columns) */}
                <div className="col-span-12 md:col-span-4">
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
                </div>

                {/* Right section (8 columns) */}
                <div className="col-span-12 md:col-span-8">
                    <div className="mb-5">
                        <FadeIn duration={2} delay={0.5}>
                            <CommonHeading HeadingText="Online News" />
                        </FadeIn>
                    </div>
                    <div className="online bg-white px-[34px] ">
                        <div className="news flex gap-8  py-[34px] border-b border-gray-300">
                            {/* Image */}
                            <div className="newsImg w-1/3 px-4 flex items-center justify-center bg-[#EFF5FA]">
                                <img
                                    src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/media/news/logos/1.webp`}
                                    alt="News"
                                    className="w-[150px] "
                                />
                            </div>

                            {/* Text Content */}
                            <div className="details w-3/3">
                                <div className="heading tracking-[3.5px] text-[10px] leading-[3] midlandfontmedium uppercase">The Economic Times Hindi Budget</div>
                                <div className="content py-2">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus nisi aliquid eligendi debitis et voluptatem sit reiciendis laboriosam nihil culpa.
                                </div>
                                <div className="date  pb-3 text-primary">01/02/2025</div>
                                <CommonBtn to="https://hindi.economictimes.com/budget/live-union-budget-2025-26-nirmala-sitharaman-budget-2005-speech-income-tax-slab-budget-2025-26-highlights-industry-and-market-demand/liveblog/117812842.cms#:~:tex" target="_blank">
                                    Know More <BsArrowUpRight />
                                </CommonBtn>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </section>
    );
}

export default News;

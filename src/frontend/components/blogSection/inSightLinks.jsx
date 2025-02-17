import React from 'react'
import { Link } from 'react-router-dom'
import SlideIn from "../Animations/SlideIn";
import { BASE_ROOT } from '../../../../config';



export default function InSightLinks({ blogData }) {
    // const latestNews = [
    //     {
    //         name: "Why Noida Sector 107 is the Perfect Location for Your New Home",
    //         link: "blog/1",
    //         type: 'Blog',
    //         date: '24 july 2024'
    //     },
    //     {
    //         name: "Why Noida Sector 107 is the Perfect Location for Your New Home",
    //         link: "blog/1",
    //         type: 'Blog',
    //         date: '24 july 2024'
    //     },
    //     {
    //         name: "Why Noida Sector 107 is the Perfect Location for Your New Home",
    //         link: "blog/1",
    //         type: 'Blog',
    //         date: '24 july 2024'
    //     },
    // ]

    return (
        <div className='blog_insight_box'>
            {blogData && (
                blogData.slice(1, 3).map((data, index) =>
                    <SlideIn key={index} duration={2} delay={0.5}>
                        <Link className='blog_insight_link_box cursor-pointer block lg:mt-10 mt-8' key={index} state={{ blog: data }} to={`${BASE_ROOT}blog/${data.id}`}>
                            <p className='name text-[#0061AB] xl:text-[17px] text-[14px] font-light lg:leading-[29px] leading-[25px] cursor-pointer'>{data.title}</p>
                            <div className='type mt-4 mb-2 uppercase tracking-[2px] lg:text-[16px] text-[#2b2b2b94] cursor-pointer'>{data.type}</div>
                            <div className='date uppercase border-b border-gray-300 text-right text-[12px] pb-1 tracking-[1px] text-[#2b2b2b94] cursor-pointer'>{data.date}</div>
                        </Link>
                    </SlideIn>
                )
            )}

        </div>
    )
}

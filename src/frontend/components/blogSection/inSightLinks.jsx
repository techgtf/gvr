import React from 'react'
import { Link } from 'react-router-dom'
import SlideIn from "../Animations/SlideIn";



export default function InSightLinks() {
    const latestNews = [
        {
            name: "Why Noida Sector 107 is the Perfect Location for Your New Home",
            link: "blog/1",
            type: 'News',
            date: '24 july 2024'
        },
        {
            name: "Why Noida Sector 107 is the Perfect Location for Your New Home",
            link: "blog/1",
            type: 'News',
            date: '24 july 2024'
        },
        {
            name: "Why Noida Sector 107 is the Perfect Location for Your New Home",
            link: "blog/1",
            type: 'News',
            date: '24 july 2024'
        },
    ]

    return (
        <div className='blog_insight_box'>
            {latestNews && (
                latestNews.slice(0, 2).map((data, index) =>
                    <SlideIn duration={2} delay={0.5}>
                        <Link className='blog_insight_link_box cursor-pointer block lg:mt-10 mt-6' key={index} to={data.link}>
                            <p className='name text-[#0061AB] xl:text-[17px] text-[14px] font-light lg:leading-[29px] leading-[25px] cursor-pointer'>{data.name}</p>
                            <div className='type mt-4 mb-2 uppercase tracking-[2px] text-[16px] text-[#2b2b2b94] cursor-pointer'>{data.type}</div>
                            <div className='date uppercase border-b border-gray-300 text-right text-[12px] pb-1 tracking-[1px] text-[#2b2b2b94] cursor-pointer'>{data.date}</div>
                        </Link>
                    </SlideIn>
                )
            )}

        </div>
    )
}

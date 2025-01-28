import React from 'react'
import { Link } from 'react-router-dom'

export default function InSightLinks() {
    const latestNews = [
        {
            name: "Why Noida Sector 107 is the Perfect Location for Your New Home",
            link: "#",
            type: 'News',
            date: '24 july 2024'
        },
        {
            name: "Why Noida Sector 107 is the Perfect Location for Your New Home",
            link: "#",
            type: 'News',
            date: '24 july 2024'
        },
        {
            name: "Why Noida Sector 107 is the Perfect Location for Your New Home",
            link: "#",
            type: 'News',
            date: '24 july 2024'
        },
    ]
    return (
        <div className='blog_insight_box lg:mt-16 mt-5 mb-16'>
            {latestNews && (
                latestNews.slice(0, 2).map((data, index) =>
                    <Link className='blog_insight_link_box block 2xl:mt-8 xl:mt-6' key={index} to={data.link}>
                        <p className='name text-[#0061AB] midlandfontmedium tracking-[3px]'>{data.name}</p>
                        <div className='type 2lg:mt-7 lg:mt-6 mt-2 mb-2 uppercase tracking-[2px] text-[#2b2b2b94]'>{data.type}</div>
                        <div className='date uppercase border-b border-gray-300 text-right text-[14px] pb-1 tracking-[1px] text-[#2b2b2b94]'>{data.date}</div>
                    </Link>
                )
            )}

        </div>
    )
}

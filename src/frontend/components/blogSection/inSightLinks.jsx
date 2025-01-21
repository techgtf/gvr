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
                    <Link className='blog_insight_link_box block mt-8' key={index} to={data.link}>
                        <p className='name text-[#0061AB] tracking-[2px]'>{data.name}</p>
                        <div className='type lg:mt-4 mt-2 uppercase'>{data.type}</div>
                        <div className='date uppercase border-b border-gray-400 text-right text-[14px]'>{data.date}</div>
                    </Link>
                )
            )}

        </div>
    )
}

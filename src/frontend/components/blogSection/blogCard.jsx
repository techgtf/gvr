import React from 'react'
import * as CONFIG from '../../../../config'
import { Link } from 'react-router-dom'
import { useImageReveal } from '../useImageReveal'

export default function blogCard() {
    const latestNews = [
        {
            name: "Why Noida Sector 107 is the Perfect Location for Your New Home",
            link: "#",
            type: 'News',
            date: '24 july 2024',
            imgSrc: 'blog.jpg'
        },
        {
            name: "Why Noida Sector 107 is the Perfect Location for Your New Home",
            link: "#",
            type: 'News',
            date: '24 july 2024',
            imgSrc: 'blog.jpg'
        },
    ]
    useImageReveal(".reveal")

    return (
        <div className='blog_card 2xl:mt-12 xl:mt-10'>
            {
                latestNews && (
                    latestNews.slice(0, 1).map((data, index) =>
                        <div className='blog_card_in reveal' key={index}>
                            <Link className="blog_card_link block" to={`${data.link}`}>
                                <img src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/blogs/${data.imgSrc}`} alt={`${data.name}`} />
                                <p className='name text-[#0061AB] mt-5 lg:pr-2 midlandfontmedium tracking-[2px]'>{data.name}</p>
                                <div className='type uppercase text-right text-[#2b2b2b94] lg:mt-[-18px] tracking-[1px]'> {data.date} | {data.type}</div>
                            </Link>
                        </div>
                    )
                )
            }
        </div>
    )
}

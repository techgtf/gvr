import React from 'react'
import * as CONFIG from '../../../../config'
import { Link } from 'react-router-dom'

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
    return (
        <div className='blog_card lg:mt-12'>
            {
                latestNews && (
                    latestNews.slice(0, 1).map((data, index) =>
                        <div className='blog_card_in' key={index}>
                            <Link className="blog_card_link block" to={`${data.link}`}>
                                <img src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/blogs/${data.imgSrc}`} alt={`${data.name}`} />
                                <p className='name text-[#0061AB] tracking-[2px] mt-5 lg:pr-12'>{data.name}</p>
                                <div className='type uppercase text-right text-[#00000094] lg:mt-[-15px] tracking-[1px]'> {data.date} | {data.type}</div>                                
                            </Link>
                        </div>
                    )
                )
            }
        </div>
    )
}

import React from 'react'
import * as CONFIG from '../../../../config'
import { Link } from 'react-router-dom'
import { useImageReveal } from '../useImageReveal'

export default function blogCard() {
    const latestNews = [
        {
            name: "Why Noida Sector 107 is the Perfect Location for Your New Home Why Noida Sector 107 is the Perfect Location for Your New Home",
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
        <div className='blog_card reveal_cut_effect relative'>
            {
                latestNews && (
                    latestNews.slice(0, 1).map((data, index) =>
                        <div className='blog_card_in reveal' key={index}>
                            <Link className="blog_card_link block" to={`${data.link}`}>
                                <img className='cursor-pointer' src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/blogs/${data.imgSrc}`} alt={`${data.name}`} />
                                <p className='cursor-pointer name mt-5 text-[#0061AB] xl:text-[17px] text-[14px] font-light lg:leading-[29px] leading-[25px]'> {data.name?.length > 100 ? `${data.name.slice(0, 90)}...` : data.name} </p>
                                <div className={`cursor-pointer type uppercase text-right text-[#2b2b2b94] ${data.name?.length > 100 ? 'lg:mt-[-18px] mt-[-20px]' : 'lg:mt-[5px]'} tracking-[1px]`}> {data.date} | {data.type}</div>
                            </Link>
                        </div>
                    )
                )
            }
        </div>
    )
}

import React from 'react'
import * as CONFIG from '../../../../config'
import { Link } from 'react-router-dom'
import { useImageReveal } from '../useImageReveal'
import { BASE_ROOT } from "../../../../config";

export default function blogCard({blogData}) {
    // const latestNews = [
    //     {
    //         name: "Why Noida Sector 107 is the Perfect Location for Your New Home Why Noida Sector 107 is the Perfect Location for Your New Home",
    //         link: "blog/2",
    //         type: 'Blog',
    //         date: '24 july 2024',
    //         imgSrc: 'blog.jpg'
    //     },
    //     {
    //         name: "Why Noida Sector 107 is the Perfect Location for Your New Home",
    //         link: "blog/2",
    //         type: 'Blog',
    //         date: '24 july 2024',
    //         imgSrc: 'blog.jpg'
    //     },
    // ]
    useImageReveal(".reveal")

    return (
        <div className='blog_card reveal_cut_effect relative'>
            {
                blogData && (
                    blogData.slice(0, 1).map((data, index) =>
                        <div className='blog_card_in reveal' key={index}>
                            <Link className="blog_card_link block" to={`${BASE_ROOT}blog/${data.id}`} state={{ blog: data}}>
                                <img className='cursor-pointer' src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/blogs/${data.mobileImg}`} alt={`${data.title}`} />
                                <p className='cursor-pointer name mt-5 text-[#0061AB] xl:text-[17px] text-[14px] font-light lg:leading-[29px] leading-[25px]'> {data.title?.length > 100 ? `${data.title.slice(0, 90)}...` : data.title} </p>
                                <div className={`cursor-pointer type uppercase text-right text-[#141414] ${data.name?.length > 100 ? 'lg:mt-5 mt-10' : 'lg:mt-[5px]'} tracking-[1px]`}> {data.date} | {data.type}</div>
                            </Link>
                        </div>
                    )
                )
            }
        </div>
    )
}

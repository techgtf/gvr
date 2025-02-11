import React from 'react'
import * as CONFIG from '../../../../config'
import { useImageReveal } from '../useImageReveal'

export default function BlogCard({data,index}) {
    const {title,date,mobileImg,link}=data;
    useImageReveal(".reveal")

    return (
        <div className='blog_card reveal_cut_effect relative'>
        <div className='blog_card_in reveal' key={index}>
                <img className='cursor-pointer w-full object-contain' src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/blogs/${mobileImg}`} alt={`${title}`} />
                <p className='cursor-pointer name mt-5 text-[#0061AB]  text-[14px] font-light lg:leading-[29px] leading-[25px]'> {title?.length > 100 ? `${title.slice(0, 90)}...` : title} </p>
                <div className={`cursor-pointer type uppercase text-left text-[#2b2b2b94] ${date?.length > 100 ? 'lg:mt-[-18px] mt-[-20px]' : 'lg:mt-[5px]'} tracking-[1px]`}> {date}</div>
        </div>
        </div>
    )
}

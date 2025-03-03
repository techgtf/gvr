import React from 'react'
import * as CONFIG from '../../../../config'
import { useImageReveal } from '../useImageReveal'
import dayjs from 'dayjs';

export default function BlogCard({data,index}) {
    const {thumbnail,heading,created_at}=data;
    const formattedDate = dayjs(created_at).format('YYYY-MM-DD');
    useImageReveal(".reveal")

    return (
        <div className='blog_card reveal_cut_effect relative'>
        <div className='blog_card_in reveal' key={index}>
                <img className='cursor-pointer w-full object-cover min-h-[275px]' src={`${CONFIG.VITE_APP_STORAGE}${thumbnail}`} alt={`${heading}`} />
                <p className='cursor-pointer name mt-5 text-[#0061AB]  text-[14px] font-light lg:leading-[29px] leading-[25px]'> {heading?.length > 100 ? `${heading.slice(0, 90)}...` : heading} </p>
                <div className={`cursor-pointer type uppercase text-left text-[#2b2b2b94] ${formattedDate?.length > 100 ? 'lg:mt-[-18px] mt-[-20px]' : 'lg:mt-[5px]'} tracking-[1px]`}> {formattedDate}</div>
        </div>
        </div>
    )
}

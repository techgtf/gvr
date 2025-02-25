import React from 'react'
import * as CONFIG from '../../../../config'
import { Link } from 'react-router-dom'
import { useImageReveal } from '../useImageReveal'
import { BASE_ROOT } from "../../../../config";
import dayjs from "dayjs";

export default function blogCard({blogData}) {
    useImageReveal(".reveal")

    return (
        <div className='blog_card reveal_cut_effect relative'>
            {
                blogData && (
                    blogData.slice(0, 1).map((data, index) =>
                        <div className='blog_card_in reveal' key={index}>
                            <Link className="blog_card_link block" to={`${BASE_ROOT}blog/${data.slug}`}>
                                <img className='cursor-pointer' src={`${CONFIG.VITE_APP_STORAGE}${data.thumbnail}`} alt={`${data.heading}`} />
                                <p className='cursor-pointer name mt-5 text-[#0061AB] xl:text-[17px] text-[14px] font-light lg:leading-[29px] leading-[25px]'> {data.heading?.length > 100 ? `${data.heading.slice(0, 90)}...` : data.heading} </p>
                                <div className={`cursor-pointer type uppercase text-right text-[#2b2b2b94] ${data.name?.length > 100 ? 'lg:mt-5 mt-10' : 'lg:mt-[5px]'} tracking-[1px]`}> {dayjs(data.created_at).format("YYYY-MM-DD")} | {data.type}</div>
                            </Link>
                        </div>
                    )
                )
            }
        </div>
    )
}

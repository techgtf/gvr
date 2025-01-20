import React from 'react'
import './styles.css';
import CommonHeading from '../commonHeading';
import CommonPera from '../commonPera';
import CommonBtn from '../commonBtn';
import { Link } from 'react-router-dom';
import { BsArrowUpRight } from "react-icons/bs";


export default function OverviewSection() {
    return (
        <div className='overview_section'>
            <div className='headingWrap max-w-[706px] m-auto text-center'>
                <CommonHeading HeadingText='ELEVATING THE BEAUTY & BUSINESS OF REAL ESTATE' />
            </div>
            <div className='content max-w-[85%] m-auto lg:mt-[50px] lg:mb-[50px] text-center'>
                <CommonPera PeraClass='fontItalic' PeraText='The genesis of Great Value Industries dates to 1970 when the group set up its glassware division. In 1990 GVIL diversified into together supplying quality packaging products to prestigious.' />
            </div>
            <CommonBtn to={""} TagName={Link} target='_blank'>Know More <BsArrowUpRight /> </CommonBtn>
        </div>
    )
}

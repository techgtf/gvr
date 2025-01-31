import React from 'react'
import "./mediaCoverage.css"
import WaterMarkHeading from '../waterMarkHeading'
import * as CONFIG from '../../../../config'
import { useImageReveal } from '../useImageReveal'
import SlideIn from '../Animations/SlideIn'

export default function MediaCoverage() {
    const mediaData = [
        {
            name: 'sky news',
            imgSrc: 'sky-news.png',
        },
        {
            name: 'global news',
            imgSrc: 'global-news.png',
        },
        {
            name: 'nbc sports group',
            imgSrc: 'nbc-group.png',
        },
        {
            name: 'corel draw news',
            imgSrc: 'core-draw-news.png',
        },
        {
            name: 'breaking news',
            imgSrc: 'breaking-news.png',
        }
    ]

    // useImageReveal(".reveal")

    return (
        <div className='mediaCoverageSection bg-[#EFF5FA] lg:py-20 py-12 text-center'>
            <SlideIn duration={2} delay={0.5}>
                <WaterMarkHeading sectionHeading='Our media coverage' />
                <div className='max-w-[90%] m-auto lg:pt-24 pt-7'>
                    <div className="flexbox flex flex-wrap justify-center lg:gap-x-16 gap-x-8 lg:gap-y-0 gap-y-[40px] items-center">
                        {mediaData && (
                            mediaData.map((item, index) =>
                                <div className='box lg:w-auto w-[85px]' key={index}><img src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/media-coverage/${item.imgSrc}`} alt="sky news" /></div>
                            )
                        )}
                    </div>
                </div>
            </SlideIn>
        </div>
    )
}
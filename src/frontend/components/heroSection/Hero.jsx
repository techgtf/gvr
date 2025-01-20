import React from 'react';
import * as CONFIG from '../../../../config';
import './styles.css';

export default function Hero({
    imageUrl,
    heading,
    containerClasses = '',
    headingClasses = ''
}) {
    return (
        <div className="heroSection relative">
            {/* Background Image */}
            <div className="img_div lg:h-[82vh]">
                <img
                    className="lg:h-[82vh] h-auto w-full object-cover"
                    src={imageUrl || `${CONFIG.ASSET_IMAGE_URL}frontend/images/home/hero.webp`}
                    alt="Hero Section"
                />
            </div>

            {/* Content Overlay */}
            <div className={`container text-center absolute z-1 text-white ${containerClasses}`}>
                <h1 className={`common_heading midlandfontmedium uppercase lg:max-w-[470px] m-auto lg:tracking-[4px] tracking-[2px] ${headingClasses}`}>
                    {heading || 'Curating the Finest in Luxury Real Estate'}
                </h1>
            </div>
        </div>
    );
}

import React, { useEffect } from 'react'
import { useTextAnimation } from './useTextAnimation';

export default function WaterMarkHeading({
  TagName = 'p', // Heading tag (e.g., h1 - h6)
  className = '', // Additional classes for the container
  textWaterMark = '', // Background text
  sectionHeading = '', // Section heading
  animationConfig = {}, // Accept animation config as a prop
}) {

  const bgTextArr = textWaterMark.split(''); // Create array directly in render
  const textRef = useTextAnimation(animationConfig);

  return (
    <div className={`waterMarkDiv relative ${className}`}>
      {textWaterMark &&
        (
          <div className='water_mark_flex flex justify-between w-full absolute opacity-[0.015]'>
            {bgTextArr.map((str, index) => (
              <span key={index} className='bg_text text-[4vw] uppercase midlandfontmedium'>{str}</span>
            ))}
          </div>
        )
      }
      <TagName ref={textRef} className="sectionHeading midlandfontmedium uppercase">{sectionHeading}</TagName>
    </div>
  )
}
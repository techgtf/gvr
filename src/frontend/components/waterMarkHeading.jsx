import React, { useEffect } from 'react'

export default function WaterMarkHeading({
  TagName = 'p', // Heading tag (e.g., h1 - h6)
  className = '', // Additional classes for the container
  textWaterMark = '', // Background text
  sectionHeading = '', // Section heading
}) {

  const bgTextArr = textWaterMark.split(''); // Create array directly in render

  return (
    <div className={`waterMarkDiv relative ${className}`}>
      {textWaterMark &&
        (
          <div className='water_mark_flex flex justify-between w-full absolute opacity-[.03]'>
            {bgTextArr.map((str, index) => (
              <span key={index} className='bg_text text-[9vw] uppercase'>{str}</span>
            ))}
          </div>

        )
      }
      <TagName className="sectionHeading uppercase tracking-[4px]">{sectionHeading}</TagName>
    </div>
  )
}
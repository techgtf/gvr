import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useTextAnimation } from './useTextAnimation';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SlideIn from './Animations/SlideIn';
gsap.registerPlugin(ScrollTrigger);

export default function WaterMarkHeading({
  TagName = 'p', // Heading tag (e.g., h1 - h6)
  className = '', // Additional classes for the container
  textWaterMark = '', // Background text
  sectionHeading = '', // Section heading
  animationConfig = {}, // Accept animation config as a prop
}) {

  const bgTextArr = textWaterMark.split(''); // Create array directly in render
  const textRef = useTextAnimation(animationConfig);
  const sectionRef = useRef(null);

  return (
    <div ref={sectionRef} className={`waterMarkDiv relative ${className}`}>
      {textWaterMark && (
        <div className='water_mark_flex flex justify-between w-full absolute opacity-[0.015]'>
          {bgTextArr.map((str, index) => (
            <span key={index} className='bg_text text-[4vw] uppercase midlandfontmedium'>
              {str}
            </span>
          ))}
        </div>
      )}
      <SlideIn duration={1} delay={0.5}>
        <TagName className="sectionHeading midlandfontmedium uppercase lg:text-[12px] text-[10px] font-[500] tracking-[4px]">{sectionHeading}</TagName>
      </SlideIn>

    </div>
  );
}




// import React, { useEffect } from 'react'
// import { useTextAnimation } from './useTextAnimation';

// export default function WaterMarkHeading({
//   TagName = 'p', // Heading tag (e.g., h1 - h6)
//   className = '', // Additional classes for the container
//   textWaterMark = '', // Background text
//   sectionHeading = '', // Section heading
//   animationConfig = {}, // Accept animation config as a prop
// }) {

//   const bgTextArr = textWaterMark.split(''); // Create array directly in render
//   const textRef = useTextAnimation(animationConfig);

//   return (
//     <div className={`waterMarkDiv relative ${className}`}>
//       {textWaterMark &&
//         (
//           <div className='water_mark_flex flex justify-between w-full absolute opacity-[0.015]'>
//             {bgTextArr.map((str, index) => (
//               <span key={index} className='bg_text text-[4vw] uppercase midlandfontmedium'>{str}</span>
//             ))}
//           </div>
//         )
//       }
//       <TagName ref={textRef} className="sectionHeading midlandfontmedium uppercase">{sectionHeading}</TagName>
//     </div>
//   )
// }
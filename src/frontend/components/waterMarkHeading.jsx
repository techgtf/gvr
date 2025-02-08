import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useTextAnimation } from './useTextAnimation';
import gsap from 'gsap';

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

  useLayoutEffect(() => {
    // Select all watermark text elements
    const elements = sectionRef.current.querySelectorAll('.bg_text');

    gsap.fromTo(
      elements,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: animationConfig.stagger || 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
        },
      }
    );
  }, [animationConfig.stagger]); // Re-run effect when stagger changes

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
      <TagName ref={textRef} className="sectionHeading midlandfontmedium uppercase">
        {sectionHeading}
      </TagName>
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
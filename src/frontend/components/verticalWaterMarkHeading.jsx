import React from 'react';
import { useTextAnimation } from './useTextAnimation';

function verticalWaterMarkHeading({
    TagName = 'p', // Heading tag (e.g., h1 - h6)
    className = '', // Additional classes for the container
    textWaterMark = '', // Background text
    sectionHeading = '', // Section heading
    animationConfig = {}, // Accept animation config as a prop
}) {
    const bgTextArr = textWaterMark.split(''); // Create array directly in render
    const textRef = useTextAnimation(animationConfig);

    return (
        <div>
            <div className={`waterMarkDiv vertical relative ${className}`}>
                {textWaterMark && (
                    <div className="water_mark_flex flex flex-col h-full absolute opacity-[0.025] justify-center">
                        {bgTextArr.map((str, index) => (
                            <span
                                key={index}
                                className="bg_text  uppercase font-medium midlandfontmedium -rotate-90 writing-vertical-rl text-center "
                            >
                                {str}
                            </span>
                        ))}
                    </div>
                )}
                <TagName
                    ref={textRef}
                    className="sectionHeading uppercase font-medium"
                >
                    {sectionHeading}
                </TagName>
            </div>
        </div>
    );
}

export default verticalWaterMarkHeading;

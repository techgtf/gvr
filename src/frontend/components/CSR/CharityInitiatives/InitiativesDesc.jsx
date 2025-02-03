import React from 'react'
import SlideIn from '../../Animations/SlideIn'
import CommonPera from '../../commonPera'

function InitiativesDesc() {
    return (
        <div className="initiativesDesc flex items-center">
            <SlideIn duration={1} delay={0.5}>
                <div className="stripe h-[2px] w-[30%] ms-12 bg-primary mb-10"></div>
                <div className="content md:max-w-[85%] w-[100%] opacity-70 m-auto  md:mb-[80px] mb-[20px] ">
                    <CommonPera
                        PeraclassName="fontItalic"
                        PeraText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    />
                </div>
                <p className="font-[400] pr-14 text-[14px] capitalize text-justify w-full md:max-w-[85%] w-[100%] m-auto md:mt-[80px] md:mb-[50px]  ">Focused on education, health, youth employability, and women’s empowerment, Great Value transforms lives and builds brighter futures.</p>
            </SlideIn>
        </div>
    )
}

export default InitiativesDesc;
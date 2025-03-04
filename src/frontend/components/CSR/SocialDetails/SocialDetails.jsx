import React, { useEffect, useState } from "react";
import FadeIn from "../../Animations/FadeIn";
import CommonHeading from "../../commonHeading";
import SlideIn from "../../Animations/SlideIn";
import { useImageReveal } from "../../useImageReveal";
import CommonPera from '../../commonPera'

function SocialDetails({data, className, apiName}) {
    const [dataArr, setDataArr] = useState(null)

    useEffect(()=>{
        const fetchSocialData = async()=>{
            try{
                const response = await fetch('https://greatvaluerealty.websitedesigningcompany.co.in/api/esg-list/'+apiName)
                const responseData = await response.json();
                setDataArr(responseData.data)
            }catch(err){
                console.log(err);
            }
        }

        fetchSocialData();
    }, [apiName])

    // Apply image reveal after dataArr is set
    useImageReveal(".reveal", dataArr)

    return (
        <section className="social_details ">
            {/* Social Section */}
            <div className={`details bg-[#EFF5FA] py-10 px-5 md:px-12 ${className}`}>
                <div className="tab_details">
                    <div className="heading text-center flex justify-center py-5 flex-col items-center">
                        <FadeIn duration={2} delay={0.7}>
                            <CommonHeading HeadingText={data.heading} />
                        </FadeIn>
                        <SlideIn duration={0.8} delay={0.2}>
                            <p className="md:w-[45%] mx-auto py-5">{data.description}</p>
                        </SlideIn>
                    </div>
                    <div className="pipeline relative h-[12vh] flex justify-center">
                        <div className="absolute top-0 w-[2px] bg-gray-400 h-[8vh]"></div>
                    </div>

                    {/* Social Content Mapping */}
                    <div className="grid grid-cols-1 !sm:grid-cols-2 !flex !flex-wrap justify-center md:grid-cols-3 gap-4 py-5">
                        {dataArr?.map((item, index) => (
                            <div key={item?.id} className="card max-w-sm overflow-hidden reveal_cut_effect">
                                <div className="relative group reveal">
                                    <img className="w-full" src={item?.image} alt={item?.name} />
                                    <div className="content absolute bottom-0 left-0 bg-white/70 backdrop-blur-md text-center p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <CommonPera PeraText={item?.short_description} />
                                    </div>
                                </div>
                                <div className="py-4">
                                    <div className="text-[8px] text-center tracking-[3.5px] leading-[3] midlandfontmedium uppercase">{item.name}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SocialDetails;

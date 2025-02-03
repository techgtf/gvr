import React from 'react'
import CommonHeading from '../../commonHeading'
import CommonPera from '../../commonPera'
import icon1 from "/assets/frontend/images/csr/charity/icons/1.png";
import icon2 from "/assets/frontend/images/csr/charity/icons/2.png";
import icon3 from "/assets/frontend/images/csr/charity/icons/3.png";
import CommonBtn from '../../commonBtn';
import { BsArrowUpRight } from 'react-icons/bs';
import SlideIn from '../../Animations/SlideIn';

function CharityInitiatives() {

    const initiatives = [
        {
            icon : icon1,
            desc : "Great Value Play School nurtures young minds by enhancing learning skills and opening opportunities for kids."
        },
        {
            icon : icon2,
            desc : "Computer Education is provided to 400 underprivileged students in New Delhi, while the Computer Centre equips young adults with essential digital skills."
        },
        {
            icon : icon3,
            desc : "Community Support extends to organizations like Divya Prem Sewa Mission (leprosy care), Seva Bharti, and Khushali Foundation, fostering health and rehabilitation."
        },
    ]
    return (
        <>
            <section className="charity relative px-5 md:px-12 py-10 md:py-14">
                <div className="headingWrap lg:max-w-[50%] mx-auto  text-center">
                    <CommonHeading HeadingText="Great Value Charitable Initiatives: Educating & Empowering" />
                </div>

                <div className="grid grid-cols-2 gap-4 mt-20">
                    <div className="initiatives">
                        <div className="grid grid-cols-2 gap-4">
                           {initiatives && initiatives.map((item, i)=> <div key={i} className="initiative bg-[#EFF5FA] p-8">
                                <div className="icon p-3 border border-[#33638B] inline-block">
                                    <img src={item.icon} alt="Icon" />
                                </div>
                                <p className="mt-5">{item.desc}
                                </p>
                            </div>)}
                            <div  className="initiative bg-[#EFF5FA] p-8 flex justify-center items-center">
                            <CommonBtn target="_blank">
              Know <br /> More <BsArrowUpRight />
            </CommonBtn>
                            </div>
                            
                        </div>
                    </div>
                    <div className="initiativesDesc flex items-center">

                    <SlideIn duration={2} delay={0.5}>
                    <div className="content lg:max-w-[85%] w-[100%] opacity-70 m-auto  lg:mb-[50px] mb-[20px] ">
                        <CommonPera
                            PeraclassName="fontItalic"
                            PeraText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        />
                    </div>
                    <p className="font-[400] pr-14 text-[14px] capitalize text-justify w-full lg:max-w-[85%] w-[100%] m-auto lg:mt-[50px] lg:mb-[50px]  ">Focused on education, health, youth employability, and women’s empowerment, Great Value transforms lives and builds brighter futures.</p>
                </SlideIn>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CharityInitiatives

import React from 'react'
import icon1 from "/assets/frontend/images/csr/charity/icons/1.png";
import icon2 from "/assets/frontend/images/csr/charity/icons/2.png";
import icon3 from "/assets/frontend/images/csr/charity/icons/3.png";
import SlideIn from '../../Animations/SlideIn';

function Initiatives() {
    const initiatives = [
        {
            icon: icon1,
            desc: "Great Value Play School nurtures young minds by enhancing learning skills and opening opportunities for kids."
        },
        {
            icon: icon2,
            desc: "Computer Education is provided to 400 underprivileged students in New Delhi, while the Computer Centre equips young adults with essential digital skills."
        },
        {
            icon: icon3,
            desc: "Community Support extends to organizations like Divya Prem Sewa Mission (leprosy care), Seva Bharti, and Khushali Foundation, fostering health and rehabilitation."
        },
    ]

    return (
        <div className="initiatives ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                {initiatives && initiatives.map((item, i) => <div key={i} className="initiative bg-[#EFF5FA] p-8">
                    <div className="icon p-3 border border-[#33638B] inline-block">
                        <img src={item.icon} alt="Icon" />
                    </div>
                    <SlideIn duration={0.8} delay={0.2}> 
                    <p className="mt-5 text-justify">{item.desc}
                    </p>
                    </SlideIn>
                </div>)}
                <div className="initiative h-[250px] bg-no-repeat bg-cover md:h-auto bg-[#EFF5FA] border-2 border-[#eff5fa] opacity-90 p-8 flex justify-center items-center  bg-[url(assets/frontend/images/csr/charity/images/charity.jpg)]">
                   
                </div>

            </div>
        </div>
    )
}

export default Initiatives

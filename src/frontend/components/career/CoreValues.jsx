import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'swiper/css';
import 'swiper/css/navigation';
import CommonHeading from '../commonHeading';
import CommonPera from "../commonPera";
import icon1 from "/assets/frontend/images/career/coreValues/1.png";
import icon2 from "/assets/frontend/images/career/coreValues/2.png";
import icon3 from "/assets/frontend/images/career/coreValues/3.png";
import icon4 from "/assets/frontend/images/career/coreValues/4.png";
import icon5 from "/assets/frontend/images/career/coreValues/5.png";
import icon6 from "/assets/frontend/images/career/coreValues/6.png";
import icon7 from "/assets/frontend/images/career/coreValues/7.png";
import icon8 from "/assets/frontend/images/career/coreValues/8.png";
import icon9 from "/assets/frontend/images/career/coreValues/9.png";
import icon10 from "/assets/frontend/images/career/coreValues/10.png";

gsap.registerPlugin(ScrollTrigger);

const CoreValues = () => {
 useEffect(() => {
  const sections = gsap.utils.toArray('.value');
  const scrollFactor = 0.6; // Custom Scroll Width Factor

  if (sections.length) {
    const sectionWidth = sections[0].offsetWidth; // Single card width
    const reducedWidth = sectionWidth * (sections.length * scrollFactor); // Final scrollable width based on scrollFactor

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.corevalues',
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        start: "top 10%",
        end: `+=${reducedWidth}`, // Accurate scroll width without extra gap
        invalidateOnRefresh: true, // Important for responsiveness
      },
    });
  }
}, []);

  

  return (
    <section className="bg-[#EFF5FA] py-[50px] corevalues h-screen pb-0 relative overflow-hidden">
      <div className="max-w-[95%] mx-auto my-0">
        <div className="headingWrap mb-14 lg:max-w-[79%] max-w-[100%] text-start">
          <CommonHeading
            HeadingText={"Core Work values"}
            HeadingClass="text-start xl:pb-[0px] pb-[35px]"
          />
        </div>
      </div>
      <div>
        
      </div>
      <div className="values w-fit max-w-[95%] m-auto relative overflow-hidden flex">
        {[ 
          { icon: icon1, text: "Professional Driven", desc: "We foster a culture of expertise, integrity, and continuous learning to drive excellence." },
          { icon: icon2, text: "Commitment", desc: "Our unwavering dedication fuels innovation, quality, and long-term success." },
          { icon: icon3, text: "Customer Centricity", desc: "We prioritize our clients, crafting solutions that align with their aspirations and needs." },
          { icon: icon4, text: "Sustainability", desc: "Every project is designed with a responsibility to the environment and future generations." },
          { icon: icon5, text: "Operational Excellence", desc: "Precision, efficiency, and innovation define our approach to real estate development." },
          { icon: icon6, text: "Work-Life Harmony", desc: "We cultivate a supportive environment where personal well-being and professional growth go hand in hand." },
          { icon: icon7, text: "Use Good Judgment", desc: "Thoughtful decision-making guides our actions, ensuring impact-driven solutions." },
          { icon: icon8, text: "Trust", desc: "Built on transparency and integrity, our relationships stand the test of time." },
          { icon: icon9, text: "Collaboration", desc: "We thrive on teamwork, bringing together diverse talents to create extraordinary spaces." },
          { icon: icon10, text: "Purpose", desc: "Every project we undertake is driven by a vision to shape a better, more connected world." },
        ].map((item, index) => (
          <div key={index} className="value relative w-[25%] min-w-[25%]">
            {index % 2 === 0 ? (
              <>
                <div className="details h-[15vh]">
                  <h3 className="midlandfontmedium uppercase text-[10px] mb-5 py-2">{item.text}</h3>
                  <CommonPera PeraClass="text-justify" PeraText={item.desc} />
                </div>
                <div className="IconWrapper relative h-[15vh]">
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-700 z-0"></div>
                  <div className="Icondiv relative z-10 mt-10 border border-gray-700 w-[6rem] h-[6rem] flex justify-center items-center rounded-full bg-[#EFF5FA]">
                    <img src={item.icon} alt={item.text} />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="h-[15vh]"></div>
                <div className="IconWrapper relative h-[15vh]">
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-700 z-0"></div>
                  <div className="Icondiv relative z-10 mt-10 border border-gray-700 w-[6rem] h-[6rem] flex justify-center items-center rounded-full bg-[#EFF5FA]">
                    <img src={item.icon} alt={item.text} />
                  </div>
                </div>
                <div className="details mt-10">
                  <h3 className="midlandfontmedium uppercase text-[10px] mb-5 py-2">{item.text}</h3>
                  <CommonPera PeraClass="text-justify" PeraText={item.desc} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;

import { useState, useRef } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import SlideIn from "./Animations/SlideIn";


const CommonAccordion = ({ data, extraClass }) => {
    const [openIndex, setOpenIndex] = useState(null); // First accordion is open by default
    const contentRefs = useRef([]); // Store refs for content divs

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    return (
        <div className={`w-full max-w-[1000px] mx-auto lg:p-0 p-[15px] ${extraClass}`}>
            <SlideIn duration={0} delay={0.9}>
                {data && (
                    data.map((item, index) => (
                        <div key={index} className="lg:px-[40px] lg:py-[30px] p-[18px] bg-white mb-4 rounded-[10px]">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className={`w-full cursor-pointer flex justify-between items-center text-left font-medium transition duration-200 ${openIndex === index ? "lg:pb-5 pb-0" : ""}`}
                            >
                                <span className="cursor-pointer lg:text-[14px] text-[13px] lg:tracking-[1px] capitalize">{item.title}</span>
                                {openIndex === index ? <FiMinus className="text-xl cursor-pointer" /> : <FiPlus className="text-xl cursor-pointer" />}
                            </button>

                            <div
                                ref={(el) => (contentRefs.current[index] = el)}
                                className="grid transition-all duration-300 ease-in-out"
                                style={{
                                    maxHeight: openIndex === index ? contentRefs.current[index]?.scrollHeight + "px" : "0px",
                                    overflow: "hidden",
                                }}
                            >
                                <div className="text-gray-700 pt-4 text-justify common_pera">{item.content}</div>
                            </div>
                        </div>
                    ))
                )}
            </SlideIn>
        </div >
    );
};

export default CommonAccordion;

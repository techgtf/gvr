import React, { useContext, useRef, useEffect, useState } from "react";
import CommonHeading from "../commonHeading";
import PriceListForm from "./PriceListForm";
import { Context } from "../../context/context";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FadeIn from "../Animations/FadeIn";

gsap.registerPlugin(ScrollTrigger);

function PriceList({ priceListData = [], headingText = "PRICE LIST" }) {
  const { showEnquiryForm, openEnquiryForm } = useContext(Context);
  const [visibleTooltipIndex, setVisibleTooltipIndex] = useState(null);
  const tableRef = useRef(null);

  useEffect(() => {
    const tableElements = tableRef.current.querySelectorAll(".row_1");

    gsap.fromTo(
      tableElements,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: tableRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const handleTooltipToggle = (index) => {
    setVisibleTooltipIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  return (
    <>
      <section
        className="bg-[#EFF5FA] relative sm:px-32 px-5 py-10 md:py-14 flex flex-col justify-center"
        id="pricelist"
      >
        <div className="headingWrap max-w-[619px] m-auto text-center">
          <FadeIn duration={2} delay={0.5}>
            <CommonHeading HeadingText={headingText} />
          </FadeIn>
        </div>

        {/* Desktop view */}
        <div className="hidden md:block table w-full mt-10" ref={tableRef}>
          {priceListData.map((item, i) => (
            <div
              key={i}
              className="row_1 grid grid-cols-4 py-5 border-b-2 border-gray-400"
            >
              <div className="flex justify-center relative sm:gap-10 gap-3 items-center border-r-2 border-gray-400">
                <p>{item.area}</p>
                <button
                  className="bg-white px-6"
                  onClick={() => handleTooltipToggle(i)}
                >
                  MORE
                </button>
                {visibleTooltipIndex === i && (
                  <div className="tooltip absolute w-full text-center rounded-md -left-[10px] -top-[65px] bg-black text-white p-2">
                    {item.more}
                  </div>
                )}
              </div>
              <div className="flex justify-center sm:gap-10 gap-3 items-center border-r-2 border-gray-400">
                <p>{item.size}</p>
              </div>
              <div className="flex justify-center sm:gap-10 gap-3 items-center border-r-2 border-gray-400">
                <p>{item.price}</p>
              </div>
              <div className="flex justify-center sm:gap-10 gap-3 items-center">
                <button
                  className="bg-transparent text-[#33638B] uppercase"
                  onClick={openEnquiryForm}
                >
                  inquire now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile view */}
        <div className="block md:hidden table w-full mt-10">
          {priceListData.map((item, i) => (
            <div key={i} className="row_1 py-0 md:py-5">
              <div className="flex justify-center "></div>
              <div className="grid grid-cols-3 border-b border-gray-300 py-3">
                <div className="flex relative justify-center sm:gap-10 gap-2 items-center border-r border-gray-300 font-semibold">
                  <p>{item.area}</p>
                  <button
                    className="bg-white px-3"
                    onClick={() => handleTooltipToggle(i)}
                  >
                    MORE
                  </button>
                  {visibleTooltipIndex === i && (
                    <div className="tooltip w-[400px] absolute w-full text-center rounded-md -left-[10px] -top-[65px] bg-black text-white p-2">
                      {item.more}
                    </div>
                  )}
                </div>
                <div className="md:flex text-center py-2 md:py-0 justify-center sm:gap-10 gap-3 items-center border-r border-gray-300 font-semibold">
                  <p>{item.size}</p>
                </div>
                <div className="flex text-center justify-center sm:gap-10 gap-3 items-center font-semibold">
                  <p>{item.price}</p>
                </div>
              </div>
              <div className="justify-center flex py-3">
                <div className="w-full flex text-center justify-center sm:gap-10 gap-3 items-center">
                  <div
                    className="bg-transparent tracking-wide text-[#33638B] uppercase"
                    onClick={openEnquiryForm}
                  >
                    inquire now
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {showEnquiryForm && <PriceListForm />}
    </>
  );
}

export default PriceList;

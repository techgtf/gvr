import React, { useContext, useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CommonHeading from "../commonHeading";
import PriceListForm from "./PriceListForm";
import { Context } from "../../context/context";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FadeIn from "../Animations/FadeIn";

gsap.registerPlugin(ScrollTrigger);

function PriceList({ priceListData = [], headingText = "" }) {
  const { showEnquiryForm, openEnquiryForm } = useContext(Context);
  const [visibleTooltipIndex, setVisibleTooltipIndex] = useState(null);
  const tableRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (!tableRef.current) return;

    const tableElements = tableRef.current.querySelectorAll(".row_1");

    if (tableElements.length === 0) {
      console.warn("⚠️ No table elements found for animation!");
      return;
    }

    // ✅ Wrap GSAP animations in a requestAnimationFrame
    requestAnimationFrame(() => {
      gsap.set(tableElements, { opacity: 0, y: 50 });

      const animation = gsap.to(tableElements, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: tableRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      return () => {
        animation.kill();
        ScrollTrigger.getAll().forEach((st) => st.kill()); // ✅ Proper cleanup
      };
    });
  }, [location.pathname]);

  // const handleTooltipToggle = (index) => {
  //   setVisibleTooltipIndex((prevIndex) => (prevIndex === index ? null : index));
  // };

  return (
    <>
      <section className="bg-[#EFF5FA] relative sm:px-32 px-5 py-10 md:py-14 flex flex-col justify-center" id="pricelist">
        <div className="headingWrap max-w-[619px] m-auto text-center">
          <FadeIn duration={2} delay={0.5}>
            <CommonHeading HeadingText={headingText} />
          </FadeIn>
        </div>

        {/* Desktop view */}
        <div className="hidden md:block table w-full mt-10" ref={tableRef}>
          {priceListData?.length > 0 ? (
            priceListData?.map((item, i) => (
              <div key={i} className="row_1 grid grid-cols-4 py-5 border-b-2 border-gray-400">
                <div className="flex justify-center  sm:gap-10 gap-3 items-center border-r-2 border-gray-400">
                  <p>{item['sub_typology'].typology}</p>
                </div>
                <div className="flex justify-center sm:gap-10 gap-3 items-center border-r-2 border-gray-400">
                  <p>{item.size}</p>
                </div>
                <div className="flex justify-center sm:gap-10 gap-3 items-center border-r-2 border-gray-400">
                  <p>{item.price}</p>
                </div>
                <div className="flex justify-center sm:gap-10 gap-3 items-center">
                  <button className="bg-transparent text-[#33638B] uppercase" disabled onClick={openEnquiryForm}>
                    SOLD OUT </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-xl py-4 border-t-2 border-b-2 border-gray-500 text-center">COMING SOON</div>
          )}
        </div>

        {/* Mobile view */}
        <div className="block md:hidden table w-full mt-10">
          {priceListData?.length > 0 ? (
            priceListData.map((item, i) => (
              <div key={i} className="row_1 py-0 md:py-5">
                <div className="grid grid-cols-4 border-b border-gray-300 py-3">
                  <div className="flex relative justify-center sm:gap-10 gap-2 items-center border-r border-gray-300 font-semibold">
                    <p>{item.area}</p>
                  </div>
                  <div className="md:flex text-center py-2 md:py-0 justify-center sm:gap-10 gap-3 items-center border-r border-gray-300 font-semibold">
                    <p>{item.size}</p>
                  </div>
                  <div className="flex text-center justify-center sm:gap-10 gap-3 items-center border-r border-gray-300 font-semibold">
                    <p>{item.price}</p>
                  </div>
                  <div className="w-full flex text-center justify-center sm:gap-10 gap-3 items-center">
                    <div className="bg-transparent tracking-wide text-[#33638B] uppercase" disabled onClick={openEnquiryForm}>
                      SOLD OUT
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-xl py-4 border-t-2 border-b-2 border-gray-500 text-center">COMING SOON</div>
          )}
        </div>
      </section>
      {showEnquiryForm && <PriceListForm />}
    </>
  );
}

export default PriceList;

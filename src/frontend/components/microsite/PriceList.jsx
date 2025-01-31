import React, { useContext, useRef, useEffect } from "react";
import CommonHeading from "../commonHeading";
import PriceListForm from "./PriceListForm";
import { Context } from "../../context/context";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FadeIn from "../Animations/FadeIn";

gsap.registerPlugin(ScrollTrigger);

function PriceList() {
  const { showEnquiryForm, openEnquiryForm } = useContext(Context);
  const tableRef = useRef(null);

  const priceListData = [
    {
      area: "2 BHK",
      size: "1139 sq.ft",
      price: "₹ 74 Lacs*",
    },
    {
      area: "3 BHK",
      size: "1139 sq.ft",
      price: "₹ 74 Lacs*",
    },
    {
      area: "4 BHK",
      size: "1139 sq.ft",
      price: "₹ 74 Lacs*",
    },
  ];

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

  return (
    <>
      <section
        className="bg-[#EFF5FA] relative sm:px-32 px-5 py-10 md:py-14 flex flex-col justify-center"
        id="pricelist"
      >
        <div className="headingWrap max-w-[619px] m-auto text-center">
          <FadeIn duration={2} delay={0.5}>
            <CommonHeading HeadingText="PRICE LIST" />
          </FadeIn>
        </div>

        {/* Desktop view */}
        <div className="hidden md:block table w-full mt-10" ref={tableRef}>
          {priceListData.map((item, i) => (
            <div
              key={i}
              className="row_1 grid grid-cols-4 py-5 border-b-2 border-gray-400"
            >
              <div className="flex justify-center sm:gap-10 gap-3 items-center border-r-2 border-gray-400">
                <p>{item.area}</p>
                <button className="bg-white px-6">MORE</button>
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
              <div className="flex justify-center ">
                {/* <p className="bg-[#aac1d34a] rounded-full px-4 py-1">
                  DD/ 2 BR/Study/ Kitchen/2 Toilets/Bal.
                </p> */}
              </div>
              <div className="grid grid-cols-3 border-b border-gray-300 py-3">
                <div className="flex justify-center sm:gap-10 gap-2 items-center border-r border-gray-300 font-semibold">
                  <p className="">{item.area}</p>
                  <button className="bg-white px-3">MORE</button>
                </div>
                <div className="md:flex text-center py-2 md:py-0 justify-center sm:gap-10 gap-3 items-center border-r border-gray-300 font-semibold">
                  <p className="">{item.size}</p>
                </div>
                <div className="flex text-center justify-center sm:gap-10 gap-3 items-center font-semibold">
                  <p className="">{item.price}</p>
                </div>
              </div>
              <div className="justify-center flex py-3">
                <div className="w-full flex text-center justify-center sm:gap-10 gap-3 items-center">
                  <div
                    className="bg-transparent  tracking-wide text-[#33638B] uppercase"
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

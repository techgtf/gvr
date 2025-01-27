import React, { useContext } from "react";
import CommonHeading from "../commonHeading";
import PriceListForm from "./PriceListForm";
import { Context } from "../../context/context";

function PriceList() {
  const { showEnquiryForm, openEnquiryForm } = useContext(Context);

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
  return (
    <>
      <section
        className="bg-[#EFF5FA] relative sm:px-32 px-10 py-20 flex flex-col justify-center"
        id="pricelist"
      >
        <div className="headingWrap max-w-[619px] m-auto text-center">
          <CommonHeading HeadingText="PRICE LIST" />
        </div>
        <div className="table w-full mt-10">
          {priceListData &&
            priceListData.map((item, i) => (
              <div className="row_1 grid grid-cols-4 py-5 border-b-2 border-gray-400">
                <div className="flex justify-center sm:gap-10 gap-3 items-center border-r-2 border-gray-400 ">
                  <p>{item.area}</p>
                  <button className="bg-white px-6">MORE</button>
                </div>
                <div className="flex justify-center sm:gap-10 gap- items-center border-r-2 border-gray-400 ">
                  <p>{item.size}</p>
                </div>
                <div className="flex justify-center sm:gap-10 gap- items-center border-r-2 border-gray-400 ">
                  <p>{item.price}</p>
                </div>
                <div className="flex justify-center sm:gap-10 gap- items-center border-gray-400 ">
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
      </section>
      {showEnquiryForm && <PriceListForm />}
    </>
  );
}

export default PriceList;
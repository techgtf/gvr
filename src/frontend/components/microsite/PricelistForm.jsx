import React, { useContext } from "react";
import { SlClose } from "react-icons/sl";
import { Context } from "../../context/context";
import CommonHeading from "../commonHeading";

function PricelistForm() {
  const { showEnquiryForm, closeEnquiryForm } = useContext(Context);
  if (!showEnquiryForm) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 max-h-[100vh] flex items-center justify-center z-50">
      <div className="w-[90%] md:w-[60%] mx-auto bg-[#EFF5FA] shadow-lg rounded-md">
        {/* Header Section */}
        <div className="flex justify-between items-center p-6 ">
          <CommonHeading HeadingText="Have questions? Ask away!" />

          <button aria-label="Close enquiry form">
            <SlClose className="text-4xl md:text-2xl" onClick={closeEnquiryForm} />
          </button>
        </div>

        {/* Form Section */}
        <form className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-400 mb-1 uppercase">
                What's your name?
              </label>
              <input
                type="text"
                style={{ borderBottom: "1px solid rgb(0, 0, 0)" }}
                className="w-full px-3 py-2 border-b border-gray-200 bg-transparent"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1 uppercase">
                What's your email?
              </label>
              <input
                type="email"
                style={{ borderBottom: "1px solid rgb(0, 0, 0)" }}
                className="w-full px-3 py-2 border-b border-gray-200 bg-transparent"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1 uppercase">
                What's your number?
              </label>
              <input
                type="text"
                style={{ borderBottom: "1px solid rgb(0, 0, 0)" }}
                className="w-full px-3 py-2 border-b border-gray-200 bg-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-400 mb-1 uppercase mt-14">
              Tell us how we can help?
            </label>
            <textarea
              rows="3"
              style={{ borderBottom: "1px solid rgb(0, 0, 0)" }}
              className="w-full px-3 py-2 border-b border-gray-200 bg-transparent"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              style={{ border: "1px solid rgb(0, 0, 0)" }}
              className="px-10 py-1 bg-transparent text-black border border-black uppercase transition duration-200"
            >
              Submit Now{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PricelistForm;

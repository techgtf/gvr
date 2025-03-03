import React, { useEffect, useState } from "react";
import FadeIn from "../../Animations/FadeIn";
import CommonHeading from "../../commonHeading";
import SlideIn from "../../Animations/SlideIn";
import { useImageReveal } from "../../useImageReveal";
import CommonPera from "../../commonPera";

function GovernanceSection({ data, className, apiName }) {
  const [dataArr, setDataArr] = useState(null);

  useEffect(() => {
    const fetchSocialData = async () => {
      try {
        const response = await fetch(
          "https://greatvaluerealty.websitedesigningcompany.co.in/api/esg-list/" +
            apiName
        );
        const responseData = await response.json();
        setDataArr(responseData.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSocialData();
  }, [apiName]);

  // Apply image reveal after dataArr is set
  useImageReveal(".reveal", dataArr);

  return (
    <section className="social_details ">
      <div className="governance bg-[#EFF5FA] px-5 md:px-12 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 py-5 md:grid-cols-3 gap-5">
          <div className="heading flex flex-col p-4 justify-center">
            <FadeIn duration={2} delay={0.7}>
              <CommonHeading HeadingText={data.heading} />
            </FadeIn>
            <SlideIn duration={0.8} delay={0.2}>
              <p className="text-justify py-5">{data.description}</p>
            </SlideIn>
          </div>

          {dataArr?.map((item, index) => (
            <div key={index} className="card bg-white p-5">
              <div className="icon py-3 reveals">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="heading w-[90%] text-[8px] py-4 tracking-[3.5px] leading-[3] midlandfontmedium uppercase">
                {item.name}
              </div>
              <SlideIn duration={0.8} delay={0.2}>
                <p className="desc py-4 text-justify">
                  <CommonPera PeraText={item.short_description} />{" "}
                </p>
              </SlideIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GovernanceSection;

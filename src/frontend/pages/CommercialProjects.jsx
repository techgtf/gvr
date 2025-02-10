import * as CONFIG from "../../../config";
import { lazy } from "react";

const HeroSectionAboutUs = lazy(() =>
  import("../components/aboutUs/HeroSectionAboutUs")
);

const projects = [
  {
    img: `${CONFIG.ASSET_IMAGE_URL}frontend/images/commercialProjects/commercial-1.png`,
    detail: [
      {
        heading: "GAP",
        paragraph:
          "Unit no 201, First Floor, DLF South Court, District Centre, Sake, New Delhi, Delhi 110017 ",
      },
      {
        heading: "overview",
        paragraph: "GAP India South Asia Corporate Office given on rent",
      },
      {
        heading: "USP/Highlights",
        paragraph: "GAP India South Asia Corporate Office",
      },
    ],
  },
  {
    img: `${CONFIG.ASSET_IMAGE_URL}frontend/images/commercialProjects/commercial-1.png`,
    detail: [
      {
        heading: "Pernia",
        paragraph:
          "The Villa Haven’, Ten Style Mile, 4-A, Kalka Das Marg, Mehrauli, New Delhi – 110030",
      },
      {
        heading: "overview",
        paragraph:
          "Designer Store leased to Pernia Pop Store, keeping designer garments",
      },
      {
        heading: "USP/Highlights",
        paragraph: "First Designer store on Qutub Mehrauli road",
      },
    ],
  },
  {
    img: `${CONFIG.ASSET_IMAGE_URL}frontend/images/commercialProjects/commercial-1.png`,
    detail: [
      {
        heading: "Great Value Mall",
        paragraph: "Ram Ghat Road, Aligarh",
      },
      {
        heading: "overview",
        paragraph: "Shopping Mall",
      },
      {
        heading: "USP/Highlights",
        paragraph:
          "Shopping mall in the heart of Aligarh with brands like Bikanerwala, Levi's Straus, Cafe Coffee Day, Spencers, Cineplex  etc",
      },
    ],
  },
  {
    img: `${CONFIG.ASSET_IMAGE_URL}frontend/images/commercialProjects/commercial-1.png`,
    detail: [
      {
        heading: "Forest Walk",
        paragraph: "Hindon Nagar, Dasna, Ghaziabad, Uttar Pradesh 201302",
      },
      {
        heading: "overview",
        paragraph: "Prime Land located next to EPR",
      },
      {
        heading: "USP/Highlights",
        paragraph:
          "Prime residential land next to Eastern Periphery Road, Ghaziabad spread across 48.26 Acres on NH 24",
      },
    ],
  },
  {
    img: `${CONFIG.ASSET_IMAGE_URL}frontend/images/commercialProjects/commercial-1.png`,
    detail: [
      {
        heading: "Complex Madangir",
        paragraph: "Local Shopping Center, Madangir, New Delhi",
      },
      {
        heading: "overview",
        paragraph: "Commercial Building",
      },
      {
        heading: "USP/Highlights",
        paragraph: "Located on Madarishi Valmiki Marg on main road",
      },
    ],
  },
];

const CommercialProjects = () => {
  return (
    <section className="bg-[#EFF5FA]">
      <HeroSectionAboutUs
        img={`${CONFIG.ASSET_IMAGE_URL}frontend/images/commercialProjects/commercial_banner.png`}
        heading={"COMMERCIAL  PROJECTS"}
        breadCrumb={"HOME - COMMERCIAL  PROJECTS"}
        extraClassesImg={"objectRight"}
      />
      <div className="xl:p-[70px] p-[20px]">
        {projects.map((project, indexOfProject) => {
          return (
            <div
              key={indexOfProject}
              className={`border-t-solid xl:my-[50px] mb-[50px] mt-[0px]  flex justify-between flex-wrap !border-opacity-[0.5] border-b-solid !border-b-[0.5px] xl:border-t-[0.5px] border-[#0000004D] border-t-[0px]`}
            >
              <img
                src={project.img}
                alt="commercial"
                className="xl:basis-[15%] basis-[100%] my-[16px] inline-block"
              />

              {project.detail.map((detail, index) => {
                return (
                  <div
                    key={index}
                    className={`xl:basis-[25%] basis-[100%] flex xl:p-[22px] px-[0px] py-[15px]  flex-col border-opacity-[0.5] ${
                      index == 2
                        ? ""
                        : "xl:border-r-[1px] xl:border-r-solid xl:border-r-[#0000004D] xl:border-b-[0px] border-b-[1px] border-b-solid border-b-[#0000004D]"
                    }`}
                  >
                    <h3 className="midlandfontmedium text-[10px] xl:mb-[28px]  mb-[15px] tracking-[3px] uppercase">
                      {detail.heading}
                    </h3>
                    <p className="text-[12px] font-[300]">{detail.paragraph}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CommercialProjects;

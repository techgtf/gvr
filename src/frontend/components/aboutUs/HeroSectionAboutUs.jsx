import { Link } from "react-router-dom";
import { BASE_ROOT } from "../../../../config";

const HeroSectionAboutUs = ({ img,   parentLink, parentTitle, heading, breadCrumb, extraClassesImg, alt }) => {
  return (
    <div className={`relative uppercase pages_banner`}>

      <img
        src={img}
        alt={alt}
        className={`xl:h-[60vh] h-[40vh] object-cover w-[100%] ${extraClassesImg}`}
      />
      <h2 className="xl:text-[13px] text-[12px] midlandfontmedium text-[#143C5E] hidden xl:block absolute top-[58%] xl:top-[50%] left-[10%] mb-[0.5rem] font-medium tracking-[5px]">
        {heading}
      </h2>
      {/* <p className="xl:absolute mt-[30px] text-center  block  top-[30%] xl:top-[50%] left-[10%] xl:mt-[3rem] text-[#6C6C6C] tracking-[2px] text-[14px]">
        {breadCrumb}
      </p> */}
      <p className="xl:absolute mt-[30px] mb-[30px] text-center  block  top-[30%] xl:top-[50%] left-[10%] xl:mt-[3rem] text-[#6C6C6C] tracking-[2px] text-[14px]">
        <Link
          to={BASE_ROOT}
          className="text-[#143C5E] tracking-[2px] items-center space-x-2 uppercase"
        >
          Home -
        </Link>
        {parentLink && (
          <Link
            to={`${BASE_ROOT}${parentLink}`}
            className="text-[#143C5E] tracking-[2px] items-center space-x-2 uppercase"
          >
            {parentTitle} -
          </Link>
        )}
        <span className="text-inherit">{heading}</span>
      </p>
    </div>
  );
};

export default HeroSectionAboutUs;
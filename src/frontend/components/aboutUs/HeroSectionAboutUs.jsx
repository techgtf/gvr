import { Link } from "react-router-dom";
import { BASE_ROOT } from "../../../../config";

const HeroSectionAboutUs = ({
  img,
  heading,
  parentLink,
  parentTitle,
}) => {
  return (
    <div className="relative">
      <img src={img} alt="about" className="h-[80vh] object-cover w-[100%]" />
      <h2 className="xl:text-[18px] text-[16px] midlandfontmedium text-[#143C5E] absolute top-[30%] xl:top-[50%] left-[10%] mb-[0.5rem] font-medium tracking-[5px]">
        {heading}
      </h2>
      <p className="absolute top-[30%] xl:top-[50%] left-[10%] mt-[2.5rem] text-[#6C6C6C] tracking-[2px] text-inherit flex items-center space-x-2">
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

const HeroSectionAboutUs = ({ img, heading, breadCrumb }) => {
  return (
    <div className="relative uppercase">

      <img
        src={img}
        alt="about"
        className="xl:h-[60vh] h-[40vh] object-cover w-[100%]"
      />
      <h2 className="xl:text-[13px] text-[12px] midlandfontmedium text-[#143C5E] hidden xl:block absolute top-[58%] xl:top-[50%] left-[10%] mb-[0.5rem] font-medium tracking-[5px]">
        {heading}
      </h2>
      <p className="xl:absolute mt-[30px] text-center  block  top-[30%] xl:top-[50%] left-[10%] xl:mt-[3rem] text-[#6C6C6C] tracking-[2px] text-[14px]">
        {breadCrumb}
      </p>
    </div>
  );
};

export default HeroSectionAboutUs;
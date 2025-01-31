import * as CONFIG from "../../../../config";
const HeroSectionAboutUs = () => {
  return (
    <div className="xl:relative">
      <img
        src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/aboutus/about_us.jpg`}
        alt=""
      />
      <h2 className="xl:text-[18px] midlandfontmedium xl:text-[#143C5E] xl:absolute xl:top-[50%] xl:left-[10%] xl:mb-[0.5rem] xl:font-medium xl:tracking-[5px]">
        ABOUT US
      </h2>
      <p className="xl:absolute xl:top-[50%] xl:left-[10%] xl:mt-[2.5rem] xl:text-[#6C6C6C] xl:tracking-[2px] xl:text-[14px]">
        HOME - ABOUT US
      </p>
    </div>
  );
};

export default HeroSectionAboutUs;


const HeroSectionAboutUs = ({ img,   parentLink, parentTitle, heading, breadCrumb, extraClassesImg, alt }) => {
  return (
    <div className={`relative uppercase pages_banner`}>

      <img
        src={img}
        alt={alt}
        className={`xl:h-[60vh] h-[40vh] object-cover w-[100%] ${extraClassesImg}`}
      />
   
     
    </div>
  );
};

export default HeroSectionAboutUs;
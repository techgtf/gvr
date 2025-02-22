import ZoomOut from "../Animations/ZoomOut";

const HeroSectionAboutUs = ({
  img,
  parentLink,
  parentTitle,
  heading,
  breadCrumb,
  extraClassesImg,
  alt,
}) => {
  return (
    <div className={`relative uppercase pages_banner overflow-hidden`}>
      <ZoomOut initialScale={1.3} duration={2}>
        {" "}
        <img
          src={img}
          alt={alt}
          className={`xl:h-[60vh] h-[40vh] object-cover w-[100%] ${extraClassesImg}`}
        />
      </ZoomOut>
    </div>
  );
};

export default HeroSectionAboutUs;

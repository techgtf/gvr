import { useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { gsap } from "gsap";
import * as CONFIG from "../../../../config";
// import "yet-another-react-lightbox/styles.css";
import "swiper/css/free-mode";
import workPlaceImg1 from "../../../../public/assets/frontend/images/career/work-place-img-1.jpg";
import workPlaceImg2 from "../../../../public/assets/frontend/images/career/work-place-img-2.jpg";
import workPlaceImg3 from "../../../../public/assets/frontend/images/career/work-place-img-3.jpg";
import workPlaceImg4 from "../../../../public/assets/frontend/images/career/work-place-img-4.jpg";
import workPlaceImg5 from "../../../../public/assets/frontend/images/career/work-place-img-5.jpg";
import workPlaceImg6 from "../../../../public/assets/frontend/images/career/work-place-img-6.jpg";

const WorkCulture = ({data}) => {
  const images = [
    { img: workPlaceImg1, alt: 'Work culture' },
    { img: workPlaceImg2, alt: 'Work culture' },
    { img: workPlaceImg3, alt: 'Inclusive work culture' },
    { img: workPlaceImg4, alt: 'Work culture' },
    { img: workPlaceImg5, alt: 'Work culture' },
    { img: workPlaceImg6, alt: 'Work culture' },
  ];
  const [imageScreen, setImageScreen] = useState(true);
  const containerRef = useRef(null);

  const handleClick = () => {
    const tl = gsap.timeline();

    tl.to(containerRef.current, {
      x: "-10%", // Slide out to the left by 30%
      opacity: 0, // Fade out during slide
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => {
        setImageScreen(!imageScreen);
        gsap.set(containerRef.current, { x: "10%", opacity: 0 }); // Reset position and opacity
        tl.to(containerRef.current, {
          x: "0%", // Slide back in from the right
          opacity: 1, // Fade in during slide
          duration: 0.4,
          ease: "power2.inOut",
        });
      },
    });
  };

  return (
    <section className="lg:max-w-[79%] max-w-[85%] py-[50px] mb-[40px] max-w-[100%] m-auto">
      {data.heading && (
        <h3 className="sectionHeading uppercase border-b-[1px] pb-[30px] xl:mb-[60px] mb-[30px]  tracking-[5px] text-black midlandfontmedium">
        {data.heading}
      </h3>
      )}
      <div className="flex  flex-wrap justify-between ">
        <div className="text-justify text-[#333333AB] xl:basis-[29%] basis-[100%] text-[15px] font-[500]">
         {data.description && (
          <p className="text-justify">
          {data.description}
         </p>
         )} 
        </div>
        <div
          className="flex flex-wrap xl:basis-[68%] basis-[100%] mt-[20px] xl:mt-[0px]  xl:justify-between justify-start flex-col xl:flex-row"
          ref={containerRef}
        >
          {imageScreen ? (
            <>
              <img
<<<<<<< HEAD
                src={images[0].img}
                alt={images[0].alt}
=======
                src={`${CONFIG.VITE_APP_STORAGE}${data.image}`}
                alt={data.heading}
>>>>>>> be5d48c49e395fd2ab83dd8896572878b61d7f55
                className="basis-[60%] h-[320px] object-cover"
              />
              <div className="xl:w-[38%] w-[100%] flex xl:flex-col xl:mt-0 mt-[20px] flex-row justify-between">
                <img
                  src={images[1].img}
                  alt={images[1].alt}
                  className="h-[155px]  xl:w-[100%] w-[47%] object-cover"
                />
                <img
                  src={images[2].img}
                  alt={images[2].alt}
                  className="h-[155px] 2xl:h-[150px] w-[47%] xl:w-[100%] object-cover"
                />
              </div>
            </>
          ) : (
            <>
              <img
                src={images[3].img}
                alt={images[3].alt}
                className="basis-[60%] h-[320px] object-cover"
              />
              <div className="xl:w-[38%] w-[100%] flex xl:flex-col xl:mt-0 mt-[20px] flex-row justify-between">
                <img
                  src={images[4].img}
                  alt={images[4].alt}
                  className="h-[155px]  xl:w-[100%] w-[47%] object-cover"
                />
                <img
                  src={images[5].img}
                  alt={images[5].alt}
                  className="h-[155px] 2xl:h-[150px] w-[47%] xl:w-[100%] object-cover"
                />
              </div>
            </>
          )}
        </div>

        <button className="basis-[100%] z-[999] xl:mt-0 mt-[-5rem]  cursor-pointer flex justify-end items-center p-1">
          <BsArrowRight
            onClick={handleClick}
            className="text-[22px] text-gray-600"
          />
        </button>
      </div>
    </section>
  );
};

export default WorkCulture;

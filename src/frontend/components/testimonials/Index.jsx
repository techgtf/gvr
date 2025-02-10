import React from "react";
import { Link } from "react-router-dom";
import ZoomOut from "../Animations/ZoomOut";
import SlideIn from "../Animations/SlideIn";
import * as CONFIG from '../../../../config';
import { GoArrowUpRight } from "react-icons/go";

const Testimonials = ()=>{

  const testimonialData = [
    {
      message:'Great Value Realty has been an absoluate game-changer for me.',
      src: 'capital.jpg',
      thumbnail:'capital.jpg',
      name: 'sidharth malhotra',
    },
    {
      message:'Great Value Realty has been an absoluate game-changer for me.',
      src: 'capital.jpg',
      thumbnail:'capital.jpg',
      name: 'sidharth malhotra',
    },
    {
      message:'Great Value Realty has been an absoluate game-changer for me.',
      src: null,
      name: 'sidharth malhotra',
      isIframe:true,
      videoId:'EngW7tLk6R8',
  },
  ]

  return(
    <section className="testimonial_page_section 2xl:py-[85px] xl:py-[75px] py-[50px] text-center">
      <div className="section_in 2xl:max-w-[80%] m-auto max-w-[100%]">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:px-0 px-4'>
          {testimonialData && (
            testimonialData.map((item, index) =>
              <div className='boxes relative ' key={index}>
                {item.isIframe ? (
                  <>
                    <ZoomOut initialScale={1.5} duration={2} setHeight="auto">
                      <iframe
                        className="lg:h-[300px] h-[300px]"
                        width='100%'
                        src={`https://www.youtube.com/embed/${item.videoId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </ZoomOut>
                    <span className='link_arrow absolute bottom-[15px] right-[15px] text-white'><GoArrowUpRight className='cursor-pointer' /></span>
                  </>
                ) : (
                  <>
                    <ZoomOut initialScale={1.5} duration={2} setHeight="auto">
                      <img className='lg:h-[300px] h-[300px] cursor-pointer w-full object-cover' src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/home/verticals/${item.src}`} alt={`${item.src}`} />
                      <button className='playbtn absolute top-[50%] left-[50%] z-[1] cursor-pointer'>
                        <img src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/icons/play-button.png`} className='cursor-pointer lg:h-[44px] h-[30px]' alt="playbtn" />
                    </button>
                    </ZoomOut>
                    <span className='link_arrow absolute bottom-[15px] right-[15px] text-white'><GoArrowUpRight className='cursor-pointer' /></span>
                  </>
                )}
                <SlideIn duration={2} delay={0.5}>
                  <p className='desc mt-6 text-[14px] leading-[22px]'>{item.message}</p>
                  <span className='title block pt-4 text-[12px] uppercase tracking-[2px]'>{item.name}</span>
                </SlideIn>
              </div>
            )
          )}
        </div>
      </div>
      
    </section>
  )
}

export default Testimonials;
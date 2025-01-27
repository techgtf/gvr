
import * as CONFIG from '../../../../config';
const HeroSectionAboutUs = ()=>{
    return <div className='relative'>
        <img src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/aboutus/about_us.jpg`} alt="" />
        <h2 className='text-[18px] midlandfontmedium text-[#143C5E] absolute top-[50%] left-[10%]  mb-[0.5rem] font-medium tracking-[5px]'>ABOUT US</h2>
            <p className='absolute top-[50%] left-[10%] mt-[2.5rem] text-[#6C6C6C]  tracking-[2px] text-[14px] '>HOME - ABOUT US</p>
    </div>
}

export default HeroSectionAboutUs;
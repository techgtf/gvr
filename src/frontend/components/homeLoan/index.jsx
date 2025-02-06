import React from 'react'
import "./styles.css"
import * as CONFIG from "../../../../config"

export default function Index() {
    const pageData = [
        { content },
        { logos }
    ]

    return (
        <div className='area_converter_in lg:py-[80px] py-[20px] uppercase'>
            <div className='wrap_div lg:max-w-[95%] lg:px-0 px-[15px] w-full m-auto lg:mb-[70px] mb-[20px]'>
                <div className='grid_div grid lg:grid-cols-2'>
                    <div className='left_side grid lg:gap-[20px] gap-[15px] lg:py-5'>
                        <p>All The reputed banks have authorized our projects for loan availability.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos inventore iusto aspernatur ea consequatur perferendis ut rerum unde velit odit accusamus mollitia cumque eius tempore qui eveniet, blanditiis quia eos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum ipsa voluptates necessitatibus alias suscipit placeat vel assumenda? Et error aliquam adipisci consequatur at perspiciatis quia inventore ad. Aperiam, culpa deleniti.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, tenetur. Cum, nemo molestias ratione atque laboriosam illum corrupti dolores repudiandae, sapiente excepturi omnis. Omnis incidunt, obcaecati quo tenetur molestiae dolorum?</p>
                    </div>
                    <div className='right_side'>
                        <div className='div_in grid grid-cols-2 lg:px-[40px] lg:py-[40px] bg-white'>
                            <div className='logo_box'>
                                <img src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/home-loan/logo/axis-bank-logo.webp`} alt="axis-bank-logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

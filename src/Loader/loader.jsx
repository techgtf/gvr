import React from 'react';
import './loader.css';
import * as CONFIG from '../../config'



const Loader = () => {
    return (
        <div className="loader flex h-[100vh] w-full fixed left-0 right-0 items-center justify-center bg-white">
            <div className='loader_in'>
                <img className='h-[150px]' src={`${CONFIG.ASSET_IMAGE_URL}frontend/images/logo-colored.png`} alt="" />                
            </div>
        </div>
    );
};

export default Loader;
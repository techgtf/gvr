import React from "react";
import Header from "../HeaderFooter/Header";
import * as CONFIG from '../../../config'


const PageNotFound = () => {
    return (
        <>
            <div className="page_not_found micro_page">
                <Header />
                <div>
                    {/* <img src={CONFIG.IMAGE_URL + '404.png'} alt="page not found" className="img-fluid thumbnail" /> */}
                </div>

            </div>
        </>
    )
}

export default PageNotFound
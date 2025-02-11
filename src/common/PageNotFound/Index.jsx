import React from "react";
import Container from 'react-bootstrap/Container';
import Header from "frontend/components/Header/Header";
import './page_not_found.css';
import * as CONFIG from 'root/config'


const PageNotFound = ()=>{
    return(
        <>
            <div className="page_not_found micro_page">
                <Header />
                <Container> 
                    <img src={CONFIG.IMAGE_URL + '404.png'} alt="page not found" className="img-fluid thumbnail" />
                </Container>
            </div>
        </>
    )
}

export default PageNotFound
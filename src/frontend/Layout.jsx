import React, { useEffect, useRef } from "react";
import Header from "../frontend/HeaderFooter/Header";
import Footer from "../frontend/HeaderFooter/Footer";


function Layout({ children }) {

    return (
        <>
            <Header />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {children}
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Layout;
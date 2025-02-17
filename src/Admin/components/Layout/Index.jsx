import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Index";
import ContentLayout from '../../components/Layout/ContentLayout/ContentLayout';
import { useLocation } from "react-router-dom";
import './layout.css'

const AdminLayout = (props)=>{
    const {pathname} = useLocation()
    const [adminClass, setAdminClass] = useState();

    useEffect(()=>{
        if(pathname.includes('admin')){
        setAdminClass('admin_body');
        }
    }, [pathname]); 

    return(
        <>
            <div className={adminClass}>
                <Header />
                <ContentLayout>
                    <div className={`admin_container ${props.className}`}>
                        {props.children}
                    </div>
                </ContentLayout>
            </div>
        </>
    )
}

export default AdminLayout;
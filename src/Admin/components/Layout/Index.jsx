import React from "react";
import Header from "admin/components/Header/Index";
import ContentLayout from 'admin/components/Layout/ContentLayout/ContentLayout';
import './layout.css'

const AdminContainer = (props)=>{

    return(
        <>
        <Header />
        <ContentLayout>
            <div className={`admin_container ${props.className}`}>
                {props.children}
            </div>
        </ContentLayout>
        </>
    )
}

export default AdminContainer;
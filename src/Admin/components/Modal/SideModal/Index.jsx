import React, { useEffect, useRef } from "react";
import PerfectScrollbar from 'perfect-scrollbar';
import './sideModal.css'

const SideModal = ({className, children, onCancel, onSubmit, isEnableEdit, isLoading})=>{
    const contentRef = useRef(null)

    useEffect(()=>{
        const scrollbar = new PerfectScrollbar(contentRef.current)
        return()=>{
            scrollbar.destroy();
        }
    })

    return(
        <div className={`admin_modal_right ${!className && '' }`}>
            <div className="top">
                
                <h5 className="title text-lg">{isEnableEdit ? 'Edit New Item' : 'Add New Item'}</h5>
                <span className="close" onClick={onCancel}>&times;</span>
            </div>

            <div className="main" ref={contentRef}>
                {children}
            </div>

            <div className="bottom">
                <div className="btns">
                    <button className="btn btn_outline btn_sm me-2" onClick={onCancel}>Cancel</button>
                        {
                        
                        isLoading ?  <button className="btn btn_primary btn_sm" type="button" disabled>Please Wait ..</button>  :            <button className="btn btn_primary btn_sm" onClick={onSubmit}>Submit</button>
                          
                        }
                </div>
            </div>
        </div>
    )
}

export default SideModal;
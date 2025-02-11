import React from "react";
import {useParams } from "react-router-dom";

import Sections from '../components/Project/Sections';

import 'react-toastify/dist/ReactToastify.css';
import Button from 'common/Button/Button'
import 'react-quill/dist/quill.snow.css';
import '../assets/css/admin.css';

const MicroForm = ()=>{
    const projectid=useParams().projectid;
    const section_id=useParams().section;

    const backHandler = ()=>{
        
    }

    return(
        <>
            <div className="px_50 form_col">
                <Button className="btn btn_outline" onClick={backHandler}>Back</Button>
                <Sections projectid={projectid} sub_heading  section_type={section_id}   />
            </div>

        </>
    )
}

export default MicroForm;
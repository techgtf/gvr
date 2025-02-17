import React, {useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import Sections from '../components/Project/Sections';
import ProjectSteps from '../components/ProjectSteps/Index'
import Button from 'common/Button/Button'
import 'react-quill/dist/quill.snow.css';
import '../assets/css/admin.css';

const MasterPlan = ()=>{
    const projectid=useParams().projectid;
    const section_id=useParams().section;

    const [showAddSidebar, setShowAddSidebar] = useState(false);
    const navigate = useNavigate();

    const basicSubmitHandler = (e)=>{
        e.preventDefault();
        navigate('/admin/projects/location');
    }

    const backHandler = ()=>{
        
    }

    return(
        <>
            {/* <div className="d-flex title_col justify-content-between align-items-center">
                <h4 className="page_title">Add Project</h4>
            </div>

            <div className="property_wizard_listing d-flex">
            <ProjectSteps projectid={projectid} />

                <div className="px_50 form_col">
                    <Button className="btn btn_outline" onClick={backHandler}>Back</Button>
                    <Sections projectid={projectid} image  section_type={section_id}   />
                </div>
            </div> */}

                <div className="px_50 form_col">
                    <Button className="btn btn_outline" onClick={backHandler}>Back</Button>
                    <Sections projectid={projectid} image  section_type={section_id}   />
                </div>

        </>
    )
}

export default MasterPlan;
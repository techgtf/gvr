import React, { useRef, useState } from "react";
import { useNavigate ,useParams} from "react-router-dom";
import ProjectSteps from '../components/ProjectSteps/Index'
import Button from 'common/Button/Button'
import Sections from '../components/Project/Sections'
import 'react-quill/dist/quill.snow.css';
import '../assets/css/admin.css';
const ProjectLocation = ()=>{
    // section
    const [showAddSidebar, setShowAddSidebar] = useState(false);
    const navigate = useNavigate();
    const projectid=useParams().projectid;
    const section_id=useParams().section;

    const msgRef = useRef(null)
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
                    <Sections projectid={projectid} section_type={section_id} textarea image />
                </div>
            </div> */}

            <div className="px_50 form_col">
                <Button className="btn btn_outline" onClick={backHandler}>Back</Button>
                <Sections projectid={projectid} section_type={section_id} textarea image title="Project Overview" sub_heading />
            </div>

        </>
    )
}

export default ProjectLocation;
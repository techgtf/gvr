import React from "react";
import ProjectSteps from '../../../components/ProjectSteps/Index'
import { useParams } from "react-router-dom";

const ProjectLayout = (props)=>{
    const projectid=useParams().projectid;

    return(
        <>
            <div className="d-flex title_col justify-content-between align-items-center">
                <h4 className="page_title">{projectid?'Edit Project':'Add Project'}</h4>
            </div>

            <div className="property_wizard_listing d-flex">
                {/* <ProjectSteps projectid={projectid} /> */}
                <ProjectSteps projectid={projectid}/>

                {props.children}
            </div>
        </>
    )
}

export default ProjectLayout;
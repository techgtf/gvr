import {React,useEffect,useState} from "react"
import { NavLink } from "react-router-dom"
import * as CONFIG from 'root/config'
import Request from 'root/config/Request'


const ProjectSteps = (props)=>{
    const [isLoading, setIsLoading] = useState(true);
    const [sectionList, setSectionList] = useState([]);
    const [projectSectionlist, setProjectSectionlist] = useState([]);

    useEffect(()=>{
        async function sectionsList() {
            
            try{
                var response=await Request('admin/projectsectionlist','GET');
                if (response.status &&  response.statusCode == 200) {
                    setSectionList(response.data);
                    setIsLoading(false);
                }
            }catch(err){
                console.error('error while fetching data '+err);
            }finally{
            
            }
        }

        async function getprojectSections() {
            try{
                var response=await Request(`project/${props.projectid}/project-sections`,'GET');
                if (response.status &&  response.statusCode == 200) {
                    
                    // setProjectSectionlist(response.data);
                    response.data.map((item, index) => (
                        setProjectSectionlist(prevList => [...prevList, item])

                    ))
                }
            }catch(err){
                console.error('error while fetching data '+err);
            }finally{
            
            }
        }

        if(props.projectid){
            getprojectSections();
        }

        sectionsList();
    },[]);


    const handleSectionChange=(type,value)=>{
        projectSectionlist.find(psections => psections.section_type === type)?.id || '' 
    }


    return (
      <>
        <div className="steps_area">
          <div className="steps_col">
            {props.projectid ? (
              <>
              <div className="step" key="1">
                <NavLink
                  to={`${CONFIG.ADMIN_ROOT}project/${props.projectid}/edit`}
                  className="step-trigger"
                >
                  <span className="circle">
                    <i className="mdi mdi-check"></i>
                  </span>
                  <span className="content">
                    <span className="title">Basic Details</span>
                    {/* <span className="subtitle">Step 1</span> */}
                  </span>
                </NavLink>
              </div>

              <div className="step" key="10">
                <NavLink
                  to={`${CONFIG.ADMIN_ROOT}project/${props.projectid}/banner`}
                  className="step-trigger"
                >
                  <span className="circle">
                    <i className="mdi mdi-check"></i>
                  </span>
                  <span className="content">
                    <span className="title">Banner</span>
                    {/* <span className="subtitle">Step 1</span> */}
                  </span>
                </NavLink>
              </div>


              </>

              
            ) : (
              <div className="step filled" key="1">
                <a href="#" className="step-trigger">
                  <span className="circle">
                    <i className="mdi mdi-check"></i>
                  </span>
                  <span className="content">
                    <span className="title">Basic Details</span>
                    {/* <span className="subtitle">Step 1</span> */}
                  </span>
                </a>
              </div>
            )}

            {props.projectid // Check if projectid prop exists
              ? // If projectid prop exists, render the list of steps
                sectionList.map((item, index) => (
                    <div className="step" key={item+index}>
                      <NavLink
                        to={`${CONFIG.ADMIN_ROOT}project/${
                          props.projectid + "/" + item.slug + "/" + item.id
                        }`}
                        className="step-trigger"
                      >
                        <span className="circle">
                          <i className="mdi mdi-check"></i>
                        </span>
                        <span className="content">
                          <span className="title">{item.name} </span>
                        </span>
                      </NavLink>

                      {/* {projectSectionlist.find(psections => psections?.section_type === item.id)?.seq || '' } */}
                    </div>
                ))
              : // If projectid prop doesn't exist, render nothing
                null}
          </div>
        </div>
      </>
    );
}

export default ProjectSteps
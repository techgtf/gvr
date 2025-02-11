import React, {useEffect, useRef, useState } from "react";
import { useNavigate ,useParams} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import SideModal from "../components/Modal/SideModal/Index";
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from 'common/Portal/Backdrop'
import Loader from "common/Loader/loader";
import ScaleLoader from "react-spinners/ScaleLoader";

import CustomRadio from 'common/CustomRadio/Index'
import ProjectSteps from '../components/ProjectSteps/Index'
import Col from 'react-bootstrap/Col';
import Button from 'common/Button/Button'
import Request from 'root/config/Request';
import * as CONFIG from 'root/config';

import '../assets/css/admin.css';
import Sections from '../components/Project/Sections';
import {getSubtypology} from '../../config/Function';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Gallery = React.memo(()=>{
    const section_id=useParams().section;

const [checkedCategory, setCheckedCategory] = useState('');
const [isLoading, setIsLoading] = useState(false);
const [isLoadingTableData, setIsLoadingTableData] = useState(false);
const [isSitebarFormButtonLoading, setIsSitebarFormButtonLoading] = useState(false);



    const [showAddSidebar, setShowAddSidebar] = useState(false);
    const [errors, setErrors] = useState({});
    const [showSidebar, setShowSidebar] = useState(false);
    const projectid=useParams().projectid;
    const [enableEdit, setenableEdit] = useState(false);
    const [priceListType, setPriceListType] = useState([]);
    const [projectdata, setProjectdata] = useState([]);
    const [subTypologyList, setSubTypologyList] = useState([]);
    const [sizeListType, setSizeListType] = useState([]);
    const [list, setList] = useState([]);

    const navigate = useNavigate();
    const image=useRef(null);
    const [editId, setEditId] = useState(false);


    
    const [sectionFormdata, setSectionFormdata] = useState({
        // Initialize your form data state
        alt_text: null,
        image: "",
        image_preview:"",
        project_id: ""

      });

      const resetfields=()=>{
        setSectionFormdata({
            alt_text: null,
            image: "",
            image_preview:"",
            project_id: ""
          });
      }
      
    const handleSectionChange=(e)=>{
          
        setSectionFormdata({ ...sectionFormdata, [e.target.name]: e.target.value }); 
       
     
    }





    const addAmenityHandler = ()=>{
        setShowAddSidebar(!showSidebar)
    }
    const cancelHandler = ()=>{
        setShowSidebar(false)
        setShowAddSidebar(false)
        resetfields();

    }


    const addSubmitHandler =async (e)=>{

        e.preventDefault();
        setIsSitebarFormButtonLoading(true);
        const formData = new FormData();
        formData.append('alt_text', sectionFormdata.alt_text);
        formData.append('project_id',projectid);
        formData.append('image', image.current.files[0]);
        var response=await Request('admin/projectdata/gallery','POST',formData);
        if (response.status && response.statusCode === 403) {
            setErrors(response.errors);
            toast.error(response.message);
        }else if(response.status && response.statusCode === 200){
            getlist();
            cancelHandler();
            resetfields();
            toast.success(response.message);
        }
        setIsSitebarFormButtonLoading(false);
    }

    const updateSubmitHandler=async (e)=>{
        e.preventDefault();
        setIsSitebarFormButtonLoading(true);
        const formData = new FormData();
        formData.append('alt_text', sectionFormdata.alt_text);
        if(image.current.files[0]){

            formData.append('image', image.current.files[0]);
        }
        var response=await Request('admin/projectdata/gallery/'+editId+'/update','POST',formData);
        if (response.status && response.statusCode === 403) {
                toast.error(response.message);
                setErrors(response.errors);
        }else if(response.status && response.statusCode === 200){
            getlist();
            cancelHandler();
            resetfields();

            setShowSidebar(false)
             setShowAddSidebar(false)
   toast.success(response.message);

        }
     
        setIsSitebarFormButtonLoading(false);




    }
    const editHandler = async (id)=>{
        setShowSidebar(true)
        setShowAddSidebar(true)

            var response=await Request('admin/projectdata/gallery/'+id+'/edit','GET');
            if (response.status && response.statusCode === 200) {
                setenableEdit(true);
                setEditId(id);
                    var result=response.data;
                    setSectionFormdata({
                    alt_text:result.alt_text,
                    image_preview:CONFIG.VITE_APP_STORAGE+result.image,
                  });
        }
    }


    const deleteHandler=async(id)=>{
      
            setIsLoading(true);
            var response=await Request('admin/projectdata/gallerydelete/'+id,'POST');
            if (response.status && response.statusCode === 200) {
                getlist();
                setIsLoading(false);
                toast.success(response.message);
            }else{
                setIsLoading(false);
                toast.error(response.message);
            }

    }

    const backHandler = ()=>{
        
    }


    

    const listpricetype = async () => {
        var response=await Request('pricetype','GET');
            setPriceListType(response);
    
    }
    

    const listsizetype = async () => {
        var response=await Request('sizetype','GET');
        setSizeListType(response);
    
    }
    const getSubtypologyhandle=async(typologie_id)=>{
        const response=await getSubtypology(typologie_id);
        if (response.status && response.statusCode === 200) {
             setSubTypologyList(response.data.data);
        }
     
    }
    
    const getProjectData = async () => {
        var response=await Request('admin/project/'+projectid+'/edit','GET');
        if (response.status && response.statusCode === 200) {
            setProjectdata(response.data);
            getSubtypologyhandle(response.data.typologie_id)
        }
    }




    
    const getlist=async ()=>{
        setIsLoadingTableData(true);
        var response=await Request('admin/projectdata/gallery?project_id='+projectid,'GET');
        if(response.status && response.statusCode==200){
            setList(response.data.data);
        }
        setIsLoadingTableData(false);

    }

    useEffect(() => {
        listpricetype();
        listsizetype();
        getProjectData();
        getlist()

    


    }, []);


    if (isLoading) {
        return <Loader />; // Use the Loader component
    } 




    return(
        <>
            {/*<div className="d-flex title_col justify-content-between align-items-center">
                <h4 className="page_title">Add Project</h4>
            </div>

            <div className="property_wizard_listing d-flex">
                <ProjectSteps  projectid={projectid} />

                <div className="px_50 form_col">
                    <Button className="btn btn_outline" onClick={backHandler}>Back</Button>
                    <Sections projectid={projectid}  section_type={section_id}   />

               


                    <div className="card card_style1 mt_40">
                    <button className="btn ms-auto btn_primary btn-sm" onClick={addAmenityHandler}>Add Amenity</button>
                        <div className="d-flex">
                            <h5>All Floor Plans</h5>
                        </div>

                        <table className="w-100 mt_30">
                            <thead>
                                <tr>
                                    <th>
                                        Image
                                    </th>
                                   
                                    <th>
                                        Alt text
                                    </th>
                                    
                                    
                                    <th>
                                        Actions
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                    {
                        (list ? list && list.map(item => (
                            <tr key={item.id}>
                               
                                <td>
                                    <div className="thumb icon">
                                        <img src={CONFIG.VITE_APP_STORAGE+item.image} alt="" className="img-fluid" />
                                    </div>
                                </td>

                               
                                <td>
                                     {item.alt_text}
                                </td>
                               

                             

                                <td>
                                    <button className="btn action_btn" onClick={() => editHandler(item.id)}>
                                        <img src={CONFIG.ADMIN_IMG_URL + 'icons/edit.svg'} alt="edit icon" className="img-fluid icon"  />
                                    </button>

                                    <button className="btn action_btn" onClick={() => deleteHandler(item.id)}>
                                        <img src={CONFIG.ADMIN_IMG_URL + 'icons/delete_color.svg'} alt="delete icon" className="img-fluid icon delete"  />
                                    </button>
                                </td>
                            </tr>
                            )) : <tr><td colspan="2"><h5 className="no_record">No  More  Found!</h5></td></tr>
                        )
                    
                        }

                    </tbody>
                        </table>
                    </div>
                </div>
            </div>*/}

                <div className="px_50 form_col">
                    <Button className="btn btn_outline" onClick={backHandler}>Back</Button>
                    <Sections projectid={projectid}  section_type={section_id} title="Gallery" sub_heading />

                    <div className="card card_style1 mt_40">
                    <button className="btn ms-auto btn_primary btn-sm" onClick={addAmenityHandler}>Add Gallery</button>
                        <div className="d-flex">
                            <h5>Project Gallery</h5>
                        </div>

                        <table className="w-100 mt_30">
                            <thead>
                                <tr>
                                    <th>
                                        Image
                                    </th>
                                   
                                    <th>
                                        Alt text
                                    </th>
                                    
                                    
                                    <th>
                                        Actions
                                    </th>
                                </tr>
                            </thead>

                            <tbody>

                            {isLoadingTableData && (
                          <tr>
                            <td colSpan={4}>
                                <div className="text-center">
                                    <ScaleLoader 
                                        color="#ddd"
                                        className="w-100"
                                    /> 
                                </div>
                            </td>
                        </tr>  
                        )}



                    {
                        (list ? list && list.map(item => (
                            <tr key={item.id}>
                               
                                <td>
                                    <div className="thumb icon">
                                        <img src={CONFIG.VITE_APP_STORAGE+item.image} alt="" className="img-fluid" />
                                    </div>
                                </td>

                                <td>
                                     {item.alt_text}
                                </td>

                                <td>
                                    <button className="btn action_btn" onClick={() => editHandler(item.id)}>
                                        <img src={CONFIG.ADMIN_IMG_URL + 'icons/edit.svg'} alt="edit icon" className="img-fluid icon"  />
                                    </button>

                                    <button className="btn action_btn" onClick={() => deleteHandler(item.id)}>
                                        <img src={CONFIG.ADMIN_IMG_URL + 'icons/delete_color.svg'} alt="delete icon" className="img-fluid icon delete"  />
                                    </button>
                                </td>
                            </tr>
                            )) : <tr><td colspan="2"><h5 className="no_record">No  More  Found!</h5></td></tr>
                        )
                    
                        }

                    </tbody>
                        </table>
                    </div>
                </div>

            {showAddSidebar && (
                <>
                    <SidebarPortal className="portal">
                        <SideModal onCancel={cancelHandler}  onSubmit={(enableEdit ? updateSubmitHandler : addSubmitHandler)} isLoading={isSitebarFormButtonLoading}>
                            <Form>
                                <Row>
                                    <Form.Group as={Col} md="12" className="mb_20">
                                        <Form.Label>Upload Image *</Form.Label>
                                        <Form.Control className="form-control" name="image" type="file" ref={image} onChange={handleSectionChange}  />
                                        {errors.image}
                                        {(sectionFormdata.image_preview ? <img width="100" src={`${sectionFormdata.image_preview}`} /> : null)}
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" className="mb_20">
                                        <Form.Label>Alt Text</Form.Label>
                                        <InputGroup className="mb-3">
                                            <Form.Control placeholder="Enter Alt text"  name="alt_text" type="text" value={sectionFormdata.alt_text} onChange={handleSectionChange}  />
                                            {errors.alt_text}
                                        
                                        
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                            </Form>
                        </SideModal>
                    </SidebarPortal>
                    <BackdropPortal className="show" />
                </>
            )}



        </>



    )
})

export default Gallery;
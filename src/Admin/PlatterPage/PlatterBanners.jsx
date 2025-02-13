import React, {useEffect, useRef, useState } from "react";
import { useNavigate ,useParams,NavLink} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import SideModal from "../components/Modal/SideModal/Index";
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from 'common/Portal/Backdrop'
import Loader from "common/Loader/loader";

import CustomRadio from 'common/CustomRadio/Index'
import CustomDropdown from 'common/Custom_Dropdown/CustomDropdown'
import ProjectSteps from '../components/ProjectSteps/Index'
import Col from 'react-bootstrap/Col';
import Button from 'common/Button/Button'
import Request from 'root/config/Request';
import * as CONFIG from '../../../config';

import '../assets/css/admin.css';
import Sections from '../components/Project/Sections';
import {getSubtypology} from '../../config/Function';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const sizeOptions = [
    { label: 'sq.mt.', value: 'active' },
    { label: 'sq.ft.', value: 'hide' },
    { label: 'sq.yd.', value: 'hide' },
];

const priceOptions = [
    { label: 'lacs', value: 'active' },
    { label: 'cr', value: 'hide' },
]

const PlatterBanners = ()=>{
    const platterid=useParams().platterid;
  
    const projectid=useParams().projectid;

const [checkedCategory, setCheckedCategory] = useState('');
const [isLoading, setIsLoading] = useState(false);

    const [showAddSidebar, setShowAddSidebar] = useState(false);
    const [errors, setErrors] = useState({});
    const [showSidebar, setShowSidebar] = useState(false);
   
    const [enableEdit, setenableEdit] = useState(false);
    const [editId, setEditId] = useState(false);

    const [priceListType, setPriceListType] = useState([]);
    const [projectdata, setProjectdata] = useState([]);
    const [subTypologyList, setSubTypologyList] = useState([]);
    const [sizeListType, setSizeListType] = useState([]);
    const [list, setList] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [sectionFormdata, setSectionFormdata] = useState({
        desktop_image: null,
        mobile_image: null,
        desktop_image_preview: null,
        mobile_image_preview: null,
        alt_text: '',
    });


    const navigate = useNavigate();
    const image=useRef(null);

    const statusOptions = [
        { label: 'Active', value: '1' },
        { label: 'Hide', value: '0' },
    ];

    const handleStatusSelect = async (selectedValue, id) => {
        setSelectedStatus(selectedValue);
        await updateStatusHandler(id, selectedValue);
      
    };
    const updateStatusHandler = async (id, selectedStatus) => {

        const formData = new FormData();
        formData.append('status', selectedStatus);

        var response = await Request('admin/platter/banner/'+id+'/status', 'POST', formData);

        if(response.status && response.statusCode==403){

            setErrors(response.errors);
            toast.error(response.message);

        }else if(response.status && response.statusCode==200){
            // await loadDevelopers();
            toast.success(response.message);

        } 

    };

      const resetfields=()=>{
        setSectionFormdata({
            desktop_image: null,
            mobile_image: null,
            desktop_image_preview: null,
            mobile_image_preview: null,
            alt_text: null,
          });
      }
      
    const handleSectionChange=(e)=>{
        if(e.target.name=="desktop_image"){
          
            var file =  e.target.files[0]; // Assuming you only allow single file selection
            setSectionFormdata({ ...sectionFormdata, [e.target.name]: file}); 
            // sectionFormdata.desktop_image=file;
       
        }else if(e.target.name=="mobile_image"){
            var file = e.target.files[0]; // Assuming you only allow single file selection
            setSectionFormdata({ ...sectionFormdata, [e.target.name]: file}); 
            // sectionFormdata.mobile_image=file;
            // setSectionFormdata({ ...sectionFormdata, [e.target.name]: e.target.value }); 
            
        }else if(e.target.name=="alt_text"){
            setSectionFormdata({ ...sectionFormdata, [e.target.name]: e.target.value });
        }

    }





    const addAmenityHandler = ()=>{
        setShowAddSidebar(!showSidebar)
    }
    const cancelHandler = ()=>{
        setShowSidebar(false)
        setShowAddSidebar(false)
    }


    const addSubmitHandler =async (e)=>{
        e.preventDefault();
     
        const formData = new FormData();
        formData.append('desktop_image', sectionFormdata.desktop_image);
        formData.append('mobile_image', sectionFormdata.mobile_image);
        formData.append('alt_text', sectionFormdata.alt_text);
        var response=await Request(`admin/platter/${platterid}/banner`,'POST',formData);
        if (response.status && response.statusCode === 403) {
            setErrors(response.errors);
        toast.error(response.message);

        }else if(response.status && response.statusCode === 200){
            getlist();
            cancelHandler();
            resetfields();
        toast.success(response.message);

        }
        setIsLoading(false);
    }

    const updateSubmitHandler=async (e)=>{
        const formData = new FormData();
        if(sectionFormdata.desktop_image){

            formData.append('desktop_image', sectionFormdata.desktop_image);
        }

        if(sectionFormdata.mobile_image){

            formData.append('mobile_image', sectionFormdata.mobile_image);
        }

        formData.append('alt_text', sectionFormdata.alt_text);
        var response=await Request(`admin/platter/${platterid}/banner/${editId}/update`,'POST',formData);
        if (response.status && response.statusCode === 403) {
            setErrors(response.errors);
        }else if(response.status && response.statusCode == 200){
            getlist();
            cancelHandler();
            resetfields();
        }
        toast.success(response.message);
        setIsLoading(false);




    }
    const editHandler = async (id)=>{
        setIsLoading(true);
        setShowSidebar(true)
        setShowAddSidebar(true)

            var response=await Request(`admin/platter/${platterid}/banner/${id}/edit`,'GET');
            if (response.status && response.statusCode === 200) {
                setenableEdit(true);
                setEditId(id);
                var result=response.data;
                setSectionFormdata({
                    desktop_image_preview: result.desktop_image,
                    mobile_image_preview: result.mobile_image,
                    alt_text: result.alt_text,
                  });
        }
        setIsLoading(false);

    }


    const deleteHandler=async(id)=>{
      
            setIsLoading(true);
            var response=await Request('admin/projectdata/floor-plan/'+id,'DELETE');
            if(response.status){
                getlist();
                toast.success(response.message);
            }else{
                toast.error(response.message);
                
            }
            setIsLoading(false);


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
        var response=await Request(`admin/platter/${platterid}/banner`,'GET');
        if(response.status && response.statusCode==200){
            setList(response.data);
        }
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
        <div className="property_wizard_listing d-flex">
                 <div className="steps_area">
                       <div className="steps_col">
                    <div className="step filled ">
                        <NavLink to={`${CONFIG.ADMIN_ROOT}platter-page/${platterid}/edit`} className="step-trigger"> 
                            <span className="circle"><i className="mdi mdi-check"></i></span><span className="content">
                            <span className="title">Basic Details</span><span className="subtitle">Step 1</span>
                            </span>
                        </NavLink>   
                    </div>

                    <div className="step  ">
                          <NavLink to={`${CONFIG.ADMIN_ROOT}platter-page/${platterid}/banner`} className="step-trigger"> 
                            <span className="circle"><i className="mdi mdi-check"></i></span><span className="content">
                            <span className="title">Banner</span><span className="subtitle">Step 2</span>
                            </span>
                            </NavLink>   
                    </div>

                        </div>
                        </div>
                <div className="px_50 form_col">
                    <Button className="btn btn_outline" onClick={backHandler}>Back</Button>
                    <div className="steps_area">
              
                </div>
                
                    <div className="card card_style1 mt_40">
                    <button className="btn ms-auto btn_primary btn-sm" onClick={addAmenityHandler}>Add Banner</button>
                        <div className="d-flex">
                            <h5>All Banners</h5>
                        </div>

                        <table className="w-100 mt_30">
                            <thead>
                                <tr>
                                    <th>
                                        Name
                                    </th>
                                    <th>
                                        Desktop Image
                                        </th>
                                     <th>
                                          Mobile Image
                                    </th>
                                 
                                    <th>
                                        Status
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
                                    {(item.desktop_image ? <img src={CONFIG.VITE_APP_STORAGE+item.desktop_image } alt="" className="img-fluid" /> :"No Image " ) }
                                    </div>
                                </td>

                                <td>
                                    <div className="thumb icon">
                                    {(item.mobile_image ? <img src={CONFIG.VITE_APP_STORAGE+item.mobile_image } alt="" className="img-fluid" /> :"No Image " ) }
                                    </div>
                                </td>
                                <td>
                                {item.alt_text}
                                </td>
                                <td>
                                <CustomDropdown className="form-control" defaultVal={item.status} options={statusOptions} onSelect={(selectedValue) => handleStatusSelect(selectedValue, item.id)}  />

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
                </div>
            {showAddSidebar && (
                <>
                    <SidebarPortal className="portal">
                        <SideModal onCancel={cancelHandler}  onSubmit={(enableEdit ? updateSubmitHandler : addSubmitHandler)}>
                            <Form  >
                                <Row>
                                    <Form.Group as={Col} md="12" className="mb_20">
                                        <Form.Label>Desktop Image*</Form.Label>
                                        <Form.Control className="form-control" name="desktop_image" type="file" onChange={handleSectionChange}  />
                                        {errors.desktop_image}
                                        {(sectionFormdata.desktop_image_preview ? <img width="100" src={`${CONFIG.VITE_APP_STORAGE+sectionFormdata.desktop_image_preview}`} /> : null)}
                                    </Form.Group>

                                    <Form.Group as={Col} md="12" className="mb_20">
                                        <Form.Label>Mobile Image*</Form.Label>
                                        <Form.Control className="form-control" name="mobile_image" type="file" onChange={handleSectionChange}  />
                                        {errors.mobile_image}
                                        {(sectionFormdata.mobile_image_preview ? <img width="100" src={`${CONFIG.VITE_APP_STORAGE+sectionFormdata.mobile_image_preview}`} /> : null)}
                                    </Form.Group>

                                    <Form.Group as={Col} md="12" className="mb_20">
                                        <Form.Label>Image Alt</Form.Label>
                                        <InputGroup className="mb-3">
                                            <Form.Control placeholder="Enter Image Alt"  name="alt_text" type="alt_text"  value={sectionFormdata.alt_text}  onChange={handleSectionChange}  />
                                            {errors.price}
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
}

export default PlatterBanners;
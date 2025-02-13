import React, { useEffect, useRef, useState } from "react";
import CustomDropdown from 'common/Custom_Dropdown/CustomDropdown';
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from 'common/Portal/Backdrop'
import SideModal from "../components/Modal/SideModal/Index";
import Form from 'react-bootstrap/Form';
import Loader from "common/Loader/loader";
import {  toast } from 'react-toastify';
import Pagination from 'common/Pagination/Pagination';
import {useNavigate } from 'react-router-dom';
import Request from 'root/config/Request';
import ReactQuill from 'react-quill';
import Button from 'common/Button/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useAsyncError, useParams } from "react-router-dom";

import * as CONFIG from '../../../config';

const statusOptions = [
    { label: 'Active', value: '1' },
    { label: 'Hide', value: '0' },
];


const AddCareer = ()=>{

    const id = useParams().id;

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    
    const [showSidebar, setShowSidebar] = useState(false);

    const [errors, setErrors] = useState({});
    
    const [editId, setEditId] = useState(false);
  
    const [jobType, setJobType] = useState({});
    const [jobYear, setJobYear] = useState({});
    
    

    const titleRef = useRef(null);
    const typeRef = useRef(null);
    const locationRef = useRef(null);
    const experienceRef = useRef(null);
    const shortDescriptionRef = useRef(null);
    const descriptionRef = useRef(null);

    const navigate = useNavigate();
    const [editorHtml, setEditorHtml] = useState('');
    useEffect(() => {

        setEditId(id);

        const listenersJobApplication = async () => {

            setShowSidebar(true);
            setEditId(id)

            try{
                const response = await Request('admin/career/'+id,'GET');
                if (response.status && response.statusCode == 200) {
                    titleRef.current.value = response.data.destination;
                    typeRef.current.value = response.data.job_timing;
                    locationRef.current.value = response.data.address;
                    experienceRef.current.value = response.data.experience_id;
                    shortDescriptionRef.current.value = response.data.short_description;
                    // descriptionRef.current.value = response.data.description;
                    setEditorHtml(prevHtml => prevHtml + response.data.description);
                }
            }catch(err){
            }
        }

        
        const jobTypeApi = async()=>{
            try{
                var response = await Request('admin/jobtype','GET');

                if (response.status && response.statusCode == 200) {
                    setJobType(response.data);
                }
            }catch(err){
            }
        }


        const jobYearApi = async()=>{
            try{
                var response = await Request('admin/jobyear','GET');
                if (response.status && response.statusCode == 200) {
                    setJobYear(response.data);
                }
            }catch(err){
            }
        }

        jobTypeApi();
        jobYearApi();
        listenersJobApplication();

    }, [])


    const resetFields=()=>{
        setErrors({});
    }
 

    const updateSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            setIsLoading(true);

            const formData = new FormData();
            formData.append('experience_id', experienceRef.current.value);
            formData.append('job_timing', typeRef.current.value);
            formData.append('destination', titleRef.current.value);
            formData.append('address', locationRef.current.value);
            formData.append('short_description', shortDescriptionRef.current.value);
            formData.append('description', descriptionRef.current.value);
            
            var response = await Request('admin/career/'+editId+'/update','POST', formData);
            ('job application response', response);

            if(response.status && response.statusCode == 403){
                setErrors(response.errors);
                setIsLoading(false);
                throw new Error(response.message);

            }else if(response.status && response.statusCode==200){
                resetFields();
                setIsLoading(false);
                toast.success(response.message);
                return navigate(CONFIG.ADMIN_ROOT+'careers')
            }
        }
        catch (error) {
            setIsLoading(false);
            toast.error(error.message)
        }
    }

 
    return(
        <>
            <div className="d-flex title_col justify-content-between align-items-center">
                <h4 className="page_title">Edit Career</h4>
            </div>

            <div className="card mt-4 card_style1">
                <div className="d-flex">
                    <h5>Edit Career</h5>
                </div>
                
                <Form onSubmit={updateSubmitHandler} className="mt_40">
                    <Form.Group className="mb_15 form-group">
                        <Form.Label>Title*</Form.Label>
                        <Form.Control ref={titleRef} className="" type="text" placeholder="Enter Career Title" />
                        {errors.destination && <div className="errMsg text-danger">{errors.destination}</div>}
                    </Form.Group>


                    <Row>
                        <Form.Group className="mb_15 form-group" as={Col} md="4">
                            
                            <Form.Label>Job Type*</Form.Label>
                            <select ref={typeRef} className="form-control" defaultValue="select">
                                <option value="" selected disabled>Select Job Type</option>
                                

                                {Object.entries(jobType).map(([key, value]) => {
                                    return (
                                        <option value={key} key={key}>{value}</option>
                                    );
                                })}

                            </select>
                            {errors.job_timing && <div className="errMsg text-danger">{errors.job_timing}</div>}

                        </Form.Group>


                        <Form.Group className="mb_15 form-group" as={Col} md="4">
                            <Form.Label>Job Location*</Form.Label>
                            <Form.Control ref={locationRef} className="" type="text" placeholder="Enter Location" />
                            {errors.address && <div className="errMsg text-danger">{errors.address}</div>}
                        </Form.Group>


                        <Form.Group className="mb_15 form-group" as={Col} md="4">
                            <Form.Label>Job Experience*</Form.Label>
                            <select ref={experienceRef} className="form-control" defaultValue="select">
                                <option value="" selected disabled>Select Job Experience</option>
                                {Object.entries(jobYear).map(([key, value]) => {
                                    return (
                                        <option value={key} key={key}>{value}</option>
                                    );
                                })}
                            </select>
                            {errors.experience_id && <div className="errMsg text-danger">{errors.experience_id}</div>}
                        </Form.Group>

                    </Row>

                    

                    <Form.Group className="mb_15 form-group">
                        <Form.Label>Short Description*</Form.Label>
                        <textarea ref={shortDescriptionRef} className="form-control" type="text" placeholder="Enter Short Description" />
                        {errors.short_description && <div className="errMsg text-danger">{errors.short_description}</div>}
                    </Form.Group>


                    <Form.Group className="mb_15 form-group">
                        <Form.Label>Description*</Form.Label>
                        <ReactQuill ref={descriptionRef} value={editorHtml} placeholder="Enter Description"   />
                        {errors.description && <div className="errMsg text-danger">{errors.description}</div>}
                    </Form.Group>


                    


                    {
                        
                        isLoading ? <>    <Button className="btn btn_primary mt_20" type="button" disabled>Please Wait ..</Button></>  :    <Button className="btn btn_primary mt_20" type="submit">Update</Button>
                          
                        }
                        

                </Form>
            </div>
        </>
    )
}

export default AddCareer;
import React, { useEffect, useRef, useState } from "react";
import Form from 'react-bootstrap/Form';
import {  toast } from 'react-toastify';
import {useNavigate } from 'react-router-dom';
import Request from 'root/config/Request';
import ReactQuill from 'react-quill';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as CONFIG from '../../../config';
import Button from './../../common/Button/Button';



const AddCareer = ()=>{

    const [submitLoading, setSubmitLoading] = useState(false);

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [showSidebar, setShowSidebar] = useState(false);
    const [enableEdit, setenableEdit] = useState(false);
    const [errors, setErrors] = useState({});
    
    const [editId, setEditId] = useState(false);
 
    const [selectedStatus, setSelectedStatus] = useState(null);

    const [jobType, setJobType] = useState({});
    const [jobYear, setJobYear] = useState({});
    
    const titleRef = useRef(null);
    const typeRef = useRef(null);
    const locationRef = useRef(null);
    const experienceRef = useRef(null);
    const shortDescriptionRef = useRef(null);
    const descriptionRef = useRef(null);

    const navigate = useNavigate();

    useEffect(()=>{

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
    }, [])

    const resetFields=()=>{
        setErrors({});
    }
 

    const addSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            setSubmitLoading(true);

            const formData = new FormData();
            formData.append('experience_id', experienceRef.current.value);
            formData.append('job_timing', typeRef.current.value);
            formData.append('destination', titleRef.current.value);
            formData.append('address', locationRef.current.value);
            formData.append('short_description', shortDescriptionRef.current.value);
            formData.append('description', descriptionRef.current.value);
            
            var response = await Request('admin/career','POST', formData);

            if(response.status && response.statusCode == 403){
                setErrors(response.errors);
                throw new Error(response.message);

            }else if(response.status && response.statusCode==200){
                resetFields();
                toast.success(response.message);
                return navigate(CONFIG.ADMIN_ROOT+'careers')
            }
            setSubmitLoading(false);

        }
        catch (error) {
            setSubmitLoading(false);
            toast.error(error.message)
        }
    }

  
    return(
        <>
            <div className="d-flex title_col justify-content-between align-items-center">
                <h4 className="page_title">Add Career</h4>
            </div>

            <div className="card mt-4 card_style1">
                <div className="d-flex">
                    <h5>Add Career</h5>
                </div>
                
                <Form onSubmit={addSubmitHandler} className="mt_40">
                    <Form.Group className="mb_15 form-group">
                        <Form.Label>Title*</Form.Label>
                        <Form.Control ref={titleRef} className="" type="text" placeholder="Enter Career Title" />
                        {errors.destination && <div className="errMsg text-danger">{errors.destination}</div>}
                    </Form.Group>


                    <Row>
                        <Form.Group className="mb_15 form-group" as={Col} md="4">
                            <Form.Label>Job Type*</Form.Label>
                            <select ref={typeRef} className="form-control" defaultValue="select">
                                <option value="select" disabled>Select Job Type</option>
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
                                <option value="select" disabled>Select Job Experience</option>
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
                        <ReactQuill ref={descriptionRef} placeholder="Enter Description"   />
                        {errors.description && <div className="errMsg text-danger">{errors.description}</div>}
                    </Form.Group>



                    {
                        
                        submitLoading ? <>    <Button className="btn btn_primary mt_20" type="button" disabled>Please Wait ..</Button></>  :    <Button className="btn btn_primary mt_20" type="submit">Add Career</Button>
                          
                        }



                </Form>
            </div>
        </>
    )
}

export default AddCareer;
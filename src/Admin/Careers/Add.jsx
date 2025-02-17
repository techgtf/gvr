import React, { useEffect, useRef, useState } from "react";
import {  toast } from 'react-toastify';
import {useNavigate } from 'react-router-dom';
import Request from 'root/config/Request';
import ReactQuill from 'react-quill';
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
            <div className="flex justify-between items-center border-b pb-4">
                <h4 className="text-xl font-semibold">Add Career</h4>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 mt-4">
                <h5 className="text-lg font-medium mb-4">Add Career</h5>

                <form onSubmit={addSubmitHandler} className="mt-4 space-y-4">
                <div>
                    <label className="block text-sm font-medium">Title*</label>
                    <input ref={titleRef} type="text" placeholder="Enter Career Title" className="w-full border p-2 rounded mt-1" />
                    {errors.destination && <div className="text-red-500 text-sm">{errors.destination}</div>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                    <label className="block text-sm font-medium">Job Type*</label>
                    <select ref={typeRef} defaultValue="select" className="w-full border p-2 rounded mt-1">
                        <option value="select" disabled>
                        Select Job Type
                        </option>
                        {Object.entries(jobType).map(([key, value]) => (
                        <option value={key} key={key}>
                            {value}
                        </option>
                        ))}
                    </select>
                    {errors.job_timing && <div className="text-red-500 text-sm">{errors.job_timing}</div>}
                    </div>

                    <div>
                    <label className="block text-sm font-medium">Job Location*</label>
                    <input ref={locationRef} type="text" placeholder="Enter Location" className="w-full border p-2 rounded mt-1" />
                    {errors.address && <div className="text-red-500 text-sm">{errors.address}</div>}
                    </div>

                    <div>
                    <label className="block text-sm font-medium">Job Experience*</label>
                    <select ref={experienceRef} defaultValue="select" className="w-full border p-2 rounded mt-1">
                        <option value="select" disabled>
                        Select Job Experience
                        </option>
                        {Object.entries(jobYear).map(([key, value]) => (
                        <option value={key} key={key}>
                            {value}
                        </option>
                        ))}
                    </select>
                    {errors.experience_id && <div className="text-red-500 text-sm">{errors.experience_id}</div>}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium">Short Description*</label>
                    <textarea ref={shortDescriptionRef} placeholder="Enter Short Description" className="w-full border p-2 rounded mt-1"></textarea>
                    {errors.short_description && <div className="text-red-500 text-sm">{errors.short_description}</div>}
                </div>

                <div>
                    <label className="block text-sm font-medium">Description*</label>
                    <ReactQuill ref={descriptionRef} placeholder="Enter Description" className="mt-1" />
                    {errors.description && <div className="text-red-500 text-sm">{errors.description}</div>}
                </div>

                <div>
                    {submitLoading ? (
                    <button className="bg-gray-500 text-white px-4 py-2 rounded mt-4" disabled>
                        Please Wait ..
                    </button>
                    ) : (
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mt-4" type="submit">
                        Add Career
                    </button>
                    )}
                </div>
                </form>
            </div>
            </>
    )
}

export default AddCareer;
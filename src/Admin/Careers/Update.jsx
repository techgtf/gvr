import React, { useEffect, useRef, useState } from "react";
import CustomDropdown from 'common/Custom_Dropdown/CustomDropdown';
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from 'common/Portal/Backdrop'
import SideModal from "../components/Modal/SideModal/Index";
import Loader from "common/Loader/loader";
import {  toast } from 'react-toastify';
import Pagination from 'common/Pagination/Pagination';
import {useNavigate } from 'react-router-dom';
import Request from 'root/config/Request';
import ReactQuill from 'react-quill';
import Button from 'common/Button/Button'
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
            <div className="flex justify-between items-center">
                <h4 className="text-lg font-semibold">Edit Career</h4>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 mt-4">
                <div className="mb-4">
                <h5 className="text-lg font-semibold">Edit Career</h5>
                </div>

                <form onSubmit={updateSubmitHandler} className="mt-4">
                <div className="mb-4">
                    <label className="block font-medium">Title*</label>
                    <input
                    ref={titleRef}
                    type="text"
                    placeholder="Enter Career Title"
                    className="w-full border rounded p-2"
                    />
                    {errors.destination && <div className="text-red-500 text-sm">{errors.destination}</div>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                    <label className="block font-medium">Job Type*</label>
                    <select ref={typeRef} className="w-full border rounded p-2">
                        <option value="" disabled>Select Job Type</option>
                        {Object.entries(jobType).map(([key, value]) => (
                        <option value={key} key={key}>{value}</option>
                        ))}
                    </select>
                    {errors.job_timing && <div className="text-red-500 text-sm">{errors.job_timing}</div>}
                    </div>

                    <div>
                    <label className="block font-medium">Job Location*</label>
                    <input
                        ref={locationRef}
                        type="text"
                        placeholder="Enter Location"
                        className="w-full border rounded p-2"
                    />
                    {errors.address && <div className="text-red-500 text-sm">{errors.address}</div>}
                    </div>

                    <div>
                    <label className="block font-medium">Job Experience*</label>
                    <select ref={experienceRef} className="w-full border rounded p-2">
                        <option value="" disabled>Select Job Experience</option>
                        {Object.entries(jobYear).map(([key, value]) => (
                        <option value={key} key={key}>{value}</option>
                        ))}
                    </select>
                    {errors.experience_id && <div className="text-red-500 text-sm">{errors.experience_id}</div>}
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-medium">Short Description*</label>
                    <textarea
                    ref={shortDescriptionRef}
                    placeholder="Enter Short Description"
                    className="w-full border rounded p-2"
                    />
                    {errors.short_description && <div className="text-red-500 text-sm">{errors.short_description}</div>}
                </div>

                <div className="mb-4">
                    <label className="block font-medium">Description*</label>
                    <ReactQuill ref={descriptionRef} value={editorHtml} placeholder="Enter Description" />
                    {errors.description && <div className="text-red-500 text-sm">{errors.description}</div>}
                </div>

                <div className="mt-4">
                    {isLoading ? (
                    <button className="bg-blue-500 text-white px-4 py-2 rounded opacity-50 cursor-not-allowed" disabled>
                        Please Wait ..
                    </button>
                    ) : (
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" type="submit">
                        Update
                    </button>
                    )}
                </div>
                </form>
            </div>
            </>
    )
}

export default AddCareer;
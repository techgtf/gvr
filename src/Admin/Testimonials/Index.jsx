import React, { useEffect, useRef, useState } from "react";
import CustomDropdown from 'common/Custom_Dropdown/CustomDropdown';
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from 'common/Portal/Backdrop'
import SideModal from "../components/Modal/SideModal/Index";
import Form from 'react-bootstrap/Form';
import * as CONFIG from 'root/config';
import Loader from "common/Loader/loader";
import {  toast } from 'react-toastify';
import Pagination from 'common/Pagination/Pagination';
import Request from 'root/config/Request';
import ScaleLoader from "react-spinners/ScaleLoader";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const statusOptions = [
    { label: 'Active', value: '1' },
    { label: 'Hide', value: '0' },
];

const Testimonials = ()=>{
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [showSidebar, setShowSidebar] = useState(false);
    const [enableEdit, setenableEdit] = useState(false);
    const [errors, setErrors] = useState({});
    const [editId, setEditId] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState(null);

    var nameRef = useRef(null);
    var designationRef = useRef(null);
    var descriptionRef = useRef(null);
    var imageRef = useRef(null);
    var editImageRef = useRef(null);
    
    useEffect(() => {

        listHandler()
    }, [currentPage]);

    const listHandler = async () => {
        try{
            setIsLoading(true)
            var response=await Request('admin/testimonials?page='+currentPage,'GET');
            if (response.statusCode !== 200) {
                setIsLoading(false); 
                throw new Error('Fetching Data Failed')
            }
            if(response.status && response.statusCode==200){
                setData(response.data.data);
                setLastPage(response.data.last_page);
            }
        }
        catch(err){
            toast.error(err.message)
        }finally{
            setIsLoading(false); 
        }

    }

    const handleStatusSelect = async (selectedValue, id) => {
        setSelectedStatus(selectedValue);
        await updateStatusHandler(id, selectedValue);
    };

    
    const updateStatusHandler = async (id, selectedStatus) => {
        setIsLoading(true);

        const formData = new FormData();
        formData.append('status', selectedStatus);

        var response = await Request('admin/testimonials/'+id+'/status', 'POST', formData);


        setIsLoading(false);

        if(response.status && response.statusCode==403){
            setErrors(response.errors);
            toast.error(response.message);
        }else if(response.status && response.statusCode == 200){
            toast.success(response.message);
        } 

    };

    const resetFields=()=>{
        nameRef.current=null;
        setErrors({});
        setEditId(false);
        setenableEdit(false);
    }

    const addCategoryHandler = ()=>{
        setShowSidebar(!showSidebar)
    }

    const addSubmitHandler =async (event)=>{
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', nameRef.current.value);
        formData.append('destination', designationRef.current.value);
        formData.append('description', descriptionRef.current.value);
        formData.append('image', imageRef.current.files[0]);

        var response=await Request('admin/testimonials','POST',formData);

        if(response.status && response.statusCode==403){
            setErrors(response.errors);
            toast.error(response.message);

        }else if(response.status && response.statusCode==200){
            listHandler();
            cancelHandler();
            resetFields();
            toast.success(response.message);
        } 
        
        setIsLoading(false);
    }
     
    const editHandler = async (id)=>{
        setShowSidebar(true)
        setErrors({});

        var response=await Request('admin/testimonials/'+id,'GET');
        if (response.status && response.statusCode === 200) {
            setenableEdit(true);
            setEditId(id);
            nameRef.current.value = response.data.name
            designationRef.current.value = response.data.destination
            descriptionRef.current.value = response.data.description
            editImageRef.current.src = CONFIG.VITE_APP_STORAGE + response.data.image
        }
    }

    const cancelHandler = ()=>{
        setShowSidebar(false)
    }


    // not worked
    const deleteHandler= async (id)=>{
        setIsLoading(true);
        var response=await Request('admin/testimonials/'+id,'DELETE');
        if (response.status && response.statusCode === 200) {
            toast.success(response.message);
            listHandler();
        }else{
            toast.error(response.message);
        }
        setIsLoading(false); 
    }


    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const updateHandler=async (event)=>{
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', nameRef.current.value);
        formData.append('destination', designationRef.current.value);
        formData.append('description', descriptionRef.current.value);
        if(imageRef.current.files[0]){
            formData.append('image', imageRef.current.files[0]);
        }

        var response=await Request('admin/testimonials/'+editId+'/update','POST', formData);

        if (response.status && response.statusCode == 200) {
            listHandler();
            cancelHandler();
            toast.success(response.message);
        }else if (response.status && response.statusCode === 403) {
            setErrors(response.errors);
            toast.error(response.message);
        } 
    }

    const handleImageError = (event) => {
        event.target.src = CONFIG.ADMIN_ASSETS + 'default_blog.jpg';
    };

    return(
        <>
        <div className="d-flex title_col justify-content-between align-items-center">
            <h4 className="page_title">Testimonials</h4>
            <button className="btn ms-auto btn_primary btn-sm" onClick={addCategoryHandler}>Add Testimonial</button>
        </div>

            <div className="card mt-4 card_style1">
                <div className="d-flex">
                    <h5>All Testimonials</h5>
                </div>

                {/* <form >
                    <input ref={fileRef} type="file" className="form-control" />
                    <input type="text" className="form-control" placeholder="Enter Amenity Name" />
                    <button type="submit" className="btn btn_primary">Save</button>
                </form> */}

                <table className="mt_40">
                    <thead>
                        <tr>
                            <th>
                                Title
                            </th>
                            <th>
                                Designation
                            </th>
                            <th>
                                Show
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {isLoading && (
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
                        !isLoading && data.length ? data.map(item => (
                            <tr key={item.id}>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.destination}
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
                        )) : !isLoading && <tr><td colSpan="4"><h5 className="no_record">No  Data  Found!</h5></td></tr>
                    
                    }

                    </tbody>

                </table>

                {!isLoading && data.length ? (
                    <Pagination currentPage={currentPage} totalPages={lastPage} onPageChange={handlePageChange} />
                ) : null}


            </div>

            {showSidebar && (
                <>
                     <SidebarPortal className="portal">

                        
                     </SidebarPortal>
                </>
            )}
        </>
    )
}

export default Testimonials;
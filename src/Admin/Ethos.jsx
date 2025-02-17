import React, { useEffect, useRef, useState } from "react";
import CustomDropdown from '../common/Custom_Dropdown/CustomDropdown';
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from 'common/Portal/Backdrop'
import SideModal from "./components/Modal/SideModal/Index";
import Form from 'react-bootstrap/Form';
import * as CONFIG from 'root/config';
import {  toast } from 'react-toastify';
import Pagination from '../common/Pagination/Pagination';
import ScaleLoader from "react-spinners/ScaleLoader";

import Request from '../config/Request';

import './assets/css/admin.css';


const statusOptions = [
    { label: 'Active', value: '1' },
    { label: 'Hide', value: '0' },
];

const Ethos = ()=>{
    const [data, setData] = useState([]);

    // pagination  
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(1); // Current page state
    const [lastPage, setLastPage] = useState(1);

    
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    // end paggination 


    const [isLoadingTableData, setIsLoadingTableData] = useState(false);
    const [isSitebarFormButtonLoading, setIsSitebarFormButtonLoading] = useState(false);


    const [showSidebar, setShowSidebar] = useState(false);
    const [showAddSidebar, setShowAddSidebar] = useState(false);


    const [enableEdit, setenableEdit] = useState(false);
    const [showEditEnableImage, setEditEnableImage] = useState(null);

    const fileRef = useRef(null)
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    

    const [errors, setErrors] = useState({});
    const [editId, setEditId] = useState(false);

    const [selectedStatus, setSelectedStatus] = useState(null);


    const resetFields=()=>{
        fileRef.current=null;
        titleRef.current=null;
        descriptionRef.current=null;

        setErrors({});
        setEditId(false);
        setenableEdit(false);


    }


    const handleStatusSelect = async (selectedValue, id) => {
        setSelectedStatus(selectedValue);
        await updateStatusHandler(id, selectedValue);
    }


    const updateStatusHandler = async (id, selectedStatus) => {
        setIsSitebarFormButtonLoading(true);

        const formData=new FormData();
        formData.append('status',selectedStatus);
        var response = await Request('admin/ethos/'+id+'/status', 'POST', formData);

        if(response.status && response.statusCode==403){

            setErrors(response.errors);
            toast.error(response.message);

        }else if(response.status && response.statusCode==200){
            toast.success(response.message);
        } 
        setIsSitebarFormButtonLoading(false);

    };


    const addAmenityHandler = ()=>{
        setShowAddSidebar(!showSidebar)
    }


    const addSubmitHandler =async (event)=>{
        event.preventDefault();
        setIsSitebarFormButtonLoading(true);
        const formData = new FormData();
        formData.append('image', fileRef.current.files[0]); 
        formData.append('title', titleRef.current.value); 
        formData.append('description', descriptionRef.current.value); 

        var response=await Request('admin/ethos','POST',formData);
        if(response.status && response.statusCode==403){
            setErrors(response.errors);
            toast.error(response.message);

        }else if(response.status && response.statusCode==200){
            listHandler();
            cancelHandler();
            resetFields();
            toast.success(response.message);
        } 
        setIsSitebarFormButtonLoading(false);

    }

     

    const editHandler = async (id)=>{
        setShowSidebar(true)
        setShowAddSidebar(true)
        setIsSitebarFormButtonLoading(true);

        var response=await Request('admin/ethos/'+id,'GET');
        if (response.status && response.statusCode === 200) {
            setenableEdit(true);
            setEditId(id);
            if(response.data.icons){
                setEditEnableImage(CONFIG.VITE_APP_STORAGE + response.data.icons);
            }
            titleRef.current.value = response.data.title;
            descriptionRef.current.value = response.data.description;

        }
        setIsSitebarFormButtonLoading(false);

    }



    const cancelHandler = ()=>{
        setShowSidebar(false)
        setShowAddSidebar(false);
        resetFields();
    }


    
    const deleteHandler= async (id)=>{
        var response=await Request('admin/ethos/'+id,'DELETE');
        if (response.status && response.statusCode === 200) {
            toast.success(response.message);

            listHandler();
        }else{
            toast.error(response.message);

        }
    }


    const listHandler = async (search="") => {
        setIsLoadingTableData(true);
        var response=await Request('admin/ethos?search='+search+'&page='+currentPage,'GET');
        if (response.status && response.statusCode === 200) {
            setData(response.data.data);
            setLastPage(response.data.last_page)

        }
        setIsLoadingTableData(false);


    }


    
    const updateHandler=async (event)=>{
        event.preventDefault();
        setIsSitebarFormButtonLoading(true);
    
        const formData = new FormData();
        if(fileRef.current.files[0]){

            formData.append('image', fileRef.current.files[0]); 
        }
        formData.append('title', titleRef.current.value); 
        formData.append('description', descriptionRef.current.value); 


        var response=await Request('admin/ethos/'+editId+'/update','POST',formData);
        setIsSitebarFormButtonLoading(false);

        if (response.status && response.statusCode === 200) {
            listHandler();
              cancelHandler();
        }else if (response.status && response.statusCode === 403) {
            setErrors(response.errors);

        } 
    }


    useEffect(() => {
        listHandler()
    }, [currentPage,totalPage]);



   

    const findHandler = async(e)=>{
        const searchTerm = e.target.value.toLowerCase();
        listHandler(searchTerm);
    }





    return(
        <>
        <div className="d-flex title_col justify-content-between align-items-center">
            <h4 className="page_title">Ethos</h4>
            <button className="btn ms-auto btn_primary btn-sm" onClick={addAmenityHandler}>Add Record</button>
        </div>

            <div className="card mt-4 card_style1">
                
                <div className="d-flex align-items-center">
                    <h5 className="mb-0">Ethos </h5>

                    <div className="searchInput ms-auto">
                        <input type="text" className="form-control" placeholder="Search by name" onChange={findHandler} />
                    </div>
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
                                Name
                            </th>
                            <th>
                                Icons
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

                    {isLoadingTableData ? (
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
) : (
    <>
        {data && Array.isArray(data) && data.length > 0 ? (
            data.map(item => (
                <tr key={item.id}>
                    <td>
                        {item.title}
                    </td>
                    <td>
                        <div className="thumb icon">
                            <img src={CONFIG.VITE_APP_STORAGE+item.icons} alt="" className="img-fluid" />
                        </div>
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
            ))
        ) : (
            <tr>
                <td colSpan="4">
                    <h5 className="no_record">No Ethos Found!</h5>
                </td>
            </tr>
        )}
    </>
)}




                  

                    </tbody>

                </table>

                {(!isLoadingTableData  && data ? 
                    <Pagination currentPage={currentPage} totalPages={lastPage} onPageChange={handlePageChange} />
                : null
                    )}
            </div>

            {showAddSidebar && (
                <>
                    <SidebarPortal className="portal">
                        <SideModal onCancel={cancelHandler} onSubmit={(enableEdit ? updateHandler : addSubmitHandler)} isLoading={isSitebarFormButtonLoading}>
                            <Form >
                                <Form.Group>
                                    <Form.Label>Select Icon</Form.Label>
                                    <Form.Control ref={fileRef} className="form-control" type="file" />
                                        {errors.image && <span className="text-danger" >{errors.image}</span>}
                                        {showEditEnableImage ? <img src={showEditEnableImage} width="100" /> : null}
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control ref={titleRef} className="" type="text" placeholder="Enter  Title" />
                                    {errors.title && <span className="text-danger" >{errors.title}</span>}

                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Value</Form.Label>
                                    <Form.Control ref={descriptionRef} className="" type="text" placeholder="Enter Description" />
                                    {errors.title && <span className="text-danger" >{errors.description}</span>}

                                </Form.Group>
                            </Form>
                        </SideModal>
                    </SidebarPortal>
                    <BackdropPortal className="show"/>
                </>
            )}
        </>
    )
}

export default Ethos;
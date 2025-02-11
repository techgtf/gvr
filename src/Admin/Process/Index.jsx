import React, { useEffect, useRef, useState } from "react"
import CustomDropdown from 'common/Custom_Dropdown/CustomDropdown';
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from 'common/Portal/Backdrop'
import SideModal from "../components/Modal/SideModal/Index";
import Form from 'react-bootstrap/Form';
import Button from 'common/Button/Button';
import Loader from "common/Loader/loader";
import Request from "root/config/Request";
import {  toast } from 'react-toastify';
import ScaleLoader from "react-spinners/ScaleLoader";
import ReactPaginate from 'react-paginate';
import * as CONFIG from 'root/config';

const statusOptions = [
    { label: 'Active', value: 'active' },
    { label: 'Hide', value: 'hide' },
];

const Process = ()=>{
    const [isLoading, setIsLoading] = useState(false);
    const [dataLoading, setDataLoading] = useState(false)
    const [data, setData] = useState([]);
    const [showSidebar, setShowSidebar] = useState(false);
    const [errors, setErrors] = useState({});
    const [enableEdit, setenableEdit] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [notFound, setnotFound] = useState(false);
    const [currentPage, setCurrentPage] = useState(1); // Current page state
    const [totalPage, setTotalPage] = useState(0)


    const developerRef = useRef(null);
    const developerMobileRef = useRef(null);
    const developerAddressRef = useRef(null);
    const developerReraRef = useRef(null);
    const developerDescriptionRef = useRef(null);
    const developerLogoRef = useRef(null);

    useEffect(()=>{

        const loadDevelopers = async () => {
            setDataLoading(true)
            const response = await Request(`admin/developer?page=${currentPage}`, 'GET');
           
            if(response.status && response.statusCode==200)
            {
                if(!response.data.data.length){
                    setnotFound(true);
              
                }
                setData(response.data.data)
                setTotalPage(response.data.last_page)
            }
            setDataLoading(false)
        
        }
        
        loadDevelopers()

    }, [currentPage, totalPage])

    const addDeveloperHandler = ()=>{
        setShowSidebar(!showSidebar)
    }

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected + 1);
    }

    const handleStatusSelect = ()=>{

    }

    const cancelHandler = ()=>{
        setShowSidebar(false)
    }

    const resetFields=()=>{
        developerRef.current.value = ''
        developerMobileRef.current.value = ''
        developerAddressRef.current.value = ''
        developerReraRef.current.value = ''
        developerDescriptionRef.current.value = ''
        developerLogoRef.current.value = ''
    }

    const addSubmitHandler = async(e)=>{
        e.preventDefault();
        var nameVal = developerRef.current.value
        var mobileVal = developerMobileRef.current.value
        var addressVal = developerAddressRef.current.value
        var reraVal = developerReraRef.current.value
        var descriptionVal = developerDescriptionRef.current.value
        var logoVal = developerLogoRef.current.files[0]
        
        try{
            const formData = new FormData()
            formData.append('developer', nameVal);
            formData.append('mobile', mobileVal);
            formData.append('address', addressVal);
            formData.append('rera', reraVal);
            formData.append('description', descriptionVal);
            formData.append('image', logoVal);

            // hit api

            const response = await Request('admin/developer', 'POST', formData);
            setIsLoading(false);

            if(response.status && response.statusCode==403){
                setErrors(response.errors);
                throw new Error('Please fill required fields')
            }else if(!response.status){
                throw new Error(response.message)
            }else if(response.status && response.statusCode==200){
                toast.success(response.message);
                resetFields()
                setShowSidebar(false)
                return 
            } 

        }catch(err){
            toast.error(err.message)
        }
    }

    if (isLoading) {
        return <Loader />; // Use the Loader component
    } 

    return(
        <>
            <div className="d-flex title_col justify-content-between align-items-center">
                <h4 className="page_title">Process</h4>
                <Button className="btn ms-auto btn_primary btn-sm" onClick={addDeveloperHandler}>Add Process</Button>
            </div>

            <div className="card mt-4 card_style1">
                <div className="d-flex">
                    <h5>All Process</h5>
                </div>

                <table className="mt_40">
                    <thead>
                        <tr>
                            <th>
                                Icon
                            </th>
                            <th>
                                Title
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
                        {!data.length && dataLoading ? 
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
                        
                        : 
                        data.map(item=>(
                            <tr>
                                <td>
                                    {item.developer}
                                </td>
                                <td>
                                    <div className="thumb icon">
                                        <img src={CONFIG.VITE_APP_STORAGE + item.logo} alt="" className="img-fluid" />
                                    </div>
                                </td>

                                <td>
                                    <CustomDropdown className="form-control" defaultVal="Select --" options={statusOptions} onSelect={handleStatusSelect()}  />
                                </td>

                                <td>
                                    <button className="btn action_btn" >
                                        <img src={CONFIG.ADMIN_IMG_URL + 'icons/edit.svg'} alt="edit icon" className="img-fluid icon"  />
                                    </button>

                                    <button className="btn action_btn" >
                                        <img src={CONFIG.ADMIN_IMG_URL + 'icons/delete_color.svg'} alt="delete icon"  className="img-fluid icon delete"  />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

                {!dataLoading && !notFound && (
                    <ReactPaginate 
                        breakLabel="..."
                        nextLabel="next"
                        pageCount={totalPage}
                        onPageChange={handlePageChange}
                    />
                )}
                
                {notFound && (
                    <h5 className="no_record">No  More Record Found!</h5>
                )}
            </div>

            {showSidebar && (
                <>
                    <SidebarPortal className="portal">
                        <SideModal onCancel={cancelHandler} onSubmit={(enableEdit ? updateAmenityHandler : addSubmitHandler)}>
                            <Form >

                                <Form.Group className="mb_15">
                                    <Form.Label>Icon*</Form.Label>
                                    <Form.Control ref={developerLogoRef} className="form-control" required type="file" />
                                    {errors.image && <div className="errMsg">{errors.image}</div>}
                                </Form.Group>

                                <Form.Group className="mb_15">
                                    <Form.Label>Title*</Form.Label>
                                    <Form.Control ref={developerRef} className="form-control" placeholder="Enter title" required type="text" />
                                    {errors.developer && <div className="errMsg">{errors.developer}</div>}
                                </Form.Group>

                                <Form.Group className="mb_15">
                                    <Form.Label>Description*</Form.Label>
                                    <textarea ref={developerDescriptionRef} className="form-control textarea_sm" name="" id="" rows="5" placeholder="Enter description" />
                                    {errors.description && <div className="errMsg">{errors.description}</div>}
                                </Form.Group>

                            </Form>
                        </SideModal>
                    </SidebarPortal>
                    <BackdropPortal />
                </>
            )}
        </>
    )
}

export default Process
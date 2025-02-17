import React, { useEffect, useRef, useState } from "react"
import CustomDropdown from 'common/Custom_Dropdown/CustomDropdown';
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from 'common/Portal/Backdrop'
import SideModal from "../components/Modal/SideModal/Index";
import Button from 'common/Button/Button';
import Loader from "common/Loader/loader";
import Request from "root/config/Request";
import {  toast } from 'react-toastify';
import ScaleLoader from "react-spinners/ScaleLoader";
import ReactPaginate from 'react-paginate';
import * as CONFIG from '../../../config';

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
            <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-semibold">Process</h4>
                <button
                className="ml-auto bg-blue-600 text-white px-4 py-2 text-sm rounded"
                onClick={addDeveloperHandler}
                >
                Add Process
                </button>
            </div>

            <div className="bg-white p-6 shadow-md rounded-md">
                <div className="mb-4">
                <h5 className="text-lg font-medium">All Process</h5>
                </div>

                <table className="w-full border-collapse">
                <thead>
                    <tr className="border-b">
                    <th className="p-3 text-left">Icon</th>
                    <th className="p-3 text-left">Title</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-3 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {dataLoading && (
                    <tr>
                        <td colSpan={4} className="text-center py-4">
                        <ScaleLoader color="#ddd" />
                        </td>
                    </tr>
                    )}
                    {!dataLoading &&
                    data.map((item, index) => (
                        <tr key={index} className="border-b">
                        <td className="p-3">{item.developer}</td>
                        <td className="p-3">
                            <img
                            src={CONFIG.VITE_APP_STORAGE + item.logo}
                            alt=""
                            className="w-10 h-10 object-cover"
                            />
                        </td>
                        <td className="p-3">
                            <select
                            className="border rounded px-2 py-1"
                            onChange={handleStatusSelect}
                            >
                            <option>Select --</option>
                            {/* Add status options dynamically here */}
                            </select>
                        </td>
                        <td className="p-3 flex space-x-2">
                            <button className="p-2 bg-gray-200 rounded">
                            <img
                                src={CONFIG.ADMIN_IMG_URL + "icons/edit.svg"}
                                alt="edit icon"
                                className="w-5 h-5"
                            />
                            </button>
                            <button className="p-2 bg-red-200 rounded">
                            <img
                                src={CONFIG.ADMIN_IMG_URL + "icons/delete_color.svg"}
                                alt="delete icon"
                                className="w-5 h-5"
                            />
                            </button>
                        </td>
                        </tr>
                    ))}
                </tbody>
                </table>

                {!dataLoading && !notFound && (
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next"
                    pageCount={totalPage}
                    onPageChange={handlePageChange}
                    className="flex space-x-2 mt-4"
                />
                )}

                {notFound && <h5 className="text-center text-gray-500 mt-4">No More Records Found!</h5>}
            </div>

            {showSidebar && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 shadow-lg rounded-md w-96">
                    <button className="absolute top-3 right-3 text-gray-500" onClick={cancelHandler}>
                    &times;
                    </button>
                    <form onSubmit={enableEdit ? updateAmenityHandler : addSubmitHandler}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Icon*</label>
                        <input
                        ref={developerLogoRef}
                        type="file"
                        className="w-full border p-2 rounded"
                        required
                        />
                        {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Title*</label>
                        <input
                        ref={developerRef}
                        type="text"
                        className="w-full border p-2 rounded"
                        placeholder="Enter title"
                        required
                        />
                        {errors.developer && <p className="text-red-500 text-sm">{errors.developer}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Description*</label>
                        <textarea
                        ref={developerDescriptionRef}
                        className="w-full border p-2 rounded h-24"
                        placeholder="Enter description"
                        ></textarea>
                        {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded"
                    >
                        Save
                    </button>
                    </form>
                </div>
                </div>
            )}
            </>
    )
}

export default Process
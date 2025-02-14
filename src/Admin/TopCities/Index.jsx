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
import Pagination from 'common/Pagination/Pagination';
import * as CONFIG from '../../../config';

const statusOptions = [
    { label: 'Active', value: '1' },
    { label: 'Hide', value: '0' },
];

const TopCities = ()=>{
    const [isLoading, setIsLoading] = useState(false);
    const [dataLoading, setDataLoading] = useState(false)
    const [data, setData] = useState([]);
    const [showSidebar, setShowSidebar] = useState(false);
    const [errors, setErrors] = useState({});
    const [isEnableEdit, setIsEnableEdit] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [notFound, setnotFound] = useState(false);
    const [developerImageShow, setDeveloperImageShow] = useState('')
    const [editStateId, setEditStateId] = useState(false);
    const [editId, setEditId] = useState(false);
    const [imageError, setImageError] = useState(false);

    const [SelectedStatus, setSelectedStatus] = useState(null)

    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [lastPage, setLastPage] = useState(1);


    const cityRef = useRef(null);

 
    useEffect(() => {

        listHandler()

    }, [currentPage, totalPage]);



    const cancelHandler = ()=>{
        setShowSidebar(false);
        setDeveloperImageShow(null);
    }

    
    const listHandler = async () => {

        try {
            var response=await Request('admin/cities?page='+currentPage,'GET');
            if (response.status && response.statusCode === 200) {
                setData(response.data.data);
                setLastPage(response.data.last_page);
            }
        } catch (error) {
        }

        

    }


    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    const handleStatusSelect = async (selectedValue, id)=>{
        setSelectedStatus(selectedValue);
        await updateStatusHandler(id, selectedValue);
    }


    const updateStatusHandler = async (id, selectedStatus) => {
        // setIsLoading(true);

        const formData=new FormData();
        formData.append('is_popular',selectedStatus);
        
        var response = await Request('admin/cities/'+id+'/popular', 'POST', formData);
    
        // setIsLoading(false);

        if(response.status && response.statusCode==403){

            setErrors(response.errors);
            toast.error(response.message);

        }else if(response.status && response.statusCode==200){
            toast.success(response.message);
        } 

    };



   

      

    if (isLoading) {
        return <Loader />; // Use the Loader component
    } 

    const handleImageError = (event)=>{
        if(!imageError){
            setImageError(true);
            event.target.src = CONFIG.ADMIN_ASSETS + 'default_location.jpg';
        }
    }

    return(
        <>
            <div className="flex justify-between items-center border-b pb-2 mb-4">
                <h4 className="text-lg font-semibold">Cities</h4>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4">
                <div className="mb-4 border-b pb-2">
                    <h5 className="text-base font-semibold">All Cities</h5>
                </div>

                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b">
                            <th className="py-2 text-left">Name</th>
                            <th className="py-2 text-left">Icons</th>
                            <th className="py-2 text-left">Top City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!data.length && dataLoading ? (
                            <tr>
                                <td colSpan={3} className="py-4 text-center">
                                    <ScaleLoader color="#ddd" className="inline-block" />
                                </td>
                            </tr>
                        ) : (
                            data.map((item, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50">
                                    <td className="py-2 px-3">{item.city}</td>
                                    <td className="py-2 px-3">
                                        <div className="w-10 h-10 overflow-hidden rounded-full border">
                                            <img
                                                src={CONFIG.VITE_APP_STORAGE + item.logo}
                                                alt="city icon"
                                                className="w-full h-full object-cover"
                                                onError={(e) => (e.target.style.display = "none")}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-2 px-3">
                                        <CustomDropdown
                                            className="w-full"
                                            defaultVal={item.is_popular}
                                            options={statusOptions}
                                            onSelect={(selectedValue) => handleStatusSelect(selectedValue, item.id)}
                                        />
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>

                {!dataLoading && !notFound && (
                    <Pagination currentPage={currentPage} totalPages={lastPage} onPageChange={handlePageChange} />
                )}

                {notFound && <h5 className="text-center text-red-500 font-semibold mt-4">No More Records Found!</h5>}
            </div>

            {showSidebar && (
                <>
                    <SidebarPortal>
                        <SideModal
                            onCancel={cancelHandler}
                            isEnableEdit={isEnableEdit}
                            onSubmit={isEnableEdit ? updateCityHandler : addSubmitHandler}
                        >
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">City Name*</label>
                                <input
                                    ref={cityRef}
                                    type="text"
                                    placeholder="Enter city name"
                                    required
                                    className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
                                />
                                {errors.developer && <div className="text-red-500 text-sm mt-1">{errors.developer}</div>}
                            </div>
                        </SideModal>
                    </SidebarPortal>
                    <BackdropPortal className="fixed inset-0 bg-black bg-opacity-50" />
                </>
            )}
        </>
    )
}

export default TopCities
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
            <div className="d-flex title_col justify-content-between align-items-center">
                <h4 className="page_title">Cities</h4>
                {/* <Button className="btn ms-auto btn_primary btn-sm" onClick={addDeveloperHandler}>Add City</Button> */}
            </div>

            <div className="card mt-4 card_style1">
                <div className="d-flex">
                    <h5>All Cities</h5>
                </div>

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
                                Top City
                            </th>
                            {/*<th>
                                Actions
                            </th>*/}
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
                        data.map((item, index)=>(
                            <tr key={index}>
                                <td>
                                    {item.city}
                                </td>
                                <td>
                                    <div className="thumb icon">
                                        <img src={CONFIG.VITE_APP_STORAGE + item.logo} alt="" className="img-fluid" onError={handleImageError} />
                                    </div>
                                </td>

                                <td>
                                    <CustomDropdown className="form-control" defaultVal={item.is_popular} options={statusOptions} onSelect={(selectedValue) => handleStatusSelect(selectedValue, item.id)}  />
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>

                {!dataLoading && !notFound && (
                    <Pagination currentPage={currentPage} totalPages={lastPage} onPageChange={handlePageChange} />
                )}
                
                {notFound && (
                    <h5 className="no_record">No  More Record Found!</h5>
                )}
            </div>

            {showSidebar && (
                <>
                    <SidebarPortal className="portal">
                        <SideModal onCancel={cancelHandler} isEnableEdit={isEnableEdit} onSubmit={(isEnableEdit ? updateCityHandler : addSubmitHandler)}>
                            <Form >
                                <Form.Group className="mb_15">
                                    <Form.Label>City Name*</Form.Label>
                                    <Form.Control ref={cityRef} className="form-control" placeholder="Enter developer name" required type="text" />
                                    {errors.developer && <div className="errMsg">{errors.developer}</div>}
                                </Form.Group>

                            </Form>
                        </SideModal>
                    </SidebarPortal>
                    <BackdropPortal className="show" />
                </>
            )}
        </>
    )
}

export default TopCities
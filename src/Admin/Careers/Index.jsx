import React, { useEffect, useRef, useState } from "react";
import CustomDropdown from 'common/Custom_Dropdown/CustomDropdown';
import * as CONFIG from 'root/config';
import {  toast } from 'react-toastify';
import Pagination from 'common/Pagination/Pagination';
import Request from 'root/config/Request';
import { Link, useAsyncError } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
 

const statusOptions = [
    { label: 'Active', value: '1' },
    { label: 'Hide', value: '0' },
];

const Careers = ()=>{
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [isLoadingTableData, setIsLoadingTableData] = useState(false);
    const handleStatusSelect = async (selectedValue, id) => {
        setSelectedStatus(selectedValue);
        await updateStatusHandler(id, selectedValue);
    };

    
    const updateStatusHandler = async (id, selectedStatus) => {

        try {
            const formData = new FormData();
            formData.append('status', selectedStatus);

            var response = await Request('admin/career/'+id+'/status', 'POST', formData);
 
            if(response.status && response.statusCode==403){
                setErrors(response.errors);
                toast.error(response.message);

            }else if(response.status && response.statusCode == 200){
                toast.success(response.message);
                
            } 
        } catch (error) {

        } finally {
        }

    };

  

    const cancelHandler = ()=>{
        setShowSidebar(false)
    }


    const deleteHandler= async (id)=>{
     
        try {
            var response = await Request('admin/career/'+id, 'DELETE');
            if (response.status && response.statusCode === 200) {
                toast.success(response.message);
                listHandler();
            }else{
                toast.error(response.message);
            }
        } catch (error) {
        } finally {

        }

    }



    const listHandler = async (search="") => {
        setIsLoadingTableData(true);
        var response = await Request('admin/career?search='+search+'&page='+currentPage,'GET');
        if (response.status && response.statusCode == 200) {
            setData(response.data.data);
            setLastPage(response.data.last_page);
        }
        setIsLoadingTableData(false);


    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

 

    
    const findHandler = async(e)=>{
        const searchTerm = e.target.value.toLowerCase();
        listHandler(searchTerm);
    }





    useEffect(() => {
         
        listHandler()
    }, [currentPage]);

    return(
        <>
        <div className="d-flex title_col justify-content-between align-items-center">
            <h4 className="page_title">Careers /Jobs</h4>
            <Link className="btn ms-auto btn_primary btn-sm" to={`${CONFIG.ADMIN_ROOT}careers/add`}>Add Career</Link>
        </div>

            <div className="card mt-4 card_style1">
               


                <div className="d-flex align-items-center">
                    <h5 className="mb-0">Careers /Jobs</h5>

                    <div className="searchInput ms-auto">
                        <input type="text" className="form-control" placeholder="Search by title" onChange={findHandler} />
                    </div>
                </div>



                <table className="mt_40">
                    <thead>
                        <tr>
                            <th>
                                Title
                            </th>
                            <th>
                                Short Description
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

                    {isLoadingTableData && (
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
                        !isLoadingTableData && data.length ? data.map(item => (
                            <tr key={item.id}>
                                <td>
                                    {item.destination}
                                </td>
                                
                                <td>
                                    {item.short_description}
                                </td>

                                <td>
                                    <CustomDropdown className="form-control" defaultVal={item.status} options={statusOptions} onSelect={(selectedValue) => handleStatusSelect(selectedValue, item.id)}  />
                                </td>

                                <td>
                                    <Link className="btn action_btn" to={`${CONFIG.ADMIN_ROOT}careers/update/${item.id}`}>
                                        <img src={CONFIG.ADMIN_IMG_URL + 'icons/edit.svg'} alt="edit icon" className="img-fluid icon"  />
                                    </Link>

                                    <button className="btn action_btn" onClick={() => deleteHandler(item.id)}>
                                        <img src={CONFIG.ADMIN_IMG_URL + 'icons/delete_color.svg'} alt="delete icon" className="img-fluid icon delete"  />
                                    </button>
                                </td>
                            </tr>
                        )) : !isLoadingTableData && <tr><td colSpan="4"><h5 className="no_record">No  Data  Found!</h5></td></tr>
                    }
                    </tbody>
                </table>

                {!isLoadingTableData && data.length ? <Pagination currentPage={currentPage} totalPages={lastPage} onPageChange={handlePageChange} /> : null}

            </div>
        </>
    )
}

export default Careers;
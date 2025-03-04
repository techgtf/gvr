import React, { useState ,useEffect} from 'react';
import Header from "../components/Header/Index";
import ContentLayout from '../components/Layout/ContentLayout/ContentLayout';
import CustomDropdown from 'common/Custom_Dropdown/CustomDropdown';
import SidebarPortal from "common/Portal/SidebarPortal";
import SideModal from "../components/Modal/SideModal/Index";
import * as CONFIG from '../../../config';
import '../assets/css/admin.css';
import Request from "root/config/Request"
import Pagination from 'common/Pagination/Pagination';
import { NavLink } from 'react-router-dom';
import ScaleLoader from "react-spinners/ScaleLoader";

const States =  ()=>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [lastPage, setLastPage] = useState(1);      


    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    const listHandler = async (search="") => {
        setIsLoading(true)
        try {
            var response = await Request('admin/state?search='+search+'&page='+currentPage, 'GET');
            if (response.status && response.statusCode === 200) {
                setData(response.data.data);
                setLastPage(response.data.last_page);
            }else{
                setData([]);
                setLastPage(1);
            }
        } catch (error) {
            console.error('Error:', error);
        }
        finally{
            setIsLoading(false)
        }
    }

    const findHandler = async(e)=>{
        const searchTerm = e.target.value.toLowerCase();
        listHandler(searchTerm);
    }



    useEffect(() => {
        
        listHandler()
    }, [currentPage, totalPage]);


    return(
        <>
            <div className="d-flex title_col justify-content-between align-items-center">
                <h4 className="page_title">States</h4>
                {/* <button className="btn ms-auto btn_primary btn-sm" onClick={addAmenityHandler}>Add State</button> */}
            </div>

            <div className="card mt-4 card_style1">
             
                <div className="d-flex align-items-center">
                    <h5 className="mb-0">All State</h5>

                    <div className="searchInput ms-auto">
                        <input type="text" className="form-control" placeholder="Search State" onChange={findHandler} />
                    </div>
                </div>



                <table className="mt_40">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        {isLoading && (
                            <tr>
                                <td colSpan={2}>
                                    <div className="text-center">
                                    <ScaleLoader 
                                        color="#ddd"
                                        className="w-100"
                                    /> 
                                    </div>
                                </td>
                            </tr>
                        )}

                        {!isLoading && data.length ? (
                            data.map(item => (
                                <tr key={item.id}>
                                    <td>
                                        {item.state}
                                    </td>
                                    <td>
                                        <NavLink to={`${CONFIG.ADMIN_ROOT}cities/${item.id}`} className="btn btn_primary btn_sm action_btn">
                                            Cities
                                        </NavLink>
                                    </td>
                                </tr>
                            ))
                        ) : ( !isLoading ? <tr className="no_record">No Top Cities Found!</tr> : null )}
                        
                    </tbody>
                </table>

                {(data.length ? 
                    <Pagination currentPage={currentPage} totalPages={lastPage} onPageChange={handlePageChange} />
                    : null
                )}

            </div>
        </>
    )
}

export default States;
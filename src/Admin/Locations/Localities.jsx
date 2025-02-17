import React, { useState ,useEffect} from 'react';
import CustomDropdown from 'common/Custom_Dropdown/CustomDropdown';
import { useParams } from 'react-router-dom';
import * as CONFIG from '../../../config';
import Request from "root/config/Request";
import {  toast } from 'react-toastify';
import Pagination from 'common/Pagination/Pagination';
import ScaleLoader from "react-spinners/ScaleLoader";
import '../assets/css/admin.css';

const statusOptions = [
    { label: 'Active', value: '1' },
    { label: 'Hide', value: '0' },
];

const Localities = ()=>{
    const params=useParams();
    const [data, setData] = useState([]);
    const [cities,setCities] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [lastPage, setLastPage] = useState(1);
    //status {active : hide}
    const [selectedStatus, setSelectedStatus] = useState(null);

    useEffect(() => {
        stateLocality(),
        listHandler()
    }, [currentPage, totalPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    
    
    const handleStatusSelect = async (selectedValue, id) => {
        setSelectedStatus(selectedValue);
        await updateStatusHandler(id, selectedValue);
    };

    const updateStatusHandler = async (id, selectedStatus) => {
        // setIsLoading(true);

        const formData=new FormData();
        formData.append('status',selectedStatus);
        var response = await Request('admin/localities/'+id+'/status', 'POST', formData);

        // setIsLoading(false);

        if(response.status && response.statusCode==403){

            setErrors(response.errors);
            toast.error(response.message);

        }else if(response.status && response.statusCode==200){
            toast.success(response.message);
        } 

    };

    const listHandler = async () => {
        setIsLoading(true)
        try {
            var response = await Request('admin/localities?city_id='+params.id+'&page='+currentPage, 'GET');
            if (response.status && response.statusCode === 200) {
                setData(response.data.data);
                setLastPage(response.data.last_page);
                setIsLoading(false)
            }else{
                setData([]);
                setLastPage(1);
                setIsLoading(false)
            }
            
        } catch (error) {
        }finally{
            setIsLoading(false)
        }
    }


    const stateLocality = async () => {
        try {
            const response = await fetch(CONFIG.API_URL + 'admin/cities/'+params.id, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${CONFIG.TOKEN}`,
                },
            });
            const responseData = await response.json();
           
            if (responseData.status && responseData.statusCode === 200) {
                setCities(responseData.data.city);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }



    return(
        <>
            <h4 className="page_title">{cities}</h4>

            <div className="card mt-4 card_style1">
                <div className="d-flex">
                    <h5>{cities}</h5>
                </div>

                <table className="mt_40">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            
                            <th>
                                Status
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
                                        {item.locality}
                                    </td>
                                    <td>
                                        <CustomDropdown className="form-control" defaultVal={item.status} options={statusOptions} onSelect={(selectedValue) => handleStatusSelect(selectedValue, item.id)}  />
                                    </td>
                                </tr>

                            )) 

                        ) : !isLoading ? <tr><td colSpan="2"><h5 className="no_record">No  Cities Found!</h5></td></tr> : null}

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

export default Localities;
import React, { useState ,useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import * as CONFIG from 'root/config';
import Request from "root/config/Request";
import Pagination from 'common/Pagination/Pagination';
import ScaleLoader from "react-spinners/ScaleLoader";
import '../assets/css/admin.css';
 

const Cities = ()=> {
    const params=useParams();
    const [data, setData] = useState([]);
    const [state,setState] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [lastPage, setLastPage] = useState(1);

    useEffect(() => {
        stateData(),
        listHandler()
    }, [currentPage, totalPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    const listHandler = async () => {
        setIsLoading(true)
        try {
            var response = await Request('admin/cities?state='+params.id+'&page='+currentPage, 'GET');
            if (response.status && response.statusCode === 200) {
                setData(response.data.data);
                setLastPage(response.data.last_page);
                setIsLoading(false)
            }else{
                setData([])
                setLastPage(1)
                setIsLoading(false)
            }
        } catch (error) {
        }finally{
            setIsLoading(false)
        }
    }

    const stateData = async () => {
        try {
            var response = await Request('admin/state/'+params.id, 'GET');
            if (response.status && response.statusCode === 200) {
                setState(response.data.state);
            }

        } catch (error) {
        }
    }

    return(
        <>
            <h4 className="page_title">{state}</h4>

                <div className="card mt-4 card_style1">
                    <div className="d-flex">
                        <h5>{state}</h5>
                    </div>

                    <table className="mt_40">
                        <thead>
                            <tr>
                                <th>
                                    Name
                                </th>
                                
                                <th>
                                    Actions
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
                                            {item.city}
                                        </td>
                                        <td>
                                            <Link to={`${CONFIG.BASE_URL}admin/localities/${item.id}`} className="btn btn_primary btn_sm">
                                            Localities
                                            </Link>
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

export default Cities;
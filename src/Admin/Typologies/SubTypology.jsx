import React, { useEffect, useRef, useState } from "react"
import { useNavigate ,useParams} from "react-router-dom";

import CustomDropdown from 'common/Custom_Dropdown/CustomDropdown';
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from 'common/Portal/Backdrop'
import SideModal from "../components/Modal/SideModal/Index";
import Form from 'react-bootstrap/Form';
import Button from 'common/Button/Button';
import Loader from "common/Loader/loader";
import JsonRequest from "root/config/JsonRequest";
import Request from "root/config/Request";

import {  toast } from 'react-toastify';
import ScaleLoader from "react-spinners/ScaleLoader";
import Pagination from 'common/Pagination/Pagination';

const statusOptions = [
    { label: 'Active', value: 'active' },
    { label: 'Hide', value: 'hide' },
];

const SubTypologies = ()=>{
      // pagination1  
      const [totalPage, setTotalPage] = useState(0);
      const [currentPage, setCurrentPage] = useState(1); // Current page state
      const [lastPage, setLastPage] = useState(1);
      const handlePageChange = (page) => {
          setCurrentPage(page);
      };      
    useEffect(() => {
        list()
    }, [currentPage]);
      // end paggination 1



        // pagination1  
        const [totalPage2, setTotalPage2] = useState(0);
        const [currentPage2, setCurrentPage2] = useState(1); // Current page state
        const [lastPage2, setLastPage2] = useState(1);
        const handlePageChange2 = (page) => {
                setCurrentPage2(page);
          };      
      useEffect(() => {
        typologysubtypologies()
      }, [currentPage2]);
        // end paggination 1



      


    const [isLoadingTableData, setIsLoadingTableData] = useState(true);
    const [isLoadingTableData2, setIsLoadingTableData2] = useState(true);

      
    const typology_id=useParams().id;
    const [typologydata, setTypologydata] = useState([]);
    const [typologySubTypologiesList, setTypologySubTypologiesList] = useState([]);
    const [data, setData] = useState([]);
    const [showSidebar, setShowSidebar] = useState(false);
    const [errors, setErrors] = useState({});
    const [enableEdit, setenableEdit] = useState(false);
    const [isTargeting, setIsTargeting] = useState("");

    const typologyRef = useRef(null);
    const getTyplology = async () => {
        var response=await Request('admin/typology/'+typology_id,'GET');
        if (response.status && response.statusCode === 200) {
            setTypologydata(response.data);

        }
    }



    const list = async (search="") => {
    
        const response = await Request(`admin/getSubTypologyDistinct/${typology_id}?page=${currentPage}&search=${search}`, 'GET');
        if(response.status && response.statusCode==200)
        {
            setData(response.data.data)
            setLastPage(response.data.last_page);
            setTotalPage(response.data.total);

        }
        setIsLoadingTableData(false);
    }


    const typologysubtypologies = async (search="") => {
        const response = await Request(`admin/typology-sub-typology?typologies_id=${typology_id}&page=${currentPage2}&search=${search}`, 'GET');
        if(response.status && response.statusCode==200)
        {
            setTypologySubTypologiesList(response.data.data);
            setLastPage2(response.data.last_page)
            setTotalPage2(response.data.total);


        }
        setIsLoadingTableData2(false);
    }
    useEffect(()=>{
        getTyplology()
        list()
        typologysubtypologies()

    }, [])
  
    const cancelHandler = ()=>{
        setShowSidebar(false)
    }
    const resetFields=()=>{
        typologyRef.current.value = ''
    }

    const addSubmitHandler = async(e)=>{
        e.preventDefault();
        
        var typologyVal = typologyRef.current.value
        try{
            const formData = new FormData()
            formData.append('typology', typologyVal);
            const response = await Request('admin/sub-typology', 'POST', formData);
          

            if(response.status && response.statusCode==403){
                setErrors(response.message);
                throw new Error('Please fill required fields')
            }else if(!response.status){
                throw new Error(response.message)
            }else if(response.status && response.statusCode==200){
                toast.success(response.message);
                resetFields()
                setShowSidebar(false);
                
                list();
                return 
            } 

        }catch(err){
            // toast.error(err.message)
        }

    }

    
    const deleteHandler=async(id)=>{
        setIsTargeting(id);
        
        var response=await JsonRequest('admin/typology-sub-typology/'+id,'DELETE');
        if(response.status && response.statusCode==200){
            list();
            typologysubtypologies();
            toast.success(response.message);
            setIsTargeting("id");

        }else{
            toast.success(response.message);

        }
       


    
}
const addInTypology=async (sub_typologies_id)=>{
    setIsTargeting(sub_typologies_id);
    const object={
        typologies_id:typology_id,
        sub_typologies_id:sub_typologies_id,

    }
    const response = await JsonRequest('admin/typology-sub-typology', 'POST', object);

    if(response.status && response.statusCode==200){
        list();
        setIsTargeting("");
        typologysubtypologies();
        
    }
   
  
}

// search code 
const findHandler = async(e)=>{
    setIsLoadingTableData(true);    
    const searchTerm = e.target.value.toLowerCase();
    list(searchTerm);
}

const findHandler2 = async(e)=>{
    setIsLoadingTableData2(true);    
    const searchTerm = e.target.value.toLowerCase();
    typologysubtypologies(searchTerm);
}











    return(
        <>
            <div className="d-flex title_col justify-content-between align-items-center">
                <h4 className="page_title">{typologydata.typology}</h4>

                
            </div>

            <div className="row">

                <div className="col-md-6">
                    <div className="card mt-4 card_style1">
                    

                        <div className="d-flex align-items-center">
                    <h5 className="mb-0">All Sub Typologies  </h5>

                    <div className="searchInput ms-auto">
                        <input type="text" className="form-control" placeholder="Search by name" onChange={findHandler} />
                    </div>
                </div>



                <table className="mt_40">
    <thead>
        <tr>
            <th>Name</th>
            <th>Transfer</th>
        </tr>
    </thead>

    <tbody>
        {isLoadingTableData ? (
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
        ) : (
            <>
                { data?.length > 0 ? (
                    data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.typology}</td>
                            <td>
                                <button className="btn btn_primary btn_sm" onClick={() => addInTypology(item.id)}>
                                    {isTargeting === item.id ? "loading" : `Click to Add in ${typologydata.typology}`}
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={2}>
                            <h5 className="no_record">No Record Found!</h5>
                        </td>
                    </tr>
                )}
            </>
        )}
    </tbody>
</table>


                        {(!isLoadingTableData  && totalPage > 0 ? 
                    <Pagination currentPage={currentPage} totalPages={lastPage} onPageChange={handlePageChange} />
                : null
                    )}



                    
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card mt-4 card_style1">
                  

                        
                        <div className="d-flex align-items-center">
                        <h5>{typologydata.typology} Typology</h5>

                    <div className="searchInput ms-auto">
                        <input type="text" className="form-control" placeholder="Search by name" onChange={findHandler2} />
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
    {isLoadingTableData2 ? (
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
    ) : (
        typologySubTypologiesList?.length > 0 ? (
            typologySubTypologiesList.map((item, index) => (
                <tr key={index}>
                    <td>
                        {item.sub_typology}
                    </td>
                    <td>
                        <button className="btn btn_primary btn_sm" onClick={() => deleteHandler(item.id)}>
                            {isTargeting === item.id ? "loading" : "Remove " + typologydata.typology}
                        </button>
                    </td>
                </tr>
            ))
        ) : (
            <tr>
                <td colSpan={2}>
                    <h5 className="no_record">No Record Found!</h5>
                </td>
            </tr>
        )
    )}
</tbody>


                        </table>

                            {(!isLoadingTableData2  && totalPage2 > 0 ? 
                        <Pagination currentPage={currentPage2} totalPages={lastPage2} onPageChange={handlePageChange2} />
                    : null
                        )}




                        
                        
                      
                    </div>
                </div>
            </div>
            {showSidebar && (
                <>
                    <SidebarPortal className="portal">
                        <SideModal onCancel={cancelHandler} onSubmit={(enableEdit ? updateAmenityHandler : addSubmitHandler)}>
                            <Form >
                                <Form.Group className="mb_15">
                                    <Form.Label>Sub Typology Name*</Form.Label>
                                    <Form.Control ref={typologyRef} className="form-control" placeholder="Enter sub typology name" required type="text" />
                                    {errors.typology && <div className="errMsg">{errors.typology}</div>}
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

export default SubTypologies
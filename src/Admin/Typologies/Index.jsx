import React, { useEffect, useRef, useState } from "react"
import CustomDropdown from 'common/Custom_Dropdown/CustomDropdown';
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from 'common/Portal/Backdrop'
import SideModal from "../components/Modal/SideModal/Index";
import Form from 'react-bootstrap/Form';
import Button from 'common/Button/Button';
import Pagination from '../../common/Pagination/Pagination';
import Loader from "common/Loader/loader";
import Request from "root/config/Request";
import {  toast } from 'react-toastify';
import ScaleLoader from "react-spinners/ScaleLoader";
import * as CONFIG from 'root/config';
import { Link } from "react-router-dom";

const statusOptions = [
    { label: 'Active', value: 'active' },
    { label: 'Hide', value: 'hide' },
];

const Typologies = ()=>{
    // pagination  
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(1); // Current page state
    const [lastPage, setLastPage] = useState(1);
  
    const handlePageChange = (page) => {
        
        setCurrentPage(page);
    };

    useEffect(()=>{
        loadList()
    }, [currentPage,totalPage])
    // end paggination 



    const [isLoading, setIsLoading] = useState(false);
    const [dataLoading, setDataLoading] = useState(false)
    const [data, setData] = useState([]);
    const [showSidebar, setShowSidebar] = useState(false);
    const [errors, setErrors] = useState({});
    const [enableEdit, setenableEdit] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [notFound, setnotFound] = useState(false);
    const [editId, setEditId] = useState(false);
    const [checkboxes, setCheckboxes] = useState([]);
    const [isLoadingTableData, setIsLoadingTableData] = useState(false);
    const [isSitebarFormButtonLoading, setIsSitebarFormButtonLoading] = useState(false);


    const typologyRef = useRef(null);
    const imageRef=useRef(null);

    const loadList = async (search="") => {
        setIsLoadingTableData(true)
        const response = await Request(`admin/typology?search=${search}&page=${currentPage}`, 'GET');
        if(response.status && response.statusCode==200)
        {
            if(!response.data.data.length){
                setnotFound(true);
            }
            const checkboxes = response.data.data.map(item=>({
                id:item.id,
                isChecked:item.primary ? true : false,
            }))
            setCheckboxes(checkboxes)
            setLastPage(response.data.last_page)
            setData(response.data.data);


        }
        setIsLoadingTableData(false)
    }

   

    const addDeveloperHandler = ()=>{
        setShowSidebar(!showSidebar)
    }

  
    const handleStatusSelect = ()=>{

    }

    const cancelHandler = ()=>{
        setShowSidebar(false)
    }

    const resetFields=()=>{
        typologyRef.current.value = ''
    }

    const addSubmitHandler = async(e)=>{
        e.preventDefault();
        setIsSitebarFormButtonLoading(true);
        var typologyVal = typologyRef.current.value
        try{
            const formData = new FormData()
            formData.append('typology', typologyVal);
            formData.append('image', imageRef.current.files[0]);
            const response = await Request('admin/typology', 'POST', formData);
            if(response.status && response.statusCode==403){
                setErrors(response.errors);
                throw new Error('Please fill required fields')
            }else if(!response.status){
                throw new Error(response.message)
            }else if(response.status && response.statusCode==200){
                toast.success(response.message);
                loadList();
                resetFields()
                setShowSidebar(false)
                return 
            } 

        }catch(err){
            toast.error(err.message)
        }
        setIsSitebarFormButtonLoading(false);

    }

    const updateHandler=async(e)=>{
        e.preventDefault();
        setIsSitebarFormButtonLoading(true);

        var typologyVal = typologyRef.current.value
        
        try{
            const formData = new FormData()
            formData.append('typology', typologyVal);
            if(imageRef.current.files[0]){
                formData.append('image', imageRef.current.files[0]);
            }
            const response = await Request('admin/typology/'+editId+'/update', 'POST', formData);
 

            if(response.status && response.statusCode==403){
                setErrors(response.errors);
                throw new Error('Please fill required fields')
            }else if(!response.status){
                throw new Error(response.message)
            }else if(response.status && response.statusCode==200){
                toast.success(response.message);
                resetFields()
                setShowSidebar(false);
                loadList();

                return 
            } 

        }catch(err){
            toast.error(err.message)
        }
        setIsSitebarFormButtonLoading(false);

    }

    
    const deleteHandler=async(id)=>{
      var response=await Request('admin/typology/'+id,'DELETE');
      if(response.status && response.statusCode==200){
        toast.success(response.message);
        loadList();
      }else{
        toast.error(response.message);
      }

}

    const primaryHandle=async (e, id)=>{
  
        var response=await Request('admin/typology/makeprimary/'+id,'POST');
        if(response.status && response.statusCode==200){
            setCheckboxes(prevCheckboxes =>
                prevCheckboxes.map(checkbox =>
                  checkbox.id === id ? { ...checkbox, isChecked: !checkbox.isChecked } : checkbox
                )
              );
        }
       
        // checkboxes.map((checkbox)=>checkbox.id === id && {...checkbox, isChecked:!checkbox.isChecked})

    }
    const editHandler = async (id)=>{
            setShowSidebar(true)
            setIsSitebarFormButtonLoading(true);
            var response=await Request('admin/typology/'+id,'GET');
            if (response.status && response.statusCode === 200) {
                setenableEdit(true);
                setEditId(id);
                var result=response.data;
                typologyRef.current.value=result.typology;

            }
            setIsSitebarFormButtonLoading(false);

    }


    const findHandler = async(e)=>{
        const searchTerm = e.target.value.toLowerCase();
        loadList(searchTerm);
    }




    return(
        <>
            <div className="d-flex title_col justify-content-between align-items-center">
                <h4 className="page_title">Typologies</h4>
                <Button className="btn ms-auto btn_primary btn-sm" onClick={addDeveloperHandler}>Add Typology</Button>
            </div>

            <div className="card mt-4 card_style1">
              
                <div className="d-flex align-items-center">
                    <h5 className="mb-0">All Typologies </h5>

                    <div className="searchInput ms-auto">
                        <input type="text" className="form-control" placeholder="Search by name" onChange={findHandler} />
                    </div>
                </div>




                <table className="mt_40">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                           
                            <th>
                                Sub Typology
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




                        {!isLoadingTableData && data.length ? (
                            data.map((item,index)=>(
                            <tr key={index}>
                                <td>
                                    {item.typology}
                                </td>

                               
                                <td>
                                    <Link className="btn btn_primary btn_sm" to={`${CONFIG.ADMIN_ROOT}typology/${item.id}/sub`}>View Sub Typology</Link>
                                </td>
                                
                                <td>
                                    <CustomDropdown className="form-control" defaultVal="Select --" options={statusOptions} onSelect={handleStatusSelect()}  />
                                </td>

                                <td>
                                <button className="btn action_btn" onClick={() => editHandler(item.id)}>
                                        <img src={CONFIG.ADMIN_ASSETS + 'icons/edit.svg'} alt="edit icon" className="img-fluid icon"  />
                                    </button>

                                    {/* <button className="btn action_btn" onClick={() => deleteHandler(item.id)}>
                                        <img src={CONFIG.ADMIN_IMG_URL + 'icons/delete_color.svg'} alt="delete icon" className="img-fluid icon delete"  />
                                    </button> */}
                                    {/* <input  type="checkbox" value={item.id} onChange={(e)=>primaryHandle(e, item.id)} checked={checkboxes.find(checkbox=>checkbox.id === item.id)?.isChecked || false}  /> */}
                                </td>
                            </tr>
                       ))
                    ) : !isLoadingTableData ? <tr><td colSpan="5"><h5 className="no_record">No Data Found!</h5></td></tr> : null}
                    </tbody>

                </table>


                {(!isLoadingTableData  && data ? 
                    <Pagination currentPage={currentPage} totalPages={lastPage} onPageChange={handlePageChange} />
                : null
                    )}





                    
                
              
            </div>

            {showSidebar && (
                <>
                    <SidebarPortal className="portal">
                        <SideModal onCancel={cancelHandler} onSubmit={(enableEdit ? updateHandler : addSubmitHandler)} isLoading={isSitebarFormButtonLoading}>
                            <Form >
                                <Form.Group className="mb_15">
                                    <Form.Label>Typology Name*</Form.Label>
                                    <Form.Control ref={typologyRef} className="form-control" placeholder="Enter typology name" required type="text" />
                                    {errors.typology && <div className="errMsg">{errors.typology}</div>}

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

export default Typologies
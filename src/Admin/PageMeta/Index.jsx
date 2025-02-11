import React, { useEffect, useRef, useState } from "react"
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from 'common/Portal/Backdrop'
import SideModal from "../components/Modal/SideModal/Index";
import Form from 'react-bootstrap/Form';
import Button from 'common/Button/Button';
import Loader from "common/Loader/loader";
import Request from "root/config/JsonRequest";
import {  toast } from 'react-toastify';
import ScaleLoader from "react-spinners/ScaleLoader";
import Pagination from 'common/Pagination/Pagination';
import * as CONFIG from 'root/config';

const statusOptions = [
    { label: 'Active', value: 'active' },
    { label: 'Hide', value: 'hide' },
];

const PageMeta = ()=>{
    const [data, setData] = useState([]);
    const [showSidebar, setShowSidebar] = useState(false);
    const [errors, setErrors] = useState({});
    const [enableEdit, setenableEdit] = useState(false);
    const [editId, setEditId] = useState(false);

    const [currentPage, setCurrentPage] = useState(1); // Current page state
    const [totalPage, setTotalPage] = useState(0);
    const [checkboxes, setCheckboxes] = useState([]);
    const [lastPage, setLastPage] = useState(1);
    const [isLoadingTableData, setIsLoadingTableData] = useState(false);
    const [isSitebarFormButtonLoading, setIsSitebarFormButtonLoading] = useState(false);
    const [distinctPageList, setDistinctsetPageList] = useState([]);


    const [formFields, setFormFields] = useState({
        page: "",
        meta_title:"",
        meta_keyword: "",
        meta_description: "",
        head_data: "",
        footer_data: "",
      });

      



    const typologyRef = useRef(null);
    const imageRef=useRef(null);

    const loadList = async (search="") => {
        setIsLoadingTableData(true)
        const response = await Request(`admin/page-meta?search=${search}&page=${currentPage}`, 'GET');
        if(response.status && response.statusCode==200)
        {
            setData(response.data.data)
            setTotalPage(response.data.last_page)
        }
        setIsLoadingTableData(false)
    
    }

    const getDistinctpages = async () => {
        
        const response = await Request(`admin/distinct-pages`, 'GET');
        if(response.status && response.statusCode==200)
        {
            setDistinctsetPageList(response.data);
        }
    }



    useEffect(()=>{

        
        
        loadList()
        getDistinctpages()


    }, [currentPage, totalPage])

    const addDeveloperHandler = ()=>{
        setShowSidebar(!showSidebar)
    }

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected + 1);
    }

   

    const cancelHandler = ()=>{
        setShowSidebar(false)
        resetFields()
    }

    const resetFields=()=>{
        setFormFields({
            page: "",
            meta_title:"",
            meta_keyword: "",
            meta_description: "",
            head_data: "",
            footer_data: "",
          });
          setErrors({});
          setenableEdit(false);
          setEditId(false);
          
    }

    const addSubmitHandler = async(e)=>{
        e.preventDefault();
        
        setIsSitebarFormButtonLoading(true);
        
        try{
     
            const response = await Request('admin/page-meta', 'POST', formFields);
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
        // setIsSitebarFormButtonLoading(true);

        
        try{
          
            const response = await Request('admin/page-meta/'+editId, 'PATCH', formFields);
 

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
        // setIsSitebarFormButtonLoading(false);

    }

    
    const deleteHandler=async(id)=>{
      var response=await Request('admin/page-meta/'+id,'DELETE');
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
            var response=await Request('admin/page-meta/'+id+'/edit','GET');
            if (response.status && response.statusCode === 200) {
                setenableEdit(true);
                setEditId(id);
                var result=response.data;
                setFormFields({

                    meta_title:result.meta_title,
                    meta_keyword: result.meta_keyword,
                    meta_description: result.meta_description,
                    head_data: result.head_data,
                    footer_data: result.footer_data,
                  });

            }
            setIsSitebarFormButtonLoading(false);

    }


    const findHandler = async(e)=>{
        const searchTerm = e.target.value.toLowerCase();
        loadList(searchTerm);
    }

    
    const handleChange=(e)=>{
        setFormFields({ ...formFields, [e.target.name]: e.target.value });
    }
    



    return(
        <>
            <div className="d-flex title_col justify-content-between align-items-center">
                <h4 className="page_title">Page Meta</h4>
                <Button className="btn ms-auto btn_primary btn-sm" onClick={addDeveloperHandler}>Add Page meta</Button>
            </div>

            <div className="card mt-4 card_style1">
              
                <div className="d-flex align-items-center">
                    <h5 className="mb-0">Page Meta </h5>

                    <div className="searchInput ms-auto">
                        <input type="text" className="form-control" placeholder="Search by name" onChange={findHandler} />
                    </div>
                </div>




                <table className="mt_40">
                    <thead>
                        <tr>
                            <th>
                                Page Name
                            </th>
                            <th>
                                Meta Title
                            </th>
                            <th>
                                Meta Keyword
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
                                    {item.page_name.name}
                                </td>

                               

                                <td>
                                    {item.meta_title}
                                </td>
                                <td>
                                    {item.meta_keyword}
                                </td>
                              
                                
                         
                                <td>
                                <button className="btn action_btn" onClick={() => editHandler(item.id)}>
                                        <img src={CONFIG.ADMIN_IMG_URL + 'icons/edit.svg'} alt="edit icon" className="img-fluid icon"  />
                                    </button>

                                    <button className="btn action_btn" onClick={() => deleteHandler(item.id)}>
                                        <img src={CONFIG.ADMIN_IMG_URL + 'icons/delete_color.svg'} alt="delete icon" className="img-fluid icon delete"  />
                                    </button>
                                    <input hidden type="checkbox" value={item.id} onChange={(e)=>primaryHandle(e, item.id)} checked={checkboxes.find(checkbox=>checkbox.id === item.id)?.isChecked || false}  />
                                </td>
                            </tr>
                       ))
                    ) : !isLoadingTableData ? <tr><td colSpan="5"><h5 className="no_record">No Data Found!</h5></td></tr> : null}
                    </tbody>

                </table>

                {!isLoadingTableData && data.length ? <Pagination currentPage={currentPage} totalPages={lastPage} onPageChange={handlePageChange} /> : null}
                
              
            </div>

            {showSidebar && (
                <>
                    <SidebarPortal className="portal">
                        <SideModal onCancel={cancelHandler} onSubmit={(enableEdit ? updateHandler : addSubmitHandler)} isLoading={isSitebarFormButtonLoading}>
                            <Form >
                                {!enableEdit ?   <Form.Group className="mb_15">
                                    <Form.Label>Select Page*</Form.Label>
                                    <select name="page" value={formFields.page} className="form-control" onChange={handleChange} >
                                            <option value="">Select Page</option>
                                            {!isLoadingTableData && distinctPageList.length ? (
                                             distinctPageList.map((item,index)=>(

                                                    <option value={item.id} key={index}>{item.name}</option>
                                                ))
                                            ) : null }
                                    </select>

                                    {errors.page && <div className="errMsg">{errors.page}</div>}

                                </Form.Group>
                                 :  null }
                                  
                                <Form.Group className="mb_15">
                                    <Form.Label>Meta Title * </Form.Label>
                                    <Form.Control name="meta_title" value={formFields.meta_title} className="form-control" placeholder="Enter Meta Title" onChange={handleChange}  type="text" />
                                    {errors.meta_title && <div className="errMsg">{errors.meta_title}</div>}

                                </Form.Group>

                                <Form.Group className="mb_15">
                                    <Form.Label>Meta Keyword</Form.Label>
                                    <Form.Control name="meta_keyword" value={formFields.meta_keyword} className="form-control" placeholder="Enter Meta Keyword" onChange={handleChange}  type="text" />
                                    {errors.meta_keyword && <div className="errMsg">{errors.meta_keyword}</div>}

                                </Form.Group>

                                <Form.Group className="mb_15">
                                    <Form.Label>Meta Descripton</Form.Label>
                                    <Form.Control name="meta_description" value={formFields.meta_description} className="form-control" placeholder="Enter Meta Description" onChange={handleChange}  type="text" />
                                    {errors.meta_description && <div className="errMsg">{errors.meta_description}</div>}
                                </Form.Group>

                                <Form.Group className="mb_15">
                                    <Form.Label>Head Data</Form.Label>
                                    <Form.Control name="head_data" value={formFields.head_data} className="form-control" placeholder="Head Data"  type="text"  onChange={handleChange}/>
                                    {errors.head_data && <div className="errMsg">{errors.head_data}</div>}
                                </Form.Group>


                                <Form.Group className="mb_15">
                                    <Form.Label>Footer Data/ Body</Form.Label>
                                    <Form.Control name="footer_data" value={formFields.footer_data} className="form-control" placeholder="Footer Data"  type="text"  onChange={handleChange}/>
                                    {errors.footer_data && <div className="errMsg">{errors.footer_data}</div>}
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

export default PageMeta
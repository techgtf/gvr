import React, {useEffect, useState } from "react";
import { Link, NavLink ,useParams} from "react-router-dom";
import CustomDropdown from "common/Custom_Dropdown/CustomDropdown";
import CustomObjectDropdown from 'common/Custom_Dropdown/CustomObjectDropdown';
import SidebarPortal from "common/Portal/SidebarPortal";
import SideModal from "../components/Modal/SideModal/Index";
import Request from 'root/config/Request';
import Loader from "common/Loader/loader";
import {  toast } from 'react-toastify';
import ScaleLoader from "react-spinners/ScaleLoader";
import Form from 'react-bootstrap/Form';
import CustomSwitch from '../../common/CustomSwitch/Index'
import Button from '../../common/Button/Button'
import Pagination from '../../common/Pagination/Pagination';
import '../assets/css/admin.css';
import * as CONFIG from 'root/config'

const statusOptions = [
    { label: 'Active', value: 1 },
    { label: 'Hide', value: 0},
];

const PlatterPage = ()=>{
    const [isLoading, setIsLoading] = useState(false);
    const [imageError, setImageError] = useState(false);
    const category=useParams().category;
    const [list, setList] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // Current page state
    const [showAddSidebar, setShowAddSidebar] = useState(false);
    const [enableEdit, setenableEdit] = useState(false);
    const [lastPage, setLastPage] = useState(1);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [ActiveFooterStatus, setActiveFooterStatus] = useState(null);
    const [selectedFooter, setSelectedFooter] = useState({0:'Select Any'});

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                await getlist();
                setIsLoading(false);

           
            } catch (error) {
                setIsLoading(false);
                console.error('Error fetching data:', error);
            }
          };


        const footerLinks = async () => {
            
            var response = await Request('admin/footer-platter','GET');
            try {
                if(response.status && response.statusCode == 200){
                    
                    setSelectedFooter(prevState => ({ ...prevState, ...response.data }));

                }else{
                    setSelectedFooter([]);
                }
            } catch (error) {
                
            }
        }

        footerLinks();
        fetchData();
    }, [category]);

    const addProjectHandler = ()=>{
        setShowAddSidebar(!showAddSidebar)
    }

    const cancelHandler = ()=>{

    }

    const handleStatusSelect = async (selectedValue, id) => {
        setSelectedStatus(selectedValue);
        await updateStatusHandler(id, selectedValue);
      
    };

   

    const updateStatusHandler = async (id, selectedStatus) => {
        
        const formData = new FormData();
        formData.append('status', selectedStatus);

        var response = await Request('admin/platter/banner/'+id+'/status', 'POST', formData);

        if(response.status && response.statusCode==403){

            setErrors(response.errors);
            toast.error(response.message);

        }else if(response.status && response.statusCode==200){
            // await loadDevelopers();
            toast.success(response.message);

        } 

    };


    const handleFooterStatusSelect = async (selectedValue, id) => {
        
        setActiveFooterStatus(selectedValue);
        await updateFooterStatusHandler(id, selectedValue);
      
    };
    
    const updateFooterStatusHandler = async (id, selectedStatus) => {
        const formData = new FormData();
        formData.append('type', selectedStatus);

        var response = await Request('admin/platter-page/'+id+'/footer-status', 'POST', formData);
        if(response.status && response.statusCode==403){

            // setErrors(response.errors);
            toast.error(response.message);

        }else if(response.status && response.statusCode==200){
            // await loadDevelopers();
            toast.success(response.message);

        } 

    };


    const addSubmitHandler = ()=>{

    }


    const getlist=async (search="")=>{
        var response=await Request('admin/platter-page?search='+search,'GET');
        if(response.status && response.statusCode==200){
            setList(response.data.data);
        }else{
            setList([]);
        }
    }
    
    const handleImageError = (event)=>{
        if(!imageError){
            setImageError(true);
            event.target.src = CONFIG.ADMIN_ASSETS + 'default_offer.jpg';
        }
    }

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected + 1);
    }

    const findHandler = async(e)=>{
        const searchTerm = e.target.value.toLowerCase();
        getlist(searchTerm);
    }


    return(
        <>
            <div className="d-flex title_col justify-content-between align-items-center">
                <h4 className="page_title">Platter Pages</h4>

                <Link className="btn btn_primary" to={`${CONFIG.ADMIN_ROOT}platter-page/add`}>Add New Platter</Link>

            </div>

            <div className="card mt-4 card_style1">

                <div className="d-flex align-items-center">
                    <h5 className="mb-0">Platter Pages</h5>

                    <div className="searchInput ms-auto">
                        <input type="text" className="form-control" placeholder="Search by name" onChange={findHandler} />
                    </div>
                </div>


                <table className="mt_40">
                    <thead>
                        <tr>
                            <th>
                                Platter Name
                            </th>
                            <th>
                                Type
                            </th>
                            <th>
                                Status
                            </th>
                            <th>
                                Active
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>

                        {isLoading && (
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

                        {!isLoading && list.length ? (
                            list.map(item => (
                                <tr key={item.id}>
                          
                                    <td>
                                        <div className="table_pr">
                                          
    
                                            <div className="content">
                                                <h6 className="pr_name">{item.name}</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                         
                                           {item.category ? item.category.name : null}<br />
                                            {item.developer ? item.developer.developer : null}<br />

                                            {item.typology ? item.typology.typology : null}<br />

                                            {item.sub_typology ? item.sub_typology.typology : null}      <br />

                                            {item.cities ? item.cities.city : null}     

                                    </td>
    
                                    <td>
                                    <CustomDropdown className="form-control" defaultVal={item.status} options={statusOptions} onSelect={(selectedValue) => handleStatusSelect(selectedValue, item.id)}  />
                                    </td>

                                    <td>
                                        <CustomObjectDropdown className="form-control" defaultVal={item.type} options={selectedFooter} onSelect={(selectedFooterActive) => handleFooterStatusSelect(selectedFooterActive, item.id)}  />
                                    </td>

 
                                    {/* <td>
                                        <Form.Group className="mb_15 form-group"   md="4">
                                            <Form.Label>Job Experience*</Form.Label>
                                            <select  className="form-control" defaultValue="select">
                                                <option value="select" disabled>Select Job Experience</option>
                                                {Object.entries(selectedFooter).map(([key, value]) => {
                                                    return (
                                                        <option value={key} key={key}>{value}</option>
                                                    );
                                                })}
                                            </select>
                                        </Form.Group>
                                    </td> */}
    
                                    <td>
                                        <NavLink to={`${CONFIG.ADMIN_ROOT}platter-page/${item.id}/edit`} className="action_btn">
                                            <img src={CONFIG.ADMIN_IMG_URL + 'icons/edit.svg'} alt="edit icon" className="img-fluid icon"  />
                                        </NavLink>
                                    </td>
                                </tr>
                            ))
                        ) : !isLoading ? <tr><td colSpan="4"><h5 className="no_record">No Projects Found!</h5></td></tr> : null}

                    </tbody>
                </table>

                {!isLoading && list.length ? <Pagination currentPage={currentPage} totalPages={lastPage} onPageChange={handlePageChange} /> : null}

            </div>

            {showAddSidebar && (
                <>
                    <SidebarPortal className="portal">
                        <SideModal onCancel={cancelHandler} onSubmit={(enableEdit ? updateAmenityHandler : addSubmitHandler)}>
                            <Form >
                                <Form.Group>
                                    <Form.Label>Select Icon</Form.Label>
                                    <Form.Control className="form-control" required type="file" />
                                        {errors.image}
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control className="" required type="text" placeholder="Enter Amenity Title" />
                                    {errors.title}

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

export default PlatterPage;
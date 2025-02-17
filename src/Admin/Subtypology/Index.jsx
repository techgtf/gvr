import React, { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

import CustomDropdown from 'common/Custom_Dropdown/CustomDropdown';
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from 'common/Portal/Backdrop'
import SideModal from "../components/Modal/SideModal/Index";
import Form from 'react-bootstrap/Form';
import Button from 'common/Button/Button';
import Loader from "common/Loader/loader";
import Request from "root/config/Request";
import { toast } from 'react-toastify';
import ScaleLoader from "react-spinners/ScaleLoader";
import Pagination from 'common/Pagination/Pagination';
import * as CONFIG from 'root/config';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

const statusOptions = [
    { label: 'Active', value: 'active' },
    { label: 'Hide', value: 'hide' },
];

const SubTypologies = () => {

    // pagination  
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(1); // Current page state
    const [lastPage, setLastPage] = useState(1);

    const handlePageChange = (page) => {

        setCurrentPage(page);
    };

    useEffect(() => {
        list()
    }, [currentPage, totalPage])
    // end paggination 



    const [editId, setEditId] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [dataLoading, setDataLoading] = useState(false)
    const [data, setData] = useState([]);
    const [showSidebar, setShowSidebar] = useState(false);
    const [errors, setErrors] = useState({});
    const [enableEdit, setenableEdit] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const typologyRef = useRef(null);

    const list = async (search = "") => {

        setDataLoading(true)
        const response = await Request(`admin/sub-typology?search=${search}&page=${currentPage}`, 'GET');

        if (response.status && response.statusCode == 200) {

            setData(response.data.data)
            setLastPage(response.data.last_page)
        }
        setDataLoading(false)
    }


    const addDeveloperHandler = () => {
        setShowSidebar(!showSidebar)
    }

    const cancelHandler = () => {
        setShowSidebar(false)
    }

    const resetFields = () => {
        typologyRef.current = ''
        setErrors({})
    }

    const addSubmitHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const formData = new FormData()
            formData.append('typology', typologyRef.current.value);

            // hit api

            const response = await Request('admin/sub-typology', 'POST', formData);

            if (response.status && response.statusCode == 403) {
                setErrors(response.errors);
                throw new Error(response.errors.typology)
            } else if (!response.status) {
                throw new Error(response.message)
            } else if (response.status && response.statusCode == 200) {
                toast.success(response.message);
                resetFields()
                setShowSidebar(false);
                list();
                return
            }

        } catch (err) {
            toast.error(err.message)
        } finally {
            setIsLoading(false);
        }

    }

    const updateHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        var typologyVal = typologyRef.current.value
        try {
            const formData = new FormData()
            formData.append('typology', typologyVal);
            const response = await Request('admin/sub-typology/' + editId + '/update', 'POST', formData);

            if (response.status && response.statusCode == 403) {
                setErrors(response.errors);
                setIsLoading(false);
                throw new Error(response.errors.typology);

            } else if (!response.status) {
                setIsLoading(false);
                throw new Error(response.message)
            } else if (response.status && response.statusCode == 200) {
                setIsLoading(false);
                toast.success(response.message);
                setShowSidebar(false);
                list();
                return
            }

        } catch (err) {
            toast.error(err.message)
        }
    }


    const deleteHandler = async (id) => {

        setIsLoading(true);
        var response = await Request('admin/sub-typology/' + id, 'DELETE');
        list();
        setIsLoading(false);
        toast.success(response.message);

    }


    const editHandler = async (id) => {
        try {
            setenableEdit(true);
            setShowSidebar(true)

            var response = await Request('admin/sub-typology/' + id + '/edit', 'GET');
            if (response.status && response.statusCode === 200) {
                setEditId(id);
                var result = response.data;
                typologyRef.current.value = result.typology;
            }
        } catch (err) {
            console.log(err);
        }

    }

    if (isLoading) {
        return <Loader />; // Use the Loader component
    }


    // search 

    const findHandler = async (e) => {
        const searchTerm = e.target.value.toLowerCase();
        list(searchTerm);
    }


    // end search  

    return (
        <>
            <div className="d-flex title_col justify-content-between align-items-center">
                <h4 className="page_title">Sub Typologies</h4>
                <Button className="btn ms-auto btn_primary btn-sm" onClick={addDeveloperHandler}>Add Sub Typology</Button>
            </div>

            <div className="row">

                <div className="col-md-12">
                    <div className="card mt-4 card_style1">

                        <div className="d-flex align-items-center">
                            <h5 className="mb-0">All Sub Typologies List </h5>

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
                                    <td>
                                        Action
                                    </td>

                                </tr>
                            </thead>

                            <tbody>
                                {!data.length && dataLoading ? (
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
                                ) : (
                                    data.length ? (
                                        data.map((item, index) => (
                                            <tr key={index}>
                                                <td>
                                                    {item.typology}
                                                </td>
                                                <td>
                                                    <button className="btn action_btn" onClick={() => editHandler(item.id)}>
                                                        {/* <img src={CONFIG.ADMIN_IMG_URL + 'icons/edit.svg'} alt="edit icon" className="img-fluid icon" /> */}
                                                        <FaEdit />
                                                    </button>
                                                    <button className="btn action_btn" onClick={() => deleteHandler(item.id)}>
                                                        {/* <img src={CONFIG.ADMIN_IMG_URL + 'icons/delete_color.svg'} alt="delete icon" className="img-fluid icon delete" /> */}
                                                        <RiDeleteBin5Fill />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={4}>
                                                <h5 className="no_record">No Amenities Found!</h5>
                                            </td>
                                        </tr>
                                    )
                                )}

                            </tbody>

                        </table>

                        {!dataLoading && data.length && (
                            <Pagination currentPage={currentPage} totalPages={lastPage} onPageChange={handlePageChange} />
                        )}


                    </div>
                </div>


            </div>

            {showSidebar && (
                <>
                    <SidebarPortal className="portal">
                        <SideModal onCancel={cancelHandler} isEnableEdit={enableEdit} onSubmit={(enableEdit ? updateHandler : addSubmitHandler)}>
                            <Form >
                                <Form.Group className="mb_15">
                                    <Form.Label>Sub Typology Name*</Form.Label>
                                    <Form.Control ref={typologyRef} className="form-control" placeholder="Enter sub typology name" required type="text" />
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

export default SubTypologies
import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from 'common/Portal/Backdrop'
import SideModal from "../components/Modal/SideModal/Index";
import Sections from '../components/Project/Sections';
import CustomDropdown from 'common/Custom_Dropdown/CustomDropdown';
import ScaleLoader from "react-spinners/ScaleLoader";

import Form from 'react-bootstrap/Form';
import JsonRequest from 'root/config/JsonRequest';
import Pagination from 'common/Pagination/Pagination';

import Request from 'root/config/Request'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'common/Button/Button'
import 'react-quill/dist/quill.snow.css';
import '../assets/css/admin.css';

import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";


const Highlights = () => {
    const [currentPage, setCurrentPage] = useState(1); // Current page state
    const [totalPage, setTotalPage] = useState(0);
    const projectid = useParams().projectid;
    const section_id = useParams().section;
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [isLoadingTableData, setIsLoadingTableData] = useState(false);
    const [isSitebarFormButtonLoading, setIsSitebarFormButtonLoading] = useState(false);
    const [lastPage, setLastPage] = useState(1);

    const [isLoading, setIsLoading] = useState(false);

    const [editId, setEditId] = useState(false);

    const [showSidebar, setShowSidebar] = useState(false);
    const [enableEdit, setenableEdit] = useState(false);
    const [list, setList] = useState([]);

    const [formField, setFormField] = useState({
        highlight: "",
    });

    const navigate = useNavigate();



    const addSubmitHandler = async (event) => {
        setIsSitebarFormButtonLoading(true);
        var response = await JsonRequest('admin/projectdata/highlights?project_id=' + projectid, 'POST', formField);
        if (response.status && response.statusCode == 200) {
            setFormField({
                highlight: "",
            });
            await getlist()
            setShowSidebar(false);
            toast.success(response.message);
        }
        else {
            toast.error(response.message);
        }
        setIsSitebarFormButtonLoading(false);
    }

    const editHandler = async (id) => {
        setShowSidebar(true)

        var response = await JsonRequest('admin/projectdata/highlights/' + id + '/edit', 'GET');
        if (response.status && response.statusCode === 200) {
            setenableEdit(true);
            setEditId(id);
            var result = response.data;
            setFormField({
                highlight: result.highlight,
            });
            await getlist()
        }

    }


    const getlist = async () => {
        setIsLoadingTableData(true);



        var response = await JsonRequest(`admin/projectdata/highlights?page=${currentPage}&project_id=${projectid}`, 'GET');
        if (response.status && response.statusCode == 200) {
            setList(response.data.data);
            setLastPage(response.data.last_page)

        }
        setIsLoadingTableData(false);
    }
    const updateHandler = async () => {


        setIsSitebarFormButtonLoading(true);
        var response = await JsonRequest('admin/projectdata/highlights/' + editId + '/update', 'POST', formField);
        if (response.status && response.statusCode == 200) {
            setFormField({
                highlight: "",
            });
            setShowSidebar(false);
            getlist();
            toast.success(response.message);
        }
        else {
            toast.error(response.message);
        }
        setIsSitebarFormButtonLoading(false);
    }

    const AddHighlightHandler = () => {
        setShowSidebar(true)
    }

    const cancelHandler = () => {
        setShowSidebar(false)
    }

    const backHandler = () => {

    }

    const handleChange = (e) => {

        setFormField({ ...formField, [e.target.name]: e.target.value });
    }


    const deleteHandler = async (id) => {

        setIsLoadingTableData(true);
        var response = await JsonRequest('admin/projectdata/highlights/' + id + '/delete', 'POST');
        if (response.status && response.statusCode == 200) {
            getlist();
            toast.success(response.message);

        } else {
            toast.error(response.message);

        }
        setIsLoadingTableData(false);
    }

    const statusOptions = [
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 },
    ];

    const handleStatusSelect = async (selectedValue, id) => {
        setSelectedStatus(selectedValue);
        await updateStatusHandler(id, selectedValue);
    }

    const updateStatusHandler = async (id, selectedStatus) => {
        // setIsLoading(true);
        const formData = new FormData();
        formData.append('status', selectedStatus);
        var response = await Request('admin/projectdata/highlights/' + id + '/keyhighlight', 'POST', formData);

        // setIsLoading(false);

        if (response.status && response.statusCode == 403) {

            setErrors(response.errors);
            toast.error(response.message);

        } else if (response.status && response.statusCode == 200) {
            toast.success(response.message);
        }

    };


    const handlePageChange = (page) => {

        setCurrentPage(page);
    };




    useEffect(() => {

        getlist()
    }, [currentPage, totalPage]);



    return (
        <>
            <div className="px_50 form_col">
                <Button className="btn btn_outline" onClick={backHandler}>Back</Button>
                <Sections projectid={projectid} section_type={section_id} sub_heading seq image />
                <div className="card card_style1 mt_40">
                    <div className="d-flex align-items-center justify-content-between">
                        <h5>All Highlights</h5>
                        <Button className="btn btn_primary" onClick={AddHighlightHandler}>Add Highlight</Button>
                    </div>

                    <table className="w-100 mt_30">
                        <thead>
                            <tr>
                                <th>
                                    Highlight
                                </th>
                                <th>
                                    key Highlight
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
                                (list ? list && list.map(item => (
                                    <tr key={item.id}>
                                        <td>
                                            {item.highlight}
                                        </td>


                                        <td>
                                            <CustomDropdown className="form-control" defaultVal={item.key_highlight} options={statusOptions} onSelect={(selectedValue) => handleStatusSelect(selectedValue, item.id)} />
                                        </td>




                                        <td>
                                            <button className="btn action_btn" onClick={() => editHandler(item.id)}>
                                                {/* <img src={CONFIG.ADMIN_IMG_URL + 'icons/edit.svg'} alt="edit icon" className="img-fluid icon"  /> */}
                                                <FaEdit />
                                            </button>

                                            <button className="btn action_btn" onClick={() => deleteHandler(item.id)}>
                                                {/* <img src={CONFIG.ADMIN_IMG_URL + 'icons/delete_color.svg'} alt="delete icon" className="img-fluid icon delete"  /> */}
                                                <RiDeleteBin5Fill />
                                            </button>
                                        </td>
                                    </tr>
                                )) : <tr><td colspan="2"><h5 className="no_record">No  More  Found!</h5></td></tr>
                                )

                            }


                        </tbody>

                    </table>

                    {!isLoading && list.length ? <Pagination currentPage={currentPage} totalPages={lastPage} onPageChange={handlePageChange} /> : null}

                </div>
            </div>

            {showSidebar && (
                <>
                    <SidebarPortal className="portal">
                        <SideModal onCancel={cancelHandler} onSubmit={(enableEdit ? updateHandler : addSubmitHandler)} isLoading={isSitebarFormButtonLoading}>
                            <Form >
                                <Form.Group className="mb_20">
                                    <Form.Label>Title*</Form.Label>
                                    <Form.Control className="" value={formField.highlight} type="text" placeholder="Enter Highlight" name="highlight" onChange={handleChange} />
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

export default Highlights;
import React, { useEffect, useRef, useState } from "react";
import CustomDropdown from "../common/Custom_Dropdown/CustomDropdown";
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from "common/Portal/Backdrop";
import SideModal from "./components/Modal/SideModal/Index";
import * as CONFIG from "../../config";
import Loader from "../common/Loader/loader";
import { toast } from "react-toastify";
import Pagination from "../common/Pagination/Pagination";
import ScaleLoader from "react-spinners/ScaleLoader";

import Request from "../config/Request";

import "./assets/css/admin.css";
import Sections from "./components/Page/Sections";
import { useParams } from "react-router-dom";

const statusOptions = [
  { label: "Active", value: "1" },
  { label: "Hide", value: "0" },
];

const AboutPage = () => {
  const [data, setData] = useState([]);
  const { pageId } = useParams();

  // pagination
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [lastPage, setLastPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  // end paggination

  const [isLoadingTableData, setIsLoadingTableData] = useState(false);
  const [isSitebarFormButtonLoading, setIsSitebarFormButtonLoading] =
    useState(false);

  const [showSidebar, setShowSidebar] = useState(false);
  const [showAddSidebar, setShowAddSidebar] = useState(false);

  const [enableEdit, setenableEdit] = useState(false);
  const [showEditEnableImage, setEditEnableImage] = useState(null);

  const fileRef = useRef(null);
  const titleRef = useRef(null);
  const yearRef = useRef(null);
  const locationRef = useRef(null);

  const [errors, setErrors] = useState({});
  const [sectionList, setsectionList] = useState([]);

  const [editId, setEditId] = useState(false);

  const [selectedStatus, setSelectedStatus] = useState(null);

  const resetFields = () => {
    fileRef.current = null;
    titleRef.current = null;
    yearRef.current = null;
    locationRef.current = null;

    setErrors({});
    setEditId(false);
    setenableEdit(false);
  };

  const handleStatusSelect = async (selectedValue, id) => {
    setSelectedStatus(selectedValue);
    await updateStatusHandler(id, selectedValue);
  };

  const updateStatusHandler = async (id, selectedStatus) => {
    setIsSitebarFormButtonLoading(true);

    const formData = new FormData();
    formData.append("status", selectedStatus);
    var response = await Request(
      "admin/timeline/" + id + "/status",
      "POST",
      formData
    );

    if (response.status && response.statusCode == 403) {
      setErrors(response.errors);
      toast.error(response.message);
    } else if (response.status && response.statusCode == 200) {
      toast.success(response.message);
    }
    setIsSitebarFormButtonLoading(false);
  };

  const addHandler = () => {
    setShowAddSidebar(!showSidebar);
  };

  const addSubmitHandler = async (event) => {
    event.preventDefault();
    setIsSitebarFormButtonLoading(true);
    const formData = new FormData();
    formData.append("image", fileRef.current.files[0]);
    formData.append("title", titleRef.current.value);
    formData.append("year", yearRef.current.value);
    formData.append("location", locationRef.current.value);

    var response = await Request("admin/timeline", "POST", formData);
    if (response.status && response.statusCode == 403) {
      setErrors(response.errors);
      toast.error(response.message);
    } else if (response.status && response.statusCode == 200) {
      listHandler();
      cancelHandler();
      resetFields();
      toast.success(response.message);
    }
    setIsSitebarFormButtonLoading(false);
  };

  const editHandler = async (id) => {
    setShowSidebar(true);
    setShowAddSidebar(true);
    setIsSitebarFormButtonLoading(true);

    var response = await Request("admin/timeline/" + id, "GET");
    if (response.status && response.statusCode === 200) {
      setenableEdit(true);
      setEditId(id);
      if (response.data.icons) {
        setEditEnableImage(CONFIG.VITE_APP_STORAGE + response.data.icons);
      }
      titleRef.current.value = response.data.title;
      yearRef.current.value = response.data.year;
      locationRef.current.value = response.data.location;
    }
    setIsSitebarFormButtonLoading(false);
  };

  const cancelHandler = () => {
    setShowSidebar(false);
    setShowAddSidebar(false);
    resetFields();
  };

  const deleteHandler = async (id) => {
    var response = await Request("admin/timeline/" + id, "DELETE");
    if (response.status && response.statusCode === 200) {
      toast.success(response.message);

      listHandler();
    } else {
      toast.error(response.message);
    }
  };

  const getSectionlist = async () => {
    var response = await Request("admin/page/" + pageId, "GET");
    if (response.status && response.statusCode === 200) {
      setsectionList(response.data);
    }
  };

  const listHandler = async (search = "") => {
    setIsLoadingTableData(true);
    var response = await Request(
      "admin/timeline?search=" + search + "&page=" + currentPage,
      "GET"
    );
    if (response.status && response.statusCode === 200) {
      setData(response.data.data);
      setLastPage(response.data.last_page);
    }
    setIsLoadingTableData(false);
  };

  const updateAmenityHandler = async (event) => {
    event.preventDefault();
    setIsSitebarFormButtonLoading(true);

    const formData = new FormData();
    if (fileRef.current.files[0]) {
      formData.append("image", fileRef.current.files[0]);
    }
    formData.append("title", titleRef.current.value);
    formData.append("year", yearRef.current.value);
    formData.append("location", locationRef.current.value);

    var response = await Request(
      "admin/timeline/" + editId + "/update",
      "POST",
      formData
    );
    setIsSitebarFormButtonLoading(false);

    if (response.status && response.statusCode === 200) {
      listHandler();
      cancelHandler();
    } else if (response.status && response.statusCode === 403) {
      setErrors(response.errors);
    }
  };

  useEffect(() => {
    listHandler();
  }, [currentPage, totalPage]);

  useEffect(() => {
    getSectionlist();
  }, [pageId]);

  const findHandler = async (e) => {
    const searchTerm = e.target.value.toLowerCase();
    listHandler(searchTerm);
  };

  return (
    <>
      <div className="d-flex title_col justify-content-between align-items-center">
        <h4 className="page_title">About Page</h4>
        <button className="btn ms-auto btn_primary btn-sm" onClick={addHandler}>
          Add Timeline
        </button>
      </div>
      {sectionList
        ? sectionList.map((item) => {
            let section_permissions = JSON.parse(item.section_permissions);
            let fields = JSON.parse(item.fields_name);

            return (
              <Sections
                page_id={item.page_type_id}
                fields={fields}
                page_section={item.name}
                textarea={
                  section_permissions.description == "true" ? "textarea" : null
                }
                image={section_permissions.image == "true" ? "image" : null}
                sub_heading={
                  section_permissions.sub_heading == "true"
                    ? "sub_heading"
                    : null
                }
                title={item.title}
              />
            );
          })
        : null}

      <div className="card mt-4 card_style1">
        <div className="d-flex align-items-center">
          <h5 className="mb-0">Timeline </h5>

          <div className="searchInput ms-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
              onChange={findHandler}
            />
          </div>
        </div>

        {/* <form >
                    <input ref={fileRef} type="file" className="form-control" />
                    <input type="text" className="form-control" placeholder="Enter Amenity Name" />
                    <button type="submit" className="btn btn_primary">Save</button>
                </form> */}

        <table className="mt_40">
          <thead>
            <tr>
              <th>Name</th>
              <th>Year</th>
              <th>Location</th>
              <th>Icon</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {isLoadingTableData ? (
              <tr>
                <td colSpan={4}>
                  <div className="text-center">
                    <ScaleLoader color="#ddd" className="w-100" />
                  </div>
                </td>
              </tr>
            ) : (
              <>
                {data && Array.isArray(data) && data.length > 0 ? (
                  data.map((item) => (
                    <tr key={item.id}>
                      <td>{item.title}</td>
                      <td>{item.year}</td>
                      <td>{item.location}</td>
                      <td>
                        <div className="thumb icon">
                          <img
                            src={CONFIG.VITE_APP_STORAGE + item.image}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </td>

                      <td>
                        <CustomDropdown
                          className="form-control"
                          defaultVal={item.status}
                          options={statusOptions}
                          onSelect={(selectedValue) =>
                            handleStatusSelect(selectedValue, item.id)
                          }
                        />
                      </td>

                      <td>
                        <button
                          className="btn action_btn"
                          onClick={() => editHandler(item.id)}
                        >
                          <img
                            src={CONFIG.ADMIN_IMG_URL + "icons/edit.svg"}
                            alt="edit icon"
                            className="img-fluid icon"
                          />
                        </button>

                        <button
                          className="btn action_btn"
                          onClick={() => deleteHandler(item.id)}
                        >
                          <img
                            src={
                              CONFIG.ADMIN_IMG_URL + "icons/delete_color.svg"
                            }
                            alt="delete icon"
                            className="img-fluid icon delete"
                          />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">
                      <h5 className="no_record">No Amenities Found!</h5>
                    </td>
                  </tr>
                )}
              </>
            )}
          </tbody>
        </table>

        {!isLoadingTableData && data ? (
          <Pagination
            currentPage={currentPage}
            totalPages={lastPage}
            onPageChange={handlePageChange}
          />
        ) : null}
      </div>

      {showAddSidebar && (
        <>
          <SidebarPortal className="portal">
            <SideModal
              onCancel={cancelHandler}
              onSubmit={enableEdit ? updateAmenityHandler : addSubmitHandler}
              isLoading={isSitebarFormButtonLoading}
            >
              <Form>
                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    ref={titleRef}
                    className=""
                    type="text"
                    placeholder="Enter  Title"
                  />
                  {errors.title && (
                    <span className="text-danger">{errors.title}</span>
                  )}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Year</Form.Label>
                  <Form.Control
                    ref={yearRef}
                    className=""
                    type="text"
                    placeholder="Enter Year "
                  />
                  {errors.year && (
                    <span className="text-danger">{errors.year}</span>
                  )}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    ref={locationRef}
                    className=""
                    type="text"
                    placeholder="Enter Location "
                  />
                  {errors.location && (
                    <span className="text-danger">{errors.location}</span>
                  )}
                </Form.Group>
                <Form.Group>
                  <Form.Label>Select Icon</Form.Label>
                  <Form.Control
                    ref={fileRef}
                    className="form-control"
                    type="file"
                  />
                  {errors.image && (
                    <span className="text-danger">{errors.image}</span>
                  )}
                  {showEditEnableImage ? (
                    <img src={showEditEnableImage} width="100" />
                  ) : null}
                </Form.Group>
              </Form>
            </SideModal>
          </SidebarPortal>
          <BackdropPortal className="show" />
        </>
      )}
    </>
  );
};

export default AboutPage;

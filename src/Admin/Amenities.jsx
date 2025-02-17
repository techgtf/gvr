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

import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

const statusOptions = [
  { label: "Active", value: "1" },
  { label: "Hide", value: "0" },
];

const Amenities = () => {
  const [data, setData] = useState([]);

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

  const [errors, setErrors] = useState({});
  const [editId, setEditId] = useState(false);

  const [selectedStatus, setSelectedStatus] = useState(null);

  const resetFields = () => {
    fileRef.current = null;
    titleRef.current = null;
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
      "admin/amenities/" + id + "/status",
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

  const addAmenityHandler = () => {
    setShowAddSidebar(!showSidebar);
  };

  const addSubmitHandler = async (event) => {
    event.preventDefault();
    setIsSitebarFormButtonLoading(true);
    const formData = new FormData();
    formData.append("image", fileRef.current.files[0]);
    formData.append("title", titleRef.current.value);
    var response = await Request("admin/amenities", "POST", formData);
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

    var response = await Request("admin/amenities/" + id, "GET");
    if (response.status && response.statusCode === 200) {
      setenableEdit(true);
      setEditId(id);
      if (response.data.icons) {
        setEditEnableImage(CONFIG.VITE_APP_STORAGE + response.data.icons);
      }
      titleRef.current.value = response.data.title;
    }
    setIsSitebarFormButtonLoading(false);
  };

  const cancelHandler = () => {
    setShowSidebar(false);
    setShowAddSidebar(false);
    resetFields();
  };

  const deleteHandler = async (id) => {
    var response = await Request("admin/amenities/" + id, "DELETE");
    if (response.status && response.statusCode === 200) {
      toast.success(response.message);

      listHandler();
    } else {
      toast.error(response.message);
    }
  };

  const listHandler = async (search = "") => {
    setIsLoadingTableData(true);
    var response = await Request(
      "admin/amenities?search=" + search + "&page=" + currentPage,
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

    var response = await Request(
      "admin/amenities/" + editId + "/update",
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

  const findHandler = async (e) => {
    const searchTerm = e.target.value.toLowerCase();
    listHandler(searchTerm);
  };

  return (
    <>
      <div className="flex title_col justify-between items-center">
        <h4 className="page_title">Amenities</h4>
        <button
          className="btn ml-auto btn_primary btn-sm"
          onClick={addAmenityHandler}
        >
          Add Amenity
        </button>
      </div>

      <div className="card mt-4 card_style1">
        <div className="flex items-center">
          <h5 className="mb-0">Amenities</h5>

          <div className="searchInput ml-auto">
            <input
              type="text"
              className="border rounded px-3 py-2 w-full"
              placeholder="Search by name"
              onChange={findHandler}
            />
          </div>
        </div>

        <table className="mt_40 w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Icons</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {isLoadingTableData ? (
              <tr>
                <td colSpan={4}>
                  <div className="text-center py-4">
                    <ScaleLoader color="#ddd" className="w-full" />
                  </div>
                </td>
              </tr>
            ) : (
              <>
                {data && Array.isArray(data) && data.length > 0 ? (
                  data.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="py-2 px-4">{item.title}</td>
                      <td className="py-2 px-4">
                        <div className="thumb icon bg-primary p-2 rounded">
                          <img src={item.icons} alt="" className="img-fluid" />
                        </div>
                      </td>
                      <td className="py-2 px-4">
                        <CustomDropdown
                          className="border rounded px-3 py-2 w-full"
                          defaultVal={item.status}
                          options={statusOptions}
                          onSelect={(selectedValue) =>
                            handleStatusSelect(selectedValue, item.id)
                          }
                        />
                      </td>
                      <td className="py-2 px-4 flex gap-2">
                        <button
                          className="btn action_btn"
                          onClick={() => editHandler(item.id)}
                        >
                          <FaEdit />
                        </button>
                        <button
                          className="btn action_btn"
                          onClick={() => deleteHandler(item.id)}
                        >
                          <RiDeleteBin5Fill />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">
                      <h5 className="no_record text-center py-4">
                        No Amenities Found!
                      </h5>
                    </td>
                  </tr>
                )}
              </>
            )}
          </tbody>
        </table>

        {!isLoadingTableData && data && (
          <Pagination
            currentPage={currentPage}
            totalPages={lastPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>

      {showAddSidebar && (
        <>
          <SidebarPortal className="portal">
            <SideModal
              onCancel={cancelHandler}
              onSubmit={enableEdit ? updateAmenityHandler : addSubmitHandler}
              isLoading={isSitebarFormButtonLoading}
            >
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Select Icon
                  </label>
                  <input
                    ref={fileRef}
                    className="border rounded px-3 py-2 w-full"
                    type="file"
                  />
                  {errors.image && (
                    <span className="text-red-500">{errors.image}</span>
                  )}
                  {showEditEnableImage && (
                    <img src={showEditEnableImage} width="100" />
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    ref={titleRef}
                    className="border rounded px-3 py-2 w-full"
                    type="text"
                    placeholder="Enter Amenity Title"
                  />
                  {errors.title && (
                    <span className="text-red-500">{errors.title}</span>
                  )}
                </div>
              </form>
            </SideModal>
          </SidebarPortal>
          <BackdropPortal className="show" />
        </>
      )}
    </>
  );
};

export default Amenities;

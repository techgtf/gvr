import React, { useEffect, useRef, useState } from "react";
import CustomDropdown from "common/Custom_Dropdown/CustomDropdown";
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from "common/Portal/Backdrop";
import SideModal from "../../Modal/SideModal/Index";
import * as CONFIG from "../../../../../config";
import { toast } from "react-toastify";
import Pagination from "common/Pagination/Pagination";
import ScaleLoader from "react-spinners/ScaleLoader";

import Request from "../../../../config/Request";

import "../../../assets/css/admin.css";

import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const statusOptions = [
  { label: "Active", value: "1" },
  { label: "Hide", value: "0" },
];

const EsgGallery = () => {
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
  const nameRef = useRef(null);
  const altRef = useRef(null);
  const designationRef = useRef(null);
  const shortDescriptionRef = useRef(null);
  const messageRef = useRef(null);
  const priceRef = useRef(null);

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
      "admin/gallery/" + id + "/status",
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
    formData.append("alt", altRef.current.value);
    // formData.append("short_description", descriptionRef.current.value);

    var response = await Request("admin/gallery", "POST", formData);

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

    var response = await Request("admin/gallery/" + id, "GET");
    if (response.status && response.statusCode === 200) {
      setenableEdit(true);
      setEditId(id);
      if (response.data.image) {
        setEditEnableImage(CONFIG.VITE_APP_STORAGE + response.data.image);
      }
      // titleRef.current.value = response.data.name;
      altRef.current.value = response.data.alt;
    }
    setIsSitebarFormButtonLoading(false);
  };

  const cancelHandler = () => {
    setShowSidebar(false);
    setShowAddSidebar(false);
    resetFields();
  };

  const deleteHandler = async (id) => {
    var response = await Request("admin/gallery/" + id, "DELETE");
    if (response.status && response.statusCode === 200) {
      toast.success(response.message);

      listHandler();
    } else {
      toast.error(response.message);
    }
  };

  const listHandler = async (search = "") => {
    // debugger
    setIsLoadingTableData(true);
    var response = await Request(
      "admin/gallery?search=" + search + "&page=" + currentPage,
      "GET"
    );
    if (response.status && response.statusCode === 200) {
      setData(response.data.data);
      // setLastPage(response.data.last_page);
    }
    setIsLoadingTableData(false);
  };

  const updateSubmitHandler = async (event) => {
    event.preventDefault();
    setIsSitebarFormButtonLoading(true);

    const formData = new FormData();
    if (fileRef.current.files[0]) {
      formData.append("image", fileRef.current.files[0]);
    }
    formData.append("alt", altRef.current.value);

    var response = await Request(
      "admin/gallery/" + editId + "/update",
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
        <h4 className="page_title">Gallery</h4>
        <button
          className="btn ml-auto btn_primary btn-sm"
          onClick={addAmenityHandler}
        >
          Add Gallery
        </button>
      </div>

      <div className="card bg-white mt-4 card_style1">
        <div className="flex items-center">
          <h5 className="mb-0">Gallery</h5>

          <div className="searchInput ml-auto">
            <input
              type="text"
              className="border rounded px-3 py-2 w-full"
              placeholder="Search by Title"
              onChange={findHandler}
            />
          </div>
        </div>

        <table className="mt_40 w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-left">Image</th>
              {/* <th className="border border-gray-300 p-2 text-left">Title</th> */}
              <th className="border border-gray-300 p-2 text-left">Alt</th>
              <th className="border border-gray-300 p-2 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {isLoadingTableData ? (
              <tr className="border-b border-gray-200">
                <td colSpan={3}>
                  <div className="text-center ">
                    <ScaleLoader color="#ddd" className="w-full" />
                  </div>
                </td>
              </tr>
            ) : (
              <>
                {data && Array.isArray(data) && data.length > 0 ? (
                  data.map((item) => (
                    <tr className="border-b">
                      <td className="py-2 px-4">
                        <img
                          src={CONFIG.VITE_APP_STORAGE + item.image}
                          className="w-[80px] h-[80px] object-contain border"
                          alt={item.name}
                        />
                      </td>
                      <td className="py-2 px-4">{item.alt}</td>
                      <td className="py-2 px-4 ">
                        <button
                          className="btn action_btn"
                          onClick={() => editHandler(item.id)}
                        >
                          <AiOutlineEdit size={22} />
                        </button>
                        <button
                          className="btn action_btn"
                          onClick={() => deleteHandler(item.id)}
                        >
                          <RiDeleteBin6Line
                            size={18}
                            className="text-red-500"
                          />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">
                      <h5 className="no_record text-center py-4">
                        No Data Found!
                      </h5>
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
              onSubmit={enableEdit ? updateSubmitHandler : addSubmitHandler}
              isLoading={isSitebarFormButtonLoading}
            >
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Select Image*
                  </label>
                  <input
                    ref={fileRef}
                    className="border rounded px-3 py-2 w-full"
                    type="file"
                    placeholder="Enter Title"
                  />
                  {showEditEnableImage && (
                    <img
                      src={showEditEnableImage}
                      className="h-[80px] w-[80px] object-contain border mt-1"
                    />
                  )}
                  {errors.image && (
                    <span className="text-red-500">{errors.image}</span>
                  )}
                </div>

                {/* <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Title*
                  </label>
                  <input
                    ref={titleRef}
                    className="border rounded px-3 py-2 w-full"
                    type="text"
                    placeholder="Enter Title"
                  />
                  {errors.name && (
                    <span className="text-red-500">
                      {errors.name && "The Title field is required"}
                    </span>
                  )}
                </div> */}

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Alt Text*
                  </label>
                  <input
                    ref={altRef}
                    className="border rounded px-3 py-2 w-full"
                    type="text"
                    placeholder="Enter Alt Text"
                  />
                  {errors.short_description && (
                    <span className="text-red-500">
                      The Description field is required
                    </span>
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

export default EsgGallery;

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

import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

const statusOptions = [
  { label: "2023", value: '2023' },
  { label: "2024", value: '2024' },
];

const TimelineImages = () => {
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState('2024');
  const [yearOptions, setYearOptions] = useState(null);

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
  const designationRef = useRef(null);

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
    setYearOptions(selectedValue);
  };

  const addAmenityHandler = () => {
    setShowAddSidebar(!showSidebar);
  };

  const addSubmitHandler = async (event) => {
    event.preventDefault();

    setIsSitebarFormButtonLoading(true);
    const formData = new FormData();

    formData.append("year", selectedYear);
    formData.append("image", fileRef.current.files[0]);

    var response = await Request("admin/timeline-preview/", "POST", formData);

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

    var response = await Request("admin/timeline-preview/" + id, "GET");
    if (response.status && response.statusCode === 200) {
      setenableEdit(true);
      setEditId(id);
      setSelectedYear(response?.data?.year)
      if (response.data.image) {
        setEditEnableImage(CONFIG.VITE_APP_STORAGE + response.data.image);
      }
    }
    setIsSitebarFormButtonLoading(false);
  };

  const cancelHandler = () => {
    setShowSidebar(false);
    setShowAddSidebar(false);
    resetFields();
  };

  const deleteHandler = async (id) => {
    var response = await Request("admin/timeline-preview/" + id, "DELETE");
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
      "admin/timeline-preview?search=" + search + "&page=" + currentPage,
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
    formData.append("year", selectedYear);

    var response = await Request(
      "admin/timeline-preview/" + editId + "/update",
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

  useEffect(() => {}, []);

  useEffect(() => {
    listHandler();
  }, [currentPage, totalPage]);

  const findHandler = async (e) => {
    const searchTerm = e.target.value.toLowerCase();
    listHandler(searchTerm);
  };

  useEffect(()=>{
    const fetchImagesYears = async()=>{
      var response = await Request(
        "admin/distinct-timeline",
        "GET"
      );
  
      if (response.status && response.statusCode === 200) {
        setYearOptions(response.data);
      } else if (response.status && response.statusCode === 403) {
        toast.error(response.message);
      }
    }

    fetchImagesYears()
  }, [])

  return (
    <>
      <div className="flex title_col justify-between items-center">
        <h4 className="page_title">Timeline Images</h4>
        <div className="flex gap-3">
          <button
            className="btn ml-auto btn_primary btn-sm"
            onClick={addAmenityHandler}
          >
            Back To Timeline
          </button>
          <button
            className="btn ml-auto btn_primary btn-sm"
            onClick={addAmenityHandler}
          >
            Add Images
          </button>
        </div>
      </div>

      <div className="card bg-white mt-4 card_style1">
        <div className="flex items-center">
          <h5 className="mb-0">Timeline Images</h5>

          <div className="searchInput ml-auto">
            <input
              type="text"
              className="border rounded px-3 py-2 w-full"
              placeholder="Search by Name"
              onChange={findHandler}
            />
          </div>
        </div>

        <table className="mt_40 w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-left">Image</th>
              <th className="border border-gray-300 p-2 text-left">Year</th>
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
                      <td className="py-2 px-4">{item.year}</td>
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

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Select Year*
                  </label>
                  <CustomDropdown
                    className="border rounded px-3 py-2 w-full"
                    defaultVal={selectedYear}
                    options={yearOptions}
                    onSelect={(selectedValue) =>
                      handleStatusSelect(selectedValue, item.id)
                    }
                  />
                  {errors.name && (
                    <span className="text-red-500">
                      {errors.name && "The Title field is required"}
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

export default TimelineImages;

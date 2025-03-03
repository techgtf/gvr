import React, { useEffect, useRef, useState } from "react";
import CustomDropdown from "common/Custom_Dropdown/CustomDropdown";
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from "common/Portal/Backdrop";
import SideModal from "../Modal/SideModal/Index";
import * as CONFIG from "../../../../config";
import { toast } from "react-toastify";
import Pagination from "common/Pagination/Pagination";
import ScaleLoader from "react-spinners/ScaleLoader";

import Request from "../../../config/Request";

import "../../assets/css/admin.css";

import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const typeOptions = [
  { label: "FAQ", value: "faq" },
  { label: "Tax Benefits", value: "tax-benefits" },
  { label: "Nri Corner", value: "nri-corner" },
];

const Faqs = () => {
  const [data, setData] = useState([]);
  const [selectedType, setSelectedType] = useState("faq");

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

  const questionRef = useRef(null);
  const answerRef = useRef(null);

  const [errors, setErrors] = useState({});
  const [editId, setEditId] = useState(false);

  const [selectedStatus, setSelectedStatus] = useState(null);

  const resetFields = () => {
    setErrors({});
    setEditId(false);
    setenableEdit(false);
  };

  const handleTypeSelect = async (selectedValue, id) => {
    setSelectedType(selectedValue);
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

  const addFaqHandler = () => {
    setShowAddSidebar(!showSidebar);
  };

  const addSubmitHandler = async (event) => {
    event.preventDefault();

    setIsSitebarFormButtonLoading(true);
    const formData = new FormData();

    formData.append("question", questionRef.current.value);
    formData.append("answer", answerRef.current.value);
    formData.append("type", selectedType);

    var response = await Request("admin/pagesfaq", "POST", formData);

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
    setIsSitebarFormButtonLoading(true);
    setShowSidebar(true);
    setShowAddSidebar(true);

    var response = await Request("admin/pagesfaq/" + id, "GET");
    if (response.status && response.statusCode === 200) {
      setSelectedType(response.data.type);
      setenableEdit(true);
      setEditId(id);
      questionRef.current.value = response.data.question;
      answerRef.current.value = response.data.answer;
    }
    setIsSitebarFormButtonLoading(false);
  };

  const cancelHandler = () => {
    setShowSidebar(false);
    setShowAddSidebar(false);
    resetFields();
  };

  const deleteHandler = async (id) => {
    var response = await Request("admin/pagesfaq/" + id, "DELETE");
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
      "admin/pagesfaq?search=" + search + "&page=" + currentPage,
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

    formData.append("type", selectedType);
    formData.append("question", questionRef.current.value);
    formData.append("answer", answerRef.current.value);

    var response = await Request(
      "admin/pagesfaq/" + editId + "/update",
      "POST",
      formData
    );
    setIsSitebarFormButtonLoading(false);

    if (response.status && response.statusCode === 200) {
      toast.success(response.message);
      listHandler();
      cancelHandler();
    } else if (response.status && response.statusCode === 403) {
      toast.error(response.message);
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

  return (
    <>
      <div className="flex title_col justify-between items-center">
        <h4 className="page_title">Faqs</h4>
        <div className="flex gap-3">
          <button
            className="btn ml-auto btn_primary btn-sm"
            onClick={addFaqHandler}
          >
            Add Faq
          </button>
        </div>
      </div>

      <div className="card bg-white mt-4 card_style1">
        <div className="flex items-center">
          <h5 className="mb-0">All Faqs</h5>

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
              <th className="border border-gray-300 p-2 text-left">Question</th>
              <th className="border border-gray-300 p-2 text-left">Answer</th>
              <th className="border border-gray-300 p-2 text-left">Type</th>
              <th className="border border-gray-300 p-2 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {isLoadingTableData ? (
              <tr className="border-b border-gray-200">
                <td colSpan={4}>
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
                      <td className="py-2 px-4">{item.question}</td>
                      <td className="py-2 px-4">{item.answer}</td>
                      <td className="py-2 px-4">{item.type}</td>
                      <td className="py-2 px-4">
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
                    <td colSpan="4">
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
                    Select Type*
                  </label>
                  <CustomDropdown
                    className="border rounded px-3 py-2 w-full"
                    defaultVal={selectedType}
                    options={typeOptions}
                    onSelect={(selectedValue) =>
                      handleTypeSelect(selectedValue)
                    }
                  />
                  {errors.type && (
                    <span className="text-red-500">
                      {errors.type && "The Select field is required"}
                    </span>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Enter Question*
                  </label>
                  <input
                    ref={questionRef}
                    className="border rounded px-3 py-2 w-full"
                    type="text"
                    placeholder="Enter Question"
                  />
                  {errors.question && (
                    <span className="text-red-500">{errors.question}</span>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Enter Answer*
                  </label>
                  <input
                    ref={answerRef}
                    className="border rounded px-3 py-2 w-full"
                    type="text"
                    placeholder="Enter Answer"
                  />
                  {errors.answer && (
                    <span className="text-red-500">
                      The answer field is required
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

export default Faqs;

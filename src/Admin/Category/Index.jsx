import React, { useEffect, useRef, useState } from "react";
import CustomDropdown from "common/Custom_Dropdown/CustomDropdown";
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from "common/Portal/Backdrop";
import SideModal from "../components/Modal/SideModal/Index";
import Button from "common/Button/Button";
import Loader from "common/Loader/loader";
import Request from "root/config/Request";
import { toast } from "react-toastify";
import ScaleLoader from "react-spinners/ScaleLoader";
import ReactPaginate from "react-paginate";
import * as CONFIG from "../../../config";
import { AiOutlineEdit } from "react-icons/ai";

import { Link } from "react-router-dom";

const statusOptions = [
  { label: "Active", value: "active" },
  { label: "Hide", value: "hide" },
];

const Category = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const [data, setData] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [errors, setErrors] = useState({});
  const [enableEdit, setenableEdit] = useState(false);
  const [notFound, setnotFound] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [totalPage, setTotalPage] = useState(0);
  const [editId, setEditId] = useState(false);
  const [sidebarData, setSidebarData] = useState({
    name:'',

  });
  const [checkboxes, setCheckboxes] = useState([]);

  const typologyRef = useRef(null);
  const imageRef = useRef(null);

  const loadList = async () => {
    setDataLoading(true);
    const response = await Request(`admin/category?page=${currentPage}`, "GET");

    if (response.status && response.statusCode == 200) {
      if (!response.data.data.length) {
        setnotFound(true);
      }
      const checkboxes = response.data.data.map((item) => ({
        id: item.id,
        isChecked: item.primary ? true : false,
      }));
      setCheckboxes(checkboxes);
      setData(response.data.data);
      setTotalPage(response.data.last_page);
    }
    setDataLoading(false);
  };

  useEffect(() => {
    loadList();
  }, [currentPage, totalPage]);

  const addDeveloperHandler = () => {
    setShowSidebar(!showSidebar);
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  const handleStatusSelect = () => {};

  const cancelHandler = () => {
    setShowSidebar(false);
  };

  const resetFields = () => {
    typologyRef.current.value = "";
  };

  const addSubmitHandler = async (e) => {
    e.preventDefault();
    var typologyVal = typologyRef.current.value;

    try {
      const formData = new FormData();
      formData.append("typology", typologyVal);
      formData.append("image", imageRef.current.files[0]);

      // hit api

      const response = await Request("admin/typology", "POST", formData);
      setIsLoading(false);

      if (response.status && response.statusCode == 403) {
        setErrors(response.message);
        throw new Error("Please fill required fields");
      } else if (!response.status) {
        throw new Error(response.message);
      } else if (response.status && response.statusCode == 200) {
        toast.success(response.message);
        loadList();
        resetFields();
        setShowSidebar(false);
        return;
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const updateHandler = async (e) => {
    e.preventDefault();
    var typologyVal = typologyRef.current.value;

    try {
      const formData = new FormData();
      formData.append("typology", typologyVal);
      if (imageRef.current.files[0]) {
        formData.append("image", imageRef.current.files[0]);
      }
      const response = await Request(
        "admin/typology/" + editId + "/update",
        "POST",
        formData
      );

      setIsLoading(false);

      if (response.status && response.statusCode == 403) {
        setErrors(response.message);
        throw new Error("Please fill required fields");
      } else if (!response.status) {
        throw new Error(response.message);
      } else if (response.status && response.statusCode == 200) {
        toast.success(response.message);
        resetFields();
        setShowSidebar(false);
        loadList();

        return;
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const deleteHandler = async (id) => {
    setIsLoading(true);
    var response = await Request("admin/typology/" + id, "DELETE");
    setIsLoading(false);

    if (response.status && response.statusCode == 200) {
      toast.success(response.message);
      loadList();
    } else {
      toast.error(response.message);
    }
  };

  const primaryHandle = async (e, id) => {
    var response = await Request("admin/typology/makeprimary/" + id, "POST");
    if (response.status && response.statusCode == 200) {
      setCheckboxes((prevCheckboxes) =>
        prevCheckboxes.map((checkbox) =>
          checkbox.id === id
            ? { ...checkbox, isChecked: !checkbox.isChecked }
            : checkbox
        )
      );
    }

    // checkboxes.map((checkbox)=>checkbox.id === id && {...checkbox, isChecked:!checkbox.isChecked})
  };
  const editHandler = async (id) => {
    setShowSidebar(true);
    var response = await Request("admin/typology/" + id, "GET");
    if (response.status && response.statusCode === 200) {
      setenableEdit(true);
      setEditId(id);
      var result = response.data;
      typologyRef.current.value = result.typology;
    }
  };

  if (isLoading) {
    return <Loader />; // Use the Loader component
  }

  const changeHandler = (e)=>{
    const {name, value} = e.target;

    setSidebarData((state)=>({
    ...state,
    [name]: value,
  }))
  }

  return (
    <>
      <div className="flex title_col justify-between items-center">
        <h4 className="page_title">Category</h4>
      </div>

      <div className="card bg-white mt-4 card_style1">
        <div className="flex items-center">
          <h5 className="mb-0">All Category</h5>
        </div>

        <table className="mt_40 w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-left">Name</th>
              <th className="border border-gray-300 p-2 text-left">Thumbnail</th>
              <th className="border border-gray-300 p-2 text-left">Typology</th>
              <th className="border border-gray-300 p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {!data.length && dataLoading ? (
              <tr>
                <td colSpan={4}>
                  <div className="text-center py-4">
                    <ScaleLoader color="#ddd" />
                  </div>
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={index} className="border border-gray-300">
                  <td className="border border-gray-300 p-2 text-left">{item.name}</td>
                  <td className="border border-gray-300 p-2 text-left">
                    <img src={CONFIG.VITE_APP_STORAGE+item.image} alt="" className="w-[100px]" />
                  </td>
                  <td className="border border-gray-300 p-2 text-left">
                    <Link
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                      to={`${CONFIG.ADMIN_ROOT}category/typology/${item.id}`}
                    >
                      View Typology
                    </Link>
                  </td>
                  <td className="border border-gray-300 p-2 text-left">
                    <button
                      className="btn action_btn"
                      onClick={() => editHandler(item.id)}
                    >
                      <AiOutlineEdit size={22} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {!dataLoading && !notFound && totalPage !== 1 && (
          <ReactPaginate
            breakLabel="..."
            nextLabel="next"
            pageCount={totalPage}
            onPageChange={handlePageChange}
            className="flex justify-center mt-4"
          />
        )}

        {notFound && (
          <h5 className="text-center text-red-500 mt-4">
            No More Record Found!
          </h5>
        )}
      </div>

      {showSidebar && (
        <>
          <SidebarPortal className="portal">
            <SideModal
              onCancel={cancelHandler}
              onSubmit={enableEdit ? updateHandler : addSubmitHandler}
              isEnableEdit={enableEdit}
            >
              <div className="mb-4">
                <label className="block font-medium mb-1">Name*</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  value={sidebarData.name}
                  required
                  className="w-full border p-2 rounded"
                  onChange={changeHandler}
                />
                {errors.typology && (
                  <div className="text-red-500 text-sm">{errors.typology}</div>
                )}
              </div>

              <div className="mb-4">
                <label className="block font-medium mb-1">Thumbnail*</label>
                <input
                  type="file"
                  required
                  className="w-full border p-2 rounded"
                />
                {errors.typology && (
                  <div className="text-red-500 text-sm">{errors.typology}</div>
                )}
              </div>
            </SideModal>
          </SidebarPortal>
          <BackdropPortal  className="show" />
        </>
      )}
    </>
  );
};

export default Category;

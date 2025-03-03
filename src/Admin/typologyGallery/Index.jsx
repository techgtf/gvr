import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CustomDropdown from "common/Custom_Dropdown/CustomDropdown";
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from "common/Portal/Backdrop";
import SideModal from "../components/Modal/SideModal/Index";
import Button from "common/Button/Button";
import Loader from "common/Loader/loader";
import Request from "root/config/Request";
import { toast } from "react-toastify";
import ScaleLoader from "react-spinners/ScaleLoader";
import Pagination from "common/Pagination/Pagination";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import * as CONFIG from '../../../config';

import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const typoOptions = [
  { label: "Logo", value: 1 },
  { label: "Image", value: 2 },
];

const TypologyGallery = () => {
  // pagination
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [lastPage, setLastPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    list();
  }, [currentPage, totalPage]);
  // end paggination

  const [editId, setEditId] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const [data, setData] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [errors, setErrors] = useState({});
  const [enableEdit, setenableEdit] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [galleryType, setGalleryType] = useState(2);
  const typologyRef = useRef(null);
  const fileRef = useRef(null);
  const [editGalleryLogo, setEditGalleryLogo] = useState(null);
  const [editGalleryImage, setEditGalleryImage] = useState(null);

  const list = async (search = "") => {
    setDataLoading(true);
    const response = await Request(
      `admin/typology-galleries?search=${search}&page=${currentPage}`,
      "GET"
    );

    if (response.status && response.statusCode == 200) {
      setData(response.data.data);
      setLastPage(response.data.last_page);
    }
    setDataLoading(false);
  };

  const addDeveloperHandler = () => {
    setShowSidebar(!showSidebar);
  };

  const cancelHandler = () => {
    setShowSidebar(false);
  };

  const resetFields = () => {
    typologyRef.current = "";
    setErrors({});
  };

  const addSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("type", galleryType);
      formData.append("file", fileRef.current.files[0]);

      // hit api

      const response = await Request(
        "admin/typology-galleries",
        "POST",
        formData
      );

      if (response.status && response.statusCode == 403) {
        setErrors(response.errors);
        throw new Error(response.errors.typology);
      } else if (!response.status) {
        throw new Error(response.message);
      } else if (response.status && response.statusCode == 200) {
        toast.success(response.message);
        resetFields();
        setShowSidebar(false);
        list();
        return;
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const updateHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", fileRef.current.files[0]);
      formData.append("type", galleryType);
      const response = await Request(
        "admin/typology-galleries/" + editId + "/update",
        "POST",
        formData
      );

      if (response.status && response.statusCode == 403) {
        setErrors(response.errors);
        setIsLoading(false);
        throw new Error(response.errors.typology);
      } else if (!response.status) {
        setIsLoading(false);
        throw new Error(response.message);
      } else if (response.status && response.statusCode == 200) {
        setIsLoading(false);
        toast.success(response.message);
        setShowSidebar(false);
        list();
        return;
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const deleteHandler = async (id) => {
    setIsLoading(true);
    var response = await Request("admin/typology-galleries/" + id, "DELETE");
    list();
    setIsLoading(false);
    toast.success(response.message);
  };

  const editHandler = async (id) => {
    try {
      setenableEdit(true);
      setShowSidebar(true);

      var response = await Request("admin/typology-galleries/" + id, "GET");
      if (response.status && response.statusCode === 200) {
        setEditId(id);
        var result = response.data;
        setGalleryType(result.type)
        if(result.type == 1){
          setEditGalleryLogo(CONFIG.VITE_APP_STORAGE + result.file)
        }else{
          setEditGalleryImage(CONFIG.VITE_APP_STORAGE + result.file)
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) {
    return <Loader />; // Use the Loader component
  }

  // search

  const findHandler = async (e) => {
    const searchTerm = e.target.value.toLowerCase();
    list(searchTerm);
  };

  const handleStatusSelect = async (selectedValue) => {
    setGalleryType(selectedValue);
    // await updateStatusHandler(id, selectedValue);
  };

  // end search

  return (
    <>
      <div className="flex title_col justify-between items-center">
        <h4 className="page_title text-xl font-semibold">Typologies Gallery</h4>
        <button
          className="btn ms-auto bg-blue-500 text-white px-4 py-2 rounded btn_primary btn-sm"
          onClick={addDeveloperHandler}
        >
          Add Typology Gallery
        </button>
      </div>

      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="card mt-4 card_style1 bg-white shadow-md rounded-lg p-4">
            <div className="flex items-center">
              <h5 className="mb-0 text-lg font-semibold">
                All Typologies Gallery List
              </h5>
              <div className="searchInput ms-auto">
                <input
                  type="text"
                  className="form-control border border-gray-300 rounded px-3 py-2 w-full"
                  placeholder="Search by name"
                  onChange={findHandler}
                />
              </div>
            </div>

            <table className="mt_40 w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">Thumbnail</th>
                  <th className="border border-gray-300 p-2 text-left">Type</th>
                  <th className="border border-gray-300 p-2 text-left">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {!data.length && dataLoading ? (
                  <tr>
                    <td colSpan={3}>
                      <div className="text-center">
                        <ScaleLoader color="#ddd" className="w-full" />
                      </div>
                    </td>
                  </tr>
                ) : data.length ? (
                  data.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2">
                        <img
                          src={CONFIG.VITE_APP_STORAGE + item.file}
                          alt={item.typology}
                          className="w-[50px] h-[50px] object-contain"
                        />
                      </td>
                      <td className="py-2">
                        {item.type == 1? "Logo" : "Image"}
                      </td>
                      <td className="py-2">
                        <button
                          className="btn action_btn text-blue-500 hover:text-blue-700"
                          onClick={() => editHandler(item.id)}
                        >
                          <AiOutlineEdit size={22} />
                        </button>
                        <button
                          className="btn action_btn text-red-500 hover:text-red-700"
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
                    <td colSpan={3}>
                      <h5 className="no_record text-center py-4">
                        No Typologies Gallery Found!
                      </h5>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {!dataLoading && data.length ? (
              <Pagination
                currentPage={currentPage}
                totalPages={lastPage}
                onPageChange={handlePageChange}
              />
            ) : null}
          </div>
        </div>
      </div>

      {showSidebar && (
        <>
          <SidebarPortal className="portal">
            <SideModal
              onCancel={cancelHandler}
              isEnableEdit={enableEdit}
              onSubmit={enableEdit ? updateHandler : addSubmitHandler}
            >
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Select Typology Gallery Type*
                  </label>
                  <CustomDropdown
                    className="border rounded px-3 py-2 w-full"
                    select={galleryType}
                    options={typoOptions}
                    onSelect={(selectedValue) =>
                      handleStatusSelect(selectedValue)
                    }
                  />
                </div>

                {galleryType == 1 ? (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Sub Typology Gallery Logo*
                    </label>
                    <input
                      ref={fileRef}
                      className="border rounded px-3 py-2 w-full"
                      placeholder="Enter sub typology Logo"
                      required
                      type="file"
                    />
                    {editGalleryLogo && (
                      <img src={editGalleryLogo} width="50" className="border mt-2" />
                    )}
                    {/* {errors.typology && (
                      <div className="errMsg">{errors.typology}</div>
                    )} */}
                  </div>
                ) : (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Select Typology Gallery Image*
                    </label>
                    <input
                      ref={fileRef}
                      className="border rounded px-3 py-2 w-full"
                      placeholder="Enter sub typology Image"
                      required
                      type="file"
                    />
                    {editGalleryImage && (
                      <img src={editGalleryImage} width="100" className="border mt-2" />
                    )}
                    {/* {errors.typology && (
                      <div className="errMsg">{errors.typology}</div>
                    )} */}
                  </div>
                )}
              </form>
            </SideModal>
          </SidebarPortal>
          <BackdropPortal className="show" />
        </>
      )}
    </>
  );
};

export default TypologyGallery;

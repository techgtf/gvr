import React, { useEffect, useRef, useState } from "react";
import CustomDropdown from "common/Custom_Dropdown/CustomDropdown";
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from "common/Portal/Backdrop";
import SideModal from "../components/Modal/SideModal/Index";
import * as CONFIG from "../../../config";
import Loader from "common/Loader/loader";
import { toast } from "react-toastify";
import Pagination from "common/Pagination/Pagination";
import Request from "root/config/Request";
import ScaleLoader from "react-spinners/ScaleLoader";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const statusOptions = [
  { label: "Active", value: "1" },
  { label: "Hide", value: "0" },
];

const Testimonials = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [showSidebar, setShowSidebar] = useState(false);
  const [enableEdit, setenableEdit] = useState(false);
  const [errors, setErrors] = useState({});
  const [editId, setEditId] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);

  var nameRef = useRef(null);
  var designationRef = useRef(null);
  var descriptionRef = useRef(null);
  var imageRef = useRef(null);
  var editImageRef = useRef(null);

  useEffect(() => {
    listHandler();
  }, [currentPage]);

  const listHandler = async () => {
    try {
      setIsLoading(true);
      var response = await Request(
        "admin/testimonials?page=" + currentPage,
        "GET"
      );
      if (response.statusCode !== 200) {
        setIsLoading(false);
        throw new Error("Fetching Data Failed");
      }
      if (response.status && response.statusCode == 200) {
        setData(response.data.data);
        setLastPage(response.data.last_page);
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusSelect = async (selectedValue, id) => {
    setSelectedStatus(selectedValue);
    await updateStatusHandler(id, selectedValue);
  };

  const updateStatusHandler = async (id, selectedStatus) => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("status", selectedStatus);

    var response = await Request(
      "admin/testimonials/" + id + "/status",
      "POST",
      formData
    );

    setIsLoading(false);

    if (response.status && response.statusCode == 403) {
      setErrors(response.errors);
      toast.error(response.message);
    } else if (response.status && response.statusCode == 200) {
      toast.success(response.message);
    }
  };

  const resetFields = () => {
    nameRef.current = null;
    setErrors({});
    setEditId(false);
    setenableEdit(false);
  };

  const addCategoryHandler = () => {
    setShowSidebar(!showSidebar);
  };

  const addSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", nameRef.current.value);
    formData.append("destination", designationRef.current.value);
    formData.append("description", descriptionRef.current.value);
    formData.append("image", imageRef.current.files[0]);

    var response = await Request("admin/testimonials", "POST", formData);

    if (response.status && response.statusCode == 403) {
      setErrors(response.errors);
      toast.error(response.message);
    } else if (response.status && response.statusCode == 200) {
      listHandler();
      cancelHandler();
      resetFields();
      toast.success(response.message);
    }

    setIsLoading(false);
  };

  const editHandler = async (id) => {
    setShowSidebar(true);
    setErrors({});

    var response = await Request("admin/testimonials/" + id, "GET");
    if (response.status && response.statusCode === 200) {
      setenableEdit(true);
      setEditId(id);
      nameRef.current.value = response.data.name;
      designationRef.current.value = response.data.destination;
      descriptionRef.current.value = response.data.description;
      editImageRef.current.src = CONFIG.VITE_APP_STORAGE + response.data.image;
    }
  };

  const cancelHandler = () => {
    setShowSidebar(false);
  };

  // not worked
  const deleteHandler = async (id) => {
    setIsLoading(true);
    var response = await Request("admin/testimonials/" + id, "DELETE");
    if (response.status && response.statusCode === 200) {
      toast.success(response.message);
      listHandler();
    } else {
      toast.error(response.message);
    }
    setIsLoading(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const updateHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", nameRef.current.value);
    formData.append("destination", designationRef.current.value);
    formData.append("description", descriptionRef.current.value);
    if (imageRef.current.files[0]) {
      formData.append("image", imageRef.current.files[0]);
    }

    var response = await Request(
      "admin/testimonials/" + editId + "/update",
      "POST",
      formData
    );

    if (response.status && response.statusCode == 200) {
      listHandler();
      cancelHandler();
      toast.success(response.message);
    } else if (response.status && response.statusCode === 403) {
      setErrors(response.errors);
      toast.error(response.message);
    }
  };

  const handleImageError = (event) => {
    event.target.src = CONFIG.ADMIN_ASSETS + "default_blog.jpg";
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-xl font-semibold">Testimonials</h4>
        <button
          className="ml-auto bg-blue-500 text-white px-4 py-2 text-sm rounded"
          onClick={addCategoryHandler}
        >
          Add Testimonial
        </button>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-4 mt-4">
        <div className="flex">
          <h5 className="text-lg font-semibold">All Testimonials</h5>
        </div>

        <table className="w-full mt-6 border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Title</th>
              <th className="border border-gray-300 p-2">Designation</th>
              <th className="border border-gray-300 p-2">Show</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {isLoading && (
              <tr>
                <td colSpan={4} className="text-center p-4">
                  <ScaleLoader color="#ddd" />
                </td>
              </tr>
            )}

            {!isLoading && data.length
              ? data.map((item) => (
                  <tr key={item.id} className="border-b border-gray-200">
                    <td className="p-2">{item.name}</td>
                    <td className="p-2">{item.destination}</td>
                    <td className="p-2">
                      <CustomDropdown
                        className="w-full border rounded p-1"
                        defaultVal={item.status}
                        options={statusOptions}
                        onSelect={(selectedValue) =>
                          handleStatusSelect(selectedValue, item.id)
                        }
                      />
                    </td>
                    <td className="p-2 flex space-x-2">
                      <button
                        className="bg-gray-200 p-1 rounded"
                        onClick={() => editHandler(item.id)}
                      >
                        <img
                          src={CONFIG.ADMIN_IMG_URL + "icons/edit.svg"}
                          alt="edit icon"
                          className="w-5 h-5"
                        />
                      </button>
                      <button
                        className="bg-red-500 p-1 rounded text-white"
                        onClick={() => deleteHandler(item.id)}
                      >
                        <img
                          src={CONFIG.ADMIN_IMG_URL + "icons/delete_color.svg"}
                          alt="delete icon"
                          className="w-5 h-5"
                        />
                      </button>
                    </td>
                  </tr>
                ))
              : !isLoading && (
                  <tr>
                    <td colSpan="4" className="text-center p-4 text-gray-500">
                      No Data Found!
                    </td>
                  </tr>
                )}
          </tbody>
        </table>

        {!isLoading && data.length ? (
          <Pagination
            currentPage={currentPage}
            totalPages={lastPage}
            onPageChange={handlePageChange}
          />
        ) : null}
      </div>

      {showSidebar && (
        <SidebarPortal className="fixed inset-0 bg-gray-900 bg-opacity-50" />
      )}
    </>
  );
};

export default Testimonials;

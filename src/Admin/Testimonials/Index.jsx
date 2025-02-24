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
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const Testimonials = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [isLoadingTableData, setIsLoadingTableData] = useState(false);
  const [isSitebarFormButtonLoading, setIsSitebarFormButtonLoading] =
    useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [enableEdit, setenableEdit] = useState(false);
  const [showEditEnableImage, setEditEnableImage] = useState(null);
  const [showEditEnableVideo, setEditEnableVideo] = useState(null);
  const [errors, setErrors] = useState({});
  const [editId, setEditId] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);

  var nameRef = useRef(null);
  var iframeRef = useRef(null);
  var designationRef = useRef(null);
  var descriptionRef = useRef(null);
  var imageRef = useRef(null);
  var videoRef = useRef(null);

  useEffect(() => {
    listHandler();
  }, [currentPage]);

  const listHandler = async (search = "") => {
    try {
      setIsLoading(true);
      var response = await Request(
        "admin/testimonials?search=" + search + "&page=" + currentPage,
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
    formData.append("video", videoRef.current.files[0]);
    formData.append("iframe_url", iframeRef.current.value);

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
      if (response.data.image) {
        setEditEnableImage(CONFIG.VITE_APP_STORAGE + response.data.image);
      }
      if (response.data.video) {
        setEditEnableVideo(CONFIG.VITE_APP_STORAGE + response.data.video);
      }
      nameRef.current.value = response.data.name;
      designationRef.current.value = response.data.destination;
      descriptionRef.current.value = response.data.description;
      iframeRef.current.value = response.data.iframe_url;
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
    formData.append("iframe_url", iframeRef.current.value);
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

  const findHandler = async (e) => {
    const searchTerm = e.target.value.toLowerCase();
    listHandler(searchTerm);
  };

  return (
    <>
      <div className="flex title_col justify-between items-center">
        <h4 className="page_title">Testimonials</h4>
        <button
          className="btn ml-auto btn_primary btn-sm"
          onClick={addCategoryHandler}
        >
          Add Testimonial
        </button>
      </div>

      <div className="card bg-white mt-4 card_style1">
        <div className="flex items-center">
          <h5 className="mb-0">All Testimonials</h5>

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
              <th className="border border-gray-300 p-2 text-left">
                Thumbnail
              </th>
              <th className="border border-gray-300 p-2 text-left">Name</th>
              <th className="border border-gray-300 p-2 text-left">
                Designation
              </th>
              <th className="border border-gray-300 p-2 text-left">
                Description
              </th>
              <th className="border border-gray-300 p-2 text-left">Iframe</th>
              {/* <th className="border border-gray-300 p-2 text-left">Show</th> */}
              <th className="border border-gray-300 p-2 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {isLoading && (
              <tr className="border-b border-gray-200">
                <td colSpan={6}>
                  <div className="text-center ">
                    <ScaleLoader color="#ddd" className="w-full" />
                  </div>
                </td>
              </tr>
            )}

            {!isLoading && data.length
              ? data.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-2 px-4">
                      {item.image ? (
                        <img
                          src={CONFIG.VITE_APP_STORAGE + item.image}
                          className="w-[60px] h-[60px] object-contain border"
                          alt={item.name + " image"}
                        />
                      ) : (
                        <video
                          className="w-[200px] h-[80px] object-contain border"
                          src={CONFIG.VITE_APP_STORAGE + item.video}
                          alt={item.name + " video"}
                          controls
                        />
                      )}
                    </td>
                    <td className="py-2 px-4">{item.name}</td>
                    <td className="py-2 px-4">{item.destination}</td>
                    <td className="py-2 px-4">{item.description}</td>
                    <td className="py-2 px-4">
                      {item.iframe_url ? item.iframe_url : "Not Available"}
                    </td>
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
                        <RiDeleteBin6Line size={18} className="text-red-500" />
                      </button>
                    </td>
                  </tr>
                ))
              : !isLoading && (
                  <tr>
                    <td colSpan="4" className="no_record text-center py-4">
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
        <>
          <SidebarPortal className="portal">
            <SideModal
              onCancel={cancelHandler}
              onSubmit={enableEdit ? updateHandler : addSubmitHandler}
              isLoading={isSitebarFormButtonLoading}
            >
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Select Thumbnail
                    <small class="size block font-[400] text-[#888]">
                      (Size 1600px x 400px)
                    </small>
                  </label>
                  <input
                    ref={imageRef}
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
                  Select Video
                    {/* <small class="size block font-[400] text-[#888]">(Size 1600px x 400px)</small> */}
                  </label>
                  <input
                    ref={videoRef}
                    className="border rounded px-3 py-2 w-full"
                    type="file"
                    placeholder="Enter Title"
                  />
                  {showEditEnableVideo && (
                    <video
                      src={showEditEnableVideo}
                      className="h-[100px] w-[150px] object-contain border mt-1"
                      controls
                    />
                  )}
                  {errors.image && (
                    <span className="text-red-500">{errors.image}</span>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Iframe Url
                  </label>
                  <input
                    ref={iframeRef}
                    className="border rounded px-3 py-2 w-full"
                    type="text"
                    placeholder="Enter Video Iframe Url"
                  />
                  {errors.iframe_url && (
                    <span className="text-red-500">
                      {errors.iframe_url && "The Iframe field is required"}
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Name*
                  </label>
                  <input
                    ref={nameRef}
                    className="border rounded px-3 py-2 w-full"
                    type="text"
                    placeholder="Enter Name"
                  />
                  {errors.name && (
                    <span className="text-red-500">
                      {errors.name && "The Name field is required"}
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Designation*
                  </label>
                  <input
                    ref={designationRef}
                    className="border rounded px-3 py-2 w-full"
                    type="text"
                    placeholder="Enter Designation"
                  />
                  {errors.destination && (
                    <span className="text-red-500">
                      {errors.destination &&
                        "The Designation field is required"}
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Message*
                  </label>
                  <textarea
                    ref={descriptionRef}
                    className="border rounded px-3 py-2 w-full"
                    type="text"
                    placeholder="Enter Message"
                    rows={3}
                  />
                  {errors.description && (
                    <span className="text-red-500">
                      {errors.description &&
                        "The Message field is required"}
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

export default Testimonials;

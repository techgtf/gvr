import React, { useEffect, useRef, useState } from "react";
import CustomDropdown from "common/Custom_Dropdown/CustomDropdown";
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from "common/Portal/Backdrop";
import SideModal from "../../components/Modal/SideModal/Index";
import * as CONFIG from "../../../../config";
import Loader from "common/Loader/loader";
import { toast } from "react-toastify";
import Pagination from "common/Pagination/Pagination";
import Request from "root/config/Request";
import ReactQuill from "react-quill";
import { Link, useAsyncError } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";

import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const statusOptions = [
  { label: "Active", value: "1" },
  { label: "Hide", value: "0" },
];

const Timeline = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [showSidebar, setShowSidebar] = useState(false);
  const [editId, setEditId] = useState(false);
  const [blogData, setBlogData] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState();
  const titleRef = useRef(null);
  const shortDescriptionRef = useRef(null);
  const descriptionRef = useRef(null);
  const blogCategoryRef = useRef(null);
  const imageRef = useRef(null);
  const [isLoadingTableData, setIsLoadingTableData] = useState(false);
  const [showEditEnableImage, setShowEditEnableImage] = useState("");

  const updateStatusHandler = async (id, selectedStatus) => {
    try {
      const formData = new FormData();
      formData.append("status", selectedStatus);

      var response = await Request(
        "admin/blog/" + id + "/status",
        "POST",
        formData
      );

      if (response.status && response.statusCode == 403) {
        setErrors(response.errors);
        toast.error(response.message);
      } else if (response.status && response.statusCode == 200) {
        toast.success(response.message);
      }
    } catch (error) {
    } finally {
    }
  };

  useState(() => {
    const blogSubCategory = async () => {
      try {
        var response = await Request("admin/blog-category", "GET");
        if (response.status && response.statusCode === 200) {
          setBlogCategory(response.data.data);
        }
      } catch (err) {}
    };

    blogSubCategory();
  }, []);

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

    try {
      const formData = new FormData();
      formData.append("heading", titleRef.current.value);
      formData.append("short_description", shortDescriptionRef.current.value);
      formData.append("description", descriptionRef.current.value);
      formData.append("category", blogCategoryRef.current.value);
      formData.append("image", imageRef.current.files[0]);

      var response = await Request("admin/blog", "POST", formData);

      if (response.status && response.statusCode == 403) {
        setErrors(response.errors);
        throw new Error(response.message);
      } else if (response.status && response.statusCode == 200) {
        listHandler();
        cancelHandler();
        resetFields();
        return toast.success(response.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const editHandler = async (id) => {
    try {
      var response = await Request("admin/blog/" + id, "GET");

      if (response.status && response.statusCode === 200) {
        setBlogData(response.data);

        setShowEditEnableImage(CONFIG.VITE_APP_STORAGE + response.data.image);

        setEditId(id);
        setenableEdit(true);
        setShowSidebar(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const cancelHandler = () => {
    setShowSidebar(false);
  };

  const deleteHandler = async (id) => {
    try {
      var response = await Request("admin/timeline/" + id, "DELETE");
      if (response.status && response.statusCode === 200) {
        toast.success(response.message);
        listHandler();
      } else {
        toast.error(response.message);
      }
    } catch (error) {
    } finally {
    }
  };

  const listHandler = async (search = "") => {
    setIsLoadingTableData(true);
    var response = await Request(
      "admin/timeline?search=" + search + "&page=" + currentPage,
      "GET"
    );
    if (!response.status && response.statusCode !== 200) {
      return;
    }

    setData(response.data.data);
    setLastPage(response.data.last_page);
    setIsLoadingTableData(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const updateHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("heading", titleRef.current.value);
    formData.append("short_description", shortDescriptionRef.current.value);
    formData.append("description", descriptionRef.current.value);
    formData.append("category", blogCategoryRef.current.value);
    if (imageRef.current.files[0]) {
      formData.append("image", imageRef.current.files[0]);
    }

    var response = await Request(
      "admin/blog/" + editId + "/update",
      "POST",
      formData
    );

    if (response.status && response.statusCode === 200) {
      listHandler();
      cancelHandler();
    } else if (response.status && response.statusCode === 403) {
      setErrors(response.errors);
    }
  };

  useEffect(() => {
    if (blogData) {
      titleRef.current.value = blogData.heading;
      shortDescriptionRef.current.value = blogData.short_description;
      descriptionRef.current.value = blogData.description;
      blogCategoryRef.current.value = blogData.category;
      setDescValue(blogData.description);
    }
    listHandler();
  }, [currentPage, blogData]);

  const findHandler = async (e) => {
    const searchTerm = e.target.value.toLowerCase();
    listHandler(searchTerm);
  };

  return (
    <>
      <div className="title_col flex justify-between items-center">
        <h4 className="page_title">Timeline</h4>
        {/* <button className="btn ms-auto btn_primary btn-sm" onClick={addCategoryHandler}>Add Blog</button> */}
        <div className="flex gap-3">
          <Link
            className="btn ms-auto btn_primary btn-sm"
            to={`${CONFIG.ADMIN_ROOT}timeline/add`}
          >
            Add Timeline
          </Link>

          <Link
            className="btn ms-auto btn_primary btn-sm"
            to={`${CONFIG.ADMIN_ROOT}timeline/images`}
          >
            Add Images
          </Link>
        </div>
      </div>

      <div className="card bg-white mt-4 card_style1">
        <div className="flex items-center">
          <h5 className="mb-0 flex items-center">All Timeline </h5>

          <div className="searchInput ms-auto">
            <input
              type="text"
              className="form-control border border-gray-200"
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

        <table className="mt_40 w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              {/* <th className="border border-gray-300 p-2 text-left">
                Thumbnail
              </th> */}
              <th className="border border-gray-300 p-2 text-left">Title</th>
              <th className="border border-gray-300 p-2 text-left">Year</th>
              <th className="border border-gray-300 p-2 text-left">Location</th>
              <th className="border border-gray-300 p-2 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {isLoadingTableData && (
              <tr className="border-b border-gray-200">
                <td colSpan={4}>
                  <div className="text-center">
                    <ScaleLoader color="#ddd" className="w-100" />
                  </div>
                </td>
              </tr>
            )}

            {!isLoadingTableData && data.length
              ? data.map((item) => (
                  <tr key={item.id} className="border-b border-gray-200">
                    {/* <td>
                      <img
                        className="img-fluid w-[100px] border"
                        src={CONFIG.VITE_APP_STORAGE + item.image}
                      />
                    </td> */}
                    <td>{item.title}</td>
                    <td>{item.year}</td>
                    <td>{item.location}</td>

                    <td className="flex items-center">
                      <Link
                        className="btn action_btn"
                        to={CONFIG.ADMIN_ROOT + "timeline/edit/" + item.id}
                      >
                        <AiOutlineEdit size={22} />
                      </Link>

                      <button
                        className="btn action_btn"
                        onClick={() => deleteHandler(item.id)}
                      >
                        <RiDeleteBin6Line size={18} className="text-red-500" />
                      </button>
                    </td>
                  </tr>
                ))
              : !isLoadingTableData && (
                  <tr>
                    <td colSpan="4">
                      <h5 className="no_record">No Data Found!</h5>
                    </td>
                  </tr>
                )}
          </tbody>
        </table>

        {!isLoadingTableData && data.length ? (
          <Pagination
            currentPage={currentPage}
            totalPages={lastPage}
            onPageChange={handlePageChange}
          />
        ) : null}
      </div>
    </>
  );
};

export default Timeline;

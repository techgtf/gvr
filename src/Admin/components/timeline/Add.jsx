import React, { useEffect, useRef, useState } from "react";
import SidebarPortal from "common/Portal/SidebarPortal";
import Loader from "common/Loader/loader";
import { toast } from "react-toastify";
import Pagination from "common/Pagination/Pagination";
import { useNavigate } from "react-router-dom";
import Request from "root/config/Request";
import ReactQuill from "react-quill";

import { useAsyncError } from "react-router-dom";

import * as CONFIG from "../../../../config";

const statusOptions = [
  { label: "Active", value: "1" },
  { label: "Hide", value: "0" },
];

const AddTimeline = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [showSidebar, setShowSidebar] = useState(false);
  const [enableEdit, setenableEdit] = useState(false);
  const [errors, setErrors] = useState({});
  const [editId, setEditId] = useState(false);
  const [blogCategory, setBlogCategory] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [showEditEnableImage, setShowEditEnableImage] = useState(null);
  const [blogData, setBlogData] = useState(null);

  const titleRef = useRef(null);
  const yearRef = useRef(null);
  const locationRef = useRef(null);
  const imageRef = useRef(null);

  const navigate = useNavigate();

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
    setErrors({});
  };

  const addCategoryHandler = () => {
    setShowSidebar(!showSidebar);
  };

  const addSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      const formData = new FormData();
      formData.append("title", titleRef.current.value);
      formData.append("year", yearRef.current.value);
      formData.append("location", locationRef.current.value);
      formData.append("image", imageRef.current.files[0]);

      var response = await Request("admin/timeline", "POST", formData);

      if (response.status && response.statusCode == 403) {
        setErrors(response.errors);
        setIsLoading(false);
        throw new Error(response.message);
      } else if (response.status && response.statusCode == 200) {
        resetFields();
        setIsLoading(false);
        toast.success(response.message);
        return navigate(CONFIG.ADMIN_ROOT + "timeline");
      }
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  if (isLoading) {
    return <Loader />; // Use the Loader component
  }

  return (
    <>
      <div className="title_col flex justify-between items-center">
        <h4 className="page_title">Add Timeline</h4>
      </div>

      <div className="card mt-4 card_style1 bg-white">

        <form onSubmit={addSubmitHandler} >
          <div className="mb_15 form-group">
            <label className="block font-medium">Title*</label>
            <input
              ref={titleRef}
              type="text"
              placeholder="Enter Title"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.title && (
              <div className="errMsg text-red-500">{errors.title}</div>
            )}
          </div>

          <div className="mb_15 form-group">
            <label className="block font-medium">Year*</label>
            <input
              ref={yearRef}
              type="text"
              placeholder="Enter Year"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.year && (
              <div className="errMsg text-red-500">{errors.year}</div>
            )}
          </div>

          <div className="mb_15 form-group">
            <label className="block font-medium">Location*</label>
            <input
              ref={locationRef}
              type="text"
              placeholder="Enter Location"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.location && (
              <div className="errMsg text-red-500">{errors.location}</div>
            )}
          </div>

          <div className="mb_15 form-group">
            <label className="block font-medium">
              Thumbnail* <small className="size">(Size 1200px x 750px)</small>
            </label>
            <input
              ref={imageRef}
              required
              type="file"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.thumbnail && (
              <div className="errMsg text-red-500">{errors.thumbnail}</div>
            )}
            {showEditEnableImage && (
              <img width="100" src={showEditEnableImage} />
            )}
          </div>

          <button
            type="submit"
            className="btn btn_primary px-4 py-2 rounded text-white bg-blue-600 hover:bg-blue-700"
          >
            Add Timeline
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTimeline;

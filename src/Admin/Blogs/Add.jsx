import React, { useEffect, useRef, useState } from "react";
import CustomDropdown from "../../common/Custom_Dropdown/CustomDropdown";
import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from "../../common/Portal/Backdrop";
import SideModal from "../components/Modal/SideModal/Index";
import Loader from "common/Loader/loader";
import { toast } from "react-toastify";
import Pagination from "common/Pagination/Pagination";
import { useNavigate } from "react-router-dom";
import Request from "root/config/Request";
import ReactQuill from "react-quill";
import Button from "../../common/Button/Button";

import { useAsyncError } from "react-router-dom";

import * as CONFIG from "../../../config";

const statusOptions = [
  { label: "Active", value: "1" },
  { label: "Hide", value: "0" },
];

const AddBlog = () => {
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
  const shortDescriptionRef = useRef(null);
  const descriptionRef = useRef(null);
  const blogCategoryRef = useRef(null);
  const imageRef = useRef(null);
  const thumbnailRef = useRef(null);

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
      formData.append("heading", titleRef.current.value);
      formData.append("short_description", shortDescriptionRef.current.value);
      formData.append("description", descriptionRef.current.value);
      // formData.append("category", blogCategoryRef.current.value);
      formData.append("image", imageRef.current.files[0]);
      formData.append("thumbnail", thumbnailRef.current.files[0]);

      var response = await Request("admin/blog", "POST", formData);

      if (response.status && response.statusCode == 403) {
        setErrors(response.errors);
        setIsLoading(false);
        throw new Error(response.message);
      } else if (response.status && response.statusCode == 200) {
        resetFields();
        setIsLoading(false);
        toast.success(response.message);
        return navigate(CONFIG.ADMIN_ROOT + "blogs");
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
        <h4 className="page_title">Add Blog</h4>
        <button
          className="btn btn_primary btn-sm ml-auto"
          onClick={addCategoryHandler}
        >
          Add Blog
        </button>
      </div>

      <div className="card mt-4 card_style1 bg-white">
        <div>
          <h5>Add Blog</h5>
        </div>

        <form onSubmit={addSubmitHandler} className="mt_40">
          <div className="mb_15 form-group">
            <label className="block font-medium">Title*</label>
            <input
              ref={titleRef}
              type="text"
              placeholder="Enter Blog Title"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.heading && (
              <div className="errMsg text-red-500">{errors.heading}</div>
            )}
          </div>

          <div className="mb_15 form-group">
            <label className="block font-medium">Short Description*</label>
            <textarea
              ref={shortDescriptionRef}
              required
              placeholder="Enter Short Description"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.short_description && (
              <div className="errMsg text-red-500">
                {errors.short_description}
              </div>
            )}
          </div>

          <div className="mb_15 form-group">
            <label className="block font-medium">Description*</label>
            <ReactQuill ref={descriptionRef} placeholder="Enter Description" />
            {errors.description && (
              <div className="errMsg text-red-500">{errors.description}</div>
            )}
          </div>

          {/* <div className="mb_15 form-group">
            <label className="block font-medium">Blog Category</label>
            <select
              ref={blogCategoryRef}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option defaultValue={true} disabled>
                Select Blog Category
              </option>
              {blogCategory?.map((category, index) => (
                <option key={index} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.category && (
              <div className="errMsg text-red-500">{errors.category}</div>
            )}
          </div> */}

          <div className="mb_15 form-group">
            <label className="block font-medium">
              Thumbnail* <small className="size">(Size 1200px x 750px)</small>
            </label>
            <input
              ref={thumbnailRef}
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

          <div className="mb_15 form-group">
            <label className="block font-medium">
              Image* <small className="size">(Size 1200px x 750px)</small>
            </label>
            <input
              ref={imageRef}
              required
              type="file"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.image && (
              <div className="errMsg text-red-500">{errors.image}</div>
            )}
            {showEditEnableImage && (
              <img width="100" src={showEditEnableImage} />
            )}
          </div>

          <button
            type="submit"
            className="btn btn_primary px-4 py-2 rounded text-white bg-blue-600 hover:bg-blue-700"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBlog;

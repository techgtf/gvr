import React, { useEffect, useRef, useState } from "react";
import Loader from "common/Loader/loader";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import Request from "root/config/Request";
import ReactQuill from "react-quill";
import Button from "common/Button/Button";

import * as CONFIG from "../../../config";

const EditBlog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [thumbnailPreview, setThumbnailPreview] = useState(null); 
  const [imagePreview, setImagePreview] = useState(null); 

  const [data, setData] = useState({
    heading: "",
    short_description: "",
    description: "",
    image: "",
    thumbnail:'',
    previewImage: "",
  });
  const [errors, setErrors] = useState({});
  const [blogCategory, setBlogCategory] = useState(null);

  const navigate = useNavigate();
  const params = useParams().id;

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

  useState(() => {
    const fetchBlogData = async () => {
      setIsLoading(true);
      try {
        var response = await Request(`admin/blog/${params}`, "GET");
        if (response.status && response.statusCode === 200) {
          setData((prevData) => ({
            ...prevData,
            ...response.data,
            thumbnail: response.data.thumbnail,
            image: response.data.image,
          }));
          setThumbnailPreview(CONFIG.VITE_APP_STORAGE + response.data.thumbnail);
          setImagePreview(CONFIG.VITE_APP_STORAGE + response.data.image);
          setIsLoading(false);
        } else {
          setData({});
        }
      } catch (err) {
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogData();
  }, [params]);

  const updateSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("heading", data.heading);
      formData.append("description", data.description);
      formData.append("category", data.category);
      
      if(data.image instanceof File){
        formData.append("image", data.image);
      }

      if(data.thumbnail instanceof File){
        formData.append("thumbnail", data.thumbnail);
      }

      var response = await Request(
        `admin/blog/${params}/update`,
        "POST",
        formData
      );

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

  const changeHandler = (e) => {
    const { name, value, files } = e.target;
    debugger

    if (files && files.length) {
      if(name === 'thumbnail'){
        setData((prevData) => ({
          ...prevData,
          thumbnail: files[0],
        }));
        setThumbnailPreview(URL.createObjectURL(files[0]))
      }
      if(name === 'image'){
        setData((prevData) => ({
          ...prevData,
          image: files[0],
          previewImage: "",
        }));
        setImagePreview(URL.createObjectURL(files[0]))
      }
    } else {
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const resetFields = () => {
    setErrors({});
  };

  if (isLoading) {
    return <Loader />; // Use the Loader component
  }

  const setDescription = (value) => {
    setData((prevData) => ({
      ...prevData,
      description: value,
    }));
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-semibold">Edit Blog</h4>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mt-4">
        <div className="mb-4">
          <h5 className="text-lg font-medium">Edit Blog</h5>
        </div>

        <form onSubmit={updateSubmitHandler} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title*
            </label>
            <input
              type="text"
              name="heading"
              placeholder="Enter Blog Title"
              value={data.heading}
              onChange={changeHandler}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary p-2"
            />
            {errors.heading && (
              <p className="text-red-500 text-sm">{errors.heading}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description*
            </label>
            <ReactQuill
              placeholder="Enter Description"
              value={data.description}
              name="description"
              onChange={setDescription}
              className="mt-1"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Thumbnail*{" "}
              <span className="text-xs text-gray-500">
                (Size 1200px x 750px)
              </span>
            </label>
            <input
              type="file"
              name="thumbnail"
              onChange={changeHandler}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary p-2"
            />
            {errors.thumbnail && (
              <p className="text-red-500 text-sm">{errors.thumbnail}</p>
            )}
            {thumbnailPreview && (
              <img
                src={thumbnailPreview}
                alt="Preview"
                className="mt-2 w-24 h-auto rounded-md shadow-sm"
              />
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image*{" "}
              <span className="text-xs text-gray-500">
                (Size 1200px x 750px)
              </span>
            </label>
            <input
              type="file"
              name="image"
              onChange={changeHandler}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary p-2"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image}</p>
            )}
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-2 w-24 h-auto rounded-md shadow-sm"
              />
            )}
          </div>

          <button
            type="submit"
            className="mt-4 bg-primary text-white px-6 py-2 rounded-lg shadow-md hover:bg-primary-dark transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
};

export default EditBlog;

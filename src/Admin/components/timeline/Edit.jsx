import React, { useEffect, useRef, useState } from "react";
import Loader from "common/Loader/loader";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import Request from "root/config/Request";
import ReactQuill from "react-quill";
import Button from "common/Button/Button";

import * as CONFIG from "../../../../config";

const EditTimeline = () => {
  const [isLoading, setIsLoading] = useState(false);
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
        var response = await Request(`admin/timeline/${params}`, "GET");
        if (response.status && response.statusCode === 200) {
          setData((prevData) => ({
            ...prevData,
            ...response.data,
            image:response.data.image
            // thumbnailImage: response.data.image,
            // previewImage: response.data.image,
          }));
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
    debugger
    setIsLoading(true);

    console.log('data.image',data.image);

    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("year", data.year);
      formData.append("location", data.location);

      if(data.image instanceof File){
        formData.append("image", data.image);
      }

      var response = await Request(
        `admin/timeline/${params}/update`,
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
        return navigate(CONFIG.ADMIN_ROOT + "timeline");
      }
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  const changeHandler = (e) => {
    const { name, value, files } = e.target;

    if (files && files.length) {
      setData((prevData) => ({
        ...prevData,
        image: files[0],
        previewImage: "",
      }));
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
        <h4 className="text-xl font-semibold">Edit Timeline</h4>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mt-4">
        <div className="mb-4">
          <h5 className="text-lg font-medium">Edit Timeline</h5>
        </div>

        <form onSubmit={updateSubmitHandler} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title*
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter Title"
              value={data.title}
              onChange={changeHandler}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary p-2"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Year*
            </label>
            <input
              type="text"
              name="year"
              placeholder="Enter Year"
              value={data.year}
              onChange={changeHandler}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary p-2"
            />
            {errors.year && (
              <p className="text-red-500 text-sm">{errors.year}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location*
            </label>
            <input
              type="text"
              name="location"
              placeholder="Enter Location"
              value={data.location}
              onChange={changeHandler}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary p-2"
            />
            {errors.location && (
              <p className="text-red-500 text-sm">{errors.location}</p>
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
              name="image"
              onChange={changeHandler}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary p-2"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image}</p>
            )}
            {/* <img
                src={CONFIG.VITE_APP_STORAGE + data.image}
                alt="Preview"
                className="mt-2 w-[200px] h-auto rounded-md shadow-sm border"
              /> */}
            {data.image && (
              <img
                src={
                  data.image instanceof File
                    ? URL.createObjectURL(data.image)
                    : CONFIG.VITE_APP_STORAGE + data.image
                }
                alt="Preview"
                className="mt-2 w-[200px] h-auto rounded-md shadow-sm border"
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

export default EditTimeline;

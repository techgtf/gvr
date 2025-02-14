import React, { useRef, useState, useEffect } from "react";

import ReactQuill from "react-quill";
import * as CONFIG from "../../../../config";
import Button from "common/Button/Button";
import Request from "root/config/Request";
import JsonRequest from "root/config/JsonRequest";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScaleLoader from "react-spinners/ScaleLoader";

const Sections = React.memo((props) => {
  const section_type = props.section_type;
  const sectiontitle = props.title;

  const [isLoading, setIsLoading] = useState(true);
  const [enableUpdate, setEnableUpdate] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [sectionSequence, setSectionSequence] = useState("");

  const [errors, setErrors] = useState({});

  const projectid = props.projectid;
  const [content, setContent] = useState("");
  const handleChange = (value) => {
    setContent(value);
  };
  const [sectionFormdata, setSectionFormdata] = useState({
    // Initialize your form data state
    heading: "",
    seq: "",
    id: "",
    sub_heading: "",
    description: "",
    image_preview: "",
    image_alt: "",
    editid: "",
  });

  const basicSubmitHandler = async (e) => {
    e.preventDefault();
    setSubmitLoading(true);

    const formData = new FormData();
    formData.append("heading", e.target["heading"].value);
    if (e.target["sub_heading"]) {
      formData.append("sub_heading", e.target["sub_heading"].value);
    }
    formData.append("project_id", projectid);
    formData.append("section_type", section_type);
    if (e.target["image"]) {
      if (e.target["image"].files[0]) {
        formData.append("image", e.target["image"].files[0]);
      }
    }
    if (e.target["image_alt"]) {
      formData.append("image_alt", e.target["image_alt"].value);
    }
    formData.append("description", content);
    var response = await Request("admin/project-section", "POST", formData);
    if (response.status && response.statusCode === 200) {
      getsectionHandler();
    } else if (response.status && response.statusCode === 403) {
      setErrors(response.errors);
      toast.error(response.message);
    }

    setSubmitLoading(false);
    toast.success(response.message);
  };

  const updateSubmitHandler = async (e) => {
    e.preventDefault();

    setSubmitLoading(true);
    const formData = new FormData();

    if (sectionFormdata.seq) {
      formData.append("seq", sectionFormdata.seq);
    }
    formData.append("heading", e.target["heading"].value);
    if (e.target["sub_heading"]) {
      formData.append("sub_heading", e.target["sub_heading"].value);
    }
    formData.append("project_id", projectid);
    if (e.target["image"]) {
      if (e.target["image"].files[0]) {
        formData.append("image", e.target["image"].files[0]);
      }
    }
    if (e.target["image_alt"]) {
      formData.append("image_alt", e.target["image_alt"].value);
    }

    formData.append("description", content);
    var response = await Request(
      "admin/project-section/" + sectionFormdata.editid + "/update",
      "POST",
      formData
    );
    if (
      (response.status && response.statusCode === 403) ||
      response.statusCode === 500
    ) {
      setErrors(response.errors);
      toast.error(response.message);
    } else {
      getsectionHandler();
    }
    setSubmitLoading(false);

    toast.success(response.message);
  };

  const getsectionHandler = async () => {
    // setIsLoading(true);
    setSubmitLoading(true);
    var object = {
      project_id: projectid,
      section_type: section_type,
    };
    var response = await JsonRequest(
      "admin/show-by-project-with-sectionType",
      "POST",
      object
    );

    // setIsLoading(false);

    if (response.status && response.statusCode == 200) {
      setEnableUpdate(true);
      var data = response.data;

      setContent(data.description);
      setSectionSequence(data.seq);
      setSectionFormdata((state) => ({
        ...state,
        heading: data.heading,
        sub_heading: data.sub_heading,
        image_alt: data.image_alt,
        description: data.description,
        editid: data.id,
        seq: data.seq,
      }));
      if (data.image) {
        sectionFormdata.image_preview = CONFIG.VITE_APP_STORAGE + data.image;
      }
    }
    setSubmitLoading(false);
  };

  const handleSectionChange = (e) => {
    setSectionFormdata({ ...sectionFormdata, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getsectionHandler();

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSeq = (e) => {};

  const handleSectionSequenceChange = async (e) => {
    setSectionSequence(e.target.value);
    var formdata = {
      section_id: sectionFormdata.editid,
      seq: e.target.value,
    };
    var response = await JsonRequest(
      "admin/project-section-sequence",
      "POST",
      formdata
    );
    if (response.status && response.statusCode === 200) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6 mt-3">
        <form
          onSubmit={enableUpdate ? updateSubmitHandler : basicSubmitHandler}
        >
          <h6 className="text-lg font-semibold mb-4">{sectiontitle}</h6>

          {sectionFormdata.editid && (
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700">
                Section Order
              </label>
              <input
                type="number"
                name="seq"
                value={sectionSequence}
                placeholder="Enter sequence number"
                onChange={handleSectionSequenceChange}
                className="w-full border rounded-md p-2 mt-1"
              />
              {errors.heading && (
                <p className="text-red-500 text-sm">{errors.heading}</p>
              )}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Section Heading*
              </label>
              <input
                type="text"
                name="heading"
                value={sectionFormdata.heading}
                placeholder="Enter section heading"
                onChange={handleSectionChange}
                className="w-full border rounded-md p-2 mt-1"
              />
              {errors.heading && (
                <p className="text-red-500 text-sm">{errors.heading}</p>
              )}
            </div>

            {props.sub_heading && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Section Sub-Heading
                </label>
                <input
                  type="text"
                  name="sub_heading"
                  value={sectionFormdata.sub_heading}
                  placeholder="Enter section sub heading"
                  onChange={handleSectionChange}
                  className="w-full border rounded-md p-2 mt-1"
                />
                {errors.sub_heading && (
                  <p className="text-red-500 text-sm">{errors.sub_heading}</p>
                )}
              </div>
            )}
          </div>

          {props.textarea && (
            <div className="mt-5">
              <label className="block text-sm font-medium text-gray-700">
                Project Overview*
              </label>
              <ReactQuill
                ref={props.ref}
                name="description"
                value={content}
                onChange={handleChange}
                className="mt-2"
              />
              {errors.description && (
                <p className="text-red-500 text-sm">{errors.description}</p>
              )}
            </div>
          )}

          {props.image && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Image*
                </label>
                <input
                  type="file"
                  name="image"
                  className="w-full border rounded-md p-2 mt-1"
                />
                {errors.image && (
                  <p className="text-red-500 text-sm">{errors.image}</p>
                )}
                {sectionFormdata.image_preview && (
                  <img
                    width="100"
                    src={sectionFormdata.image_preview}
                    alt="Preview"
                    className="mt-2"
                  />
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Image Alt
                </label>
                <input
                  type="text"
                  name="image_alt"
                  value={sectionFormdata.image_alt}
                  placeholder="Enter image alt text"
                  onChange={handleSectionChange}
                  className="w-full border rounded-md p-2 mt-1"
                />
                {errors.image_alt && (
                  <p className="text-red-500 text-sm">{errors.image_alt}</p>
                )}
              </div>
            </div>
          )}

          <div className="mt-6">
            {submitLoading ? (
              <button
                type="button"
                disabled
                className="w-full bg-gray-400 text-white py-2 rounded-md cursor-not-allowed"
              >
                Please Wait...
              </button>
            ) : (
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-200"
              >
                Save Section
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
});

export default Sections;

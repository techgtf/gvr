import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CustomRadio from "common/CustomRadio/Index";
import Button from "common/Button/Button";
import ProjectSteps from "../components/ProjectSteps/Index";

import "../assets/css/admin.css";
import Loader from "common/Loader/loader";

import Request from "root/config/JsonRequest";
import * as CONFIG from "../../../config";

import {
  getTypologyByCategory,
  getSubTypologyByTypology,
  projectStatusList,
} from "root/config/function";
import { useSelector } from "react-redux";

const AddPlatter = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [categorylist, setCategorylist] = useState([]);

  const [typologyList, setTypologyList] = useState([]);
  const [projectStatus, setProjectStatus] = useState([]);
  const [subtypologyList, setSubtypologyList] = useState([]);
  const [checkedCategory, setCheckedCategory] = useState("");
  const [checkedTypology, setCheckedTypology] = useState("");
  const [checkedSubTypology, setCheckedSubTypology] = useState("");
  const [checkedStatus, setCheckedStatus] = useState("");

  const [formFields, setFormFields] = useState({
    // Initialize your form data state
    category: "",
    typology: "",
    cities: "",
    sub_typology: "",
    name: "",
    meta_title: "",
    meta_description: "",
    meta_keyword: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const cities = useSelector((state) => state.projects.allCities);

  const basicSubmitHandler = async (e) => {
    e.preventDefault();
    var response = await Request("admin/platter-page", "POST", formFields);
    if (response.status && response.statusCode === 403) {
      setErrors(response.errors);
    } else if (response.status && response.statusCode === 200) {
      navigate(
        CONFIG.ADMIN_ROOT + "platter-page/" + response.data.id + "/edit"
      );
    }
  };

  const listcategory = async () => {
    var response = await Request("admin/category", "GET");
    if (response.status && response.statusCode === 200) {
      setCategorylist(response.data.data);
    }
    setIsLoading(false);
  };

  const listProjectStatus = async () => {
    var response = await projectStatusList();
    if (response.status && response.statusCode === 200) {
      setProjectStatus(response.data);
    }
  };

  const fetchtypologyHandle = async (event) => {
    formFields.category = event.target.value;
    var response = await getTypologyByCategory(event.target.value);
    if (
      response.status &&
      response.statusCode === 200 &&
      response.data.data.length > 0
    ) {
      setTypologyList(response.data.data);
    } else {
      setTypologyList([]);
    }
  };
  const getSubTypologyByTypologyList = async (event) => {
    formFields.typology = event.target.value;

    var response = await getSubTypologyByTypology(event.target.value);
    if (
      response.status &&
      response.statusCode === 200 &&
      response.data.data.length > 0
    ) {
      setSubtypologyList(response.data.data);
    } else {
      setSubtypologyList([]);
    }
  };

  const handleCheckedStatus = (event) => {
    setCheckedStatus(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        listcategory(), listProjectStatus();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  if (isLoading) {
    return <Loader />; // Use the Loader component
  }

  return (
    <>
      <div className="flex title_col justify-between items-center">
        <h4 className="page_title">Add Project</h4>
      </div>

      <div className="property_wizard_listing flex">
        <div className="steps_area">
          <div className="steps_col">
            <div className="step filled">
              <NavLink
                to={`${CONFIG.ADMIN_ROOT}platter-page/add`}
                className="step-trigger"
              >
                <span className="circle">
                  <i className="mdi mdi-check"></i>
                </span>
                <span className="content">
                  <span className="title">Basic Details</span>
                  <span className="subtitle">Step 1</span>
                </span>
              </NavLink>
            </div>

            <div className="step">
              <NavLink
                to={`${CONFIG.ADMIN_ROOT}platter-page/banner`}
                className="step-trigger"
              >
                <span className="circle">
                  <i className="mdi mdi-check"></i>
                </span>
                <span className="content">
                  <span className="title">Banner</span>
                  <span className="subtitle">Step 2</span>
                </span>
              </NavLink>
            </div>
          </div>
        </div>

        {isLoading ? (
          "Loading ..... "
        ) : (
          <div className="px-12 form_col">
            <form onSubmit={basicSubmitHandler} className="space-y-4">
              <div className="card bg-white mb-4 p-4">
                <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="mb_20">
                    <label className="block">Category</label>
                    <select
                      className="border rounded px-3 py-2 w-full"
                      value={formFields.category}
                      onChange={fetchtypologyHandle}
                    >
                      <option value="">Select Category</option>
                      {categorylist &&
                        categorylist.map((item, key) => (
                          <option key={key} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                    </select>
                    {errors.developer_id}
                  </div>

                  <div className="mb_20">
                    <label className="block">Developer</label>
                    <select
                      className="border rounded px-3 py-2 w-full"
                      name="developer"
                      value={formFields.developer}
                      onChange={handleChange}
                    >
                      <option value="">Select Developer</option>
                      {/* {developerList &&
                        developerList.map((item, key) => (
                          <option key={key} value={item.id}>
                            {item.name}
                          </option>
                        ))} */}
                    </select>
                    {errors.developer_id}
                  </div>

                  <div className="mb_20">
                    <label className="block">Typology</label>
                    <select
                      className="form-control"
                      value={formFields.typology}
                      onChange={getSubTypologyByTypologyList}
                    >
                      <option value="">Select Typology</option>
                      {typologyList &&
                        typologyList.map((item, key) => (
                          <option key={key} value={item.typologies_id}>
                            {item.typology}
                          </option>
                        ))}
                    </select>
                    {errors.developer_id}
                  </div>

                  <div className="mb_20">
                    <label className="block">Sub Typology</label>
                    <select
                      name="sub_typology"
                      className="form-control"
                      value={formFields.sub_typology}
                      onChange={handleChange}
                    >
                      <option value="">Select Sub Typology</option>
                      {subtypologyList &&
                        subtypologyList.map((item, key) => (
                          <option key={key} value={item.sub_typologies_id}>
                            {item.sub_typology}
                          </option>
                        ))}
                    </select>
                    {errors.developer_id}
                  </div>

                  <div className="mb_20">
                    <label className="block">Cities</label>
                    <select
                      name="cities"
                      className="form-control"
                      value={formFields.cities}
                      onChange={handleChange}
                    >
                      <option value="">Select Cities</option>
                      {cities &&
                        cities.map((item, key) => (
                          <option key={key} value={item.id}>
                            {item.city}
                          </option>
                        ))}
                    </select>
                    {errors.developer_id}
                  </div>
                </div>
              </div>

              <div className="card p-4">
                <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="mb_20 col-span-2">
                    <label className="block">Project Name*</label>
                    <input
                      type="text"
                      placeholder="Enter project name"
                      value={formFields.name}
                      name="name"
                      onChange={handleChange}
                      className="form-control"
                    />
                    {errors.name}
                  </div>

                  <div className="mb_20">
                    <label className="block">Meta Title</label>
                    <input
                      type="text"
                      placeholder="Meta Title"
                      value={formFields.meta_title}
                      name="meta_title"
                      onChange={handleChange}
                      className="form-control"
                    />
                    {errors.ivr_no}
                  </div>

                  <div className="mb_20">
                    <label className="block">Meta Keyword</label>
                    <input
                      type="text"
                      placeholder="Enter Meta Keyword"
                      value={formFields.meta_keyword}
                      name="meta_keyword"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>

                  <div className="mb_20 col-span-2">
                    <label className="block">Enter Meta Description</label>
                    <input
                      type="text"
                      placeholder="Enter Meta Description"
                      value={formFields.meta_description}
                      name="meta_description"
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              <button className="btn btn_primary mt_20" type="submit">
                Next
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default AddPlatter;

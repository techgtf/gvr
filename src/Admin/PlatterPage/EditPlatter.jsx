import React, { useEffect, useState } from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import CustomRadio from "common/CustomRadio/Index";
import Button from "common/Button/Button";
import ProjectSteps from "../components/ProjectSteps/Index";
import "../assets/css/admin.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Request from "root/config/JsonRequest";
import * as CONFIG from "../../../config";

import {
  getTypologyByCategory,
  getSubTypologyByTypology,
  projectStatusList,
} from "root/config/function";
import { useSelector } from "react-redux";

const EditPlatter = () => {
  const [isLoading, setIsLoading] = useState(false);
  const platterid = useParams().platterid;

  const [categorylist, setCategorylist] = useState([]);
  const [developerList, setDeveloperList] = useState([]);

  const [typologyList, setTypologyList] = useState([]);
  const [subtypologyList, setSubtypologyList] = useState([]);

  const [formFields, setFormFields] = useState({
    // Initialize your form data state
    category: "",
    developer: "",
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

  const UpdateSubmitHandler = async (e) => {
    e.preventDefault();

    var response = await Request(
      `admin/platter-page/${platterid}/update`,
      "POST",
      formFields
    );
    if (response.status && response.statusCode === 403) {
      setErrors(response.errors);
      toast.error(response.message);
    } else if (response.status && response.statusCode === 200) {
      toast.success(response.message);
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
  };

  const listDeveloper = async () => {
    var response = await Request("admin/developer", "GET");
    if (response.status && response.statusCode === 200) {
      setDeveloperList(response.data.data);
    }
  };
  const getTypology = async (categories) => {
    var response = await getTypologyByCategory(categories);
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
  const fetchtypologyHandle = async (event) => {
    formFields.category = event.target.value;
    getTypology(event.target.value);
  };
  const getSubtypology = async (typology) => {
    var response = await getSubTypologyByTypology(typology);
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
  const getSubTypologyByTypologyList = async (event) => {
    formFields.typology = event.target.value;
    getSubtypology(event.target.value);
  };

  const getPlatterDetails = async (event) => {
    var response = await Request(`admin/platter-page/${platterid}/edit`, "GET");
    if (response.status && response.statusCode === 200) {
      getTypology(response.data.category);
      getSubtypology(response.data.typology);
      formFields.category = response.data.category;
      formFields.developer = response.data.developer;
      formFields.typology = response.data.typology;
      formFields.sub_typology = response.data.sub_typology;
      formFields.cities = response.data.cities;
      formFields.name = response.data.name;
      formFields.meta_title = response.data.meta_title;
      formFields.meta_keyword = response.data.meta_keyword;
      formFields.meta_description = response.data.meta_description;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await listcategory();
        await listDeveloper();

        await getPlatterDetails();
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  return (
    <>
    <div className="flex title_col justify-between items-center">
        <h4 className="page_title">Add Project</h4>
    </div>

    <div className="property_wizard_listing flex">
        <div className="steps_area">
            <div className="steps_col">
                <div className="step filled">
                    <NavLink to={`${CONFIG.ADMIN_ROOT}platter-page/${platterid}/edit`} className="step-trigger"> 
                        <span className="circle"><i className="mdi mdi-check"></i></span>
                        <span className="content">
                            <span className="title">Basic Details</span>
                            <span className="subtitle">Step 1</span>
                        </span>
                    </NavLink>   
                </div>

                <div className="step">
                    <NavLink to={`${CONFIG.ADMIN_ROOT}platter-page/${platterid}/banner`} className="step-trigger"> 
                        <span className="circle"><i className="mdi mdi-check"></i></span>
                        <span className="content">
                            <span className="title">Banner</span>
                            <span className="subtitle">Step 2</span>
                        </span>
                    </NavLink>   
                </div>
            </div>
        </div>

        {isLoading ? 'Loading ..... ' : 
        <div className="px-12 form_col">
            <form onSubmit={UpdateSubmitHandler} className="space-y-4">
                <div className="card mb-4 p-4">
                    <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mb_20">
                            <label className="block">Category</label>
                            <select className="form-control" value={formFields.category} onChange={fetchtypologyHandle}>
                                <option value="">Select Category</option>
                                {categorylist && categorylist.map((item, key) => (
                                    <option key={key} value={item.id}>{item.name}</option>
                                ))}
                            </select>
                            {errors.developer_id}
                        </div>

                        <div className="mb_20">
                            <label className="block">Developer</label>
                            <select className="form-control" name="developer" value={formFields.developer} onChange={handleChange}>
                                <option value="">Select Developer</option>
                                {developerList && developerList.map((item, key) => (
                                    <option key={key} value={item.id}>{item.name}</option>
                                ))}
                            </select>
                            {errors.developer_id}
                        </div>

                        <div className="mb_20">
                            <label className="block">Typology</label>
                            <select className="form-control" value={formFields.typology} onChange={getSubTypologyByTypologyList}>
                                <option value="">Select Typology</option>
                                {typologyList && typologyList.map((item, key) => (
                                    <option key={key} value={item.typologies_id}>{item.typology}</option>
                                ))}
                            </select>
                            {errors.developer_id}
                        </div>

                        <div className="mb_20">
                            <label className="block">Sub Typology</label>
                            <select name="sub_typology" className="form-control" value={formFields.sub_typology} onChange={handleChange}>
                                <option value="">Select Sub Typology</option>
                                {subtypologyList && subtypologyList.map((item, key) => (
                                    <option key={key} value={item.sub_typologies_id}>{item.sub_typology}</option>
                                ))}
                            </select>
                            {errors.developer_id}
                        </div>

                        <div className="mb_20">
                            <label className="block">Cities</label>
                            <select name="cities" className="form-control" value={formFields.cities} onChange={handleChange}>
                                <option value="">Select Cities</option>
                                {cities && cities.map((item, key) => (
                                    <option key={key} value={item.id}>{item.city}</option>
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
                            <input type="text" placeholder="Enter project name" value={formFields.name} name="name" onChange={handleChange} className="form-control" />
                            {errors.name}
                        </div>

                        <div className="mb_20">
                            <label className="block">Meta Title</label>
                            <input type="text" placeholder="Meta Title" value={formFields.meta_title} name="meta_title" onChange={handleChange} className="form-control" />
                            {errors.ivr_no}
                        </div>

                        <div className="mb_20">
                            <label className="block">Meta Keyword</label>
                            <input type="text" placeholder="Enter Meta Keyword" value={formFields.meta_keyword} name="meta_keyword" onChange={handleChange} className="form-control" />
                        </div>

                        <div className="mb_20 col-span-2">
                            <label className="block">Enter Meta Description</label>
                            <input type="text" placeholder="Enter Meta Description" value={formFields.meta_description} name="meta_description" onChange={handleChange} className="form-control" />
                        </div>
                    </div>
                </div>

                <button className="btn btn_primary mt_20" type="submit">Next</button>
            </form>
        </div>
        }
    </div>
</>

  );
};

export default EditPlatter;

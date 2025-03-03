import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CustomRadio from "common/CustomRadio/Index";
import Button from "common/Button/Button";
import ProjectSteps from "../components/ProjectSteps/Index";
import "../assets/css/admin.css";
import Loader from "common/Loader/loader";

import Request from "root/config/Request";
import * as CONFIG from "../../../config";

import {
  getTypologyByCategory,
  getAllSubTypologyByTypology,
  projectStatusList,
} from "root/config/function";

const cityOptions = [
  { label: "Noida", value: "active" },
  { label: "Haryana", value: "hide" },
];
const statusOptions = [
  { label: "Active", value: "active" },
  { label: "Hide", value: "hide" },
];

const AddProjects = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [categorylist, setCategorylist] = useState([]);

  const [typologyList, setTypologyList] = useState([]);
  const [projectStatus, setProjectStatus] = useState([]);

  const [subtypologyList, setSubtypologyList] = useState([]);

  const [checkedCategory, setCheckedCategory] = useState("");
  const [checkedTypology, setCheckedTypology] = useState("");
  const [checkedSubTypology, setCheckedSubTypology] = useState("");
  const [checkedStatus, setCheckedStatus] = useState("");

  const name = useRef("");
  const ivr = useRef("");
  const whatsapp = useRef("");
  const paymentplan = useRef("");
  const rera_no = useRef("");
  const short_description = useRef("");
  const meta_title = useRef("");
  const meta_description = useRef("");
  const meta_keyword = useRef("");
  const footer_data = useRef("");
  const head_data = useRef("");

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const basicSubmitHandler = async (e) => {
    e.preventDefault();
    debugger

    var formData = new FormData();

    formData.append("categorie_id", checkedCategory);
    formData.append("typologie_id", checkedTypology);
    formData.append("sub_typologie_id", checkedSubTypology);
    formData.append("name", name.current.value);
    formData.append("project_status", checkedStatus);
    formData.append("short_description", short_description.current.value);

    if (e.target["image"]) {
      if (e.target["image"].files[0]) {
        formData.append("image", e.target["image"].files[0]);
      }
    }

    if (e.target["thumbnail"]) {
      if (e.target["thumbnail"].files[0]) {
        formData.append("thumbnail", e.target["thumbnail"].files[0]);
      }
    }

    

    // formData.append("ivr_no", ivr.current.value);
    // formData.append("whatsapp", whatsapp.current.value);
    // formData.append("payment_plan", paymentplan.current.value);

    // formData.append("meta_title", meta_title.current.value);
    // formData.append("meta_keyword", meta_keyword.current.value);
    // formData.append("meta_description", meta_description.current.value);
    // formData.append("footer_data", footer_data.current.value);
    // formData.append("head_data", head_data.current.value);

    // formData.append("rera_no", rera_no.current.value);

    // if (e.target["brochure"]) {
    //   if (e.target["brochure"].files[0]) {
    //     formData.append("brochure", e.target["brochure"].files[0]);
    //   }
    // }

    // if (e.target["logo"]) {
    //   if (e.target["logo"].files[0]) {
    //     formData.append("logo", e.target["logo"].files[0]);
    //   }
    // }
    // if (e.target["brochure"]) {
    //   if (e.target["brochure"].files[0]) {
    //     formData.append("brochure", e.target["brochure"].files[0]);
    //   }
    // }

    var response = await Request("admin/project", "POST", formData);
    if (response.status && response.statusCode === 403) {
      setErrors(response.errors);
    } else if (response.status && response.statusCode === 200) {
      navigate(
        CONFIG.ADMIN_ROOT + "project/" + response.data.id + "/location/"
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
    setCheckedTypology("");
    setCheckedCategory(event.target.value);
    setSubtypologyList([]);
    setTypologyList([]);

    var response = await getTypologyByCategory(event.target.value);
    if (
      response.status &&
      response.statusCode === 200 &&
      response.data.data.length > 0
    ) {
      setTypologyList(response.data.data);
    }
  };
  const getSubTypologyByTypologyList = async (event) => {
    setCheckedTypology(event.target.value);

    var response = await getAllSubTypologyByTypology(event.target.value);
    if (response.status && response.statusCode === 200) {
      setSubtypologyList(response.data.data);
    } else {
      setCheckedSubTypology("");
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

  if (isLoading) {
    return <Loader />; // Use the Loader component
  }

  return (
    <>
      <div className="flex title_col justify-between items-center">
        <h4 className="page_title">Add Project</h4>
      </div>

      <div className="property_wizard_listing">
        <div className="!px-0 form_col !w-full">
          <form onSubmit={basicSubmitHandler}>
            <h6 className="labelTitle">What kind of property do you have?</h6>

            <div className="mb_20">
              <div className="radio_design flex">
                {categorylist
                  ? categorylist.map((item, key) => (
                      <CustomRadio
                        className="radioItem mr_20"
                        name="propertyType"
                        id={`propertyType${item.id}`}
                        label={`${item.name}`}
                        key={key}
                        value={item.id}
                        checked={checkedCategory == item.id}
                        onChange={fetchtypologyHandle}
                      />
                    ))
                  : ""}
              </div>
              {errors.categorie_id && (
                <div className="errMsg">{errors.categorie_id}</div>
              )}
            </div>

            <div className="radio_design1 mb_20">
              {typologyList
                ? typologyList.map((item, key) => (
                    <CustomRadio
                      className="optionItem"
                      name="typology"
                      id={`typology${item.id}`}
                      label={`${item.typology}`}
                      key={key}
                      value={item.typologies_id}
                      checked={checkedTypology == item.typologies_id}
                      onChange={getSubTypologyByTypologyList}
                    />
                  ))
                : ""}
            </div>

            <div className="radio_design1 mb_20">
              {subtypologyList
                ? subtypologyList.map((item, key) => (
                    <CustomRadio
                      className="optionItem"
                      name="subtypology"
                      id={`subtypology${key}`}
                      label={`${item.sub_typology}`}
                      key={key}
                      value={item.sub_typologies_id}
                      checked={checkedSubTypology == item.sub_typologies_id}
                      onChange={(event) =>
                        setCheckedSubTypology(event.target.value)
                      }
                    />
                  ))
                : ""}
            </div>

            <h6 className="labelTitle">Enter basic project details</h6>
            <div className="radio_design1 mb_20">
              {projectStatus
                ? Object.entries(projectStatus).map(([key, value]) => (
                    <CustomRadio
                      className="optionItem"
                      name="projectstatus"
                      id={`projectstatus${key}`}
                      label={`${value.title}`}
                      key={key}
                      value={key}
                      checked={checkedStatus == key}
                      onChange={handleCheckedStatus}
                    />
                  ))
                : ""}
              {errors.project_status}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="mb_20">
                <label className="block">Project Name*</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Enter project name"
                  ref={name}
                />
                {errors.name && <div className="errMsg">{errors.name}</div>}
              </div>

              <div className="mb_20">
                <label className="block">
                  Thumbnail Image*{" "}
                  <small className="size">(Size 800px x 650px)</small>
                </label>
                <input
                  type="file"
                  className="w-full p-2 border rounded"
                  name="thumbnail"
                />
                {errors.thumbnail && <div className="errMsg">{errors.thumbnail}</div>}
              </div>

              <div className="mb_20">
                <label className="block">
                  Featured Image*{" "}
                  <small className="size">(Size 800px x 650px)</small>
                </label>
                <input
                  type="file"
                  className="w-full p-2 border rounded"
                  name="image"
                />
                {errors.image && <div className="errMsg">{errors.image}</div>}
              </div>

              {/* <div className="mb_20">
                <label className="block">Project IVR No.*</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Enter IVR no."
                  ref={ivr}
                />
                {errors.ivr_no && <div className="errMsg">{errors.ivr_no}</div>}
              </div> */}

              {/* <div className="mb_20">
                <label className="block">Project Whatsapp No.</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Enter whatsapp no."
                  ref={whatsapp}
                />
              </div> */}
            </div>
              
              <div className="mb_20">
                <label className="block">Short Description*</label>
                <textarea
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Enter project name"
                  ref={short_description}
                  rows={4}
                />
                {errors.short_description && <div className="errMsg">{errors.short_description}</div>}
              </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* <div className="mb_20">
                <label className="block">Payment Plan</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Enter payment plan"
                  ref={paymentplan}
                />
              </div> */}

              {/* <div className="mb_20">
                <label className="block">RERA No.</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Enter Rera No"
                  ref={rera_no}
                />
              </div> */}
            </div>

            {/* <h6 className="labelTitle mt_30">Page Details</h6>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb_20">
                <label className="block">Meta Title</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Meta Title"
                  ref={meta_title}
                  name="meta_title"
                />
              </div>

              <div className="mb_20">
                <label className="block">Meta Keyword</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Meta Keyword"
                  ref={meta_keyword}
                  name="meta_keyword"
                />
              </div>
            </div>

            <div className="mb_20">
              <label className="block">Meta Descriptions</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Meta Descriptions"
                ref={meta_description}
                name="meta_description"
              />
            </div>

            <div className="mb_20">
              <label className="block">Head Tags</label>
              <textarea
                className="w-full p-2 border rounded"
                name="head_data"
                ref={head_data}
                placeholder="Enter Head Data"
              ></textarea>
            </div>

            <div className="mb_20">
              <label className="block">Body Tags</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Body Tags"
                ref={footer_data}
                name="footer_data"
              />
            </div> */}

            <button className="btn btn_primary mt_20" type="submit">
              Next
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProjects;

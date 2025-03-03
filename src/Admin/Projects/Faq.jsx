import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as CONFIG from "../../../config";

import SidebarPortal from "common/Portal/SidebarPortal";
import BackdropPortal from "common/Portal/Backdrop";
import SideModal from "../components/Modal/SideModal/Index";
import Sections from "../components/Project/Sections";

import ReactQuill from "react-quill";
import ScaleLoader from "react-spinners/ScaleLoader";

import JsonRequest from "root/config/JsonRequest";
import Loader from "common/Loader/loader";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "common/Button/Button";
import "react-quill/dist/quill.snow.css";
import "../assets/css/admin.css";
import { Helmet } from "react-helmet";

const FAQ = () => {
  const [isSitebarFormButtonLoading, setIsSitebarFormButtonLoading] =
    useState(false);
  const [isLoadingTableData, setIsLoadingTableData] = useState(false);

  const projectid = useParams().projectid;
  const section_id = useParams().section;
  const [isLoading, setIsLoading] = useState(false);

  const [editId, setEditId] = useState(false);

  const [showSidebar, setShowSidebar] = useState(false);
  const [enableEdit, setenableEdit] = useState(false);
  const [list, setList] = useState([]);

  const [formField, setFormField] = useState({
    question: "",
    answer: "",
  });

  const resetfields = () => {
    setFormField({
      question: null,
      answer: null,
    });
  };

  const navigate = useNavigate();

  const basicSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/admin/projects/location");
  };

  const getlist = async () => {
    setIsLoadingTableData(true);
    var response = await JsonRequest(
      "admin/projectdata/faq?project_id=" + projectid,
      "GET"
    );
    if (response.status && response.statusCode == 200) {
      setList(response.data.data);
    }
    setIsLoadingTableData(false);
  };

  const addSubmitHandler = async (event) => {
    setIsSitebarFormButtonLoading(true);
    var response = await JsonRequest(
      "admin/projectdata/faq?project_id=" + projectid,
      "POST",
      formField
    );
    if (response.status && response.statusCode == 200) {
      resetfields();
      await getlist();
      setShowSidebar(false);
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
    setIsSitebarFormButtonLoading(false);
  };

  const editHandler = async (id) => {
    setShowSidebar(true);

    var response = await JsonRequest(
      "admin/projectdata/faq/" + id + "/edit",
      "GET"
    );
    if (response.status && response.statusCode === 200) {
      setenableEdit(true);
      setEditId(id);
      var result = response.data;
      setFormField({
        question: result.question,
        answer: result.answer,
      });
    }
  };

  const updateHandler = async () => {
    setIsSitebarFormButtonLoading(true);
    var response = await JsonRequest(
      "admin/projectdata/faq/" + editId + "/update",
      "POST",
      formField
    );
    if (response.status && response.statusCode == 200) {
      resetfields();

      setShowSidebar(false);
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
    await getlist();
    setIsSitebarFormButtonLoading(false);
  };

  const AddFaqHandler = () => {
    setShowSidebar(true);
  };

  const cancelHandler = () => {
    setShowSidebar(false);
    resetfields();
  };

  const backHandler = () => { };

  const handleChange = (e) => {
    setFormField({ ...formField, [e.target.name]: e.target.value });
  };
  const setEditorData = (value) => {
    formField.answer = value;
  };

  const deleteHandler = async (id) => {
    var response = await JsonRequest(
      "admin/projectdata/faq/" + id + "delete",
      "POST"
    );
    if (response.status && response.statusCode == 200) {
      getlist();
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  };

  useEffect(() => {
    getlist();
  }, []);

  if (isLoading) {
    return <Loader />; // Use the Loader component
  }

  return (
    <>

      <Helmet>
        <title>Great Value Realty FAQs | Get Answers to Your Real Estate Questions</title>
        <meta name="keywords" content="Great Value Realty FAQs, real estate questions, home buying FAQs, property investment queries, real estate help" />
        <meta name="description" content="Find answers to all your real estate queries with Great Value Realty FAQs. Get expert insights on buying, selling, home loans, investments, and more." />
        <meta name="google-site-verification" content="Ma-arPYmEe7u20NJ-jsuiHjD1p2HSShiEPD4m8s3bL8" />
        <link rel="canonical" href="https://greatvaluerealty.com/faqs" />
        <meta name="distribution" content="Global" />
        <meta name="Language" content="English" />
        <meta name="doc-type" content="Public" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Great Value Realty FAQs | Get Answers to Your Real Estate Questions" />
        <meta name="googlebot" content="all, index, follow" />
        <meta name="YahooSeeker" content="all, index, follow" />
        <meta name="msnbot" content="all, index, follow" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="revisit-after" content="1 day" />
        <meta name="rating" content="general" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Great Value Realty FAQs | Get Answers to Your Real Estate Questions" />
        <meta property="og:description" content="Find answers to all your real estate queries with Great Value Realty's FAQs. Get expert insights on buying, selling, home loans, investments, and more." />
        <meta property="og:url" content="https://greatvaluerealty.com/faqs" />
        <meta property="og:site_name" content="Great Value Realty" />
        <meta property="og:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@GreatValueGroup" />
        <meta name="twitter:title" content="Great Value Realty FAQs | Get Answers to Your Real Estate Questions" />
        <meta name="twitter:description" content="Find answers to all your real estate queries with Great Value Realty's FAQs. Get expert insights on buying, selling, home loans, investments, and more." />
        <meta name="twitter:creator" content="@GreatValueGroup" />
        <meta name="twitter:image" content="https://greatvaluerealty.com/assets/frontend/images/logo.png" />

      </Helmet>
      <div className="px-12 form_col">
        <Button className="btn btn_outline" onClick={backHandler}>
          Back
        </Button>
        <Sections projectid={projectid} image section_type={section_id} />
        <div className="card card_style1 mt-10">
          <div className="flex items-center justify-between">
            <h5>All Faq</h5>
            <Button className="btn btn_primary" onClick={AddFaqHandler}>
              Add Faq
            </Button>
          </div>

          <table className="w-full mt-8 border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-2">Question</th>
                <th className="p-2">Answer</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoadingTableData && (
                <tr>
                  <td colSpan={3}>
                    <div className="text-center py-4">
                      <ScaleLoader color="#ddd" className="w-full" />
                    </div>
                  </td>
                </tr>
              )}
              {list ? (
                list.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-2">{item.question}</td>
                    <td className="p-2">{item.answer}</td>
                    <td className="p-2 flex gap-2">
                      <button
                        className="btn action_btn"
                        onClick={() => editHandler(item.id)}
                      >
                        <img
                          src={CONFIG.ADMIN_IMG_URL + "icons/edit.svg"}
                          alt="edit icon"
                          className="img-fluid icon"
                        />
                      </button>
                      <button
                        className="btn action_btn"
                        onClick={() => deleteHandler(item.id)}
                      >
                        <img
                          src={CONFIG.ADMIN_IMG_URL + "icons/delete_color.svg"}
                          alt="delete icon"
                          className="img-fluid icon delete"
                        />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="text-center py-4">
                    <h5 className="no_record">No More Found!</h5>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showSidebar && (
        <>
          <SidebarPortal className="portal">
            <SideModal
              onCancel={cancelHandler}
              onSubmit={enableEdit ? updateHandler : addSubmitHandler}
              isLoading={isSitebarFormButtonLoading}
            >
              <div>
                <div className="mb-5">
                  <label className="block font-medium">Question*</label>
                  <input
                    className="w-full border p-2"
                    value={formField.question}
                    type="text"
                    placeholder="Enter Question"
                    name="question"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block font-medium">Answer*</label>
                  <ReactQuill
                    name="answer"
                    value={formField.answer}
                    onChange={setEditorData}
                  />
                </div>
              </div>
            </SideModal>
          </SidebarPortal>
          <BackdropPortal className="show" />
        </>
      )}
    </>
  );
};

export default FAQ;

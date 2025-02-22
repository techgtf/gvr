import React, { useRef, useEffect, useState } from "react";
import { NavLink, Link, useLocation, useParams } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "root/store/actions";
import * as CONFIG from "../../../../config";
import Request from "root/config/Request";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import "./sidebar.css";
import { ADMIN_ASSETS } from "../../../../config";
import { RxDashboard } from "react-icons/rx";
import { TbBoxMultiple } from "react-icons/tb";
import { BiCategoryAlt } from "react-icons/bi";
import { TbCurrentLocation } from "react-icons/tb";
import { MdOutlineRoomService } from "react-icons/md";
import { ImPageBreak } from "react-icons/im";
import { PiResize } from "react-icons/pi";
import { MdOutlineSettingsInputComponent } from "react-icons/md";
import { TiMessages } from "react-icons/ti";

const Sidebar = (props) => {
  const [pages, setPages] = useState(null);
  const containerRef = useRef(null);
  const dispatch = useDispatch();
  const location = useLocation(); // Get current location
  const currentPage = useSelector((state) => state.sideMenu.currentPage);
  const [categoryList, setCategoryList] = useState([]);

  const currentUrl = location.pathname.split("/admin")[1];
  const actualUrl = currentUrl.split("/")[1] ? currentUrl.split("/")[1] : "";

  useEffect(() => {
    dispatch(actionTypes.setCurrentPage(actualUrl));

    switch (actualUrl) {
      case "":
      case "states":
      case "amenities":
      case "developers":
        dispatch(actionTypes.shortCount());
        return;

      default:
        dispatch(actionTypes.normalCount());
    }
  }, [dispatch, location.pathname]); // Listen for changes in location.pathname

  const getlist = async () => {
    var response = await Request("admin/category", "GET");
    if (response.status && response.statusCode == 200) {
      setCategoryList(response.data.data);
    }
  };

  useEffect(() => {
    const scrollbar = new PerfectScrollbar(containerRef.current);
    getlist();
    return () => {
      scrollbar.destroy();
    };
  }, [currentPage]);

  useEffect(() => {
    const getAllPages = async () => {
      var response = await Request("admin/distinct-pages", "GET");
      if (response.status && response.statusCode == 200) {
        setPages(response.data);
      }
    };

    getAllPages();
  }, []);

  // useEffect(()=>{
  //   switch(currentMenuCount){
  //     case 0:
  //       setMenuClasses('')
  //     break;

  //     case 1:
  //       setMenuClasses('test');
  //     break;

  //     case 2:
  //       setMenuClasses('test test1')
  //     break;

  //     default:
  //       setMenuClasses('')
  //   }
  // }, [currentMenuCount]);

  // const toggleMenuHandler = ()=>{
  //   if(currentMenuCount === toggleCount.length - 1){
  //     setCurrentMenuCount((state)=>state - 1);
  //     setIsAscending(!isAscending);
  //   }

  //   else if(currentMenuCount === 0){
  //     setCurrentMenuCount(state=>state + 1)
  //     setIsAscending(!isAscending)
  //   }

  //   else{
  //     setCurrentMenuCount(state=>{
  //       if(isAscending){
  //         return state + 1
  //       }else{
  //         return state - 1
  //       }
  //     })
  //   }

  // }

  // const toggleSubMenusHandler = (e, menu)=>{
  //   e.stopPropagation();
  //   setMenuClasses('test test1')
  //   setMenusCounts(menu);
  // }

  return (
    <>
      {/* <button className={`ms-auto float-right ${menuClasses}`} onClick={toggleMenuHandler} style={{position:'absolute', right:'10px', zIndex:'9999', top:'100px'}}>
        testing
      </button> */}

      <div className={`sidebar`}>
        <div className="main-menu" ref={containerRef}>
          <NavLink end to={`${CONFIG.ADMIN_ROOT}`} className="sidebar_link">
            <span className="icon">
              <RxDashboard size={26} />
            </span>
            <span>Dashboard</span>
          </NavLink>

          <Link
            className="sidebar_link hasSubMenu "
            onClick={() => props.toggleSubMenusHandler("projects")}
          >
            <span className="icon">
              <TbBoxMultiple size={26} />
            </span>
            <span>Projects</span>
          </Link>

          <NavLink
            exact
            className="sidebar_link hasSubMenu"
            to={`${CONFIG.ADMIN_ROOT}platter-page`}
          >
            <span className="icon">
              <BiCategoryAlt size={26} />
            </span>
            <span>Platter Page</span>
          </NavLink>

          <NavLink
            exact
            className="sidebar_link hasSubMenu"
            to={`${CONFIG.ADMIN_ROOT}states`}
          >
            <span className="icon">
              <TbCurrentLocation size={26} />
            </span>
            <span>Locations</span>
          </NavLink>

          <NavLink
            exact
            className="sidebar_link"
            to={`${CONFIG.ADMIN_ROOT}amenities`}
          >
            <span className="icon">
              <MdOutlineRoomService size={26} />
            </span>
            <span>Amenities</span>
          </NavLink>

          <Link
            className="sidebar_link"
            onClick={(e) => props.toggleSubMenusHandler(e, "pages")}
          >
            <span className="icon">
              <ImPageBreak size={26} />
            </span>
            <span>Pages</span>
          </Link>

          {/* to={`${CONFIG.ADMIN_ROOT}typologies`} */}
          <Link
            className="sidebar_link"
            onClick={(e) => props.toggleSubMenusHandler(e, "typologies")}
          >
            <span className="icon">
              <PiResize size={26} />
            </span>
            <span>Typologies</span>
          </Link>

          <Link
            className="sidebar_link"
            onClick={(e) => props.toggleSubMenusHandler(e, "cms")}
          >
            <span className="icon">
              <MdOutlineSettingsInputComponent size={26} />
            </span>
            <span>CMS</span>
          </Link>

          <Link
            className="sidebar_link"
            onClick={(e) => props.toggleSubMenusHandler(e, "enquiry")}
          >
            <span className="icon">
              <TiMessages size={26} />
            </span>
            <span>Enquiry</span>
          </Link>
        </div>

        {props.isSubMenuOpen && (
          <div className="sub-menu">
            {currentPage === "projects" &&
              (categoryList
                ? categoryList.map((item, index) => {
                    return (
                      <NavLink
                        exact
                        key={item + index}
                        className="sub_menu_link"
                        to={`${CONFIG.ADMIN_ROOT + "projects/" + item.slug}`}
                      >
                        <span className="icon">
                          <img
                            src={ADMIN_ASSETS + "images/icons/commercial.png"}
                            alt="commercial icon"
                            className="img-fluid default"
                          />
                          <img
                            src={
                              ADMIN_ASSETS + "images/icons/commercial_color.png"
                            }
                            alt="commercial icon"
                            className="img-fluid color"
                          />
                        </span>
                        <span>{item.name}</span>
                      </NavLink>
                    );
                  })
                : null)}
            {currentPage == "pages" &&
              pages.length &&
              pages.map((page) => (
                <React.Fragment key={page.id}>
                  <NavLink
                    exact
                    className="sub_menu_link"
                    to={CONFIG.ADMIN_ROOT + "page/" + page.id}
                  >
                    <span className="icon">
                      <ImPageBreak size={16} />
                    </span>
                    <span>{page.name}</span>
                  </NavLink>

                  {/* <NavLink
                    className="sub_menu_link"
                    to={CONFIG.ADMIN_ROOT + "page-meta"}
                  >
                    <span className="icon">
                      <img
                        src={ADMIN_ASSETS + "icons/commercial.png"}
                        alt="commercial icon"
                        className="img-fluid default"
                      />
                      <img
                        src={ADMIN_ASSETS + "icons/commercial_color.png"}
                        alt="commercial icon"
                        className="img-fluid color"
                      />
                    </span>
                    <span>Meta Details</span>
                  </NavLink>

                  <NavLink
                    className="sub_menu_link"
                    to={CONFIG.ADMIN_ROOT + "page/1"}
                  >
                    <span className="icon">
                      <img
                        src={ADMIN_ASSETS + "icons/commercial.png"}
                        alt="commercial icon"
                        className="img-fluid default"
                      />
                      <img
                        src={ADMIN_ASSETS + "icons/commercial_color.png"}
                        alt="commercial icon"
                        className="img-fluid color"
                      />
                    </span>
                    <span>Home Page</span>
                  </NavLink>

                  <NavLink
                    className="sub_menu_link"
                    to={CONFIG.ADMIN_ROOT + "page/2"}
                  >
                    <span className="icon">
                      <img
                        src={ADMIN_ASSETS + "icons/commercial.png"}
                        alt="commercial icon"
                        className="img-fluid default"
                      />
                      <img
                        src={ADMIN_ASSETS + "icons/commercial_color.png"}
                        alt="commercial icon"
                        className="img-fluid color"
                      />
                    </span>
                    <span>About Page</span>
                  </NavLink>

                  <NavLink
                    className="sub_menu_link"
                    to={CONFIG.ADMIN_ROOT + "home-overview"}
                  >
                    <span className="icon">
                      <img
                        src={ADMIN_ASSETS + "icons/commercial.png"}
                        alt="commercial icon"
                        className="img-fluid default"
                      />
                      <img
                        src={ADMIN_ASSETS + "icons/commercial_color.png"}
                        alt="commercial icon"
                        className="img-fluid color"
                      />
                    </span>
                    <span>Home Overview</span>
                  </NavLink>

                  <NavLink
                    className="sub_menu_link"
                    to={CONFIG.ADMIN_ROOT + "about"}
                  >
                    <span className="icon">
                      <img
                        src={ADMIN_ASSETS + "icons/commercial.png"}
                        alt="commercial icon"
                        className="img-fluid default"
                      />
                      <img
                        src={ADMIN_ASSETS + "icons/commercial_color.png"}
                        alt="commercial icon"
                        className="img-fluid color"
                      />
                    </span>
                    <span>About Company</span>
                  </NavLink>

                  <NavLink
                    className="sub_menu_link"
                    to={CONFIG.ADMIN_ROOT + "careers"}
                  >
                    <img
                      src={ADMIN_ASSETS + "icons/dashboard.svg"}
                      alt="dashboard icon"
                      className="img-fluid icon"
                    />
                    <span>Career</span>
                  </NavLink>

                  <NavLink className="sub_menu_link">
                    <img
                      src={ADMIN_ASSETS + "icons/dashboard.svg"}
                      alt="dashboard icon"
                      className="img-fluid icon"
                    />
                    <span>NRI Services</span>
                  </NavLink>

                  

                  <NavLink
                    className="sub_menu_link"
                    to={`${CONFIG.ADMIN_ROOT}blogs`}
                  >
                    <img
                      src={ADMIN_ASSETS + "icons/dashboard.svg"}
                      alt="dashboard icon"
                      className="img-fluid icon"
                    />
                    <span>Blogs</span>
                  </NavLink>

                  <NavLink
                    className="sub_menu_link"
                    to={`${CONFIG.ADMIN_ROOT}contact-us`}
                  >
                    <img
                      src={ADMIN_ASSETS + "icons/dashboard.svg"}
                      alt="dashboard icon"
                      className="img-fluid icon"
                    />
                    <span>Contact Us</span>
                  </NavLink>

                  <NavLink
                    className="sub_menu_link"
                    to={`${CONFIG.ADMIN_ROOT}contact-us`}
                  >
                    <img
                      src={ADMIN_ASSETS + "icons/dashboard.svg"}
                      alt="dashboard icon"
                      className="img-fluid icon"
                    />
                    <span>User Agreement</span>
                  </NavLink>

                  <NavLink
                    className="sub_menu_link"
                    to={`${CONFIG.ADMIN_ROOT}contact-us`}
                  >
                    <img
                      src={ADMIN_ASSETS + "icons/dashboard.svg"}
                      alt="dashboard icon"
                      className="img-fluid icon"
                    />
                    <span>Privacy Policy</span>
                  </NavLink>

                  <NavLink
                    className="sub_menu_link"
                    to={`${CONFIG.ADMIN_ROOT}contact-us`}
                  >
                    <img
                      src={ADMIN_ASSETS + "icons/dashboard.svg"}
                      alt="dashboard icon"
                      className="img-fluid icon"
                    />
                    <span>How To Buy</span>
                  </NavLink> */}
                </React.Fragment>
              ))}

            {currentPage == "typologies" && (
              <>
                <NavLink
                  exact
                  className="sub_menu_link"
                  to={`${CONFIG.ADMIN_ROOT}typologies`}
                >
                  <PiResize size={20} className="mr-2" />
                  <span>Typologies</span>
                </NavLink>

                <NavLink
                  exact
                  className="sub_menu_link"
                  to={`${CONFIG.ADMIN_ROOT}sub-typologies`}
                >
                  <PiResize size={20} className="mr-2" />
                  <span>Sub Typologies</span>
                </NavLink>
              </>
            )}

            {currentPage == "cms" && (
              <>
                <div className="divider w-full block text-xs text-[#666] tracking-[3px] my-4 relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-full before:h-px before:bg-[#ccc]">
                  <span className="text-center mx-auto table bg-white relative px-2">
                    Home Page
                  </span>
                </div>

                <NavLink
                  exact
                  className="sub_menu_link"
                  to={`${CONFIG.ADMIN_ROOT}home-banner`}
                >
                  <MdOutlineSettingsInputComponent size={16} className="mr-2" />
                  <span>Home Banner</span>
                </NavLink>

                <NavLink
                  className="sub_menu_link"
                  to={`${CONFIG.ADMIN_ROOT}testimonials`}
                >
                  <MdOutlineSettingsInputComponent size={16} className="mr-2" />
                  <span>Testimonials</span>
                </NavLink>

                <NavLink
                  exact
                  className="sub_menu_link"
                  to={`${CONFIG.ADMIN_ROOT}faqs`}
                >
                  <MdOutlineSettingsInputComponent size={16} className="mr-2" />
                  <span>Faqs</span>
                </NavLink>

                <NavLink
                  exact
                  className="sub_menu_link"
                  to={`${CONFIG.ADMIN_ROOT}top-cities`}
                >
                  <MdOutlineSettingsInputComponent size={16} className="mr-2" />
                  <span>Top Cities</span>
                </NavLink>

                <NavLink
                  className="sub_menu_link"
                  to={`${CONFIG.ADMIN_ROOT}offers`}
                >
                  <MdOutlineSettingsInputComponent size={16} className="mr-2" />
                  <span>Offers</span>
                </NavLink>

                <NavLink
                  className="sub_menu_link"
                  to={`${CONFIG.ADMIN_ROOT}process`}
                >
                  <MdOutlineSettingsInputComponent size={16} className="mr-2" />
                  <span>Process</span>
                </NavLink>

                <div className="divider w-full block text-xs text-[#666] tracking-[3px] my-4 relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-full before:h-px before:bg-[#ccc]">
                  <span className="text-center mx-auto table bg-white relative px-2">
                    About Us
                  </span>
                </div>

                <NavLink
                  exact
                  className="sub_menu_link"
                  to={`${CONFIG.ADMIN_ROOT}team`}
                >
                  <MdOutlineSettingsInputComponent size={16} className="mr-2" />
                  <span>Team</span>
                </NavLink>

                <NavLink
                  className="sub_menu_link"
                  to={`${CONFIG.ADMIN_ROOT}timeline`}
                >
                  <MdOutlineSettingsInputComponent size={16} className="mr-2" />
                  <span>Timeline</span>
                </NavLink>

                <NavLink
                  exact
                  className="sub_menu_link"
                  to={`${CONFIG.ADMIN_ROOT}other-verticals`}
                >
                  <MdOutlineSettingsInputComponent size={16} className="mr-2" />
                  <span>Other Verticals</span>
                </NavLink>

                <div className="divider w-full block text-xs text-[#666] tracking-[3px] my-4 relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-full before:h-px before:bg-[#ccc]">
                  <span className="text-center mx-auto table bg-white relative px-2">
                    ESG
                  </span>
                </div>

                <NavLink
                  className="sub_menu_link"
                  to={`${CONFIG.ADMIN_ROOT}esg/social`}
                >
                  <MdOutlineSettingsInputComponent size={16} className="mr-2" />
                  <span>Social</span>
                </NavLink>

                <NavLink
                  className="sub_menu_link"
                  to={`${CONFIG.ADMIN_ROOT}esg/environment`}
                >
                  <MdOutlineSettingsInputComponent size={16} className="mr-2" />
                  <span>Environment</span>
                </NavLink>

                <NavLink
                  className="sub_menu_link"
                  to={`${CONFIG.ADMIN_ROOT}esg/gallery`}
                >
                  <MdOutlineSettingsInputComponent size={16} className="mr-2" />
                  <span>Gallery</span>
                </NavLink>

                <div className="divider w-full block  text-[#666] tracking-[3px] my-4 relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-full before:h-px before:bg-[#ccc]">
                  <span className="text-center mx-auto table bg-white relative px-2 uppercase text-[10px]">
                    Common
                  </span>
                </div>

                <NavLink
                  className="sub_menu_link"
                  to={`${CONFIG.ADMIN_ROOT}category`}
                >
                  <MdOutlineSettingsInputComponent size={16} className="mr-2" />
                  <span>Category</span>
                </NavLink>

                <NavLink
                  className="sub_menu_link"
                  to={`${CONFIG.ADMIN_ROOT}blogs`}
                >
                  <MdOutlineSettingsInputComponent size={16} className="mr-2" />
                  <span>Blogs</span>
                </NavLink>
              </>
            )}

            {currentPage == "enquiry" && (
              <>
                <NavLink
                  className="sub_menu_link"
                  to={`${CONFIG.ADMIN_ROOT}job-application`}
                >
                  <img
                    src={ADMIN_ASSETS + "icons/dashboard.svg"}
                    alt="dashboard icon"
                    className="img-fluid icon"
                  />
                  <span>Job Application</span>
                </NavLink>

                <NavLink
                  className="sub_menu_link"
                  to={`${CONFIG.ADMIN_ROOT}contact-query`}
                >
                  <img
                    src={ADMIN_ASSETS + "icons/dashboard.svg"}
                    alt="dashboard icon"
                    className="img-fluid icon"
                  />
                  <span>Contact Query</span>
                </NavLink>

                <NavLink
                  className="sub_menu_link"
                  to={`${CONFIG.ADMIN_ROOT}projects-query`}
                >
                  <img
                    src={ADMIN_ASSETS + "icons/dashboard.svg"}
                    alt="dashboard icon"
                    className="img-fluid icon"
                  />
                  <span>Projects Query</span>
                </NavLink>
              </>
            )}
          </div>
        )}
      </div>

      {/* <button
        className="btn btn-secondary float-right"
        onClick={toggleMenuHandler}
        style={{marginLeft:'auto', display:'table'}}>
          test
      </button> */}
    </>
  );
};

export default Sidebar;

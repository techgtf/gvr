import { Children, Suspense } from "react";
import { ADMIN_ROOT } from "root/config";
// import Home from "../frontend/pages/Home"
import Loader from "../Loader/loader";
import Layout from "../frontend/Layout";
import PageNotFound from "../frontend/PageNotFound/PageNotFound";
import Dashboard from "../admin/Dashboard";
import { elements } from "chart.js";
import AdminLayout from "../admin/components/Layout/Index";
import PlatterPage from "../admin/PlatterPage/Index";
import AddPlatterPage from "../admin/PlatterPage/AddPlatter";
import States from '../admin/Locations/States';
import Login from '../admin/Login';
import EditPlatter from '../admin/PlatterPage/EditPlatter';
import PlatterBanners from '../admin/PlatterPage/PlatterBanners';
import Projects from '../admin/Projects/Index';
import AddProject from '../admin/Projects/Add';
import EditProject from '../admin/Projects/EditProject';

import ProjectLocation from '../admin/Projects/Location'
import ProjectOverview from '../admin/Projects/Overview'
import FloorPlan from '../admin/Projects/FloorPlan'
import Gallery from '../admin/Projects/Gallery'
import Banner from '../admin/Projects/Banner'

import ProjectAmenities from '../admin/Projects/Amenities'
import ProjectMasterPlan from '../admin/Projects/MasterPlan'
import ProjectLocationAdvantage from '../admin/Projects/LocationAdvantage'
import ProjectFaq from '../admin/Projects/Faq'
import Highlights from '../admin/Projects/Highlights'
import MicroForm from '../admin/Projects/MicroForm'

import Forgot from '../admin/Forgot';
import Cities from '../admin/Locations/Cities';
import HomeBanner from '../admin/HomeBanner/Index';
import Amenities from '../admin/Amenities';
import Developers from '../admin/Developers/Index';
import Category from '../admin/Category/Index';
import Typologies from '../admin/Typologies/Index';
import PageMetas from '../admin/PageMeta/Index';
import TypologiesSubTypologies from '../admin/Typologies/SubTypology';
import CategoryTypology from '../admin/Category/CategoryTypology';
// import SubTypologies from '../../admin/Subtypology/Index';
import BlogCategory from '../admin/Blogs/BlogCategory';
import Blogs from '../admin/Blogs';
import AddBlog from '../admin/Blogs/Add';
import EditBlog from '../admin/Blogs/Edit';
import Careers from '../admin/Careers/Index';
import AddCareer from '../admin/Careers/Add';
import UpdateCareer from '../admin/Careers/Update';
import Localities from '../admin/Locations/Localities';
import Process from '../admin/Process/Index';
import TopCities from '../admin/Topcities/Index';
import Testimonials from '../admin/Testimonials';
import Enquiry from '../admin/Enquiry/Index';
import ProjectsQuery from '../admin/Enquiry/Projects';
import ProjectQuery from '../admin/Enquiry/Project';
import JobApplications from '../admin/Enquiry/JobApplications';
import Offers from '../admin/Offers'

import "bootstrap/dist/css/bootstrap.min.css";
// import "../frontend/styles.css"

export const AdminRoutes = [
  {
    path: `${ADMIN_ROOT}`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Dashboard />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}login`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Login />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}platter-page`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <PlatterPage />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}platter-page/add`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <AddPlatterPage />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}platter-page/:platterid/edit`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <EditPlatter />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}platter-page/:platterid/banner`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <PlatterBanners />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}projects/:category`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Projects />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}projects/add`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <AddProject />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}project/:projectid/edit`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <EditProject />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}project/:projectid/location/:section`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectLocation />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}project/:projectid/overview/:section`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectOverview />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}project/:projectid/floor-plan/:section`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <FloorPlan />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}project/:projectid/gallery/:section`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Gallery />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}project/:projectid/banner`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Banner />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}project/:projectid/amenities/:section`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectAmenities />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}project/:projectid/master-plan/:section`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectMasterPlan />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}project/:projectid/location-advantage/:section`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectLocationAdvantage />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}project/:projectid/faq/:section`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectFaq />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}project/:projectid/highlights/:section`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Highlights />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}project/:projectid/form/:section`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <MicroForm />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}home-banner`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <HomeBanner />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}cities/:id`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Cities />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}localities/:id`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Localities />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}states`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <States />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}amenities`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Amenities />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}blogs/categories`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <BlogCategory />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}developers`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Developers />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}typologies`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Typologies />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}page-meta`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <PageMetas />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}category`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Category />
        </Suspense>
      </AdminLayout>
    ),
  },
  // {
  //   path: `${ADMIN_ROOT}sub-typologies`,
  //   // element:<AdminLayout />,
  //   element: (
  //     <AdminLayout>
  //       <Suspense fallback={<div>Loading...</div>}>
  //         <SubTypologies />
  //       </Suspense>
  //     </AdminLayout>
  //   ),
  // },
  {
    path: `${ADMIN_ROOT}category/typology/:id`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <CategoryTypology />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}typology/:id/sub`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <TypologiesSubTypologies />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}forgot`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Forgot />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}blog-category`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <BlogCategory />
        </Suspense>
      </AdminLayout>
    ),
  },

  {
    path: `${ADMIN_ROOT}blogs`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Blogs />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}blogs/add`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <AddBlog />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}blogs/edit/:id`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <EditBlog />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}careers`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Careers />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}careers/add`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <AddCareer />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}careers/update/:id`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <UpdateCareer />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}offers`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Offers />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}process`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Process />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}top-cities`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <TopCities />
        </Suspense>
      </AdminLayout>
    ),
  },
  {
    path: `${ADMIN_ROOT}testimonials`,
    // element:<AdminLayout />,
    element: (
      <AdminLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Testimonials />
        </Suspense>
      </AdminLayout>
    ),
  },
];

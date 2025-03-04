import { Children, Suspense } from "react";
import { ADMIN_ROOT } from "../../config";
// import Home from "../frontend/pages/Home"
import Loader from "../Loader/loader";
import Layout from "../frontend/Layout";
import PageNotFound from "../frontend/PageNotFound/PageNotFound";
import ProtectedRoute from "../admin/components/ProtectedRoute/Index";
import Dashboard from "../admin/Dashboard";
import { elements } from "chart.js";
import AdminLayout from "../admin/components/Layout/Index";
import PlatterPage from "../admin/PlatterPage/Index";
import AddPlatterPage from "../admin/PlatterPage/AddPlatter";
import States from "../admin/Locations/States";
import Login from "../admin/Login";
import EditPlatter from "../admin/PlatterPage/EditPlatter";
import PlatterBanners from "../admin/PlatterPage/PlatterBanners";
import Projects from "../admin/Projects/Index";
import AddProject from "../admin/Projects/Add";
import EditProject from "../admin/Projects/EditProject";

import ProjectLocation from "../admin/Projects/Location";
import ProjectOverview from "../admin/Projects/Overview";
import FloorPlan from "../admin/Projects/FloorPlan";
import Gallery from "../admin/Projects/Gallery";
import Banner from "../admin/Projects/Banner";

import ProjectAmenities from "../admin/Projects/Amenities";
import ProjectMasterPlan from "../admin/Projects/MasterPlan";
import ProjectLocationAdvantage from "../admin/Projects/LocationAdvantage";
import ProjectFaq from "../admin/Projects/Faq";
import Highlights from "../admin/Projects/Highlights";
import MicroForm from "../admin/Projects/MicroForm";

import Forgot from "../admin/Forgot";
import Cities from "../admin/Locations/Cities";
import HomeBanner from "../admin/HomeBanner/Index";
import Amenities from "../admin/Amenities";
import Developers from "../admin/Developers/Index";
import Category from "../admin/Category/Index";
import Typologies from "../admin/Typologies/Index";
import PageMetas from "../admin/PageMeta/Index";
import TypologiesSubTypologies from "../admin/Typologies/SubTypology";
import CategoryTypology from "../admin/Category/CategoryTypology";
// import SubTypologies from '../../admin/Subtypology/Index';
import BlogCategory from "../admin/Blogs/BlogCategory";
import Blogs from "../admin/Blogs";
import AddBlog from "../admin/Blogs/Add";
import EditBlog from "../admin/Blogs/Edit";
import Careers from "../admin/Careers/Index";
import AddCareer from "../admin/Careers/Add";
import UpdateCareer from "../admin/Careers/Update";
import Localities from "../admin/Locations/Localities";
import Process from "../admin/Process/Index";
import TopCities from "../admin/Topcities/Index";
import Testimonials from "../admin/Testimonials";
import Enquiry from "../admin/Enquiry/Index";
import ProjectsQuery from "../admin/Enquiry/Projects";
import ProjectQuery from "../admin/Enquiry/Project";
import JobApplications from "../admin/Enquiry/JobApplications";
import Offers from "../admin/Offers";
import HomePageOverview from "../admin/components/homepage/overview/Index";
import OtherVerticals from "../admin/components/homepage/otherVerticals/Index";
import Timeline from "../admin/components/timeline/Index";
import EditTimeline from "../admin/components/timeline/Edit";
import AddTimeline from "../admin/components/timeline/Add";
import AboutPage from "../admin/AboutPage";
import OurTeam from "../admin/components/about/team/Index";
import TimelineImages from "../admin/components/timeline/images/Index";
import Faqs from "../admin/components/faq/Index";
import EsgSocial from "../admin/components/esg/social/Index";
import EsgEnvironment from "../admin/components/esg/environment/Index";
import EsgGallery from "../admin/components/esg/gallery/Index";
import SubTypologies from "../admin/Typologies/SubTypology";
import SubTypologiesPage from "../admin/Subtypology/Index";
import TypologyGallery from "../admin/typologyGallery/Index";
import SingleTypologyGallery from "../admin/Typologies/Gallery";
import ProjectLayout from "../admin/components/Layout/ProjectLayout/Index";
import PriceList from "../admin/Projects/PriceList";
import Specifications from "../admin/Specifications";
import Specification from "../admin/Projects/Specification";
import EsgGovernance from "../admin/components/esg/governance/Index";
import MediaCentre from "../admin/components/media-centre/Index";
import WorkCulture from "../admin/components/gallery/WorkCulture";
// import "../frontend/styles.css"

export const AdminRoutes = [
  {
    path: `${ADMIN_ROOT}login`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <Suspense fallback={<div>Loading...</div>}>
          <Login />
        </Suspense>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}platter-page`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <PlatterPage />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}platter-page/add`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <AddPlatterPage />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}platter-page/:platterid/edit`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <EditPlatter />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}platter-page/:platterid/banner`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <PlatterBanners />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}projects/:category`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Projects />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}project/add`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <AddProject />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}project/:projectid/edit`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <ProjectLayout>
              <EditProject />
            </ProjectLayout>
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  // path: `${ADMIN_ROOT}project/:projectid/overview/:section`,
  {
    path: `${ADMIN_ROOT}project/:projectid/location`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <ProjectLayout>
              <ProjectLocation />
            </ProjectLayout>
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}project/:projectid/overview/:section`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <ProjectLayout>
              <ProjectOverview />
            </ProjectLayout>
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}project/:projectid/amenities/:section`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <ProjectLayout>
              <ProjectAmenities />
            </ProjectLayout>
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}project/:projectid/price-list/:section`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <ProjectLayout>
              <PriceList />
            </ProjectLayout>
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}project/:projectid/highlights/:section`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <ProjectLayout>
              <Highlights />
            </ProjectLayout>
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}project/:projectid/specifications/:section`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <ProjectLayout>
              <Specification />
            </ProjectLayout>
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}project/:projectid/master-plan/:section`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <ProjectLayout>
              <ProjectMasterPlan />
            </ProjectLayout>
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}project/:projectid/floor-plan/:section`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <ProjectLayout>
              <FloorPlan />
            </ProjectLayout>
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}project/:projectid/location-advantage/:section`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <ProjectLayout>
              <ProjectLocationAdvantage />
            </ProjectLayout>
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}project/:projectid/gallery/:section`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <ProjectLayout>
              <Gallery />
            </ProjectLayout>
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}project/:projectid/banner`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Banner />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}project/:projectid/faq/:section`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <ProjectFaq />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}project/:projectid/form/:section`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <MicroForm />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}home-banner`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <HomeBanner />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}specifications`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Specifications />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}cities/:id`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Cities />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}localities/:id`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Localities />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}states`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <States />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}amenities`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Amenities />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}blogs/categories`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <BlogCategory />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}developers`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Developers />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}typologies`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Typologies />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}sub-typologies`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <SubTypologiesPage />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}typologies/gallery`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <TypologyGallery />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}page-meta`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <PageMetas />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}home-overview`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <HomePageOverview />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}other-verticals`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <OtherVerticals />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}team`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <OurTeam />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}category`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Category />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
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
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <CategoryTypology />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}typology/:id/sub`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <TypologiesSubTypologies />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}typology/:id/gallery`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <SingleTypologyGallery />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}forgot`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Forgot />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}blog-category`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <BlogCategory />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },

  {
    path: `${ADMIN_ROOT}blogs`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Blogs />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}blogs/add`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <AddBlog />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}blogs/edit/:id`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <EditBlog />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}careers`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Careers />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}careers/add`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <AddCareer />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}careers/update/:id`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <UpdateCareer />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}offers`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Offers />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}process`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Process />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}top-cities`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <TopCities />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}testimonials`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Testimonials />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}timeline`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Timeline />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}timeline/add`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <AddTimeline />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}timeline/edit/:id`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <EditTimeline />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}timeline/images`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <TimelineImages />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}esg/social`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <EsgSocial />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}esg/environment`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <EsgEnvironment />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}esg/governance`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <EsgGovernance />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}esg/gallery`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <EsgGallery />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}gallery/work-culture`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <WorkCulture />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}media-centre`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <MediaCentre />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}page/:pageId`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <AboutPage />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}about`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <AboutPage />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}faqs`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Faqs />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Dashboard />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}job-application`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <JobApplications />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: `${ADMIN_ROOT}contact-query`,
    // element:<AdminLayout />,
    element: (
      <ProtectedRoute>
        <AdminLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Enquiry />
          </Suspense>
        </AdminLayout>
      </ProtectedRoute>
    ),
  },
];

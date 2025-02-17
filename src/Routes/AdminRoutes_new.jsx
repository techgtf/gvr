import { Suspense } from "react";


import Dashboard from '../admin/Dashboard'
import PlatterPage from '../admin/PlatterPage/Index';
import AddPlatterPage from '../admin/PlatterPage/AddPlatter';
import EditPlatter from '../admin/PlatterPage/EditPlatter';
import PlatterBanners from '../admin/PlatterPage/PlatterBanners';

import ProjectOverview from '../admin/Projects/Overview'

import Projects from '../admin/Projects/Index';
import AddProject from '../admin/Projects/Add';
import EditProject from '../admin/Projects/EditProject';
import ProjectLocation from './../admin/Projects/Location';
import FloorPlan from './../admin/Projects/FloorPlan';
import Gallery from './../admin/Projects/Gallery';
import ProjectAmenities from './../admin/Projects/Amenities'
import ProjectMasterPlan from './../admin/Projects/MasterPlan'
import ProjectFaq from './../admin/Projects/Faq'
import Highlights from './../admin/Projects/Highlights'
import Specification from './../admin/Projects/Specification'





// new  

import ProjectLocationAdvantage from '../admin/Projects/LocationAdvantage'

import Login from '../admin/Login';
import Forgot from '../admin/Forgot';
import Cities from '../admin/Locations/Cities';
import HomeBanner from '../admin/HomeBanner/Index';
import States from '../admin/Locations/States';
import Amenities from '../admin/Amenities';
import Developers from '../admin/Developers/Index';
import Category from '../admin/Category/Index';
import Typologies from '../admin/Typologies/Index';
import PageMetas from '../admin/PageMeta/Index';


import TypologiesSubTypologies from '../admin/Typologies/SubTypology';
import CategoryTypology from '../admin/Category/CategoryTypology';

import SubTypologies from '../admin/Subtypology/Index';

import ProtectedRoute from '../admin/components/ProtectedRoute/Index';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogCategory from '../admin/Blogs/BlogCategory';
import Blogs from '../admin/Blogs';
import AddBlog from '../admin/Blogs/Add';
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
import ProjectLayout from './../admin/components/Layout/ProjectLayout/Index';
import Banner from "../admin/Projects/Banner";
import MicroForm from "../admin/Projects/MicroForm";
import OurInfrastuchture from "../admin/OurInfrastuchture";
import Ethos from './../admin/Ethos';
import AboutPage from "../admin/AboutPage";
import ContactPage from "../Admin/ContactPage";


// end  new 











export const AdminRoutes = [
  {
    path: '',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard />
      </Suspense>
    ),
  },
  {
    path: 'platter-page',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <PlatterPage />

      </Suspense>
    ),
  },
  {
    path: 'platter-page/add',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <AddPlatterPage />
      </Suspense>
    ),
  },
  {
    path: 'platter-page/:platterid/edit',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <EditPlatter />
      </Suspense>
    ),
  },
  {
    path: 'platter-page/:platterid/banner',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <PlatterBanners />
      </Suspense>
    ),
  },
  {
    path: 'projects/:category',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <Projects />

      </Suspense>
    ),
  },
  {
    path: 'projects/:category',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <Projects />

      </Suspense>
    ),
  }, {
    path: 'project/add',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <AddProject />

      </Suspense>
    ),
  },
  {
    path: 'project/:projectid/edit',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <ProjectLayout>
          <EditProject />
        </ProjectLayout>

      </Suspense>
    ),
  },
  {
    path: 'project/:projectid/location/:section',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectLayout>

          <ProjectLocation />
        </ProjectLayout>

      </Suspense>
    ),
  },
  {
    path: 'project/:projectid/overview/:section',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <ProjectLayout>
          <ProjectOverview />

        </ProjectLayout>
      </Suspense>
    ),
  },
  {
    path: 'project/:projectid/floor-plan/:section',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <ProjectLayout>
          <FloorPlan />
        </ProjectLayout>

      </Suspense>
    ),
  },
  {
    path: 'project/:projectid/banner',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <ProjectLayout>
          <Banner />
        </ProjectLayout>

      </Suspense>
    ),
  },
  {
    path: 'project/:projectid/gallery/:section',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <ProjectLayout>
          <Gallery />

        </ProjectLayout>
      </Suspense>
    ),
  }, {
    path: 'project/:projectid/amenities/:section',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectLayout>
          <ProjectAmenities />
        </ProjectLayout>
      </Suspense>
    ),
  },
  {
    path: 'project/:projectid/master-plan/:section',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectLayout>
          <ProjectMasterPlan />
        </ProjectLayout>
      </Suspense>
    ),
  },
  {
    path: 'project/:projectid/location-advantage/:section',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectLayout>
          <ProjectLocationAdvantage />
        </ProjectLayout>
      </Suspense>
    ),
  },
  {
    path: 'project/:projectid/faq/:section',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectLayout>
          <ProjectFaq />
        </ProjectLayout>
      </Suspense>
    ),
  },
  {
    path: 'project/:projectid/form/:section',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectLayout>
          <MicroForm />
        </ProjectLayout>
      </Suspense>
    ),
  },
  {
    path: 'project/:projectid/highlights/:section',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectLayout>
          <Highlights />
        </ProjectLayout>
      </Suspense>
    ),
  },
  {
    path: 'project/:projectid/specification/:section',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectLayout>
          <Specification />
        </ProjectLayout>
      </Suspense>
    ),
  },

  {
    path: 'home-banner',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <HomeBanner />
      </Suspense>
    ),
  }, {
    path: 'cities/:id',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <Cities />

      </Suspense>
    ),
  },
  {
    path: 'localities/:id',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <Localities />

      </Suspense>
    ),
  },
  {
    path: 'states',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <States />

      </Suspense>
    ),
  },
  {
    path: 'amenities',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <Amenities />

      </Suspense>
    ),
  },
  {
    path: 'about',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <AboutPage />

      </Suspense>
    ),
  },
  {
    path: 'contact-us',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ContactPage />
      </Suspense>
    ),
  },
  {
    path: 'our-infrastuchture',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <OurInfrastuchture />

      </Suspense>
    ),
  },
  {
    path: 'ethos',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <Ethos />

      </Suspense>
    ),
  },
  {
    path: 'blogs/categories',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <BlogCategory />

      </Suspense>
    ),
  },
  {
    path: 'developers',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <Developers />

      </Suspense>
    ),
  },
  {
    path: 'typologies',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <Typologies />

      </Suspense>
    ),
  }, {
    path: 'page-meta',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <PageMetas />

      </Suspense>
    ),
  },
  {
    path: 'category',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <Category />

      </Suspense>
    ),
  },
  {
    path: 'sub-typologies',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <SubTypologies />

      </Suspense>
    ),
  },
  {
    path: 'category/typology/:id',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <CategoryTypology />

      </Suspense>
    ),
  },
  {
    path: 'typology/:id/sub',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <TypologiesSubTypologies />

      </Suspense>
    ),
  },
  {
    path: 'forgot',
    element: (
      <Suspense fallback={<div>Loading...</div>}>


        <Forgot />

      </Suspense>
    ),
  },
  {
    path: 'blog-category',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <BlogCategory />

      </Suspense>
    ),
  },
  {
    path: 'blogs',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <Blogs />

      </Suspense>
    ),
  },
  {
    path: 'blogs/add',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <AddBlog />

      </Suspense>
    ),
  }, {
    path: 'careers',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <Careers />

      </Suspense>
    ),
  },
  {
    path: 'careers/add',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <AddCareer />

      </Suspense>
    ),
  },
  {
    path: 'careers/update/:id',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <UpdateCareer />

      </Suspense>
    ),
  },
  {
    path: 'offers',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <Offers />

      </Suspense>
    ),
  },
  {
    path: 'process',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <Process />

      </Suspense>
    ),
  },
  {
    path: 'top-cities',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <TopCities />

      </Suspense>
    ),
  },
  {
    path: 'testimonials',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <Testimonials />

      </Suspense>
    ),
  },
  {
    path: 'contact-query',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <Enquiry />

      </Suspense>
    ),
  },
  {
    path: 'projects-query',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <ProjectsQuery />

      </Suspense>
    ),
  },
  {
    path: 'projects-query/:id',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <ProjectQuery />

      </Suspense>
    ),
  },
  {
    path: 'job-application',
    element: (
      <Suspense fallback={<div>Loading...</div>}>

        <JobApplications />

      </Suspense>
    ),
  },
  {
    path: '*',
    element: <h1>Page not found</h1>,
  },






]
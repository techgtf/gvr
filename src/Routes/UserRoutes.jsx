import { Suspense } from "react";
import { BASE_ROOT } from "../../config";
import Loader from "../Loader/loader";
import Layout from "../frontend/Layout";
import Home from "../frontend/pages/Home";
import Microsite from "../frontend/pages/Microsite";
import PageNotFound from "../frontend/PageNotFound/PageNotFound";
import "../frontend/main.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MicrositeMenu from "../frontend/components/microsite/MicrositeMenu";
import About from "../frontend/pages/Aboutus";
import Testimonials from "../frontend/pages/Testimonials";
import EmiCalculator from "../frontend/pages/emiCalculator";
import Residential from "../frontend/pages/residential";
import ContactUs from "../frontend/pages/Contactus";
import Csr from "../frontend/pages/Csr";
import ErrorBoundary from "../frontend/components/ErrorBoundary";
import AnandamMicrosite from "../frontend/pages/AnandamMicrosite";
import GvHomesMicrosite from "../frontend/pages/GvHomesMicrosite";
import TaxBenifits from "../frontend/pages/TaxBenifits";
import NriCorner from "../frontend/pages/NriCorner";
import Career from "../frontend/pages/Career";
import AreaConverter from "../frontend/pages/AreaConverter";
import HomeLoan from "../frontend/pages/HomeLoan";
import Blogs from "../frontend/pages/Blogs";
import BlogDetails from "../frontend/pages/BlogDetails";
import Faqs from "../frontend/pages/Faqs";
import PropertyInvestment from "../frontend/pages/PropertyInvestment";
import ThankYou from "../frontend/pages/ThankYou";
import VilasaMicrosite from "../frontend/pages/VilasaMicrosite";
import CommercialProjects from "../frontend/pages/CommercialProjects";
import ProperyInvestment from "../frontend/pages/PropertyInvestment";
import MediaCenter from "../frontend/pages/MediaCenter";

export const UserRoutes = [
  {
    // path: `${BASE_ROOT}`,
    children: [
      {
        path: `${BASE_ROOT}`,
        element: (
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <Layout>
                <Home />
              </Layout>
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: `${BASE_ROOT}microsite`,
        element: (
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <Layout>
                <Microsite />
                <MicrositeMenu />
              </Layout>
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: `${BASE_ROOT}property-investment`,
        element: (
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <Layout>
                <ProperyInvestment />
              </Layout>
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: `${BASE_ROOT}commercial-projects`,
        element: (
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <Layout>
                <CommercialProjects />
              </Layout>
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: `${BASE_ROOT}thank-you`,
        element: (
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <Layout>
                <ThankYou />
              </Layout>
            </Suspense>
          </ErrorBoundary>
        ),
      },
      ,
      {
        path: `${BASE_ROOT}anandam`,
        element: (
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <Layout>
                <AnandamMicrosite />
              </Layout>
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: `${BASE_ROOT}vilasa`,
        element: (
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <Layout>
                <VilasaMicrosite />
              </Layout>
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: `${BASE_ROOT}media`,
        element: (
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <Layout>
                <MediaCenter />
              </Layout>
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: `${BASE_ROOT}gv-homes`,
        element: (
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <Layout>
                <GvHomesMicrosite />
              </Layout>
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: `${BASE_ROOT}contact-us`,
        element: (
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <Layout>
                <ContactUs />
              </Layout>
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: `${BASE_ROOT}career`,
        element: (
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <Layout>
                <Career />
              </Layout>
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: `${BASE_ROOT}Residential`,
        element: (
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <Layout>
                <Residential />
              </Layout>
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: `${BASE_ROOT}about-us`,
        element: (
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <Layout>
                <About />
              </Layout>
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: `${BASE_ROOT}testimonials`,
        element: (
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <Layout>
                <Testimonials />
              </Layout>
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: `${BASE_ROOT}blogs`,
        element: (
          <Suspense fallback={<Loader />}>
            <Layout>
              <Blogs />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: `${BASE_ROOT}blog/:id`,
        element: (
          <Suspense fallback={<Loader />}>
            <Layout>
              <BlogDetails />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: `${BASE_ROOT}emi-calculator`,
        element: (
          <Suspense fallback={<Loader />}>
            <Layout>
              <EmiCalculator />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: `${BASE_ROOT}esg`,
        element: (
          <Suspense fallback={<Loader />}>
            <Layout>
              <Csr />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: `${BASE_ROOT}tax-benefits`,
        element: (
          <Suspense fallback={<Loader />}>
            <Layout>
              <TaxBenifits />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: `${BASE_ROOT}nri-corner`,
        element: (
          <Suspense fallback={<Loader />}>
            <Layout>
              <NriCorner />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: `${BASE_ROOT}area-converter`,
        element: (
          <Suspense fallback={<Loader />}>
            <Layout>
              <AreaConverter />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: `${BASE_ROOT}home-loan`,
        element: (
          <Suspense fallback={<Loader />}>
            <Layout>
              <HomeLoan />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: `${BASE_ROOT}Faqs`,
        element: (
          <Suspense fallback={<Loader />}>
            <Layout>
              <Faqs />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: `${BASE_ROOT}property-investment`,
        element: (
          <Suspense fallback={<Loader />}>
            <Layout>
              <PropertyInvestment />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Loader />}>
            <PageNotFound />
          </Suspense>
        ),
      },
    ],
  },
];

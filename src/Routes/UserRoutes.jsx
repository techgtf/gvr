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
import EmiCalculator from "../frontend/pages/emiCalculator";
import Residential from "../frontend/pages/residential";
import ContactUs from "../frontend/pages/Contactus";
import Csr from "../frontend/pages/Csr";
import ErrorBoundary from "../frontend/components/ErrorBoundary";
import AnandamMicrosite from "../frontend/pages/AnandamMicrosite";
import TaxBenifits from "../frontend/pages/TaxBenifits";
import NriCorner from "../frontend/pages/NriCorner";

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
        path: `${BASE_ROOT}csr`,
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


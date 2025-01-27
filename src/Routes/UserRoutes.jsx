import { Suspense } from "react";
import { BASE_ROOT } from "../../config";
import Loader from "../Loader/loader";
import Layout from "../frontend/Layout";
import Home from "../frontend/pages/Home";
import PageNotFound from "../frontend/PageNotFound/PageNotFound";
import "../frontend/main.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Aboutus from "../frontend/pages/AboutUs";

export const UserRoutes = [
    {
        // path: `${BASE_ROOT}`,
        children: [
            {
                path: `${BASE_ROOT}`,
                element: (
                    <Suspense fallback={<Loader />}>
                        <Layout>
                            <Home />
                        </Layout>
                    </Suspense>
                ),
            },
            {
                path: `about-us`,
                element: (
                    <Suspense fallback={<Loader />}>
                        <Layout>
                            <Aboutus />
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
        ]
    },
];
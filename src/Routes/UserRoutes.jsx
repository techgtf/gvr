import { Suspense } from "react";
import { BASE_ROOT } from "../../config";
// import Home from "../frontend/pages/Home"
import Loader from "../Loader/loader";
import Layout from "../frontend/Layout";
import Home from "../frontend/pages/Home";
import PageNotFound from "../frontend/PageNotFound/PageNotFound";
import "../frontend/styles.css"

export const UserRoutes = [
    {
        // path: `${BASE_ROOT}`,
        children: [
            {
                path: "",
                element: (
                    <Suspense fallback={<Loader />}>
                        <Layout>
                            <Home />
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
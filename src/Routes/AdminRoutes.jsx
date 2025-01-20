import { Suspense } from "react";
import { BASE_ROOT } from "../../config";
// import Home from "../frontend/pages/Home"
import Loader from "../Loader/loader";
import Layout from "../frontend/Layout";
import PageNotFound from "../frontend/PageNotFound/PageNotFound";
// import "../frontend/styles.css"

export const AdminRoutes = [
    {
        path: `${BASE_ROOT}/admin`,
        children: [
            {
                path: "",
                element: (
                    <Suspense fallback={<Loader />}>
                        <Layout>
                            <h1>Admin</h1>
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
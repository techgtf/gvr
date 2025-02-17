import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { UserRoutes } from "./Routes/UserRoutes.jsx";
import { AdminRoutes } from "./Routes/AdminRoutes.jsx";
import ContextProvider from "./frontend/context/context.jsx";
import CustomPortal from "./frontend/components/customPortal.jsx";
import PricelistForm from "./frontend/components/microsite/PriceListForm.jsx";
import { TeamProvider } from "./frontend/context/TeamContext.jsx";
import LatestBlogProvider from "./frontend/context/LatestBlogContext.jsx";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from './store/store.js'

const router = createBrowserRouter([...UserRoutes, ...AdminRoutes]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <>
      <TeamProvider>
      <LatestBlogProvider>
      <ContextProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
        <CustomPortal>
          <PricelistForm />
        </CustomPortal>
      </ContextProvider>
      </LatestBlogProvider>
    </TeamProvider>
    <ToastContainer />
    </>
  // </StrictMode>
);

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

const router = createBrowserRouter([...UserRoutes, ...AdminRoutes]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <TeamProvider>
      <ContextProvider>
        <RouterProvider router={router} />
        <CustomPortal>
          <PricelistForm />
        </CustomPortal>
      </ContextProvider>
    </TeamProvider>
  // </StrictMode>
);

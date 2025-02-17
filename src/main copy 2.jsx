import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { UserRoutes } from "./Routes/UserRoutes.jsx";
import { AdminRoutes } from "./Routes/AdminRoutes.jsx";
import ContextProvider from "./frontend/context/context.jsx";
import CustomPortal from "./frontend/components/customPortal.jsx";
import PricelistForm from "./frontend/components/microsite/PriceListForm.jsx";
import { TeamProvider } from "./frontend/context/TeamContext.jsx";
import LatestBlogProvider from "./frontend/context/LatestBlogContext.jsx";
import ErrorBoundary from "./frontend/components/ErrorBoundary";
import { BASE_ROOT } from "../config.js";
import "./index.css";

// Define layout with context providers for User Routes
const UserLayout = ({ children }) => (
  <TeamProvider>
    <LatestBlogProvider>
      <ContextProvider>
        {children}
        <CustomPortal>
          <PricelistForm />
        </CustomPortal>
      </ContextProvider>
    </LatestBlogProvider>
  </TeamProvider>
);

// Create a single router with conditional wrapping for contexts
const router = createBrowserRouter([
  // {
  //   path: `${BASE_ROOT}admin`,
  //   children: AdminRoutes, // Admin routes without additional context providers
  // },
  {
    path: ``,
    element: <UserLayout />, // Wrap only UserRoutes with necessary context providers
    children: UserRoutes,
  },
], {basename:BASE_ROOT});

// Render the app
createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <RouterProvider router={router} />
  </ErrorBoundary>
);

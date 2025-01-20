import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { UserRoutes } from './Routes/UserRoutes.jsx';
import { AdminRoutes } from './Routes/AdminRoutes.jsx';
// import { BASE_ROOT } from '../config.js';

const router = createBrowserRouter([
  ...UserRoutes,
  ...AdminRoutes
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

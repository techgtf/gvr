import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { BASE_ROOT } from '../config.js';
import { UserRoutes } from './Routes/UserRoutes.jsx';

const router = createBrowserRouter([...UserRoutes,

  // {
  //   path: `${BASE_ROOT}admin`,
  //   children: [
  //     {
  //       path: 'login',
  //       element: (
  //         <Suspense fallback={<PageLoader />}>
  //           <Login />
  //         </Suspense>
  //       ),
  //     },
  //     {
  //       path: '', // The main admin path that will render AdminLayout
  //       element: (
  //         <Suspense fallback={<PageLoader />}>
  //           <ProtectedRoute>
  //             <AdminLayout />
  //           </ProtectedRoute>
  //         </Suspense>
  //       ),
  //       children: AdminRoutes, // Nest AdminRoutes as children of AdminLayout
  //     },
  //   ],
  // },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

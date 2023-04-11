import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import Home from './components/Home/Home';
import Statistics from './components/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog';
import JobDetails from './components/JobDetails';
import { Toaster } from 'react-hot-toast'





const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('jobCategory.json'),
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: '/jobDetails/:id',
        element: <JobDetails></JobDetails>,
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster
      position="top-right"
    />
  </React.StrictMode>,
)

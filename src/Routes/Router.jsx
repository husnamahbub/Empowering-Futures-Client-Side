import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddAJobs from "../Pages/AddAJobs/AddAJobs";
import JobDetailsPage from "../Pages/JobDetailsPage/JobDetailsPage";
import AllJobs from "../AllJobs/AllJobs";
import Blogs from "../Pages/Blogs/Blogs";
import MyJobs from "../Pages/MyJobs/MyJobs";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
          {
            path: '/',
            element: <Home></Home>
          },
          {
            path: '/login',
            element: <Login></Login>
          },
          {
            path: '/register',
            element: <Register></Register>
          },
          {
            path: '/addJob',
            element: <AddAJobs></AddAJobs>
          },
          {
            path: '/detailsJob/:id',
            element: <JobDetailsPage></JobDetailsPage>,
            loader: ({params}) => fetch(`https://empowering-futures-server-side.vercel.app/jobDetails/${params.id}`)
          },
          {
            path: '/allJobs',
            element: <AllJobs></AllJobs>

          },
          {
            path: '/blogs',
            element: <Blogs></Blogs>
          },
          {
            path: '/appliedJobs',
            element: <AppliedJobs></AppliedJobs>
          },
          {
            path: '/myJobs',
            element: <MyJobs></MyJobs>
          }
        ]
    }
])

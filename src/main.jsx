import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer,} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Router.jsx'
import AuthProvider from './Providers/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router}></RouterProvider>
   </AuthProvider>
    <ToastContainer/>
  </React.StrictMode>,
)
   
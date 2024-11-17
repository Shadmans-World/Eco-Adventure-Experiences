import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthProvider from './Context API/AuthProvider.jsx'
import Home from './components/Home.jsx'
import Root from './Root/Root.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Login from './Auth/Login.jsx'
import Register from './Auth/Register.jsx'
import ForgotPass from './Auth/ForgotPass.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    errorElement:<ErrorPage></ErrorPage>,
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/auth/login',
        element:<Login></Login>
      },
      {
        path:"/auth/register",
        element:<Register></Register>
      },
      {
        path:"/forgotPass",
        element:<ForgotPass></ForgotPass>
      }
    ]
  },
 
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>,
)

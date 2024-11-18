// index.js or wherever you define your routes
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthProvider from './Context API/AuthProvider.jsx';
import Home from './components/Home.jsx';
import Root from './Root/Root.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Login from './Auth/Login.jsx';
import Register from './Auth/Register.jsx';
import ForgotPass from './Auth/ForgotPass.jsx';
import Details from './components/Details.jsx';
import PrivateRoute from './components/PrivateRoute.jsx'; // Import PrivateRoute

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/auth/login',
        element: <Login />,
      },
      {
        path: '/auth/register',
        element: <Register />,
      },
      {
        path: '/forgotPass',
        element: <ForgotPass />,
      },
      {
        path: '/details/:id',
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ), // Wrap Details with PrivateRoute to protect it
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

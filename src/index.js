import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { UserProvider } from './components/Context/UserContext';
import { CartVisibleProvider } from './components/Context/CartVisibleContext';
import App from './App/App';
import Shop from './Shop/Shop';
import Account from './Account/Account';
import Error from './Error/Error';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/account",
    element: <Account />,
  },
]);

AOS.init();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
    <CartVisibleProvider>
      <RouterProvider router={router} />
    </CartVisibleProvider>
    </UserProvider>
    <ToastContainer position="bottom-right" />
  </React.StrictMode>
);

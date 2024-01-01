import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from './App/App';
import Shop from './Shop/Shop';
import Account from './Account/Account';
import Error from './Error/Error';

import { UserProvider } from './components/Context/UserContext';
import { CartVisibleProvider } from './components/Context/CartVisibleContext';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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

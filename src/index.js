import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from '@components/App';
import FakeStore from '@components/fakestore/FakeStore';
import Cart from '@components/fakestore/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/fakestore",
    element: <FakeStore />,
  },
  {
    path: "/fakestore/cart",
    element: <Cart />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

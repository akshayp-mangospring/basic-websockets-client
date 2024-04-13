import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LoggedInLayout from '@components/layouts/LoggedInLayout';
import App from '@components/App';
import FakeStore from '@components/fakestore/FakeStore';
import Cart from '@components/fakestore/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<LoggedInLayout />}>
      <Route index element={<App />} />
      <Route path='fakestore'>
        <Route index element={<FakeStore />} />
        <Route path='cart' element={<Cart />} />
      </Route>
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

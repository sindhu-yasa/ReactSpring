import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Forms from './Forms';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './home';






const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path : "forms",
        element: <Forms/>
      },
      {
        path : "home",
        element: <HomePage/>
      },
      
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CRUD from './components/CRUD/CRUD';
import Users from './components/Users';
const router = createBrowserRouter([
  {
    path: "/",
    element: <CRUD></CRUD>
  },
  {
    path : "users",
    element : <Users></Users>,
    loader : () => fetch('http://localhost:5000/users')
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

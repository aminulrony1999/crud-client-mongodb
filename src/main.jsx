import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CRUD from './components/CRUD/CRUD';
import Users from './components/Users';
import Update from './components/Update/Update';
const router = createBrowserRouter([
  {
    path: "/",
    element: <CRUD></CRUD>
  },
  {
    path : "users",
    element : <Users></Users>,
    loader : () => fetch('http://localhost:5000/users')
  },
  {
    path: "/update/:id",
    element : <Update></Update>,
    loader : ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
